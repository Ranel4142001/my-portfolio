import { Database, Server, Code, ShieldCheck } from "lucide-react";
import { AboutHighlight } from "../types/about.types";

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Backend API Development",
    description:
      "Building secure and structured RESTful APIs using Node.js, Laravel, and NestJS.",
    icon: Server,
  },
  {
    title: "Database Design & Management",
    description:
      "Designing efficient MySQL database structures with proper relationships and data integrity.",
    icon: Database,
  },
  {
    title: "Problem Solving & Logic",
    description:
      "Solving complex backend logic and writing clean, maintainable code.",
    icon: Code,
  },

    {
    title: "Secure & Maintainable Code",
    description:
      "Writing clean, organized, and secure backend code with Prisma ORM and best practices.",
    icon: ShieldCheck,
  },
];
