import React from 'react';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import StateMap from '../components/StateMap';
import StepGuide from '../components/StepGuide';
import Resources from '../components/Resources';
import AuthorityExplanation from '../components/AuthorityExplanation';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Trucking Authority Guide: State-by-State DOT Permit Requirements"
        description="Get your trucking authority in any state. Complete step-by-step guides, permit requirements, DOT numbers, and MC numbers. Free checklists and cost calculators included."
      />
      
      <div className="min-h-screen">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Logo />
          </div>
        </header>

        <main>
          <Hero />
          <AuthorityExplanation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Find Requirements by State</h2>
            <StateMap />
          </div>
          <StepGuide />
          <Resources />
        </main>
      </div>
    </>
  );
}