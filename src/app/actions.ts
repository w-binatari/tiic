"use server";

export type FormState = {
  status: "idle" | "sent" | "error";
  message?: string;
  errors?: Record<string, string>;
  values?: Record<string, string>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(v: FormDataEntryValue | null, max = 4000) {
  return String(v ?? "").trim().slice(0, max);
}

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function send(subject: string, rows: [string, string][], replyTo: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM ?? "NCDMB TIC website <onboarding@resend.dev>";
  if (!key || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO is not set");
    return false;
  }
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n\n");
  const html = rows
    .map(([k, v]) => `<p><strong>${escape(k)}</strong><br>${escape(v).replace(/\n/g, "<br>")}</p>`)
    .join("");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: to.split(",").map((s) => s.trim()), reply_to: replyTo, subject, text, html }),
    });
    if (!res.ok) console.error("Resend error", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("Resend request failed", err);
    return false;
  }
}

const FAILED =
  "We couldn't send that just now. Please try again, or email eicl.tic.comms@gmail.com directly.";

export async function sendContact(_: FormState, data: FormData): Promise<FormState> {
  if (clean(data.get("company"))) return { status: "sent" }; // honeypot
  const values = {
    name: clean(data.get("name"), 120),
    email: clean(data.get("email"), 200),
    topic: clean(data.get("topic"), 60),
    message: clean(data.get("message")),
  };
  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Enter your name.";
  if (!EMAIL.test(values.email)) errors.email = "Enter an email address we can reply to, like name@example.com.";
  if (values.message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  if (Object.keys(errors).length) return { status: "error", errors, values };

  const ok = await send(
    `TIC website: ${values.topic || "Enquiry"} from ${values.name}`,
    [
      ["Name", values.name],
      ["Email", values.email],
      ["Topic", values.topic || "General enquiry"],
      ["Message", values.message],
    ],
    values.email,
  );
  return ok ? { status: "sent" } : { status: "error", message: FAILED, values };
}

export async function registerInterest(_: FormState, data: FormData): Promise<FormState> {
  if (clean(data.get("company"))) return { status: "sent" };
  const values = {
    name: clean(data.get("name"), 120),
    email: clean(data.get("email"), 200),
    affiliation: clean(data.get("affiliation"), 200),
    role: clean(data.get("role"), 60),
  };
  const errors: Record<string, string> = {};
  if (!values.name) errors.name = "Enter your name.";
  if (!EMAIL.test(values.email)) errors.email = "Enter an email address, like name@example.com.";
  if (Object.keys(errors).length) return { status: "error", errors, values };

  const ok = await send(
    `TIC 2027 interest: ${values.name}`,
    [
      ["Name", values.name],
      ["Email", values.email],
      ["Institution or company", values.affiliation || "Not given"],
      ["Applying as", values.role || "Not given"],
    ],
    values.email,
  );
  return ok ? { status: "sent" } : { status: "error", message: FAILED, values };
}
