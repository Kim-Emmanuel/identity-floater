# 🛡️ Identity_Floater_V1

> **"Ambient Professionalism for the Digital Age"**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.4-cyan.svg)
![Status](https://img.shields.io/badge/status-operational-green.svg)

## 📖 Overview

**Identity_Floater** is a conceptual "Software Developer" business card designed for the modern software developer-professional. It is a floating, always-accessible window that respects your screen real estate while providing immediate access to your professional identity.

Built with **React**, **Tailwind CSS**, and designed to be powered by **Tauri**, this application embodies the "Hacker-Chic" aesthetic—minimal, functional, and undeniably cool.

---

## ✨ Key Features

*   **🛸 Always-on-Top Floating Widget**: Unobtrusive design that floats above your workflow.
*   **🌫️ Glassmorphism UI**: Sleek, semi-transparent aesthetics with real-time background blur.
*   **🖱️ Interactive Expansion**: Hover or click to reveal detailed contact information.
*   **🔧 Drag & Drop**: Fully draggable interface to position your identity wherever you need it.
*   **⚡ Reactive Animations**: Smooth state transitions powered by Framer Motion.

---

## 🎨 Design Philosophy

The design language is **"Hacker-Chic Glassmorphism"**:

*   **Colors**: Deep obsidian backgrounds (`#0d0d0d`) with electric cyan (`#00ffff`) and warning amber (`#ffb300`) accents.
*   **Typography**: `Fira Code` for technical credibility paired with `Inter` for readability.
*   **Texture**: Subtle noise and gradients to simulate a heads-up display (HUD).

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React 18 + TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Target Runtime** | Tauri (Rust) / Web |

---

## 🚀 Getting Started

### Prerequisites

*   Node.js (v16+)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-handle/identity-floater.git
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

---

## 👤 Customization

### Updating Profile Data

Navigate to `src/constants.ts` to update the `PROFILE_DATA` object:

```typescript
export const PROFILE_DATA: CardProfile = {
  handle: '@your_handle',
  title: 'Your Job Title',
  avatarUrl: 'https://path-to-your-image.jpg',
  links: [
    // Add your social links here
  ]
};
```

---

## 🤝 Connect

<div align="center">

[**GitHub**](https://github.com) • [**LinkedIn**](https://linkedin.com) • [**Twitter**](https://twitter.com)

</div>

---

*“Code is poetry, security is art.”* — **kimdabit_**
