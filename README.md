# KYC Dashboard

A modern, responsive KYC (Know Your Customer) dashboard built with Next.js 14, TypeScript, and Tailwind CSS. This dashboard provides comprehensive analytics and management tools for KYC processes, featuring interactive charts, real-time data visualization, and a clean, professional interface.

## ✨ Features

### Core Functionality
- **Real-time KYC Analytics** - Track new and modified KYC applications with trend indicators
- **Interactive Charts** - Bar charts showing Individual vs Non-Individual KYC data
- **Status Management** - Visual cards for KYC status tracking (Initiated, Under Process, Registered, etc.)
- **Progress Tracking** - Progress bars for RI/NRI categories
- **PAN Management** - Pie charts and statistics for PAN solicitation and processing
- **Data Visualization** - Comprehensive stats for data received with/without images

### User Experience
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Dark Mode Support** - Toggle between light and dark themes
- **Loading States** - Skeleton loading animations for better UX
- **Interactive Elements** - Hover effects, tooltips, and clickable legends
- **Time Range Filtering** - Today, This Month, and Custom date range options
- **View Switching** - Toggle between Individual and Non-Individual views

### Technical Features
- **Modern Stack** - Built with Next.js 14 using App Router
- **TypeScript** - Full type safety throughout the application
- **Component Architecture** - Modular, reusable components
- **Mock API Integration** - Dynamic data fetching from API routes
- **Mobile-First Design** - Collapsible sidebar and responsive layouts

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your system:
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd kyc-dashboard
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Build Instructions

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Linting and Code Quality
```bash
npm run lint
```

## 📱 Screenshots and Demo

The dashboard includes the following sections:

1. **KYC Overview Cards** - Display total new and modified KYC applications
2. **Bar Chart Visualization** - Compare Individual vs Non-Individual applications
3. **Status Grid** - Six status cards showing different KYC stages
4. **Progress Bars** - RI and NRI progress tracking
5. **PAN Analytics** - Circular charts for PAN data
6. **Statistics Panel** - Detailed PAN and data reception stats

## 🛠️ Technology Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Utilities:** clsx, date-fns

## 📁 Project Structure

```
src/
├── app/
│   ├── api/dashboard/route.ts     # Mock API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main dashboard page
├── components/
│   ├── dashboard/               # Dashboard-specific components
│   │   ├── BarChart.tsx
│   │   ├── KYCCards.tsx
│   │   ├── KYCStatusGrid.tsx
│   │   ├── PANStats.tsx
│   │   ├── PieChart.tsx
│   │   ├── ProgressBars.tsx
│   │   └── TabSwitcher.tsx
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   └── ui/                      # Reusable UI components
│       ├── DarkModeToggle.tsx
│       └── LoadingSkeleton.tsx
├── lib/
│   ├── types.ts                 # TypeScript type definitions
│   └── utils.ts                 # Utility functions
└── utils/                       # Additional utilities
```

## 🎨 Customization

### Themes
The dashboard supports both light and dark modes. You can customize the color scheme by modifying the Tailwind configuration and CSS variables.

### Data Sources
The dashboard currently uses mock data from `/api/dashboard`. To integrate with real APIs:

1. Update the API route in `src/app/api/dashboard/route.ts`
2. Modify the data fetching logic in `src/app/page.tsx`
3. Adjust TypeScript types in `src/lib/types.ts` as needed

### Components
All components are modular and can be easily customized:
- Modify chart colors in the respective chart components
- Update card layouts in the dashboard components
- Customize responsive breakpoints in Tailwind classes

## 📋 API Documentation

### Dashboard Endpoint
**GET** `/api/dashboard`

Returns comprehensive dashboard data including:
- KYC cards data with counts and percentage changes
- Chart data for visualizations
- Status information for different KYC stages
- Progress data for RI/NRI categories
- PAN statistics and analytics

## 🔧 Development

### Adding New Features
1. Create new components in the appropriate directory
2. Update TypeScript types if needed
3. Add the component to the main dashboard page
4. Update the API if additional data is required

### Testing
The project is set up for easy testing integration. You can add your preferred testing framework.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing issues
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

---

Built with ❤️ using Next.js 14 and modern web technologies.
