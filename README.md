# 🚀 Rishabh Singh — Premium Freelancer Portfolio

A luxury-level animated freelancer portfolio website built with React, Tailwind CSS & Framer Motion.

## ✨ Features

- **Premium Dark Theme** with neon gradients & glassmorphism
- **Framer Motion Animations** — smooth reveals, hover effects, floating elements
- **Fully Mobile Responsive** with hamburger menu
- **All Sections**: Hero → About → Services → Pricing → Portfolio → Testimonials → Process → Contact → Footer
- **WhatsApp Integration** — contact form sends directly to WhatsApp
- **Floating WhatsApp Button** — always visible for instant contact
- **SEO Optimized** with meta tags, OG tags and semantic HTML
- **Typing Animation** in Hero section
- **Auto-rotating Testimonials**

## 🛠️ Tech Stack

- React JS 18
- Tailwind CSS 3
- Framer Motion 11
- React Type Animation
- React Scroll (smooth scrolling)
- React Icons
- React Intersection Observer (scroll reveals)

---

## 📦 Installation & Setup

### Step 1: Clone / Download this project

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run Locally

```bash
npm start
```

Opens at `http://localhost:3000`

---

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) → Click **"New repository"**
2. Name it: `rishabh-portfolio` (or any name)
3. Set to **Public**
4. Click **Create repository**

### Step 2: Update `package.json`

Open `package.json` and update the `homepage` field:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```

**Example:**
```json
"homepage": "https://rishabhsingh200612-sketch.github.io/portfolio"
```

### Step 3: Install gh-pages (already in package.json)

```bash
npm install
```

### Step 4: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the React app (`npm run build`)
2. Push the build to `gh-pages` branch automatically

### Step 6: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **`gh-pages`** branch
4. Click **Save**
5. Wait 2–5 minutes
6. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## 🔄 Update & Redeploy

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

---

## ✏️ Customization Guide

### Change Contact Details
Edit in: `src/components/Contact.jsx`, `src/components/Hero.jsx`, `src/components/Footer.jsx`

### Change Services & Prices
Edit: `src/components/Services.jsx` → `const services` array

### Change Portfolio Projects
Edit: `src/components/Portfolio.jsx` → `const projects` array

### Change Testimonials
Edit: `src/components/Testimonials.jsx` → `const testimonials` array

### Change Colors
Edit: `src/index.css` → CSS variables and Tailwind classes

### Update Your Portfolio Link
Replace all instances of `https://rishabhsingh200612-sketch.github.io/` with your actual portfolio URL.

---

## 📱 Sections Included

| Section | Description |
|---------|-------------|
| 🏠 Hero | Animated typing effect, stats, CTA buttons |
| 👤 About | Skills grid, tech tags, personal story |
| 🛠️ Services | 9 service cards with pricing & features |
| 💰 Pricing | E-commerce package + add-on extras |
| 🎨 Portfolio | 6 project cards with live preview & GitHub links |
| ⭐ Testimonials | Auto-rotating client reviews |
| 🔄 Process | 6-step animated timeline |
| 🏆 Why Choose Me | 8 feature cards |
| 📞 Contact | Form + WhatsApp + all social links |
| 🦶 Footer | Links, socials, copyright |

---

## 🆘 Troubleshooting

**White screen after deploy?**
→ Make sure `homepage` in `package.json` matches your GitHub Pages URL exactly.

**404 on refresh?**
→ Add a `404.html` file in `/public` that redirects to `index.html` (GitHub Pages limitation with React Router — this project uses react-scroll so it's not needed).

**npm run deploy fails?**
→ Run `git push origin main` first, then `npm run deploy`

---

## 📧 Contact

**Rishabh Singh**
- 📱 WhatsApp: [+91 97114 59192](https://wa.me/919711459192)
- 📧 Email: rishabsingh200612@gmail.com
- 🌐 Portfolio: https://rishabhsingh200612-sketch.github.io/

---

© 2024 Rishabh Singh. All rights reserved.
