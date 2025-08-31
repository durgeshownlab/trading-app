
import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-1 items-center justify-center min-h-full w-full bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        
        <h1 className="text-8xl font-bold text-gray-300 mb-6">404</h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to='/'
            className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          
          <button 
            className="flex items-center justify-center space-x-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;