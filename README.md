📄 Resume Reviewer
Resume Reviewer is a web application that allows users to upload a resume and receive a basic analysis — including word count, keyword detection, and a preview of the content. Built with React + Vite on the frontend and Node.js + Express on the backend, the project is fully containerized using Docker.

🚀 Tech Stack
- Frontend: React, Vite, TailwindCSS
- Backend: Node.js, Express
- DevOps: Docker, CI/CD-ready
- UI Features: Responsive design, theme switching (light/dark)
📁 Project Structure
resume-reviewer/
├── client/           # Frontend (React + Vite)
│   ├── src/
│   ├── index.html
│   ├── tailwind.config.js
│   └── ...
├── server/           # Backend (Node.js + Express)
│   ├── routes/
│   ├── app.js
│   └── ...
├── docker-compose.yml
└── README.md



🛠️ Getting Started
1. Install dependencies
cd client
npm install
cd ../server
npm install


2. Run locally (without Docker)
# Frontend
cd client
npm run dev

# Backend
cd ../server
node app.js


3. Run with Docker
docker-compose up --build



📤 Resume Upload Features
- Supports .txt, .pdf, .docx
- Displays keyword matches and word count
- Shows resume preview in-browser

🧪 Roadmap
- [ ] Backend parsing of real resume content
- [ ] Keyword scoring and tech stack matching
- [ ] User authentication and upload history
- [ ] Export results to PDF or JSON

