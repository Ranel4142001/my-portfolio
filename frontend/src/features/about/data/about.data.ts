import { Database, Server, Code } from "lucide-react";
import { AboutHighlight } from "../types/about.types";

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Backend Architecture",
    description: "Designing scalable and maintainable server-side systems.",
    icon: Server,
  },
  {
    title: "Database Design",
    description: "Optimized relational and NoSQL database structures.",
    icon: Database,
  },
  {
    title: "Clean Code",
    description: "Writing testable, readable, and extensible code.",
    icon: Code,
  },
];
