import type { StaticImageData } from "next/image";
import tinubu from "@/assets/photos/leadership/dignitary-president-tinubu.jpg";
import lokpobiri from "@/assets/photos/leadership/dignitary-minister-lokpobiri.jpg";
import ekpo from "@/assets/photos/leadership/dignitary-minister-ekpo.jpg";
import diri from "@/assets/photos/leadership/dignitary-governor-diri.jpg";
import ogbe from "@/assets/photos/leadership/dignitary-es-ogbe.jpg";
import halilu from "@/assets/photos/leadership/dignitary-director-halilu.jpg";
import ajimijaye from "@/assets/photos/leadership/dignitary-ajimijaye.jpg";
import chinwah from "@/assets/photos/leadership/dignitary-chinwah.jpg";
import amao from "@/assets/photos/judges/judge-amao.jpg";
import mukhtar from "@/assets/photos/judges/judge-mukhtar.jpg";
import agbanimu from "@/assets/photos/judges/judge-agbanimu.jpg";
import nwinee from "@/assets/photos/judges/judge-nwinee.jpg";
import okoyo from "@/assets/photos/judges/judge-okoyo.jpg";
import awoke from "@/assets/photos/judges/judge-awoke.jpg";

export type Person = { name: string; role: string; photo: StaticImageData };

export const leadership: Person[] = [
  { name: "His Excellency Bola Ahmed Tinubu, GCFR", role: "President, Federal Republic of Nigeria", photo: tinubu },
  { name: "Sen. Heineken Lokpobiri", role: "Hon. Minister of State, Petroleum Resources (Oil)", photo: lokpobiri },
  { name: "Rt. Hon. (Obongemem) Ekperikpe Ekpo", role: "Hon. Minister of State, Petroleum Resources (Gas)", photo: ekpo },
  { name: "His Excellency Senator Douye Diri", role: "Executive Governor, Bayelsa State", photo: diri },
  { name: "Engr. Felix Omatsola Ogbe", role: "Executive Secretary, NCDMB", photo: ogbe },
  { name: "Dr. Abdulmalik Halilu", role: "Director, Corporate Services, NCDMB", photo: halilu },
  { name: "Mr. Silas Omomehin Ajimijaye", role: "Ag. Director, Planning, Research and Statistics, NCDMB", photo: ajimijaye },
  { name: "Engr. Chika Henry Chinwah", role: "Implementing Partner and Facilitator, NCDMB TIC; CEO, EICL", photo: chinwah },
];

export const judges: Person[] = [
  { name: "Dr. Ibilola Amao", role: "Chairperson of the panel; Principal Consultant, Lonadek Global Services", photo: amao },
  { name: "Prof. Abdulkadir Mukhtar", role: "Centre Director, NCDMB Centre of Excellence on Technology Development Studies, FUT Minna", photo: mukhtar },
  { name: "Destiny Agbanimu", role: "CEO, Eridan City–Centre of Innovation Development (ECID)", photo: agbanimu },
  { name: "Dr. Sarah A. Nwinee", role: "Head, Linkages, Exchange & Partnership, PTI", photo: nwinee },
  { name: "Engr. George Okoyo", role: "MD, Point Engineering Limited", photo: okoyo },
  { name: "Chris Awoke", role: "CEO, Wikrena Limited", photo: awoke },
];
