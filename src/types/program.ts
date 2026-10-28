export type ProgramType = "모아 데이" | "모아 클럽" | "모아 크루";

export type ProgramCategory = "K-Media" | "K-Food" | "Language Exchange" | "Traditional & Daily";

export type TileTone = "dark" | "blue" | "teal" | "purple" | "gold" | "pink";

export interface Program {
  id: string;
  title: string;
  visual: string;
  tone: TileTone;
  date: string; // YYYY-MM-DD
  time: string;
  place: string;
  langs: string[];
  category: ProgramCategory;
  type: ProgramType;
  count: string;
  description: string;
  activities: string[];
  duration: string;
}
