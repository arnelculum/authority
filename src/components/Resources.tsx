import React from 'react';
import { Download, Calculator, AlertCircle, HelpCircle } from 'lucide-react';

export default function Resources() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Helpful Resources
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to start and maintain your trucking authority
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <Download className="h-6 w-6 text-blue-600" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">Checklist</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Download our comprehensive checklist for authority application
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-500 text-sm font-medium">
                Download PDF →
              </button>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <Calculator className="h-6 w-6 text-blue-600" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">Cost Calculator</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Estimate your startup and operational costs
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-500 text-sm font-medium">
                Calculate Now →
              </button>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">Common Mistakes</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Learn what to avoid during the application process
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-500 text-sm font-medium">
                Read More →
              </button>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <HelpCircle className="h-6 w-6 text-blue-600" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">FAQ</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Find answers to commonly asked questions
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-500 text-sm font-medium">
                View FAQ →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}