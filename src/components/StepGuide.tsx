import React from 'react';
import { ClipboardCheck, Truck, Shield, FileText } from 'lucide-react';

const steps = [
  {
    title: 'USDOT Number',
    icon: Truck,
    description: 'Register for your USDOT Number through the FMCSA website.'
  },
  {
    title: 'MC Number',
    icon: FileText,
    description: 'Apply for Motor Carrier Authority if operating interstate.'
  },
  {
    title: 'BOC-3 Filing',
    icon: ClipboardCheck,
    description: 'Designate process agents in all operating states.'
  },
  {
    title: 'Insurance',
    icon: Shield,
    description: 'Obtain required insurance coverage and file with FMCSA.'
  }
];

export default function StepGuide() {
  return (
    <div className="py-16 bg-white" id="guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Step-by-Step Authority Guide
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Follow these steps to obtain and maintain your trucking authority
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                <div className="absolute top-6 right-6 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}