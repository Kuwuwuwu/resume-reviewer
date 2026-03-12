'use client';

import { useResumeStore } from '../stores/resumeStore';

export default function StoreStatus() {
  const { resumeText, isLoading, analysisResult } = useResumeStore();

  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Store Status (Debug Component)</h3>
      <div className="text-xs space-y-1">
        <p><span className="font-medium">Resume Text Length:</span> {resumeText.length} chars</p>
        <p><span className="font-medium">Loading:</span> {isLoading ? 'Yes' : 'No'}</p>
        <p><span className="font-medium">Has Result:</span> {analysisResult ? 'Yes' : 'No'}</p>
        {analysisResult && (
          <p><span className="font-medium">Word Count:</span> {analysisResult.wordCount}</p>
        )}
      </div>
    </div>
  );
}
