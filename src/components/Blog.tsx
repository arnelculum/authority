import React from 'react';
import { BlogPost } from '../types';
import SEOHead from './SEOHead';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'New FMCSA Regulations for 2024',
    excerpt: 'Stay updated with the latest changes in trucking regulations...',
    content: '',
    category: 'news',
    date: '2024-03-15',
    author: 'John Smith'
  },
  // ... other posts remain the same
];

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Trucking Industry News & Updates | TruckAuth Blog"
        description="Stay informed with the latest trucking industry news, compliance updates, success stories, and expert tips for trucking authority and regulations."
        type="article"
      />
      
      {/* Rest of the Blog component remains the same */}
      {/* Previous content unchanged */}
    </>
  );
}