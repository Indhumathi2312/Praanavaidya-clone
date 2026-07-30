# 🍃 Praanavaidya Ayurvedic Hospital Web Application

A production-ready **Next.js App Router** project created with **React JSX** and **Tailwind CSS**, cloned and optimized from the static website [book.praanavaidya.com](https://book.praanavaidya.com/).

---

## 🚀 Key Features

* **Static Output Export (`/out/`)**: Configured with `output: 'export'` and `trailingSlash: false` in `next.config.js` to compile routes into individual static HTML files (`index.html`, `best-piles-and-fistula-treatment-in-mumbai.html`, `ayurvedic-wellness-bangalore.html`).
* **Interactive Appointment Booking Modal**: A highly polished global modal component (`AppointmentModal.jsx`) that registers key input listeners globally (intercepts clicking "Book Now" or "Book Appointment" triggers across all components) and enforces strict validations:
  * Blocks any starting spaces in the Name and Phone inputs.
  - Restricts name inputs to alphabetical characters and single spacing only (blocks numbers/special characters).
  - Restricts phone number to exactly 10 numeric digits.
  - Performs submission constraints verification (at least 2 letters for Name, exactly 10 digits for Phone).
* **Refresh-Free Scroll Navigation**: Navbar components utilize relative anchor targets allowing smooth section jumps without triggering browser reloading loops.
* **Bangalore Wellness Route (`/ayurvedic-wellness-bangalore`)**: Added a custom wellness page reusing modular components, complete with a beautiful custom `FeaturedTherapies` block mapped to Swedana, Shirodhara, and Abhyanga therapies.
* **Organized Site Data**: All configuration variables, doctor lists, testimonials, and FAQs are grouped page-wise with commented headlines inside `data/siteData.js`.
* **Netlify Routing Configuration**: Pre-packaged with a `public/_redirects` file that maps route subpaths to target section anchors automatically upon deployment.
* **Custom 404 Page**: A beautifully designed 404 error page matching the warm cream and forest green branding of the main web application.

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js installed on your system.

### Installation
Install the project dependencies using npm:
```bash
npm install
```

### Run the Development Server
Launch the local Next.js dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to view the application.

### Build and Export Static Files
Generate the production static assets inside the `out/` folder:
```bash
npm run build
```

---

## 📂 Project Directory Structure

```text
├── app/
│   ├── ayurvedic-wellness-bangalore/   # Bangalore wellness page route
│   │   └── page.jsx
│   ├── best-piles-and-fistula-treatment-in-mumbai/ # Mumbai Piles page route
│   │   └── page.jsx
│   ├── globals.css                     # Global styles & Tailwind directives
│   ├── layout.jsx                      # App root layout container
│   ├── not-found.jsx                   # Premium custom 404 layout
│   └── page.jsx                        # Homepage route
│
├── components/                         # Reusable React UI Components
│   ├── AppointmentModal.jsx            # Form modal with strict validations
│   ├── Customer.jsx                    # Responsive Google reviews grid
│   ├── Doctors.jsx                     # Team listing grid
│   ├── Expertise.jsx                   # Treatment list card grid
│   ├── FAQ.jsx                         # Accordion-driven FAQs
│   ├── FeaturedTherapies.jsx           # Therapy cards & steps guide
│   ├── Footer.jsx                      # Reusable footers
│   ├── Hero.jsx                        # Dynamic media hero layout
│   ├── Navbar.jsx                      # Navigation header
│   └── Stats.jsx                       # Counter stats showcase
│
├── data/
│   └── siteData.js                     # Categorized page configuration values
│
├── public/                             # Public images and static media
│   ├── images/
│   ├── media/
│   └── _redirects                      # Netlify routing rules
│
└── next.config.js                      # Next.js configurations
```

---

## 📝 License
Proprietary & Intellectual Property of Praanavaidya.