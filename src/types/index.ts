export interface State {
  name: string;
  abbreviation: string;
  requirements: {
    permits: string[];
    insurance: {
      type: string;
      amount: number;
    }[];
    processingTime: string;
    estimatedCosts: number;
  };
  dotOffice: {
    address: string;
    phone: string;
    email: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'news' | 'compliance' | 'success' | 'tips';
  date: string;
  author: string;
}