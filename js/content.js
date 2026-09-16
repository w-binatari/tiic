/**
 * Diri Innovation Challenge 2026 — editable content.
 * Change numbers/dates/copy here; layout code reads from this object.
 */
window.DIRI_CONTENT = {
  programmeName: "Diri Innovation Challenge 2026",
  shortName: "Diri Challenge",
  tagline: "Fostering Sustainable Urban Development through Youth Innovation",
  client: "Bayelsa State Ministry of Youths, Office of the Commissioner of Youths",
  clientShort: "Bayelsa State Ministry of Youth Development",
  implementer: "Entrepreneurship & Innovation Centre Limited (EICL)",
  implementerShort: "EICL",

  applicationsOpen: "2026-10-02",
  applicationsClose: "2026-10-22",
  applicationsOpenLabel: "2 October 2026",
  applicationsCloseLabel: "22 October 2026",

  applyUrl: "", // external portal — leave blank for "Coming soon"
  applyLabel: "Apply Now",
  applyPendingLabel: "Applications open 2 Oct 2026",

  contact: {
    email: "info@moyd.by.gov.ng",
    phone: "+234 913 720 0005",
    phoneHref: "+2349137200005",
    address: "State Secretariat Annex 3, Road Safety Road, Onopa – Yenagoa, Bayelsa State",
    moydUrl: "https://moyd.by.gov.ng/",
  },

  prizeBudgetLabel: "up to ₦100M",
  prizeBudgetNote: "proposed, subject to confirmation",

  hero: {
    openLine: "Call for Applications opens 2 October 2026",
    supporting:
      "A Bayelsa State youth innovation programme identifying, mentoring, and incubating solutions for sustainable urban development across eight focus areas.",
  },

  about: {
    eyebrow: "Why this matters",
    title: "Youth innovation for Bayelsa’s next chapter",
    paragraphs: [
      "The Diri Innovation Challenge 2026 is a flagship programme of the Bayelsa State Ministry of Youth Development, implemented with Entrepreneurship & Innovation Centre Limited (EICL). It channels young talent toward practical solutions for sustainable urban development in Bayelsa and beyond.",
      "From open call through screening, mentorship, pitching, and a three-month incubation, the challenge is built to surface ideas that can scale — and to give government, partners, and communities a clear pipeline of youth-led ventures worth backing.",
      "Vision: a generation of Bayelsa innovators equipped to turn local challenges into durable enterprises. Mission: identify, mentor, and incubate high-potential solutions across health, education, agriculture, energy, security, mobility, environment, and social services.",
    ],
    pullQuote:
      "Youths thrive, innovate, and contribute when the state builds the runway — this challenge is that runway.",
  },

  stats: [
    { value: 400, prefix: "", suffix: "", label: "Applicants targeted", approx: true, qualifier: "up to" },
    { value: 50, prefix: "", suffix: "", label: "Selected", approx: true, qualifier: "approx." },
    { value: 20, prefix: "", suffix: "", label: "Semi-finalists", approx: true, qualifier: "approx." },
    { value: 15, prefix: "", suffix: "", label: "Finalists / incubated", approx: true, qualifier: "approx." },
    { value: 8, prefix: "", suffix: "", label: "Focus areas", approx: false },
    { value: 3, prefix: "", suffix: "", label: "Months incubation", approx: false },
    { value: 100, prefix: "₦", suffix: "M", label: "Prize budget", approx: true, qualifier: "up to" },
  ],

  funnel: [
    { label: "Applicants", detail: "200–400 targeted" },
    { label: "Selected cohort", detail: "~50" },
    { label: "Semi-finalists", detail: "~20" },
    { label: "Finalists & incubation", detail: "~15" },
    { label: "Award & scale", detail: "Winners + partners" },
  ],

  focusAreas: [
    { id: "health", label: "Health" },
    { id: "education", label: "Education" },
    { id: "agriculture", label: "Agriculture & Food Security" },
    { id: "energy", label: "Oil/Gas & Energy Tech" },
    { id: "security", label: "Security" },
    { id: "transport", label: "Transportation & Mobility" },
    { id: "environment", label: "Environment & Waste Management" },
    { id: "social", label: "Social Services & Community Development" },
  ],

  timeline: [
    { stage: "Call for Applications", dates: "Oct 2–22, 2026" },
    { stage: "Review & Screening", dates: "Oct 23–Nov 5, 2026" },
    { stage: "Mentorship Phase", dates: "Nov 6–26, 2026" },
    { stage: "Semi-Final Pitching (Yenagoa, in-person)", dates: "Nov 25–26, 2026" },
    { stage: "Final Pitching Day", dates: "Nov 27, 2026" },
    { stage: "Award Ceremony", dates: "Nov 28, 2026" },
    { stage: "Incubation Programme", dates: "Dec 5, 2026–Mar 5, 2027" },
  ],
  timelineNote: "Dates subject to change.",

  eligibility: [
    { text: "Bayelsa-connected youth innovator, founder, or team (criteria being finalised)", pending: true },
    { text: "Solution aligned to one of the eight focus areas", pending: false },
    { text: "Early-stage idea, prototype, or venture ready for mentoring", pending: true },
    { text: "Willingness to participate in Yenagoa pitching and incubation milestones", pending: false },
    { text: "Application submitted before the published deadline", pending: false },
  ],
  eligibilityNote: "Exact age, residency, and team-size rules will be confirmed by the client before applications open.",

  awards: {
    intro: "Recognition across the challenge focus areas — with a total prize envelope of",
    categories: [
      "Health Innovation Award",
      "Education Innovation Award",
      "Agriculture & Food Security Award",
      "Energy Tech Award",
      "Security Solutions Award",
      "Mobility & Transport Award",
      "Environment & Waste Award",
      "Community & Social Impact Award",
    ],
  },

  partners: {
    note: "Partner logos coming soon — slots reserved by category.",
    groups: [
      { name: "Government", slots: 3 },
      { name: "Private Sector", slots: 3 },
      { name: "Academia", slots: 2 },
      { name: "Investors", slots: 2 },
      { name: "Ecosystem Partners", slots: 2 },
    ],
  },

  organisers: [
    {
      name: "Bayelsa State Ministry of Youth Development",
      blurb:
        "The Ministry fosters holistic youth development across Bayelsa — entrepreneurship, skills, technology, and civic participation — creating an environment where young people thrive and contribute to the state.",
      logo: "assets/images/moyd/logo.png",
      url: "https://moyd.by.gov.ng/",
    },
    {
      name: "Entrepreneurship & Innovation Centre Limited (EICL)",
      blurb:
        "EICL designs and delivers innovation challenges and incubation programmes. Track record includes the NCDMB Tech-Innovation Challenge — proof of capacity to run rigorous, partner-ready competitions.",
      logo: "assets/images/eicl-logo.png",
      url: "https://eic-preview.vercel.app/",
    },
  ],

  faq: [
    {
      q: "How do I apply?",
      a: "When applications open, use the Apply Now button on this page. It will take you to the official application portal. Until then, the button shows the opening date.",
    },
    {
      q: "Who is eligible?",
      a: "The programme is for youth innovators and teams advancing solutions in the eight focus areas. Full eligibility (age, residency, business stage) will be published before the call opens — see the checklist section for the working draft.",
    },
    {
      q: "Is there a cost to apply?",
      a: "No application fee is planned. Any change will be stated clearly on the portal before you submit.",
    },
    {
      q: "What happens after selection?",
      a: "Selected teams move through mentorship, semi-final and final pitching in Yenagoa, awards, and a three-month incubation programme for finalists.",
    },
    {
      q: "Who do I contact with questions?",
      a: "Email info@moyd.by.gov.ng or call +234 913 720 0005. Additional programme contacts will be added as confirmed.",
    },
  ],

  footer: {
    pdfLabel: "Download one-pager (PDF)",
    pdfUrl: "", // pending asset
    copyright: "Diri Innovation Challenge 2026 · Bayelsa State Ministry of Youth Development",
  },
};
