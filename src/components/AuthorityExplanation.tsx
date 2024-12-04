import React from 'react';
import { FileCheck, Shield, Clock, DollarSign } from 'lucide-react';

export default function AuthorityExplanation() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Understanding Trucking Authority
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Operating authority is your legal permission to transport cargo. Here's what you need to know:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <FileCheck className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Legal Requirements</h3>
            <p className="mt-2 text-sm text-gray-500">
              Federal and state permits required for interstate operations
            </p>
          </div>

          <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Insurance Coverage</h3>
            <p className="mt-2 text-sm text-gray-500">
              Mandatory insurance requirements to protect your business
            </p>
          </div>

          <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Timeline</h3>
            <p className="mt-2 text-sm text-gray-500">
              Typical processing times and important deadlines
            </p>
          </div>

          <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Costs</h3>
            <p className="mt-2 text-sm text-gray-500">
              Filing fees, insurance costs, and other expenses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}