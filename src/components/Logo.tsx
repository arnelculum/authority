import React from 'react';
import { Truck } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Truck className="h-8 w-8 text-blue-600" />
      <span className="text-2xl font-bold text-gray-900">TruckAuth</span>
    </div>
  );
}