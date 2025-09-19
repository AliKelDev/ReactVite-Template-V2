import { Terminal, Code, Cpu, Lock, Star, MapPin, Users, Dumbbell, Brain, Calendar } from 'lucide-react';

export const projects = [
  {
    title: "TrueFlat",
    client: "Real Estate & Reviews",
    description: "A modern review platform for apartments and neighborhoods, helping renters make informed decisions. Features perfect PageSpeed scores, SEO optimization, and structured data for rich snippets.",
    technologies: [
      { title: "React + Vite", desc: "Modern SPA architecture", Icon: Code },
      { title: "Supabase", desc: "Database & Auth", Icon: Lock },
      { title: "SEO Optimized", desc: "100/100 PageSpeed", Icon: Star, link: "https://pagespeed.web.dev/analysis/https-trueflat-net/bia5medyex?form_factor=desktop" },
      { title: "Interactive Maps", desc: "Location discovery", Icon: MapPin, link: "https://trueflat.net/map" }
    ],
    previewUrl: "https://trueflat.net"
  },
  {
    title: "Pixelle3",
    client: "Web Design Services",
    description: "A professional platform showcasing web design and development services with modern UI/UX, client portal functionality, and secure payment processing.",
    technologies: [
      { title: "React + Vite", desc: "Modern build system", Icon: Code },
      { title: "UI/UX Design", desc: "Custom interfaces", Icon: Cpu },
      { title: "Client Portal", desc: "Project management", Icon: Terminal },
      { title: "Secure Payments", desc: "Protected transactions", Icon: Lock }
    ],
    previewUrl: "https://pixelle3-alikearn.com"
  },
  {
    title: "AlikelHub",
    client: "AI Assistant Platform",
    description: "Leif & Max - A specialized multimodal AI assistant suite featuring Leif (productivity) and Max (fitness coaching) with task management, timers, and personalized workout plans.",
    technologies: [
      { title: "Multi-Agent AI", desc: "Dual assistant system", Icon: Users },
      { title: "Google Gemini", desc: "Vision & chat AI", Icon: Brain },
      { title: "Fitness Tracking", desc: "Workout planning", Icon: Dumbbell },
      { title: "Task Management", desc: "Productivity tools", Icon: Calendar }
    ],
    previewUrl: "https://alikel.net"
  }
];