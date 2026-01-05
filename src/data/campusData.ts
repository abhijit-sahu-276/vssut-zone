export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  avatarColor?: string;
  imageUrl?: string;
}

export interface FoodVendor {
  id: string;
  name: string;
  phone: string;
  type: string[];
  vegNonveg: 'Veg' | 'Non-veg' | 'Both';
  avgServingMins: number;
  priceRange: string;
  menu: Array<{ item: string; price: number }>;
  reviews: Review[];
  rating: number;
  imageUrl?: string;
}

export interface Service {
  id: string;
  name: string;
  type: string;
  phone: string;
  estimatedTime: string;
  distance: string;
  price: string;
  reviews: Review[];
  rating: number;
  imageUrl?: string;
}

export interface Transport {
  id: string;
  name: string;
  type: 'Auto' | 'Taxi' | 'E-Rickshaw';
  phone: string;
  route: string;
  fare: string;
  availability: string;
  rating: number;
  reviews: Review[];
}

export interface Place {
  id: string;
  name: string;
  type: string;
  lat: number;
  lng: number;
  phone?: string;
  notes: string;
  distance: string;
  rating: number;
  reviews: Review[];
  imageUrl?: string;
}

export interface User {
  name: string;
  regNo: string;
}

// Food Vendors Data
export const foodVendors: FoodVendor[] = [
  {
    id: 'f1',
    name: 'Sharma Dhaba',
    phone: '+91 9437123456',
    type: ['North Indian', 'Thali'],
    vegNonveg: 'Both',
    avgServingMins: 15,
    priceRange: '₹50-150',
    menu: [
      { item: 'Veg Thali', price: 60 },
      { item: 'Chicken Thali', price: 100 },
      { item: 'Paneer Butter Masala', price: 80 },
      { item: 'Roti (2 pcs)', price: 20 },
    ],
    reviews: [
      { id: 'r1', user: 'Rahul K.', rating: 4, comment: 'Great taste, affordable prices!', date: '2024-12-15', avatarColor: 'bg-indigo-500' },
    ],
    rating: 4.2,
  },
  {
    id: 'f2',
    name: 'Campus Canteen',
    phone: '+91 9438234567',
    type: ['Fast Food', 'Snacks'],
    vegNonveg: 'Veg',
    avgServingMins: 10,
    priceRange: '₹20-80',
    menu: [
      { item: 'Samosa', price: 15 },
      { item: 'Veg Puff', price: 20 },
      { item: 'Tea', price: 10 },
      { item: 'Coffee', price: 15 },
    ],
    reviews: [
      { id: 'r2', user: 'Priya S.', rating: 3, comment: 'Quick service, okay food', date: '2024-12-10', avatarColor: 'bg-pink-500' },
    ],
    rating: 3.5,
  },
  {
    id: 'f3',
    name: 'Maa Tara Stall',
    phone: '+91 9439345678',
    type: ['Odia', 'Street Food'],
    vegNonveg: 'Veg',
    avgServingMins: 12,
    priceRange: '₹30-100',
    menu: [
      { item: 'Dalma Rice', price: 40 },
      { item: 'Pakhala', price: 35 },
      { item: 'Chuda Ghuguni', price: 25 },
      { item: 'Bara', price: 30 },
    ],
    reviews: [
      { id: 'r3', user: 'Amit P.', rating: 5, comment: 'Authentic Odia food!', date: '2024-12-18', avatarColor: 'bg-violet-500' },
    ],
    rating: 4.6,
  },
  {
    id: 'f4',
    name: 'Annapurna Restaurant',
    phone: '+91 9440456789',
    type: ['South Indian', 'Chinese'],
    vegNonveg: 'Both',
    avgServingMins: 20,
    priceRange: '₹60-200',
    menu: [
      { item: 'Dosa', price: 50 },
      { item: 'Idli Sambhar', price: 40 },
      { item: 'Veg Fried Rice', price: 70 },
      { item: 'Chilli Chicken', price: 120 },
    ],
    reviews: [
      { id: 'r4', user: 'Sneha R.', rating: 4, comment: 'Good variety, tasty food', date: '2024-12-12', avatarColor: 'bg-emerald-500' },
    ],
    rating: 4.1,
  },
  {
    id: 'f5',
    name: 'Night Canteen',
    phone: '+91 9441567890',
    type: ['Fast Food', 'Snacks'],
    vegNonveg: 'Both',
    avgServingMins: 15,
    priceRange: '₹40-120',
    menu: [
      { item: 'Maggi', price: 30 },
      { item: 'Egg Roll', price: 40 },
      { item: 'Chicken Momos', price: 50 },
      { item: 'Sandwich', price: 35 },
    ],
    reviews: [
      { id: 'r5', user: 'Vikram S.', rating: 4, comment: 'Lifesaver during late nights!', date: '2024-12-20', avatarColor: 'bg-amber-500' },
    ],
    rating: 4.0,
  },
  {
    id: 'f6',
    name: 'Biryani House',
    phone: '+91 9442678901',
    type: ['Biryani', 'Mughlai'],
    vegNonveg: 'Non-veg',
    avgServingMins: 25,
    priceRange: '₹100-250',
    menu: [
      { item: 'Chicken Biryani', price: 150 },
      { item: 'Mutton Biryani', price: 200 },
      { item: 'Egg Biryani', price: 100 },
      { item: 'Raita', price: 30 },
    ],
    reviews: [
      { id: 'r6', user: 'Farhan A.', rating: 5, comment: 'Best biryani near campus!', date: '2024-12-08', avatarColor: 'bg-rose-500' },
    ],
    rating: 4.7,
  },
];

