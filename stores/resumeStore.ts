import { create } from 'zustand';

export interface AnalysisResult {
  fileName: string;
  wordCount: number;
  email: string;
  phone: string;
  keywords: string[];
  skills: string[];
  error?: string;
}

interface ResumeStore {
  // State
  analysisResult: AnalysisResult | null;
  isLoading: boolean;
  resumeText: string;
  
  // Actions
  setAnalysisResult: (result: AnalysisResult | null) => void;
  setIsLoading: (loading: boolean) => void;
  setResumeText: (text: string) => void;
  clearAnalysis: () => void;
  
  // Combined actions
  analyzeResume: (text: string) => Promise<void>;
  loadSample: () => void;
}

export const useResumeStore = create<ResumeStore>((set, get) => ({
  // Initial state
  analysisResult: null,
  isLoading: false,
  resumeText: '',
  
  // Basic setters
  setAnalysisResult: (result) => set({ analysisResult: result }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setResumeText: (text) => set({ resumeText: text }),
  
  // Clear all data
  clearAnalysis: () => set({
    analysisResult: null,
    isLoading: false,
    resumeText: '',
  }),
  
  // Load sample resume text
  loadSample: () => {
    const sampleText = `John Doe
Senior Full Stack Developer
john.doe@example.com | +1 (555) 123-4567 | LinkedIn

PROFESSIONAL SUMMARY
Experienced Full Stack Developer with 5+ years of expertise in React, Node.js, and cloud technologies. 
Passionate about building scalable web applications and leading development teams.

EXPERIENCE
Senior Full Stack Developer | Tech Corp | 2021-Present
- Led development of microservices architecture using React and Node.js
- Implemented CI/CD pipelines with Docker and AWS
- Mentored junior developers and conducted code reviews

Full Stack Developer | StartupXYZ | 2019-2021
- Developed RESTful APIs using Node.js and Express
- Built responsive frontends with React and TypeScript
- Optimized database queries reducing load time by 40%

SKILLS
Technical: JavaScript, React, Node.js, TypeScript, Python, MongoDB, PostgreSQL
Cloud: AWS, Docker, Kubernetes, CI/CD, Git
Tools: VS Code, Webpack, Jest, Webpack

EDUCATION
Bachelor of Science in Computer Science
University of Technology | 2015-2019`;
    
    set({ resumeText: sampleText });
  },
  
  // Analyze resume action
  analyzeResume: async (text: string) => {
    if (!text.trim()) return;
    
    const { setAnalysisResult, setIsLoading } = get();
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const result = await response.json();
      setAnalysisResult(result);
    } catch (error) {
      console.error('Analysis failed:', error);
      setAnalysisResult({
        fileName: 'Error',
        wordCount: 0,
        email: 'Error',
        phone: 'Error',
        keywords: [],
        skills: [],
        error: 'Failed to analyze resume'
      });
    } finally {
      setIsLoading(false);
    }
  },
}));
