import type { StaticImageData } from "next/image";
import p01 from "@/assets/photos/finalists/finalist-01-obsidian.jpg";
import p02 from "@/assets/photos/finalists/finalist-02-ajibade.jpg";
import p03 from "@/assets/photos/finalists/finalist-03-ugwu.jpg";
import p04 from "@/assets/photos/finalists/finalist-04-ahmed.jpg";
import p05 from "@/assets/photos/finalists/finalist-05-ace-cefor1.jpg";
import p06 from "@/assets/photos/finalists/finalist-06-adesope.jpg";
import p07 from "@/assets/photos/finalists/finalist-07-adekunle.jpg";
import p08 from "@/assets/photos/finalists/finalist-08-henry.jpg";
import p09 from "@/assets/photos/finalists/finalist-09-ndiyo.jpg";
import p10 from "@/assets/photos/finalists/finalist-10-inyang.jpg";
import p11 from "@/assets/photos/finalists/finalist-11-etaredafe.jpg";
import p12 from "@/assets/photos/finalists/finalist-12-izionworu.jpg";
import p13 from "@/assets/photos/finalists/finalist-13-ace-cefor2.jpg";
import p14 from "@/assets/photos/finalists/finalist-14-news-team.jpg";
import p15 from "@/assets/photos/finalists/finalist-15-nurudeen.jpg";

export type Sector = "energy" | "environment" | "upstream" | "security" | "health";

export const sectors: { id: Sector; label: string }[] = [
  { id: "upstream", label: "Upstream data & oilfield chemicals" },
  { id: "energy", label: "Energy, power & hydrogen" },
  { id: "environment", label: "Environmental remediation" },
  { id: "security", label: "Pipeline & asset security" },
  { id: "health", label: "Health" },
];

export type Finalist = {
  team: number;
  slug: string;
  name: string;
  org: string;
  project: string;
  summary: string;
  detail: string;
  sector: Sector;
  photo: StaticImageData;
};

