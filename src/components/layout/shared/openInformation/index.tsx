import React from 'react';
import { AlertCircleIcon } from 'lucide-react';

interface OpenInformationComponentProps {
  title: string;
  content: React.ReactNode;
  buttonText: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function OpenInformationComponent({
  title,
  content,
  buttonText,
  onClose,
  children,
}: OpenInformationComponentProps) {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white m-2 p-4 rounded-lg z-50">
        <div className="flex my-4">
          <div className="col-auto">
            <div className="flex cursor-pointer hover:text-blue-700  text-blue-900">
              <div>
                <AlertCircleIcon
                  size={22}
                  aria-hidden="true"
                />
              </div>
              <p className="ml-2">Aviso</p>
            </div>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <div>{content}</div>
        <div className="flex justify-between items-center">
          <button
            onClick={onClose}
            className="mt-4"
          >
            {buttonText}
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
