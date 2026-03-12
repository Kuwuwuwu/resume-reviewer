'use client'

import React, { useState } from 'react';
import { FileText, Sparkles, UploadCloud, Mail, Phone, Hash, RotateCcw } from 'lucide-react';
import InfoCard from '../components/InfoCard';
import Badge from '../components/Badge';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';

interface AnalysisResult {
  fileName: string;
  wordCount: number;
  email: string;
  phone: string;
  keywords: string[];
  skills: string[];
  error?: string;
}

function HomePage() {
  const [resumeText, setResumeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyzeResume = async () => {
    if (!resumeText.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: resumeText }),
      });

      const analysisResult = await response.json();
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis failed:', error);
      setResult({
        fileName: 'Error',
        wordCount: 0,
        email: 'Error',
        phone: 'Error',
        keywords: [],
        skills: [],
        error: 'Failed to analyze resume'
      });
    } finally {
      setLoading(false);
    }
  };

  const loadSample = () => {
    setResumeText(`John Doe
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
University of Technology | 2015-2019`);
  };

  const clearText = () => {
    setResumeText('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Resume Reviewer</h1>
              <p className="text-sm text-gray-600">AI-powered resume analysis and insights</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Panel - Input */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Your Resume</h2>
                <button
                  onClick={loadSample}
                  className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>Load Sample</span>
                </button>
              </div>
              
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume text here..."
                className="w-full h-96 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-sans"
              />
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={analyzeResume}
                  disabled={!resumeText.trim() || loading}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-colors"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>{loading ? 'Analyzing...' : 'Analyze Resume'}</span>
                </button>
                
                <button
                  onClick={clearText}
                  disabled={!resumeText.trim() || loading}
                  className="px-6 py-4 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 min-h-[500px]">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Result</h2>
              
              {/* Empty State */}
              {!result && !loading && <EmptyState />}

              {/* Loading State */}
              {loading && <LoadingSpinner />}

              {/* Results State */}
              {result && !loading && (
                <div className="space-y-6">
                  {result.error ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 font-medium">Analysis Failed</p>
                      <p className="text-red-600 text-sm mt-1">{result.error}</p>
                    </div>
                  ) : (
                    <>
                      {/* Info Cards Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <InfoCard
                          icon={FileText}
                          label="File Name"
                          value={result.fileName}
                        />
                        <InfoCard
                          icon={Hash}
                          label="Word Count"
                          value={result.wordCount}
                        />
                        <InfoCard
                          icon={Mail}
                          label="Email"
                          value={result.email}
                        />
                        <InfoCard
                          icon={Phone}
                          label="Phone"
                          value={result.phone}
                        />
                      </div>

                      {/* Keywords */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-3">Keywords Found</h3>
                        <div className="flex flex-wrap gap-2">
                          {result.keywords && result.keywords.length > 0 ? (
                            result.keywords.map((keyword, index) => (
                              <Badge key={index} variant="blue">
                                {keyword}
                              </Badge>
                            ))
                          ) : (
                            <p className="text-gray-500 text-sm">No keywords found</p>
                          )}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-3">Skills Extracted</h3>
                        <div className="flex flex-wrap gap-2">
                          {result.skills && result.skills.length > 0 ? (
                            result.skills.map((skill, index) => (
                              <Badge key={index} variant="green">
                                {skill}
                              </Badge>
                            ))
                          ) : (
                            <p className="text-gray-500 text-sm">No skills extracted</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
