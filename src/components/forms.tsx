"use client";

import { useActionState, useId } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { registerInterest, sendContact, type FormState } from "@/app/actions";

const initial: FormState = { status: "idle" };

function Field({
  name,
  label,
  state,
  type = "text",
  autoComplete,
  required,
  hint,
}: {
  name: string;
  label: string;
  state: FormState;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
}) {
  const id = useId();
  const err = state.errors?.[name];
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {!required && <span className="ml-1.5 font-normal text-ink-mute">(optional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        defaultValue={state.values?.[name]}
        aria-invalid={err ? true : undefined}
        aria-describedby={err ? `${id}-err` : hint ? `${id}-hint` : undefined}
        className="field"
      />
      {hint && !err && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-ink-mute">
          {hint}
        </p>
      )}
      {err && (
        <p id={`${id}-err`} className="mt-1.5 text-sm font-bold text-[#b42318]">
          {err}
        </p>
      )}
    </div>
  );
}

function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function InterestForm() {
  const [state, action, pending] = useActionState(registerInterest, initial);

  if (state.status === "sent") {
    return (
      <div role="status" className="bg-white p-8">
        <Check aria-hidden className="size-8 text-green" />
        <p className="mt-4 font-display text-2xl font-black text-forest">You&apos;re on the list.</p>
        <p className="mt-2 text-ink-soft">
          We&apos;ll email you when the TIC 2027 call for applications opens, with the thematic areas and how to apply.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="relative grid gap-5 bg-white p-6 sm:p-8">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" state={state} autoComplete="name" required />
        <Field name="email" label="Email" type="email" state={state} autoComplete="email" required />
      </div>
      <Field name="affiliation" label="University, institute or company" state={state} autoComplete="organization" />
      <RoleSelect state={state} />
      {state.message && (
        <p role="alert" className="text-sm font-bold text-[#b42318]">
          {state.message}
        </p>
      )}
      <div>
        <button type="submit" className="btn-green" disabled={pending}>
          {pending ? <LoaderCircle aria-hidden className="size-5 animate-spin" /> : null}
          {pending ? "Sending…" : "Notify me when applications open"}
          {!pending && <ArrowRight aria-hidden className="size-5" />}
        </button>
      </div>
    </form>
  );
}

function RoleSelect({ state }: { state: FormState }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="label">
        I&apos;d apply as <span className="ml-1 font-normal text-ink-mute">(optional)</span>
      </label>
      <select id={id} name="role" defaultValue={state.values?.role ?? ""} className="field appearance-none bg-white">
        <option value="">Choose one</option>
        <option>Researcher or academic</option>
        <option>Student</option>
        <option>Startup or young entrepreneur</option>
        <option>Research institution</option>
        <option>Industry supplier</option>
        <option>Other</option>
      </select>
    </div>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const msgId = useId();
  const topicId = useId();

  if (state.status === "sent") {
    return (
      <div role="status" className="bg-mint p-8">
        <Check aria-hidden className="size-8 text-green" />
        <p className="mt-4 font-display text-2xl font-black text-forest">Message sent.</p>
        <p className="mt-2 text-ink-soft">The TIC team will reply to the email address you gave.</p>
      </div>
    );
  }

  const msgErr = state.errors?.message;
  return (
    <form action={action} noValidate className="relative grid gap-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" state={state} autoComplete="name" required />
        <Field name="email" label="Email" type="email" state={state} autoComplete="email" required />
      </div>
      <div>
        <label htmlFor={topicId} className="label">
          Topic
        </label>
        <select id={topicId} name="topic" defaultValue={state.values?.topic ?? "General enquiry"} className="field appearance-none bg-white">
          <option>General enquiry</option>
          <option>TIC 2027 applications</option>
          <option>Partnership opportunity</option>
          <option>Media request</option>
        </select>
      </div>
      <div>
        <label htmlFor={msgId} className="label">
          Message
        </label>
        <textarea
          id={msgId}
          name="message"
          rows={6}
          required
          defaultValue={state.values?.message}
          aria-invalid={msgErr ? true : undefined}
          aria-describedby={msgErr ? `${msgId}-err` : undefined}
          className="field min-h-40 resize-y"
        />
        {msgErr && (
          <p id={`${msgId}-err`} className="mt-1.5 text-sm font-bold text-[#b42318]">
            {msgErr}
          </p>
        )}
      </div>
      {state.message && (
        <p role="alert" className="text-sm font-bold text-[#b42318]">
          {state.message}
        </p>
      )}
      <div>
        <button type="submit" className="btn-green" disabled={pending}>
          {pending ? <LoaderCircle aria-hidden className="size-5 animate-spin" /> : null}
          {pending ? "Sending…" : "Send message"}
          {!pending && <ArrowRight aria-hidden className="size-5" />}
        </button>
      </div>
    </form>
  );
}
