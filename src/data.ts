import { BrandData } from './types';

export const brands: BrandData[] = [
  {
    id: 'iphone',
    name: 'iPhone Repair',
    description: 'Professional repair services for all iPhone models, from the latest iPhone 15 to legacy devices.',
    models: [
      {
        id: 'iphone-15-pro-max',
        name: 'iPhone 15 Pro Max',
        image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2070&auto=format&fit=crop',
        description: 'The latest flagship from Apple with titanium design and advanced camera system.',
        services: [
          { name: 'Screen Replacement', price: '$329.00' },
          { name: 'Battery Replacement', price: '$99.00' },
          { name: 'Rear Glass Repair', price: '$199.00' },
          { name: 'Charging Port Repair', price: '$89.00' }
        ]
      },
      {
        id: 'iphone-14-pro',
        name: 'iPhone 14 Pro',
        image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=2070&auto=format&fit=crop',
        description: 'Featuring the Dynamic Island and the A16 Bionic chip.',
        services: [
          { name: 'Screen Replacement', price: '$299.00' },
          { name: 'Battery Replacement', price: '$89.00' },
          { name: 'Rear Glass Repair', price: '$169.00' },
          { name: 'Charging Port Repair', price: '$79.00' }
        ]
      },
      {
        id: 'iphone-13',
        name: 'iPhone 13',
        image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=1935&auto=format&fit=crop',
        description: 'A powerful and reliable device with a stunning Super Retina XDR display.',
        services: [
          { name: 'Screen Replacement', price: '$229.00' },
          { name: 'Battery Replacement', price: '$79.00' },
          { name: 'Rear Glass Repair', price: '$149.00' },
          { name: 'Charging Port Repair', price: '$69.00' }
        ]
      }
    ]
  },
  {
    id: 'samsung',
    name: 'Samsung Repair',
    description: 'Expert repairs for Samsung Galaxy S, Note, and Z series devices.',
    models: [
      {
        id: 'samsung-s24-ultra',
        name: 'Samsung S24 Ultra',
        image: 'https://images.unsplash.com/photo-1706545199992-965377046f48?q=80&w=2070&auto=format&fit=crop',
        description: 'The ultimate Galaxy experience with integrated S Pen and AI features.',
        services: [
          { name: 'Screen Replacement', price: '$289.00' },
          { name: 'Battery Replacement', price: '$79.00' },
          { name: 'Rear Glass Repair', price: '$129.00' },
          { name: 'Charging Port Repair', price: '$89.00' }
        ]
      },
      {
        id: 'samsung-s23',
        name: 'Samsung S23',
        image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2070&auto=format&fit=crop',
        description: 'A compact powerhouse with an incredible camera and battery life.',
        services: [
          { name: 'Screen Replacement', price: '$229.00' },
          { name: 'Battery Replacement', price: '$69.00' },
          { name: 'Rear Glass Repair', price: '$99.00' },
          { name: 'Charging Port Repair', price: '$79.00' }
        ]
      }
    ]
  },
  {
    id: 'pixel',
    name: 'Google Pixel Repair',
    description: 'Specialized service for Google Pixel 8, 7, 6, and earlier models.',
    models: [
      {
        id: 'pixel-8-pro',
        name: 'Google Pixel 8 Pro',
        image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2070&auto=format&fit=crop',
        description: 'Google\'s most advanced phone yet with the powerful Tensor G3 chip.',
        services: [
          { name: 'Screen Replacement', price: '$249.00' },
          { name: 'Battery Replacement', price: '$79.00' },
          { name: 'Rear Glass Repair', price: '$149.00' },
          { name: 'Charging Port Repair', price: '$89.00' }
        ]
      },
      {
        id: 'pixel-7',
        name: 'Google Pixel 7',
        image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?q=80&w=2070&auto=format&fit=crop',
        description: 'The helpful phone from Google with an amazing camera.',
        services: [
          { name: 'Screen Replacement', price: '$199.00' },
          { name: 'Battery Replacement', price: '$69.00' },
          { name: 'Rear Glass Repair', price: '$129.00' },
          { name: 'Charging Port Repair', price: '$79.00' }
        ]
      }
    ]
  }
];
