# AGENTS.md — Local Business Digitalization Platform

## 1. Project Mission

This project is a platform for prospecting and digitalizing local businesses.

The commercial strategy consists of two stages:

### Stage A — Degustação / Preview

We create a personalized landing page for a local business before they become a customer.

The goal is to demonstrate, visually and concretely, what their digital presence could look like.

The preview must feel like something genuinely designed for that specific business — never like a generic template with the business name replaced.

### Stage B — Contracted Customer

If the prospect becomes a customer, they are converted into a Tenant of the main SaaS platform.

The contracted solution may include:

- complete website;
- custom domain;
- automated WhatsApp support;
- AI-powered customer service;
- Z-API integration;
- Gemini AI;
- leads;
- appointments;
- orders;
- quotations;
- customer service history;
- analytics;
- recurring billing;
- business-specific modules.

The preview is therefore a sales instrument for the larger SaaS product.

---

# 2. Core Commercial Philosophy

We are NOT primarily selling websites.

We are selling:

> Digital presence + automation + customer service + operational efficiency.

The website is the easiest way for the prospect to visualize the value before purchasing.

When designing features, remember that the long-term product is:

> A digital operating system for small local businesses.

---

# 3. Primary User Experience

A prospect should receive a message containing a URL such as:

```text
preview.domain.com/barbearia-do-joao
```

When opening it, the prospect should immediately feel:

> "This was made for my business."

The page should create enough perceived value that the business owner becomes curious about the complete solution.

---

# 4. Preview Philosophy

A preview is NOT supposed to be a complete website.

Do not waste development effort implementing unnecessary backend functionality for previews.

The purpose of a preview is:

1. create emotional impact;
2. demonstrate professionalism;
3. show how the business could present itself online;
4. demonstrate potential customer journeys;
5. create curiosity about automation;
6. initiate a commercial conversation.

The preview should be visually impressive while remaining inexpensive to generate and host.

---

# 5. Preview Restrictions

Every preview must:

- use `noindex`;
- use `nofollow`;
- not pretend to be the official website;
- not collect sensitive customer data;
- not implement fake working services;
- clearly remain a demonstration environment internally.

Never imply that a business has formally endorsed the preview unless they actually have.

---

# 6. Design Skills

The following design skills are installed and MUST be used whenever relevant:

- Taste Skill;
- Web Design Guidelines;
- Awesome Design references.

When working on frontend design:

1. inspect available design guidance;
2. use Taste Skill principles while designing;
3. use Web Design Guidelines during review;
4. follow `DESIGN.md` when one exists;
5. treat `DESIGN.md` as the project's visual authority.

Do not merely mention these skills.

Actually apply them to the implementation.

---

# 7. Anti-Generic Design Rule

Avoid the stereotypical "AI generated SaaS landing page".

Do NOT default to:

- purple/blue gradients;
- excessive glowing cards;
- random blobs;
- giant generic hero text;
- endless rounded cards;
- fake charts;
- meaningless statistics;
- generic illustrations;
- excessive glassmorphism;
- unnecessary pill-shaped elements;
- dozens of identical feature cards;
- arbitrary animations;
- excessive gradients.

The design must derive from the BUSINESS.

---

# 8. Business-First Design

Before designing a preview, identify:

```text
Business type
Target audience
Average customer
Typical purchase decision
Primary service
Secondary services
Location
Brand personality
Price positioning
Customer expectations
Main conversion action
```

Then derive the design from those characteristics.

Examples:

A barbershop should not look like a dental clinic.

A dental clinic should not look like a hamburger restaurant.

A lawyer should not look like a gym.

A premium restaurant should not look like a neighborhood mechanic.

The visual identity should communicate the business category before the user reads the text.

---

# 9. Business Information

Information about each prospect should be stored as structured data whenever possible.

Example:

