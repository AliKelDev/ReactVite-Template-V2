import { Terminal, Code, Cpu, Lock } from 'lucide-react';

export const projects = [
  {
    title: "Pixelle3",
    client: "Web Design Services",
    description: "A professional platform showcasing web design and development services...",
    technologies: [
      { title: "React + Vite", desc: "Modern build system", Icon: Code },
      { title: "UI/UX Design", desc: "Custom interfaces", Icon: Cpu },
      { title: "Client Portal", desc: "Project management", Icon: Terminal },
      { title: "Secure Payments", desc: "Protected transactions", Icon: Lock }
    ],
    previewUrl: "https://webpixelle3.netlify.app"
  },
  // ... other projects
];