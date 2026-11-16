export type Milestone = {
  when: string;
  title: string;
  where?: string;
  note: string;
};

/** TIC 2026, as delivered. All dates from the programme calendar. */
export const milestones2026: Milestone[] = [
  {
    when: "23 Sep 2025",
    title: "Technology Innovation Challenge Workshop",
    where: "Pavilion by Golden Tulip, GRA, Port Harcourt",
    note: "The programme opened with a stakeholder workshop on the Board's priority challenge areas, evaluation criteria and what the challenge offers.",
  },
  {
    when: "Dec 2025",
    title: "Call for applications",
    note: "Researchers, startups, research institutions, academia, industry suppliers and the public submitted proposals in NCDMB's thematic areas.",
  },
  {
    when: "8–18 Jun 2026",
    title: "Proposal screening",
    note: "Proposals were screened online against the evaluation criteria.",
  },
  {
    when: "30 Jun – 2 Jul 2026",
    title: "Physical judging",
    where: "NCDMB Towers, Yenagoa",
    note: "The judging panel sat at NCDMB Towers to assess innovators' live online pitches.",
  },
  {
    when: "13–31 Jul 2026",
    title: "Online coaching and mentorship",
    note: "Finalists worked with mentors on their solutions, business models and pitches.",
  },
  {
    when: "3–7 Aug 2026",
    title: "Research to Commercialisation Bootcamp",
    where: "NCDMB Tower, Yenagoa",
    note: "An entrepreneurship and commercialisation bootcamp for the finalist teams.",
  },
  {
    when: "10–12 Aug 2026",
    title: "Finale",
    where: "NCDMB Towers, Yenagoa",
    note: "The 15 finalist teams competed through three rounds of live judging for a place in the top three.",
  },
  {
    when: "24 Aug – 13 Nov 2026",
    title: "Incubation",
    note: "Winning teams received incubation support: funding, innovation space and help to scale.",
  },
];

export const thematicAreas = [
  "Geological and geophysical studies",
  "Local materials substitution",
  "Technology development",
  "Health, safety and environment (HSE)",
  "Engineering studies",
  "Renewable energy",
];

export const offers = [
  {
    title: "Competition and selection",
    text: "A multi-stage process of screening, live pitching, mentorship and a commercialisation bootcamp.",
  },
  {
    title: "Mentorship and coaching",
    text: "Expert guidance on the solution, the business model and readiness to pitch to industry.",
  },
  {
    title: "Industry engagement",
    text: "Direct contact with energy-sector operators, suppliers and partners for validation and adoption.",
  },
  {
    title: "Incubation",
    text: "Post-competition incubation for winners, with funding support, innovation space and help to scale.",
  },
];
