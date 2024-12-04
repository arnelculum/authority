import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { stateDirectory } from '../data/companies';

export default function Hero() {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;
    setSelectedState(state);
    if (state) {
      navigate(`/states/${state.toLowerCase()}`);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Your Path to Trucking Authority
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Navigate the requirements, permits, and regulations for your trucking business.
            Get state-specific information and comprehensive guidance.
          </p>
          
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <div className="flex items-center">
                <div className="relative flex-1">
                  <select
                    value={selectedState}
                    onChange={handleStateChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">Select your state</option>
                    {stateDirectory.map((state) => (
                      <option key={state.name} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-3 pointer-events-none">
                    <MapPin className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#guide"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}