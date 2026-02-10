# AGENTS.md - Development Guidelines for PT Sinergi Braga Mandiri (SBM)

This file dictates the strict development standards for the SBM Company Profile project. All code must adhere to these rules.

## 1. Vibe Desain
*   **Style:** Minimalist Futuristik.
*   **Palette:** Corporate Blue (#0056b3), Teal/Green (#008080) for sustainability, and high contrast text (White/Dark Slate).
*   **Animations:** Use Framer Motion for smooth entry, scroll reveals, and hover effects. Avoid jarring transitions.
*   **Glassmorphism:** Use subtle glass effects on cards and overlays.

## 2. Prinsip UI/UX (User-Centered Design)
*   **Navigation:** Intuitif & Clear (Beranda, Tentang Kami, Layanan, Portofolio, Kontak).
*   **Hierarchy:** Use font size and color contrast to guide the user. Important services like AMDAL/Andalalin must stand out.
*   **Mobile-First:** Design must be fully responsive and touch-friendly.

## 3. Standar GEO (Generative Engine Optimization)
*   **Fact-Density:** Content must be rich in specific details (e.g., specific service names, process steps, regulations).
*   **Structure:** Use lists and structured data to help AI extract information easily.
*   **Citations:** Provide clear sources or references where applicable (e.g., referring to specific environmental regulations).

## 4. Standar SEO Teknis
*   **Semantic HTML:** Use <main>, <section>, <article>, <header>, <footer> correctly.
*   **Performance:** Optimize images (WebP) and ensure Core Web Vitals are green.
*   **Metadata:** Use descriptive titles and meta descriptions for every page.

## 5. Schema Markup
*   **JSON-LD:** Implement structured data for:
    *   **Organization:** Name (SBM), Logo, Contact Info, Address.
    *   **Service:** List all 9 key services.
    *   **FAQPage:** Use for common questions about services.

## 6. Code Quality
*   **Components:** Modular, reusable React components (e.g., ServiceCard, HeroSection).
*   **Type Safety:** Strict TypeScript usage. No any.
*   **Clean Code:** Follow standard linting rules.
