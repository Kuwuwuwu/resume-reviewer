import React from 'react';
import { FileText } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <FileText className="w-8 h-8 text-gray-400" />
      </div>
      <p className="text-gray-600 font-medium">Ready to Analyze</p>
      <p className="text-gray-500 text-sm mt-2">Paste your resume and click Analyze to get started</p>
    </div>
  );
};

export default EmptyState;
