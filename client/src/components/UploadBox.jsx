import React, { useState } from 'react';
import axios from 'axios';

export default function UploadBox({ onUpload }) {
    const [result, setResult] = useState(null);
    
    const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') return;
    
    const formData = new FormData();
        formData.append('file', file);
        try {
      const res = await axios.post('http://localhost:3000/api/upload', formData);
      setResult(res.data);
    } catch (err) {
      console.error('Помилка при надсиланні:', err);
    }
  };


    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      onUpload(file);
    }
  };

return (
    <div className="p-4 border rounded">
      <input type="file" accept=".pdf" onChange={handleUpload} />
      {result && (
        <div className="mt-4">
          <p>Знайдено ключових слів: {result.keywordsFound.join(', ')}</p>
          <p>Загальна кількість слів: {result.totalWords}</p>
        </div>
      )}
    </div>
  );
}