```ts
interface ProspectBusiness {
  name: string;
  slug: string;

  category: string;
  description?: string;

  phone?: string;
  whatsapp?: string;
  email?: string;

  address?: string;
  city?: string;
  state?: string;

  openingHours?: OpeningHours[];

  services?: Service[];

  socialLinks?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };

  branding?: {
    logo?: string;
    primaryColor?: string;
    secondaryColor?: string;
  };
}
```

Avoid hardcoding business information inside components.

---

# 10. Content Accuracy

Never invent factual information about a prospect.

Do not invent:

- years of experience;
- number of clients;
- ratings;
- prices;
- certifications;
- employees;
- opening hours;
- awards;
- testimonials;
- guarantees;
- addresses;
- services.

If information is unavailable, either omit the section or write neutral copy that does not make unsupported factual claims.

---

# 11. Testimonials

Never fabricate customer testimonials.

If real testimonials are unavailable:

do not render fake testimonials.

Prefer removing the section entirely.

---

# 12. Preview Structure

The exact structure depends on the business.

Do not blindly use the same page architecture.

Typical possibilities include:

```text
Navigation
Hero
Services
About
Differentiators
Gallery
How it works
Location
Opening hours
FAQ
CTA
Footer
```

But sections should only exist when they add value.

A short 5-section page with excellent design is better than a generic 12-section page.

---

# 13. Hero Section

The hero is extremely important.

Within seconds, the visitor should understand:

- what the business does;
- why they should care;
- where the business operates;
- what action they should take.

Prefer business-focused headlines over marketing clichés.

BAD:

```text
Transformando sonhos em realidade
```

BAD:

```text
Excelência que você merece
```

BAD:

```text
Sua melhor escolha
```

Prefer specific positioning.

Example:

```text
Cortes, barba e cuidados masculinos no centro de Augustinópolis.
```

---

# 14. Calls to Action

Primary CTAs should correspond to realistic business actions.

Examples:

```text
Falar pelo WhatsApp
Solicitar orçamento
Ver serviços
Agendar horário
Conhecer cardápio
Como chegar
Consultar disponibilidade
```

Do not use SaaS-style CTAs such as:

```text
Get Started
Start Free
Explore Platform
```

unless appropriate.

---

# 15. WhatsApp

For most local businesses, WhatsApp will be one of the primary conversion channels.

When appropriate, provide a strong WhatsApp CTA.

For previews, the WhatsApp integration may simply open:

```text
https://wa.me/
```

with an appropriate message.

Do not implement artificial backend complexity for preview sites.

---

# 16. Future AI Demonstration

When useful, a preview may visually demonstrate the concept of automated customer support.

Example:

```text
"Imagine seus clientes recebendo respostas mesmo enquanto você está trabalhando."
```

A visual simulated WhatsApp interaction may be used as a presentation element.

However:

- clearly treat it as a demonstration;
- do not represent fake conversations as real customers;
- do not falsely imply an operational AI service is already active.

---

# 17. Mobile First

Many prospects and their customers will open these pages through WhatsApp.

Therefore:

> Mobile UX is a first-class requirement.

Always test:

```text
375px
390px
430px
768px
1024px+
```

Important elements must work naturally on mobile.

---

# 18. Performance

Preview pages must be lightweight.

Prioritize:

- static rendering;
- optimized images;
- minimal JavaScript;
- responsive images;
- lazy loading;
- good Core Web Vitals.

Avoid installing heavy dependencies for trivial functionality.

---

# 19. Accessibility

Follow Web Design Guidelines.

At minimum:

- semantic HTML;
- accessible labels;
- proper heading hierarchy;
- keyboard navigation;
- adequate contrast;
- meaningful alt text;
- visible focus states;
- accessible forms.

---

# 20. Motion

Animation should improve perceived quality, not distract.

Use motion for:

- section reveals;
- subtle hover feedback;
- image transitions;
- navigation feedback.

Avoid:

- constant animation;
- bouncing CTAs;
- excessive parallax;
- animation on every component.

Respect:

```css
prefers-reduced-motion
```

