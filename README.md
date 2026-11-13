# Mandal Portal — Art Finance Management Ecosystem
> A dedicated web platform for Ganesh Mandals (Clients) to discover, evaluate, and compare certified Murtikars & Workshops across Maharashtra before finalizing bookings.

---

## 🌟 Highlights & Key Features

### 1. Unified Murtikar & Workshop Directory
- **Workshop Name & Verification**: Clear workshop branding with "Verified Karkhana" and "100% Eco-Certified" status.
- **Murtikar Master Name**: Prominently displays the master artisan/proprietor, experience years, and heritage background.
- **Management Team (Managers)**:
  - Lists each workshop's designated managers, roles (e.g. *Workshop & Kiln Head*, *Mandal Coordination & Transport*), and direct phone/WhatsApp contact links.
- **Year-Wise Bookings Tracker**:
  - Mini interactive bar chart on every card showing year-by-year bookings (2021 to 2026).
  - Current season capacity, booked count, and remaining slots indicator.

### 2. Comprehensive Murtikar Profile & Analytics Modal
Clicking **"View Full Profile & Analytics"** opens a tabbed drawer with:
1. **Year-Wise Bookings**: Historical breakdown table (Year, Bookings, Capacity, Utilization Rate, Average Idol Height, Popular Style, and On-Time Visarjan Record).
2. **Management Team**: Direct cards for the Master Sculptor (Owner) and each Manager with 1-click calling & WhatsApp messaging.
3. **Workshop Heritage & Story**: Workshop background, materials used (Shadu Mati, POP, Paper Pulp), specialties, address, and government honors.
4. **Past Mandals & Gallery**: Respected Sarvajanik Mandals served previously, accompanied by high-resolution idol photography.

### 3. Side-by-Side Comparison Tool
- Mandals can select up to **3 Murtikars** to compare side-by-side:
  - Workshop Name & Master Sculptor
  - Location (City & Area)
  - Experience in years
  - 2026 Remaining Slots
  - Multi-year booking track record
  - Managers & staff support
  - Eco-friendly certifications & idol heights
  - Budget & price ranges

### 4. Interactive Mandal Inquiry Desk
- Mandals can submit requirement quotes directly:
  - Mandal Name & Registration
  - Representative details & WhatsApp number
  - Target Murti Height (3-5 ft, 6-8 ft, 9-12 ft, 13-16 ft, 17-22+ ft)
  - Target Year (2026 Season / 2027 Advance)
  - Material Preference & Customization Notes
  - Saved in browser storage with instant notification and persistent tracking in **"My Mandal Inquiries"**.

### 5. Bilingual Support (English & मराठी)
- Instant toggle between English and Marathi (with culturally accurate terminology: मूर्तिकार, कार्यशाळा, व्यवस्थापक, वर्षनिहाय बुकिंग, शाडू माती, इत्यादी).

---

## 🚀 Running the Portal Locally

You can run the portal directly from the project root or inside `my-vite-app`:

### Option A: From root directory
```bash
npm run dev
```

### Option B: From `my-vite-app`
```bash
cd my-vite-app
npm run dev
```

The portal will start on `http://localhost:5173`.

To build for production:
```bash
npm run build
```

---

## 📁 Project Structure

```
MandalPortal-Art-Fin-Manage/
├── package.json                   # Root convenience script forwarder
├── README.md                      # Documentation
└── my-vite-app/
    ├── public/
    │   ├── ganesha_logo.png       # Official Brand Logo
    │   └── favicon.svg
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Icons.jsx          # Pure React SVG Icons (Feather/Lucide style)
    │   │   ├── Navbar.jsx         # Header, brand, language & compare pill
    │   │   ├── HeroBanner.jsx     # Hero section with season statistics
    │   │   ├── SearchAndFilters.jsx # City chips, materials, heights, sort
    │   │   ├── MurtikarCard.jsx   # Card with Workshop, Murtikar, Managers, Year-wise bars
    │   │   ├── MurtikarModal.jsx  # Full profile & year-wise analytics drawer
    │   │   ├── CompareModal.jsx   # Side-by-side comparison of 3 sculptors
    │   │   ├── InquiryModal.jsx   # Mandal quote request form
    │   │   ├── YearWiseAnalyticsView.jsx # Macro trends & historical chart
    │   │   ├── MyInquiriesModal.jsx # Track submitted inquiries
    │   │   └── Footer.jsx         # Brand guidelines, AFM helpdesk
    │   ├── data/
    │   │   └── murtikarsData.js   # Rich dataset of Maharashtra sculptors
    │   ├── services/
    │   │   └── api.js             # API service layer with local storage fallback
    │   ├── translations/
    │   │   └── index.js           # Bilingual English & Marathi dictionary
    │   ├── App.jsx                # Main application component
    │   ├── App.css                # Polished responsive styling
    │   ├── index.css              # Reset & theme tokens (matching Art-Finance-Management-FE)
    │   └── main.jsx
    └── vite.config.js
```

---

## 🎨 Design System Alignment
This portal matches the design tokens of `Art-Finance-Management-FE`:
- **Primary**: `#F97316` (Warm Saffron / Orange)
- **Primary Dark**: `#EA580C`
- **Background**: `#0F172A` / `#F8FAFC`
- **Eco / Verified**: `#10B981` (Emerald Green)
- **Gold Accent**: `#F59E0B` (Amber / Golden Glow)

