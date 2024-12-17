# 💍 Ultrahuman Ring Challenge – Frontend Implementation

This repository contains my submission for the frontend challenge inspired by the Ultrahuman Ring AIR. The challenge was split into two parts:

---

## 🚀 Challenge Overview

### 🔹 #1 — Figma Design to Webpage

**Link to Design:**  
[Figma – Window of Opportunity](https://www.figma.com/design/UmR8KC2U2vUknbe3hKQHrG/Window-of-Opportunity?node-id=0-1&t=xKuVE3gVMa6cvHlJ-1)

**Goals:**

- Implement a landing page using the provided Figma design.
- Create a parallax effect on the **ring image** in the **first section**.
- Implement an **automated carousel** in **section 3**.
- Embrace creative interpretation of the design (not expected to be pixel-perfect).

### 🔹 #2 — Ring Purchase Flow (Based on ultrahuman.com/ring/buy)

**Goals:**

- Recreate the ring customization and purchasing experience:
  - Choose ring color
  - Choose size
  - Choose quantity
  - Select accessories
- Use **React Context** (`PurchaseContext`) to manage and persist user selections.
- Clicking **"Checkout Now"** logs all selected options to the console.

---

## 🧠 Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Framer Motion** (for animations)
- **Lucide Icons**
- **TypeScript**

---

## 🛠️ Local Development

### 📦 Install dependencies

```bash
npm install
npm run dev




├── app/
│   ├── buy/                # Buy page
│   │   └── page.tsx
├── components/
│   ├── BuySection.tsx      # Buy section UI
│   ├── Allcomponent.tsx    # carousel
│   ├── Duble.tsx.tsx       #  UI component
│   ├── PurchaseContext.tsx # Context for state management
│   ├── HeroSection.tsx      # Hero section UI
│   └── section2.tsx        # UI component
