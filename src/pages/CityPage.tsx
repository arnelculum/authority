import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stateDirectory } from '../data/companies';
import Logo from '../components/Logo';
import SEOHead from '../components/SEOHead';
import { Star, Phone, Mail, Globe, ChevronLeft } from 'lucide-react';

export default function CityPage() {
  const { state, city } = useParams();
  const navigate = useNavigate();
  
  const stateData = stateDirectory.find(
    s => s.name.toLowerCase() === state?.toLowerCase()
  );
  
  const cityData = stateData?.cities.find(
    c => c.name.toLowerCase() === city?.toLowerCase()
  );

  if (!stateData || !cityData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Logo />
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">City not found</h1>
            <button
              onClick={() => navigate('/')}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Return home
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${cityData.name}, ${stateData.name} Trucking Authority Services`}
        description={`Find trusted trucking authority service providers in ${cityData.name}, ${stateData.name}. Get help with DOT numbers, MC numbers, and permits.`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate(`/states/${state}`)}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Back to {stateData.name}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {cityData.name} Service Providers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Trusted trucking authority services in {cityData.name}, {stateData.name}
          </p>
          
          <div className="space-y-8">
            {cityData.companies.map(company => (
              <div key={company.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900">{company.name}</h2>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-gray-600">{company.rating}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">{company.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {company.services.map(service => (
                        <span
                          key={service}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <a
                        href={`tel:${company.contact.phone}`}
                        className="inline-flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        {company.contact.phone}
                      </a>
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="inline-flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        {company.contact.email}
                      </a>
                      <a
                        href={company.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <Globe className="h-5 w-5 mr-2" />
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}