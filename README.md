📄 RESUME REVIEWER

Resume Reviewer is a modern, professional web application that allows users to analyze resumes with AI-powered insights. Features a clean 2-column interface with real-time text analysis, keyword extraction, and skill identification. Built with React + Vite on the frontend and Node.js + Express on the backend.

🚀 Tech Stack
- **Frontend**: React, Vite, TailwindCSS, Lucide React
- **Backend**: Node.js, Express, PDF parsing
- **UI**: Modern 2-column layout, responsive design, loading states
- **Deployment**: Vercel-ready with optimized configuration

📁 Project Structure
resume-reviewer/
├── src/                    # Frontend (React + Vite)
│   ├── components/        # Reusable UI components
│   ├── services/          # API service layer
│   ├── App.jsx           # Main application component
│   └── main.jsx          # React entry point
├── server/                # Backend (Node.js + Express)
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── app.js           # Express server
├── vercel.json          # Vercel deployment config
└── README.md

✨ Features
- **Professional UI**: Clean 2-column layout with modern design
- **Text Analysis**: Paste resume text for instant analysis
- **Smart Extraction**: Automatically detects email, phone, keywords, and skills
- **Loading States**: Beautiful loading animations and empty states
- **Error Handling**: Graceful error states with user-friendly messages
- **Sample Data**: "Load Sample" button for quick testing
- **Responsive**: Works perfectly on desktop and mobile devices

🛠️ Getting Started
1. **Install dependencies**
```bash
npm install
cd server && npm install
```

2. **Run locally**
```bash
# Frontend (in root directory)
npm run dev

# Backend (in server directory)
node app.js
```

3. **Build for production**
```bash
npm run build
```

🎯 UI Components
- **Header**: Professional branding with FileText icon and subtitle
- **Left Column**: Resume text input with "Load Sample" button and "Analyze Resume" CTA
- **Right Column**: Dynamic results display with:
  - Empty state with dashed border and centered content
  - Loading state with spinner animation
  - Results state with organized info cards and colorful tags

🔍 Analysis Features
- **Contact Extraction**: Email and phone number detection
- **Keyword Matching**: Identifies tech stack keywords (React, Node.js, etc.)
- **Skill Extraction**: Parses skills section for relevant competencies
- **Word Count**: Total word count analysis
- **Structured Output**: Organized data presentation with visual tags

📊 API Endpoints
- `POST /api/analyze-text` - Analyze resume text
- `POST /api/upload` - Upload and analyze PDF files

🚀 Deployment
- **Vercel**: Optimized configuration with static build
- **Docker**: Containerized setup available
- **Environment**: Production-ready with proper CORS and error handling

🧪 Roadmap
- [ ] PDF file upload integration
- [ ] Advanced keyword scoring algorithms
- [ ] User authentication and analysis history
- [ ] Export results to PDF/JSON
- [ ] Resume comparison features
- [ ] ATS (Applicant Tracking System) optimization tips