// Services Data
export const services: Service[] = [
  {
    id: 's1',
    name: 'Shree Xerox Center',
    type: 'Printing & Xerox',
    phone: '+91 9443789012',
    estimatedTime: '5-10 mins',
    distance: '200m from Main Gate',
    price: '₹1/page B&W, ₹5/page Color',
    reviews: [],
    rating: 4.3,
  },
  {
    id: 's2',
    name: 'Raju Mobile Repair',
    type: 'Mobile Repair',
    phone: '+91 9444890123',
    estimatedTime: '30 mins - 2 hrs',
    distance: '500m from Campus',
    price: 'Starting ₹200',
    reviews: [],
    rating: 4.0,
  },
  {
    id: 's3',
    name: 'Quick Stationery',
    type: 'Stationery',
    phone: '+91 9445901234',
    estimatedTime: 'Instant',
    distance: 'Inside Campus',
    price: 'Varies',
    reviews: [],
    rating: 4.5,
  },
  {
    id: 's4',
    name: 'Cycle Repair Point',
    type: 'Cycle Repair',
    phone: '+91 9446012345',
    estimatedTime: '15-30 mins',
    distance: '100m from Hostel',
    price: 'Starting ₹50',
    reviews: [],
    rating: 3.8,
  },
];

// Transport Data
export const transports: Transport[] = [
  {
    id: 't1',
    name: 'Main Gate Auto Stand',
    type: 'Auto',
    phone: '+91 9447123456',
    route: 'Campus ↔ Burla Town',
    fare: '₹20-40 per person',
    availability: '6 AM - 10 PM',
    rating: 4.0,
    reviews: [],
  },
  {
    id: 't2',
    name: 'Sambalpur Taxi Service',
    type: 'Taxi',
    phone: '+91 9448234567',
    route: 'Campus ↔ Sambalpur',
    fare: '₹300-500',
    availability: '24/7',
    rating: 4.2,
    reviews: [],
  },
  {
    id: 't3',
    name: 'E-Rickshaw Point',
    type: 'E-Rickshaw',
    phone: '+91 9449345678',
    route: 'Campus ↔ Railway Station',
    fare: '₹10-20',
    availability: '7 AM - 8 PM',
    rating: 3.9,
    reviews: [],
  },
  {
    id: 't4',
    name: 'Night Taxi (Ola/Uber)',
    type: 'Taxi',
    phone: 'App Based',
    route: 'Anywhere',
    fare: 'As per app',
    availability: '24/7',
    rating: 4.4,
    reviews: [],
  },
];

// Places Data
export const places: Place[] = [
  {
    id: 'p1',
    name: 'Hirakud Dam',
    type: 'Tourist Spot',
    lat: 21.5200,
    lng: 83.8700,
    notes: 'World\'s longest earthen dam. Beautiful sunset views.',
    distance: '15 km',
    rating: 4.8,
    reviews: [],
  },
  {
    id: 'p2',
    name: 'Sambalpur Railway Station',
    type: 'Transport Hub',
    lat: 21.4669,
    lng: 83.9756,
    phone: '+91 663-2530803',
    notes: 'Main railway station for long-distance travel.',
    distance: '8 km',
    rating: 4.0,
    reviews: [],
  },
  {
    id: 'p3',
    name: 'Maa Samaleswari Temple',
    type: 'Temple',
    lat: 21.4556,
    lng: 83.9731,
    notes: 'Famous temple dedicated to Goddess Samaleswari.',
    distance: '10 km',
    rating: 4.7,
    reviews: [],
  },
  {
    id: 'p4',
    name: 'Town Mall Sambalpur',
    type: 'Shopping',
    lat: 21.4670,
    lng: 83.9750,
    notes: 'Shopping, food court, and entertainment.',
    distance: '9 km',
    rating: 4.1,
    reviews: [],
  },
  {
    id: 'p5',
    name: 'Debrigarh Wildlife Sanctuary',
    type: 'Nature',
    lat: 21.5600,
    lng: 83.7200,
    notes: 'Wildlife sanctuary with tigers, leopards, and more.',
    distance: '40 km',
    rating: 4.5,
    reviews: [],
  },
  {
    id: 'p6',
    name: 'VSS Medical College',
    type: 'Hospital',
    lat: 21.5100,
    lng: 83.8600,
    phone: '+91 663-2430768',
    notes: 'Government medical college and hospital.',
    distance: '2 km',
    rating: 3.9,
    reviews: [],
  },
];

// Salons Data
export const salons: Service[] = [
  {
    id: 'salon1',
    name: 'Style Studio (Men)',
    type: 'Men\'s Salon',
    phone: '+91 9450456789',
    estimatedTime: '20-40 mins',
    distance: '300m from Gate',
    price: 'Haircut ₹80, Beard ₹40',
    reviews: [],
    rating: 4.2,
  },
  {
    id: 'salon2',
    name: 'Beauty Point (Women)',
    type: 'Women\'s Salon',
    phone: '+91 9451567890',
    estimatedTime: '30-60 mins',
    distance: '400m from Campus',
    price: 'Haircut ₹150+',
    reviews: [],
    rating: 4.4,
  },
  {
    id: 'salon3',
    name: 'Unisex Hair Hub',
    type: 'Unisex Salon',
    phone: '+91 9452678901',
    estimatedTime: '20-50 mins',
    distance: '500m from Main Gate',
    price: 'Starting ₹100',
    reviews: [],
    rating: 4.0,
  },
];
