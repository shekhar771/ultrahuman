# 💍 Ultrahuman Ring Challenge – Frontend Implementation

This repository contains my submission for the frontend challenge inspired by the **Ultrahuman Ring AIR**. The challenge was split into two parts:

---

## 🌐 Live Demo

🔗 [Deployed App on Vercel](https://ultrahuman-n33zhqqqh-shekhar771s-projects.vercel.app/)

---

## 🚀 Challenge Overview

### 🔹 #1 — Figma Design to Webpage

**Link to Design:**  
[Figma – Window of Opportunity](https://www.figma.com/design/UmR8KC2U2vUknbe3hKQHrG/Window-of-Opportunity?node-id=0-1&t=xKuVE3gVMa6cvHlJ-1)

**Goals:**

- Implement a landing page using the provided Figma design.
- Create a **parallax effect** on the **ring image** in the **first section**.
- Implement an **automated carousel** in **section 3**.


### 🔹 #2 — Ring Purchase Flow (Based on ultrahuman.com/ring/buy)

**Goals:**

- Recreate the ring customization and purchase interface:
  - Choose **ring color**
  - Choose **size**
  - Select **quantity**
  - Pick **accessories**
- Use **React Context API** (`PurchaseContext`) to persist selections.
- On clicking **"Checkout Now"**, log the selected options to the browser console.

---

project structure

├── app/
│   ├── buy/                # Buy page route
│   │   └── page.tsx
├── components/
│   ├── BuySection.tsx      # Buy section UI and logic
│   ├── Allcomponent.tsx    # Carousel component
│   ├── Duble.tsx           # Reusable UI section
│   ├── HeroSection.tsx     # Hero with parallax ring
│   ├── section2.tsx        # Midsection UI
│   └── PurchaseContext.tsx # React context for selections

## 🧠 Tech Stack

- [Next.js (App Router)](https://nextjs.org/docs/app)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🛠️ Local Development

### 📦 Install dependencies

```bash
npm install
npm run dev
