# Xylotek Website

Welcome to the **Xylotek Website** codebase! This is a modern, responsive web application built with a focus on immersive aesthetics and interactive user experiences.

## 🚀 Overview
This repository contains the front-end code for the Xylotek website, built using Next.js (App Router) to ensure excellent performance and SEO. The site incorporates high-quality visual elements alongside a clean, modern UI architecture to deliver a premium user experience. It features multiple pages (`/about`, `/contact`, `/services`, `/work`) and integrates an interactive AI chatbot and quick quote system.

## 💻 Tech Stack
The project is built around the following core technologies:
- **Framework:** [Next.js](https://nextjs.org/) (React 19, App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with `tailwindcss-animate` for dynamic, utility-first styling.
- **UI Library:** Custom components inspired by [shadcn/ui](https://ui.shadcn.com/), utilizing [Radix UI](https://www.radix-ui.com/) primitives for accessible dropdowns, dialogs, tabs, and more.
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Validation:** `react-hook-form` and `zod`
- **State Management:** React hooks and Context

## 📁 Codebase Flow & Structure
The codebase follows standard Next.js App Router conventions:

```text
xylotekWebsite/
├── app/                  # Next.js App Router root
│   ├── about/            # About Page
│   ├── contact/          # Contact Page
│   ├── services/         # Services Page
│   ├── work/             # Work/Portfolio Page
│   ├── layout.js         # Base layout wrapper (Theme Provider, Navbar, Footer)
│   └── page.js           # Home Page entry point
├── components/           # Reusable React components
│   ├── ui/               # Granular generic UI components (Buttons, Dialogs, etc. from Radix UI)
│   ├── 3d-model.jsx      # 3D interactive Canvas rendering
│   ├── chatbot.jsx       # Custom Chatbot integration component
│   └── hero-section.jsx, contact-section.jsx, etc. # Major Page Sections
├── public/               # Static assets (images, favicons, logos)
├── Jarvis/               # Optional Python backend/integration directory (for AI Chatbot APIs)
├── tailwind.config.js    # Tailwind theme tokens and configurations
└── package.json          # Dependency tracking and running scripts
```

## ⚙️ Setup Guide

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v18.x or later)
- **npm** (or pnpm/yarn)
- **Python 3.x** (Only if you intend to run the Jarvis background service locally)

### 1. Installation
Clone the repository and install the standard dependencies:
```bash
# Navigate to the project directory
cd xylotekWebsite

# Install NPM dependencies
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root of the directory to store any necessary secrets, such as API keys for the chatbot, Netlify integration tokens, or database credentials.

### 3. Running the Application Locally
You can start the Next.js development server using:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Running with Jarvis:**
If you have configured the Jarvis backend, you can start both the web server and the backend concurrently:
```bash
# First time setup for Jarvis (installs python reqs)
npm run jarvis:install

# Start Next.js AND the Python Server
npm run dev:jarvis
```

### 4. Build and Deployment
To create an optimized production build:
```bash
npm run build
```
For static hosting (e.g., on Netlify), you can run:
```bash
npm run deploy:netlify
```

---
*For more specific info on Netlify and favicons, see the included `NETLIFY_DEPLOYMENT_GUIDE.md` and `FAVICON-SETUP.md` files.*
