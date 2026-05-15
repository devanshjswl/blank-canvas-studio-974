import type { Project } from '@/types';

/**
 * Sample developer portfolio projects.
 * Replace with your own work — keep the same structure.
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'Northwind SaaS Dashboard',
    category: 'web-app',
    year: '2024',
    slug: 'northwind-dashboard',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description: 'A modern analytics dashboard for a B2B SaaS — real-time charts, role-based access, and a clean, dark-mode-ready UI built for daily use.',
    client: 'Northwind Labs',
    camera: 'React · TypeScript · Tailwind · Supabase · Recharts',
    location: 'Remote',
    liveUrl: '#',
    repoUrl: '#',
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Dashboard overview', aspectRatio: 'landscape' },
      { id: '1-2', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Analytics charts', aspectRatio: 'landscape' },
      { id: '1-3', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Settings screen', aspectRatio: 'landscape' },
      { id: '1-4', src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Mobile view', aspectRatio: 'portrait' },
    ],
  },
  {
    id: '2',
    title: 'Atelier Studio Website',
    category: 'website',
    year: '2024',
    slug: 'atelier-studio',
    coverImage: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description: 'A minimal editorial website for a design studio. Custom typography, smooth scroll-driven animations, and a CMS-backed blog.',
    client: 'Atelier Studio',
    camera: 'Next.js · Tailwind · Framer Motion · Sanity CMS',
    location: 'Remote',
    liveUrl: '#',
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Hero', aspectRatio: 'landscape' },
      { id: '2-2', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'About section', aspectRatio: 'landscape' },
      { id: '2-3', src: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Article layout', aspectRatio: 'portrait' },
      { id: '2-4', src: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Footer', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '3',
    title: 'Kindle Coffee — E-commerce',
    category: 'ecommerce',
    year: '2024',
    slug: 'kindle-coffee',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description: 'A specialty coffee shop online store. Built for fast checkout, beautiful product pages, and easy inventory management.',
    client: 'Kindle Coffee Roasters',
    camera: 'Shopify Hydrogen · React · Tailwind · Stripe',
    location: 'Remote',
    liveUrl: '#',
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Storefront', aspectRatio: 'landscape' },
      { id: '3-2', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Product page', aspectRatio: 'portrait' },
      { id: '3-3', src: 'https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Checkout flow', aspectRatio: 'square' },
      { id: '3-4', src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Mobile cart', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '4',
    title: 'Lumen — SaaS Landing Page',
    category: 'landing-page',
    year: '2024',
    slug: 'lumen-landing',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description: 'A high-conversion landing page for a developer-focused SaaS. Bold typography, animated hero, and a 99 Lighthouse score.',
    client: 'Lumen.ai',
    camera: 'Astro · Tailwind · GSAP',
    location: 'Remote',
    liveUrl: '#',
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Landing hero', aspectRatio: 'landscape' },
      { id: '4-2', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Features grid', aspectRatio: 'landscape' },
      { id: '4-3', src: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Pricing', aspectRatio: 'portrait' },
      { id: '4-4', src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Testimonials', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '5',
    title: 'Oak & Ivy Restaurant',
    category: 'website',
    year: '2023',
    slug: 'oak-and-ivy',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description: 'An elegant restaurant website with online reservations, menu management, and a story-driven brand experience.',
    client: 'Oak & Ivy',
    camera: 'Next.js · Tailwind · Prisma · PostgreSQL',
    location: 'Remote',
    liveUrl: '#',
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Homepage', aspectRatio: 'landscape' },
      { id: '5-2', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Menu page', aspectRatio: 'landscape' },
      { id: '5-3', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Reservation form', aspectRatio: 'portrait' },
      { id: '5-4', src: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Story section', aspectRatio: 'landscape' },
    ],
  },
  {
    id: '6',
    title: 'Finch Banking App UI',
    category: 'ui-design',
    year: '2023',
    slug: 'finch-banking',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description: 'UI/UX design and front-end build for a neo-banking mobile web app. Focus on clarity, accessibility, and fast interactions.',
    client: 'Finch Finance',
    camera: 'Figma · React · Tailwind · Framer Motion',
    location: 'Remote',
    images: [
      { id: '6-1', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'App overview', aspectRatio: 'landscape' },
      { id: '6-2', src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Cards screen', aspectRatio: 'landscape' },
      { id: '6-3', src: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Transactions', aspectRatio: 'landscape' },
      { id: '6-4', src: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Onboarding', aspectRatio: 'portrait' },
    ],
  },
  {
    id: '7',
    title: 'Verse — Personal Blog',
    category: 'website',
    year: '2023',
    slug: 'verse-blog',
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description: 'A typography-first blog for a writer. MDX-powered, with reading time, dark mode, and lightning-fast page loads.',
    client: 'Independent Writer',
    camera: 'Next.js · MDX · Tailwind',
    location: 'Remote',
    liveUrl: '#',
    images: [
      { id: '7-1', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Article reading view', aspectRatio: 'landscape' },
      { id: '7-2', src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Index page', aspectRatio: 'landscape' },
      { id: '7-3', src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'About page', aspectRatio: 'square' },
      { id: '7-4', src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Mobile reading', aspectRatio: 'portrait' },
    ],
  },
  {
    id: '8',
    title: 'Pulse — Fitness Web App',
    category: 'web-app',
    year: '2023',
    slug: 'pulse-fitness',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description: 'A workout tracking web app with custom plans, progress charts, and offline-first PWA support.',
    client: 'Pulse Fitness',
    camera: 'React · Vite · Tailwind · IndexedDB · Workbox',
    location: 'Remote',
    liveUrl: '#',
    images: [
      { id: '8-1', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Dashboard', aspectRatio: 'landscape' },
      { id: '8-2', src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Workout view', aspectRatio: 'landscape' },
      { id: '8-3', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Progress charts', aspectRatio: 'portrait' },
      { id: '8-4', src: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Mobile screen', aspectRatio: 'landscape' },
    ],
  },
];

// Helpers
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] => projects.slice(0, 4);

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