---

# 21. Typography

Typography is one of the strongest elements of the visual identity.

Select fonts based on the business personality.

Examples:

Luxury:

```text
Editorial / serif combinations
```

Modern professional:

```text
Clean grotesk / sans-serif
```

Industrial:

```text
Condensed / strong geometric typography
```

Friendly neighborhood business:

```text
Warm, approachable typography
```

Do not automatically use Inter for every project.

---

# 22. Images

Images should strongly represent the business.

Prioritize:

1. real business images;
2. images provided by the prospect;
3. legitimate visual assets;
4. high-quality appropriate placeholders during development.

Never use visibly unrelated stock imagery just because it looks attractive.

---

# 23. Architecture

The project should support many preview businesses without duplicating the application.

Prefer:

```text
One application
+
business configuration
+
template/theme system
```

over:

```text
one project per prospect
```

A preview should primarily be generated from data.

Example:

```text
prospects/
  barbearia-joao.json
  clinica-sorriso.json
  oficina-silva.json
```

The frontend resolves:

```text
/preview/[slug]
```

and renders the appropriate experience.

---

# 24. Templates

Templates should provide a starting point but should NOT make every website look identical.

Templates can define:

- layout philosophy;
- typography;
- spacing;
- navigation;
- gallery style;
- service presentation.

Business configuration can override:

- colors;
- typography;
- sections;
- images;
- ordering;
- copy;
- CTAs.

---

# 25. Supported Business Categories

Design the architecture so categories can gradually be added.

Examples:

```text
BARBERSHOP
BEAUTY
CLINIC
DENTIST
RESTAURANT
GYM
AUTO_REPAIR
LAW
RETAIL
LOCAL_SERVICE
GENERIC
```

Do not build all categories immediately.

Implement categories when needed.

---

# 26. Preview Conversion

Every preview should contain internal metadata describing its lifecycle.

Example:

```text
DRAFT
READY
SENT
VIEWED
INTERESTED
CONVERTED
ARCHIVED
```

Eventually this information may be managed by the SaaS backend.

---

# 27. Contracted Customer Conversion

A Prospect should eventually be convertible into a Tenant.

Conceptually:

```text
Prospect
    ↓
customer accepts proposal
    ↓
Convert Prospect
    ↓
Tenant
```

Relevant information should be reused.

Do not design previews as disposable isolated systems that make conversion difficult.

---

# 28. Full SaaS Relationship

The preview system eventually connects to the main SaaS containing:

```text
Tenant
Billing
WhatsApp
AI
CRM
Scheduling
Orders
Analytics
```

However, do not prematurely implement those features inside the preview frontend.

Keep boundaries clear.

---

# 29. Frontend Code Standards

Use:

- TypeScript;
- strict mode;
- React;
- Next.js;
- semantic components;
- reusable components;
- clean composition.

Prefer server components when appropriate.

Avoid unnecessary global client state.

Avoid giant components.

---

# 30. Component Philosophy

Do not create abstractions merely because something could theoretically be reused.

Extract components when:

- repeated;
- logically independent;
- sufficiently complex;
- clearer when isolated.

Favor readability.

---

# 31. UI Components

Shared primitives should live in:

```text
components/ui
```

Business-oriented components may live in:

```text
components/business
```

Examples:

```text
BusinessHero
ServicesSection
BusinessHours
LocationSection
WhatsAppCTA
BusinessGallery
```

---

# 32. Metadata and SEO

Preview pages must contain:

```text
robots:
  index: false
  follow: false
```

Contracted websites may later enable SEO.

Do not accidentally make preview pages indexable.

---

# 33. Preview Disclaimer

Preview sites may contain a discreet internal/demo indication when appropriate.

Example:

```text
Demonstração visual criada para apresentar uma proposta de presença digital.
```

It must not interfere with the presentation but must avoid impersonating the official business website.

---

# 34. Sales Philosophy

The preview should make the business owner ask:

