# Ranel Dahil - Portfolio

Modern, professional portfolio with editorial aesthetic design.

## 🚀 Setup Options

You have **two options** for using this portfolio:

---

### Option 1: TypeScript with Build Tool (Recommended for Development)

**Best for:** Projects using Vite, Webpack, or other build tools

**Folder Structure:**
```
portfolio/
├── index.html
├── style.css
├── src/
│   └── main.ts
├── package.json
└── tsconfig.json
```

**Setup Steps:**

1. **Initialize your project:**
```bash
npm init -y
npm install -D vite typescript
```

2. **Create `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

3. **Update `package.json` scripts:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

4. **Run development server:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
```

---

### Option 2: Plain JavaScript (No Build Tool)

**Best for:** Quick deployment, simple hosting, or learning

**Folder Structure:**
```
portfolio/
├── index.html
├── style.css
└── script.js
```

**Setup Steps:**

1. **Update `index.html`** - Change the script line from:
```html
<script type="module" src="/src/main.ts"></script>
```
to:
```html
<script src="script.js"></script>
```

2. **Use `script.js` instead of `main.ts`**
   - The `script.js` file is already provided (vanilla JavaScript version)
   - No TypeScript compilation needed
   - Just open `index.html` directly in your browser!

---

## 📁 Files Included

- **index.html** - Main HTML structure
- **style.css** - Complete styling with animations
- **main.ts** - TypeScript version (for Option 1)
- **script.js** - JavaScript version (for Option 2)

---

## 🎨 Features

✨ Smooth scroll animations
📱 Fully responsive design
🎯 Section navigation
🌟 Hover effects
📧 Contact form
🔗 Social media links
🎭 Grain texture overlay
🚀 Parallax effects

---

## 🛠️ Customization

### Update Your Information

1. **Personal Info** - Edit text in `index.html`
2. **Projects** - Replace project cards with your actual projects
3. **Skills** - Update skill categories to match your expertise
4. **Contact** - Change email, phone, and social links
5. **Colors** - Modify CSS variables in `style.css`:

```css
:root {
  --ink: #0a0a0a;          /* Main text color */
  --accent: #ff6b35;        /* Accent color (orange) */
  --cream: #fffef9;         /* Background */
  /* ... more variables */
}
```

---

## 🌐 Deployment

### Deploy to:
- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Push to GitHub and enable Pages
- **Any static host**: Upload files via FTP

---

## 💡 Which Option Should You Choose?

| Feature | TypeScript (Option 1) | JavaScript (Option 2) |
|---------|----------------------|----------------------|
| Type safety | ✅ Yes | ❌ No |
| Build step required | ✅ Yes | ❌ No |
| Hot reload | ✅ Yes (with Vite) | ⚠️ Manual refresh |
| Production optimized | ✅ Yes (minified) | ⚠️ Manual optimization |
| Best for | Development projects | Quick deployment |
| Complexity | Medium | Low |

**Recommendation:** 
- Use **Option 1 (TypeScript)** if you're building a professional portfolio and want modern development experience
- Use **Option 2 (JavaScript)** if you want to get started quickly without setup

---

## 📞 Need Help?

If you encounter any issues, check:
1. All files are in the correct folders
2. File paths in HTML match your folder structure
3. Your browser console for any errors

Good luck with your portfolio! 🚀
