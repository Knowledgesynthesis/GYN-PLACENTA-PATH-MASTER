# GYN & Placenta Path Master

A mobile-first, dark-mode, offline-ready educational platform for Gynecologic & Placental Pathology.

## Overview

This educational app provides pattern-based learning for gynecologic and placental pathology, designed for pathology residents (PGY1-PGY4) and GYN pathology fellows.

## Features

- **Comprehensive Modules**: Cervix, Endometrium, Ovary, Vulva/Vagina, GTD, Placenta, IHC, Molecular, and Pitfalls
- **Integrated Case Bank**: Synthetic cases combining morphology, IHC, and molecular findings
- **Session-Based Assessment**: Test your knowledge with immediate feedback (no score tracking)
- **Dark Mode First**: Optimized for reduced eye strain with light mode option
- **Offline Ready**: Progressive Web App with service worker support
- **Mobile Optimized**: Responsive design for learning on any device

## Educational Content

### Topics Covered

- Cervical squamous and glandular lesions (LSIL, HSIL, AIS)
- Endometrial hyperplasia vs carcinoma patterns
- Ovarian tumor classification (epithelial, germ cell, sex cord-stromal)
- Gestational trophoblastic disease (GTD)
- Placental pathology (MVM, FVM, infections, implantation disorders)
- IHC and molecular concepts for GYN pathology
- Common pitfalls and mimics

## Technology Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Zustand
- **Icons**: Lucide React
- **PWA**: vite-plugin-pwa with Workbox

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Important Disclaimers

### Educational Use Only

This application is designed exclusively for educational purposes. It is **NOT** intended for:

- Clinical diagnosis or patient care
- Treatment decisions or recommendations
- Replacing formal medical education or training
- Substitute for consultation with qualified pathologists

### Synthetic Content

All images, cases, and examples are synthetic and educational. They are conceptual representations designed to teach pattern recognition and diagnostic reasoning. **No real patient data (PHI) is used.**

### Privacy

This application does **not** track, store, or transmit any user data. All learning is session-based only. No personal information is collected or shared.

## License

Educational use only. All rights reserved.

## Acknowledgments

Content is conceptually aligned with:
- WHO Classification of Tumours: Female Genital Tumours
- Standard pathology textbooks and references
- Current pathology practice guidelines

**Remember**: Always refer to current literature and institutional protocols. Pathology classifications and guidelines evolve.