> "Quanto ficaria para colocar isso para funcionar?"

The website itself should demonstrate value before Felipe needs to explain everything manually.

However, avoid aggressive sales copy inside the preview.

The prospect's business remains the protagonist.

---

# 35. Primary Sales Message

The broader product can be summarized internally as:

```text
Seu negócio continua trabalhando mesmo enquanto você está ocupado.
```

The system can eventually help businesses:

- answer repetitive questions;
- receive leads;
- schedule customers;
- present services;
- generate quotes;
- take orders;
- route requests;
- operate outside business hours.

---

# 36. Development Workflow

Before implementing a new preview:

1. inspect available business information;
2. understand the category;
3. determine the primary customer action;
4. define visual direction;
5. determine required sections;
6. inspect design skills;
7. implement;
8. test mobile;
9. review with Web Design Guidelines;
10. review visual quality using Taste Skill principles;
11. fix issues;
12. only then consider the preview ready.

---

# 37. When Information Is Missing

Do not stop development unnecessarily.

Make conservative assumptions about layout and presentation.

Never make assumptions about factual business information.

If something factual is unknown:

- omit it;
- make it configurable;
- use explicit placeholder data during development.

---

# 38. Browser Review

When browser access is available, do not consider frontend work complete after compilation.

Open the page.

Inspect it visually.

Test multiple viewport sizes.

Look for:

- overflow;
- awkward whitespace;
- typography problems;
- broken images;
- bad contrast;
- weak hierarchy;
- alignment inconsistencies;
- mobile navigation problems;
- poorly positioned CTAs.

Fix what you find.

---

# 39. Do Not Stop at "Works"

For frontend tasks:

```text
functional != finished
```

A page should be:

```text
functional
+
responsive
+
visually polished
+
coherent
+
accessible
+
appropriate for the specific business
```

---

# 40. Autonomy

You have permission to:

- create files;
- restructure code;
- install reasonable dependencies;
- run the application;
- run tests;
- inspect pages;
- refactor code;
- improve design;
- fix issues.

Do not ask for approval for ordinary implementation decisions.

Choose the simplest maintainable solution.

---

# 41. Avoid Overengineering

Do NOT prematurely introduce:

- Kubernetes;
- microservices;
- Kafka;
- complex event systems;
- separate databases per prospect;
- unnecessary backend services;
- elaborate abstractions.

This project should remain inexpensive to operate.

---

# 42. Current Priority

The immediate priority is:

> Build a system capable of producing excellent personalized preview landing pages for local business prospects quickly.

The preview engine must be:

```text
fast to customize
cheap to host
easy to maintain
visually impressive
business-specific
convertible into the full SaaS later
```

---

# 43. First Implementation

If this repository is empty, begin by:

1. inspecting the repository;
2. establishing the Next.js + TypeScript foundation;
3. creating the preview architecture;
4. defining a `ProspectBusiness` schema;
5. implementing `/preview/[slug]`;
6. creating one high-quality generic local-business example;
7. creating reusable business components;
8. configuring `noindex,nofollow`;
9. making mobile responsiveness excellent;
10. documenting how to add a new prospect.

Also create:

```text
README.md
docs/
```

The README must explain how a new prospect preview can be created with minimal work.

---

# 44. Definition of Done

A preview is NOT complete merely because:

```text
npm run build
```

passes.

It is complete only when:

- build passes;
- lint passes;
- page renders;
- mobile layout works;
- desktop layout works;
- content fits the business;
- visual hierarchy is strong;
- no fake claims exist;
- no preview is indexable;
- primary CTA is clear;
- design review has been performed;
- obvious visual issues have been corrected.

---

# 45. Final Rule

Before completing any meaningful task, ask internally:

```text
Would a local business owner be impressed enough by this to reply to Felipe?

Does this genuinely look designed for this particular business?

Or does it look like a template generated in five minutes?
```

If the answer to the last question is yes, improve it before considering the task finished.