import React, { useState } from 'react';

export default function UploadBox({ onUpload }) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      onUpload(file);
    }
  };

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <label className="block mb-2 font-semibold">Завантажити резюме (PDF):</label>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {fileName && <p className="mt-2 text-sm text-gray-600">Файл: {fileName}</p>}
    </div>
  );
}