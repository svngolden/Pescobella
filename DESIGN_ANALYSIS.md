# Slanic Moldova QR Menu - Complete Design Analysis

## 🎯 Structure Overview

### Page Architecture
- **WordPress + Elementor** page builder
- **Full-width canvas** template
- **JetTabs** widget for Băuturi/Mâncare switching
- **JetEngine Listing Grid** for dynamic category cards
- **2-column desktop grid** (switches to 1-column on mobile)

---

## 🎨 Visual Design Breakdown

### 1. **Language Switcher** (Top-Left Floating)
- **Position**: Absolute, top-left corner
- **Style**: Pill-shaped button group
- **Background**: `rgba(255,255,255,.88)` with `backdrop-filter: blur(8px)`
- **Active state**: White background with shadow
- **Flags**: SVG inline (Romanian tricolor + UK flag)

### 2. **Hero Image**
- **Dimensions**: ~318px height (desktop), ~255px (mobile)
- **Image**: `taverna-racilor-background-qr-menu.jpg` (1920x1280)
- **Overlay**: None (clean seafood spread photo)
- **Positioning**: Full-width, responsive

### 3. **Logo Overlay (Center)**
- **Position**: Absolute center of hero
- **Size**: 180px × 180px (desktop), 150px (mobile)
- **Structure**: 
  - Outer container: Frosted glass effect
  - Inner box: Dark gradient (`#1f3b5c` → `#122030`)
  - Logo: Pescobar SVG (2048x1741)
- **Shadow**: Deep shadow for depth

### 4. **Tab Navigation** (Băuturi / Mâncare)
- **Layout**: 50/50 split, full width
- **Active state**: Red underline (sliding animation)
- **Typography**: 
  - Font: Poppins, 700 weight
  - Size: 20px (desktop), 18px (mobile)
  - Color: Black (inactive), Red `#d0312f` (active)
- **Underline**: 3px thick, animated `translateX()`

---

## 📋 Menu Categories (Exact List)

### **BĂUTURI Tab** (8 categories)
1. ☕ **Cafea & Băuturi calde**
2. 🥤 **Băuturi revigorante**
3. 🧃 **Băuturi non-alcoolice**
4. ⚡ **Băuturi energizante**
5. 🍹 **Cocktail-uri**
6. 🥃 **Băuturi alcoolice**
7. 🍷 **Vinuri**
8. 🍺 **Bere & Cidru**

### **MÂNCARE Tab** (13 categories)
1. 🥗 **Aperitive**
2. 🦐 **Seafood Snacks**
3. 👨‍🍳 **Gătite cu Talent**
4. 🍝 **Paste**
5. 🍕 **Pizza**
6. 🐙 **Caracatița lui Pescobar**
7. 🍲 **Supe**
8. 🥔 **Garnituri**
9. ⭐ **Specialități**
10. 🐟 **Pește**
11. 🍽️ **Platouri**
12. 🥫 **Sosuri**
13. 🍰 **Desert**

---

## 🎴 Category Card Design

### Structure
```html
<div class="card">
  <div class="card__img" data-variant="coffee">
    <!-- Background image with overlay -->
  </div>
  <div class="card__label">
    <span>Category Name</span>
    <span class="card__arrow">→</span>
  </div>
</div>
```

### Styling
- **Dimensions**: ~140px height (desktop), 120px (mobile)
- **Border-radius**: 18px
- **Shadow**: `0 12px 30px rgba(0,0,0,.08)`
- **Hover effect**: `translateY(-2px)` + deeper shadow
- **Background**: Real food photography (specific per category)
  - Overlay gradient: `linear-gradient(0deg, rgba(0,0,0,.35), rgba(0,0,0,.08))`
  - Additional radial gradient for color accent
  - Base dark gradient

### Typography in Cards
- **Font**: Poppins, 800 weight
- **Size**: 14px (desktop), 13px (mobile)
- **Text transform**: UPPERCASE
- **Letter-spacing**: 0.4px
- **Color**: White with text-shadow
- **Text shadow**: `0 10px 20px rgba(0,0,0,.35)`

