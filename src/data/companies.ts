export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  services: string[];
  rating: number;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

export interface City {
  name: string;
  companies: Company[];
}

export interface StateData {
  name: string;
  cities: City[];
}

export const stateDirectory: StateData[] = [
  {
    name: "California",
    cities: [
      {
        name: "Los Angeles",
        companies: [
          {
            id: "auth-pro-la",
            name: "Authority Pro",
            logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=400&fit=crop",
            description: "Expert trucking authority services with 15+ years of experience",
            services: ["MC Number Filing", "DOT Registration", "BOC-3 Filing"],
            rating: 4.8,
            contact: {
              phone: "800-555-0123",
              email: "contact@authoritypro.com",
              website: "https://authoritypro.com"
            }
          }
        ]
      },
      {
        name: "San Francisco",
        companies: [
          {
            id: "truck-legal-sf",
            name: "TruckLegal Solutions",
            logo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&fit=crop",
            description: "Comprehensive trucking compliance and authority services",
            services: ["Authority Packages", "Insurance Filing", "Permit Management"],
            rating: 4.9,
            contact: {
              phone: "800-555-0124",
              email: "info@trucklegal.com",
              website: "https://trucklegal.com"
            }
          }
        ]
      }
    ]
  },
  {
    name: "Texas",
    cities: [
      {
        name: "Houston",
        companies: [
          {
            id: "texas-authority",
            name: "Texas Authority Express",
            logo: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&fit=crop",
            description: "Fast and reliable trucking authority services in Texas",
            services: ["Complete Authority Package", "State Permits", "IFTA Registration"],
            rating: 4.7,
            contact: {
              phone: "800-555-0125",
              email: "help@texasauthority.com",
              website: "https://texasauthority.com"
            }
          }
        ]
      }
    ]
  }
];