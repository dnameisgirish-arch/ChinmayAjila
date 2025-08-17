import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900 bg-opacity-75 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-screen-md md:max-w-screen-lg max-h-[90vh] overflow-y-auto p-8 lg:p-10 transform scale-95 opacity-0 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-slate-800 transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 border-b pb-4 border-gray-100">
          {title}
        </h2>
        
        <div className="text-slate-700 leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
