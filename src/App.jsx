import React, { useState } from 'react';
import UploadBox from './components/UploadBox';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [result, setResult] = useState(null);

  const handleUpload = (file) => {
    // Мокові дані
    setResult({
      totalWords: 523,
      keywordsFound: ['React', 'Docker', 'API'],
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-xl mx-auto">
        <ThemeToggle />
        <h1 className="text-2xl font-bold my-4">Resume Reviewer</h1>
        <UploadBox onUpload={handleUpload} />
        {result && (
          <div className="mt-6 p-4 border rounded bg-white dark:bg-gray-800">
            <p>🔍 Знайдено ключових слів: {result.keywordsFound.join(', ')}</p>
            <p>📄 Загальна кількість слів: {result.totalWords}</p>
            <p>Test render works!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