export const finalists: Finalist[] = [
  {
    team: 1,
    slug: "obsidian",
    name: "Uthman B. Mohammed",
    org: "Obsidian Gas and Energy Nig. Limited",
    project: "Modular Capture-to-Treatment System: A Carbon-Assisted Water Remediation Solution for Nigerian Onshore Assets",
    summary: "A carbon-assisted modular system for water remediation tailored to Nigerian onshore oil and gas assets.",
    detail: "O-GEN has engineered a skid-mounted modular unit that addresses gas flaring and produced water treatment simultaneously. It captures CO₂ from flared gas and injects it into alkaline produced water, naturally neutralising the water's pH, reducing the need for imported chemicals, and rendering the water clean enough for controlled discharge or dry-season irrigation. A pilot is planned for the Eremor Marginal Field, Bayelsa State.",
    sector: "environment",
    photo: p01,
  },
  {
    team: 2,
    slug: "ajibade",
    name: "Babson Ajibade",
    org: "Nigeria Content and Sustainable Technology (Nicost), University of Cross River State",
    project: "BMV-6 Medical Ventilator",
    summary: "A locally-made medical ventilator capable of independently ventilating multiple patients, designed for Nigerian healthcare conditions.",
    detail: "Babson Ajibade has designed and built a locally-made medical ventilator, the BMV-6, capable of independently ventilating up to six patients (newborns, children, and adults) simultaneously using a single machine. It runs on 24V DC power, can be powered by solar or wind energy, and has a built-in battery providing 33 hours of operation during outages. The touchscreen interface operates in Hausa, Igbo, Yoruba, Efik, Pidgin English, and English.",
    sector: "health",
    photo: p02,
  },
  {
    team: 3,
    slug: "ugwu",
    name: "Prof. Chidiebere Ugwu",
    org: "University of Port Harcourt",
    project: "AIoT-Enabled Clean Cooking Stove for Household Energy Management and Indoor Environmental Monitoring with Remote Dashboard",
    summary: "An AIoT-enabled clean cooking stove that manages household energy and monitors indoor air quality via a remote dashboard.",
    detail: "This project develops a smart, eco-friendly cooking stove that uses waste heat from cooking to generate electricity. It combines thermoelectric generators, an AI energy-management system, and a DC-AC inverter to provide both clean cooking and power for charging phones, small electronics, and household appliances (220V output), with the AI optimising how energy is shared between cooking and electricity generation.",
    sector: "energy",
    photo: p03,
  },
  {
    team: 4,
    slug: "ahmed",
    name: "Omar Umar Ahmed",
    org: "Bayero University Kano, in partnership with the Hydrogen Energy Research Group, National Research Institute for Chemical Technology, Zaria",
    project: "Design, Fabrication, and Assembly of a Solid Oxide Electrolysis Cell (SOEC) for Efficient Hydrogen Production",
    summary: "Design and fabrication of a solid oxide electrolysis cell for efficient hydrogen production.",
    detail: "This project designs, fabricates, and assembles a Solid Oxide Electrolysis Cell using locally sourced materials. The system operates at high temperatures (700–900°C) to split steam into hydrogen and oxygen more efficiently than traditional low-temperature methods, and includes custom electrodes, electrolyte, manifolds, and a testing workstation for demonstration.",
    sector: "energy",
    photo: p04,
  },
  {
    team: 5,
    slug: "ace-cefor1",
    name: "Fossong Guilianno (team contact)",
    org: "ACE-CEFOR 1 — World Bank Africa Centre of Excellence for Oilfield Chemicals Research, UNIPORT",
    project: "Real Time AI-Driven Well Logging Analytics Platform for Enhanced Hydrocarbon Detection and Reservoir Characterization",
    summary: "An AI-powered platform that analyses well logging data in real time to flag hydrocarbon zones and support reservoir characterisation.",
    detail: "ACE-CEFOR is building an AI-powered platform that analyses well logging data in real time as drilling proceeds. Sensors collect data on rock layers and fluid content as the drill goes deeper, and an edge computing device at the rig site processes this instantly, flagging hydrocarbon zones, identifying rock types, and alerting engineers to anomalies as they happen, rather than waiting until after drilling to interpret the data.",
    sector: "upstream",
    photo: p05,
  },
  {
    team: 6,
    slug: "adesope",
    name: "Professor Olufemi M. Adesope",
    org: "University of Port Harcourt",
    project: "“FrassPlus” — An AI-Enabled, Low-Cost, BSF Frass, Green Technology for Hydrocarbon Bioremediation",
    summary: "An AI-enabled, low-cost Black Soldier Fly frass technology for hydrocarbon bioremediation.",
    detail: "This project uses Black Soldier Fly larvae as natural cleaning agents to break down oil-contaminated soil and organic waste from oilfield camps. Raised in specially designed vertical trays, the larvae consume and digest toxic hydrocarbons in the soil over a 21-day cycle while processing food and organic waste, yielding high-protein larvae usable as animal feed and a nutrient-rich bio-fertilizer from the residue.",
    sector: "environment",
    photo: p06,
  },
  {
    team: 7,
    slug: "adekunle",
    name: "Prof. (Mrs.) Iheoma M. Adekunle",
    org: "Environmental Remediation Research Group, Federal University Otuoke, Bayelsa State",
    project: "Local Material Substitution for Biostimulant Product Development Using Blended Invasive Aquatic Biomass for Remediation of Petroleum Hydrocarbon-Polluted Soils and Drilling Wastes",
    summary: "Biostimulants made from invasive aquatic biomass to remediate petroleum-polluted soils and drilling wastes.",
    detail: "This project converts invasive aquatic weeds that clog Niger Delta waterways into soil cleanup products. The team harvests and processes multiple weed species into liquid and solid bio-stimulants that, when applied to oil-contaminated soil, activate natural microbes to break down petroleum hydrocarbons. Pilot studies in 2025 demonstrated up to 82% reduction in oil contamination within three weeks.",
    sector: "environment",
    photo: p07,
  },
  {
    team: 8,
    slug: "henry",
    name: "Saviour Henry",
    org: "GeoPredict Technologies",
    project: "GeoPredict AI: Intelligent Reservoir Characterization System — analyses seismic, well-log, and core data to speed up drilling decisions, flagging porosity, hydrocarbon presence, and promising drill sites",
    summary: "AI platform analysing seismic, well-log, and core data to accelerate drilling decisions and flag promising sites.",
    detail: "GeoPredict Technologies is building an AI-powered software platform that helps oil companies analyse geological and exploration data (seismic surveys, well logs, and core samples) to make better decisions about where to drill. Instead of taking weeks to process, the system delivers insights within hours, predicting rock porosity, hydrocarbon presence, and optimal drilling locations.",
    sector: "upstream",
    photo: p08,
  },
  {
    team: 9,
    slug: "ndiyo",
    name: "Edward Ndiyo",
    org: "Speedlink Hi-tech Solutions Limited",
    project: "Portable Energy System for Oil & Gas Field Operations and Commercial Use",
    summary: "A portable energy storage system built for rugged oilfield and commercial use in Nigerian conditions.",
    detail: "This project designs and assembles a portable lithium iron phosphate battery-based energy storage system with an integrated Battery Management System, pure sine wave inverter, and mobile monitoring. Built for rugged Nigerian conditions (dust, heat, humidity, and unstable grid power), it can be charged from solar or grid and provides clean, silent backup power, modular and available in different capacities.",
    sector: "energy",
    photo: p09,
  },
  {
    team: 10,
    slug: "inyang",
    name: "Ngozi Inyang",
    org: "DESA Nigeria",
    project: "The Smart-Node IoT Framework: A Decentralized AI-Edge Solution for Real-Time Pipeline Integrity and Fluid-Flow Optimization",
    summary: "Decentralised AI-edge IoT nodes for real-time pipeline integrity and fluid-flow optimisation.",
    detail: "This project develops a network of smart IoT nodes installed along pipelines. Each node uses piezoelectric sensors, edge AI (a convolutional neural network), and acoustic fingerprinting to detect tampering, drilling, or anomalies in real time. The system runs on LoRaWAN for long-range communication in remote areas, is solar-powered, and uses low-profile Stealth-Shell casings designed for Niger Delta conditions.",
    sector: "security",
    photo: p10,
  },
  {
    team: 11,
    slug: "etaredafe",
    name: "Raphael Etaredafe",
    org: "MaxFox Technologies Ltd",
    project: "MaxFox AeroShield — AI-Driven Spectrum Monitoring and Digital Surveillance System",
    summary: "AI-powered RF spectrum monitoring and digital surveillance for infrastructure protection.",
    detail: "AeroShield is an indigenous AI-powered radio frequency (RF) monitoring and surveillance platform. It uses a network of Software-Defined Radio (SDR) nodes to detect, locate, and intercept unauthorised VHF/UHF communications and UAV/drone signals used to coordinate pipeline vandalism and infrastructure sabotage, providing real-time alerts, direction finding, live audio interception, recording, and a secure command dashboard.",
    sector: "security",
    photo: p11,
  },
  {
    team: 12,
    slug: "izionworu",
    name: "Engr. Dr. Izionworu, Vincent Onuegbu",
    org: "Rivers State University",
    project: "MAR THERMO SIM (A Met-Ocean Corrosion Testing Unit) — recreates offshore heat, saltwater, and acidity conditions for testing protective coatings before deployment on platforms and FPSOs",
    summary: "A met-ocean corrosion testing unit recreating offshore heat, saltwater, and acidity for coating validation.",
    detail: "Rivers State University has designed a laboratory testing machine, MAR THERMO SIM, that simulates the harsh ocean and heat conditions offshore oil structures such as FPSOs and platforms are exposed to. It replicates heat from gas flares, saltwater conditions, and varying acidity levels to test how well protective coatings and structural materials hold up before deployment offshore.",
    sector: "upstream",
    photo: p12,
  },
  {
    team: 13,
    slug: "ace-cefor2",
    name: "Prof. Ikechukwu O. Agbag (team contact)",
    org: "ACE-CEFOR 2 — World Bank Africa Centre of Excellence for Oilfield Chemicals Research, UNIPORT",
    project: "Commercialisation of Innovative Biobased Demulsifier",
    summary: "Commercialisation of an innovative biobased demulsifier for oilfield applications.",
    detail: "ACE-CEFOR has already developed and patented six locally-made, eco-friendly oilfield chemicals over the past decade, including a drilling mud additive, corrosion inhibitor, pour point depressant, demulsifier, scale inhibitor, and gas hydrate inhibitor, derived from Nigerian plant-based raw materials. This project optimises these lab-proven products for real oilfield conditions and brings them to market as replacements for imported chemicals.",
    sector: "upstream",
    photo: p13,
  },
  {
    team: 14,
    slug: "news-team",
    name: "New Engineering Nig. Ltd. Team",
    org: "New Engineering Nigeria Limited, NEWS Consult, ANDOLEF Manufacturing, University of Port Harcourt",
    project: "A Solar-First, Smart-to-Power Energy System (NEWS-Solarflare)",
    summary: "A solar-first smart energy system integrating clean power for oilfield and community use.",
    detail: "This is a modular 50 kW containerised hybrid microgrid combining solar PV, lithium-ion battery storage, and flare gas as a backup source, delivering over 99.5% power reliability for oilfield, industrial, and host-community use. Key innovations include AI-optimised control, a new locally-developed GEO-CERAMIC-NEWS material for battery insulation, and an open QwikConnect interface for integrating other Nigerian clean-energy technologies.",
    sector: "energy",
    photo: p14,
  },
  {
    team: 15,
    slug: "nurudeen",
    name: "Abdul Nurudeen",
    org: "Kaduna State Polytechnic",
    project: "Design and Fabrication of Metallocene (Organic) Rechargeable Battery",
    summary: "Design and fabrication of a metallocene (organic) rechargeable battery as a green energy storage alternative.",
    detail: "This project develops an eco-friendly, bio-hybrid rechargeable battery using locally sourced materials such as copper, aluminium hydroxide, cassava starch, and hibiscus-derived phenols. It creates a diamagnetic anisotropy effect at the electrode to improve energy retention and stability, combining battery-like storage with supercapacitor characteristics as a green alternative to lithium-ion and lead-acid batteries.",
    sector: "energy",
    photo: p15,
  },
];
