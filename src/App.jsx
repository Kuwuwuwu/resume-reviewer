import React, { useState } from 'react';
import { FileText, Sparkles, Upload, FileCheck, Mail, Phone, Hash, Briefcase } from 'lucide-react';
import { resumeService } from './services/resumeService';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {
    if (!resumeText.trim()) return;

    setLoading(true);
    try {
      const analysisResult = await resumeService.analyzeResume(resumeText);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis failed:', error);
      // Show error state to user
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Resume Reviewer</h1>
              <p className="text-sm text-slate-600">AI-powered resume analysis and insights</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Your Resume</h2>
                <button
                  onClick={loadSample}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Load Sample
                </button>
              </div>
              
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume text here..."
                className="w-full h-96 p-4 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              
              <button
                onClick={analyzeResume}
                disabled={!resumeText.trim() || loading}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                <span>{loading ? 'Analyzing...' : 'Analyze Resume'}</span>
              </button>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[500px]">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Result</h2>
              
              {/* Empty State */}
              {!result && !loading && (
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="text-slate-600 font-medium">Ready to Analyze</p>
                  <p className="text-sm text-slate-500 mt-2">Paste your resume and click Analyze to get started</p>
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-slate-600">Analyzing your resume...</p>
                </div>
              )}

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
                      {/* Info Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <FileText className="w-4 h-4 text-slate-600" />
                            <span className="text-sm font-medium text-slate-600">File Name</span>
                          </div>
                          <p className="text-slate-900 font-medium">{result.fileName}</p>
                        </div>
                        
                        <div className="bg-slate-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Hash className="w-4 h-4 text-slate-600" />
                            <span className="text-sm font-medium text-slate-600">Word Count</span>
                          </div>
                          <p className="text-slate-900 font-medium">{result.wordCount}</p>
                        </div>
                        
                        <div className="bg-slate-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Mail className="w-4 h-4 text-slate-600" />
                            <span className="text-sm font-medium text-slate-600">Email</span>
                          </div>
                          <p className="text-slate-900 font-medium text-sm">{result.email}</p>
                        </div>
                        
                        <div className="bg-slate-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Phone className="w-4 h-4 text-slate-600" />
                            <span className="text-sm font-medium text-slate-600">Phone</span>
                          </div>
                          <p className="text-slate-900 font-medium">{result.phone}</p>
                        </div>
                      </div>

                      {/* Keywords */}
                      <div>
                        <h3 className="text-sm font-medium text-slate-600 mb-3">Keywords Found</h3>
                        <div className="flex flex-wrap gap-2">
                          {result.keywords.length > 0 ? (
                            result.keywords.map((keyword, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                              >
                                {keyword}
                              </span>
                            ))
                          ) : (
                            <p className="text-slate-500 text-sm">No keywords found</p>
                          )}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-sm font-medium text-slate-600 mb-3">Skills Extracted</h3>
                        <div className="flex flex-wrap gap-2">
                          {result.skills.length > 0 ? (
                            result.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))
                          ) : (
                            <p className="text-slate-500 text-sm">No skills extracted</p>
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

export default App;