### Arrow Button
- **Size**: 30px circle
- **Background**: `rgba(255,255,255,.16)`
- **Border**: `1px solid rgba(255,255,255,.22)`
- **Content**: `→` (right arrow)

---

## 🖼️ Category Background Images

### Observed Image URLs:
- Coffee: `taverna-racilor-coffee.jpg`
- Fresh drinks: `taverna-racilor-bauturi-revigorante.jpg`
- Soft drinks: `taverna-racilor-soft-drinks.jpg`
- Energy: `taverna-racilor-energy-drinks.jpg`
- Cocktails: `taverna-racilor-cocktails.jpg`
- Alcohol: `taverna-racilor-strong-stuff.jpg`
- Wine: `taverna-racilor-wines.jpg`
- Beer: `taverna-racilor-beer.jpg`

(Food categories use various restaurant interior/food shots)

---

## 📱 Responsive Behavior

### Breakpoints
- **Desktop**: 2 columns grid
- **Tablet**: 2 columns (maintained)
- **Mobile (≤430px)**: 1 column

### Mobile Adjustments
- Hero height: 318px → 255px
- Logo: 180px → 150px
- Tab font: 20px → 18px
- Card height: 140px → 120px
- Grid gap: 16px → 12px

---

## 🎯 Color Palette

- **Primary accent**: `#d0312f` (Red)
- **Secondary**: `#1f3b5c` (Navy blue)
- **Text**: `#121418` (Near black)
- **Muted**: `#6b7280` (Gray)
- **Card background**: `#f5f6f7` (Light gray - not used for photo cards)
- **Border**: `#e6e8ec` (Light gray)

---

## 🔤 Typography Stack

### Fonts
- **Primary**: `Poppins` (headings, tabs, cards)
- **Secondary**: `Noto Sans` (body text)
- **Fallback**: `system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`

### Font Weights Used
- 400 (Regular)
- 500 (Medium)
- 600 (Semi-bold)
- 700 (Bold)
- 800 (Extra-bold)

---

## ⚡ Interactions & Animations

1. **Tab switch**: Underline slides with 220ms ease transition
2. **Card hover**: 
   - Lift: `translateY(-2px)`
   - Shadow deepens
   - Duration: 150ms ease
3. **Language toggle**: Instant switch (no animation)
4. **Grid load**: None (static render)

---

## 🔍 Technical Stack Detected

- **CMS**: WordPress 6.9
- **Builder**: Elementor 3.24.7 + Elementor Pro 3.24.4
- **Plugins**:
  - JetTabs 2.2.5
  - JetEngine 3.5.7
  - JetMenu 2.4.5
  - Essential Addons for Elementor
- **Theme**: Hello Elementor 3.1.1
- **Fonts**: Google Fonts CDN
- **Icons**: Font Awesome 5.15.4

---

## 📐 Spacing System

- **Page padding**: 18px (desktop), 12px (mobile)
- **Grid gap**: 16px (desktop), 12px (mobile)
- **Card padding**: None (image fills)
- **Label position**: Absolute center with 14px horizontal padding
- **Content padding**: 18px (desktop), 14px (mobile)

---

## ✅ Implementation Checklist

- [x] 2-column responsive grid
- [x] Language switcher (RO/EN)
- [x] Hero image with centered logo
- [x] Băuturi/Mâncare tabs with underline
- [x] 8 drinks categories
- [x] 13 food categories
- [x] Card hover effects
- [x] Mobile responsive (1 column)
- [ ] Real category images (placeholder gradients used)
- [x] Proper spacing matching original
- [x] Typography hierarchy

---

## 📝 Notes for Implementation

1. **Images**: Replace gradient backgrounds with actual food photography
2. **Logo**: Use Pescobar logo SVG (provided in original)
3. **Links**: Update `href` values to actual category pages
4. **Fonts**: Poppins + Noto Sans already loaded via Google Fonts
5. **Shadow depth**: Match original soft shadows exactly
6. **Tab animation**: Sliding underline implemented
7. **Compact spacing**: Maintained throughout

---

**Analysis Date**: January 27, 2026
**Source**: https://tavernaracilor.ro/meniu-qr-taverna-racilor-slanic-moldova-ro/
**Implementation**: Pescobella static QR menu
