import React, { useState } from 'react';
import axios from 'axios';

interface UploadBoxProps {
  onUpload: (file: File) => void;
}

export default function UploadBox({ onUpload }: UploadBoxProps) {
    const [result, setResult] = useState<any>(null);
    
    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== 'application/pdf') return;
    
    const formData = new FormData();
        formData.append('file', file);
        try {
      const res = await axios.post('/api/upload', formData);
      setResult(res.data);
    } catch (err) {
      console.error('Помилка при надсиланні:', err);
    }
  };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      onUpload(file);
    }
  };

return (
    <div className="p-4 border rounded">
      <input type="file" accept=".pdf" onChange={handleUpload} />
      {result && (
        <div className="mt-4">
          <p>📄 Слів у резюме: {result.totalWords}</p>
          <p>🔍 Ключові слова: {result.keywordsFound?.join(', ')}</p>
          <p>📧 Email: {result.blocks?.contacts?.email}</p>
          <p>📱 Телефон: {result.blocks?.contacts?.phone}</p>
          <p>💼 Досвід: {result.blocks?.experience?.join('; ')}</p>
          <p>🛠 Навички: {result.blocks?.skills?.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
