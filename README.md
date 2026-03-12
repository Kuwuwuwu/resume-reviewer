📄 RESUME REVIEWER

Resume Reviewer is a modern, professional web application that allows users to analyze resumes with AI-powered insights. Features a stunning 2-column interface with real-time text analysis, keyword extraction, and skill identification. Built with Next.js App Router on the frontend and Node.js API routes on the backend.

🚀 Tech Stack
- **Frontend**: Next.js 15, React 18, TypeScript, TailwindCSS, Lucide React
- **Backend**: Next.js API Routes, TypeScript
- **UI**: Professional 2-column layout, responsive design, loading states
- **Deployment**: Vercel-ready with optimized configuration

📁 Project Structure
resume-reviewer/
├── app/                    # Next.js App Router
│   ├── api/              # API routes (Next.js serverless functions)
│   │   └── analyze/       # Resume analysis endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page component
├── components/            # Reusable UI components
│   ├── Badge.tsx
│   ├── InfoCard.tsx
│   ├── LoadingSpinner.tsx
│   └── EmptyState.tsx
├── public/               # Static assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── README.md

✨ Features
- **Professional UI**: Clean 2-column layout with modern design
- **Text Analysis**: Paste resume text for instant analysis
- **Smart Extraction**: Automatically detects email, phone, keywords, and skills
- **Loading States**: Beautiful loading animations and empty states
- **Error Handling**: Graceful error states with user-friendly messages
- **Sample Data**: "Load Sample" button for quick testing
- **Responsive**: Works perfectly on desktop and mobile devices
- **Component Architecture**: Modular, reusable components
- **Next.js App Router**: Modern React framework with server-side rendering

🎯 UI Components
- **Header**: Professional branding with FileText icon and subtitle
- **Left Panel**: Resume text input with "Load Sample" button and "Analyze Resume" CTA
- **Right Panel**: Dynamic results display with:
  - Empty state with dashed border and centered content
  - Loading state with spinner animation
  - Results state with organized info cards and colorful tags
- **Badge Component**: Reusable colored badges for keywords and skills
- **InfoCard Component**: Reusable cards with icons for structured data
- **LoadingSpinner Component**: Dedicated loading animation component

🔍 Analysis Features
- **Contact Extraction**: Email and phone number detection
- **Keyword Matching**: Identifies tech stack keywords (React, Node.js, etc.)
- **Skill Extraction**: Parses skills section for relevant competencies
- **Word Count**: Total word count analysis
- **Structured Output**: Organized data presentation with visual tags

📊 API Routes
- `POST /api/analyze` - Analyze resume text (Next.js API route)

🚀 Deployment
- **Vercel**: Optimized configuration for Next.js deployment
- **Zero Configuration**: Works out-of-the-box with Vercel
- **Serverless Functions**: API routes automatically deploy as serverless functions
- **Static Generation**: Optimized build process

🎨 Design System
- **Color Palette**: Professional grays, blues, and greens
- **Typography**: Clean sans-serif font (Inter)
- **Spacing**: Consistent 8px grid system
- **Components**: Atomic, reusable design patterns
- **States**: Empty, loading, success, and error states

🛠️ Getting Started
1. **Install dependencies**
```bash
npm install
```

2. **Run development server**
```bash
npm run dev
```

3. **Build for production**
```bash
npm run build
```

4. **Start production server**
```bash
npm start
```

🔧 Development
- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency
- **TailwindCSS**: Utility-first CSS framework
- **Hot Reload**: Fast development experience

🧪 Migration Notes
- **Migrated from Vite to Next.js App Router**
- **Converted Express API to Next.js API routes**
- **Updated TailwindCSS to v4 with proper PostCSS configuration**
- **Removed Vite-specific configuration files**
- **Optimized for Vercel deployment**

🧪 Roadmap
- [ ] PDF file upload integration
- [ ] Advanced keyword scoring algorithms
- [ ] User authentication and analysis history
- [ ] Export results to PDF/JSON
- [ ] Resume comparison features
- [ ] ATS (Applicant Tracking System) optimization tips

