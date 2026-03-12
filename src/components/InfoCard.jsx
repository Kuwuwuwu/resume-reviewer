import React from 'react';
import { FileText, Mail, Phone, Hash } from 'lucide-react';

const InfoCard = ({ icon: Icon, label, value, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg p-4 border border-gray-200 ${className}`}>
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
};

export default InfoCard;
