// Food Images
import bbFoodCorner from '@/assets/food/bb-food-corner.jpg';
import swarupFastFood from '@/assets/food/swarup-fast-food.jpg';
import dawatBurla from '@/assets/food/dawat-burla.jpg';
import alibabaHotel from '@/assets/food/alibaba-hotel.jpg';
import engineersBroDelight from '@/assets/food/engineers-bro-delight.jpg';
import biriyaniVibes from '@/assets/food/biriyani-vibes.jpg';
import luckyBiriyani from '@/assets/food/lucky-biriyani.jpg';
import zaika from '@/assets/food/zaika.jpg';
import chaiSuttaBar from '@/assets/food/chai-sutta-bar.jpg';

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
  type: string;
  phone: string;
  estimatedTime: string;
  price: string;
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
  distance?: string;
  rating: number;
  reviews: Review[];
  imageUrl?: string;
}

export interface User {
  name: string;
  regNo: string;
}

const avatarColors = ['bg-indigo-500', 'bg-violet-500', 'bg-pink-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-sky-500'];
const getRandomColor = () => avatarColors[Math.floor(Math.random() * avatarColors.length)];

// Food Vendors Data
export const foodVendors: FoodVendor[] = [
  {
    id: 'f1',
    name: 'BB Food Corner',
    phone: '+91 9778888281',
    type: ['Fast Food', 'Snacks'],
    vegNonveg: 'Both',
    avgServingMins: 12,
    priceRange: '₹50–₹180',
    menu: [
      { item: 'Veg Chowmein', price: 60 },
      { item: 'Egg Chowmein', price: 75 },
      { item: 'Chicken Chowmein', price: 110 },
      { item: 'Paneer Roll', price: 80 },
      { item: 'Cold Coffee', price: 60 },
    ],
    reviews: [
      { id: 'r1', user: 'Amit P.', rating: 4, comment: 'Great chowmein, fast service!', date: '2023-10-12', avatarColor: 'bg-indigo-500' },
      { id: 'r2', user: 'Sneha', rating: 5, comment: 'Cold coffee is a must try.', date: '2023-11-05', avatarColor: 'bg-pink-500' },
    ],
    rating: 4.5,
    imageUrl: bbFoodCorner,
  },
  {
    id: 'f2',
    name: 'Swarup Fast Food',
    phone: '+91 8270469682',
    type: ['Fast Food'],
    vegNonveg: 'Both',
    avgServingMins: 10,
    priceRange: '₹40–₹160',
    menu: [
      { item: 'Veg Roll', price: 50 },
      { item: 'Egg Roll', price: 60 },
      { item: 'Chicken Roll', price: 90 },
      { item: 'Fried Rice', price: 90 },
      { item: 'Chilli Chicken', price: 150 },
    ],
    reviews: [
      { id: 'r3', user: 'Rahul', rating: 3, comment: 'Okayish rolls.', date: '2023-09-20', avatarColor: 'bg-amber-500' },
    ],
    rating: 3.0,
    imageUrl: swarupFastFood,
  },
  {
    id: 'f2',
    name: 'Friends Fast Food',
    phone: '+91 8270469682',
    type: ['Fast Food'],
    vegNonveg: 'Both',
    avgServingMins: 10,
    priceRange: '₹30–₹150',
    menu: [
      { item: 'Veg Roll', price: 50 },
      { item: 'Egg Roll', price: 60 },
      { item: 'Chicken Roll', price: 90 },
      { item: 'Fried Rice', price: 90 },
      { item: 'Chilli Chicken', price: 150 },
    ],
    reviews: [
      { id: 'r3', user: 'Rahul', rating: 3, comment: 'Okayish rolls.', date: '2023-09-20', avatarColor: 'bg-amber-500' },
    ],
    rating: 3.0,
    imageUrl: 'https://images.getrecipekit.com/20220904015448-veg-20fried-20rice.png?aspect_ratio=16:9&quality=90&'
  },
  {
    id: 'f3',
    name: 'Dawat Burla',
    phone: '+91 7019129583',
    type: ['Restaurant', 'North Indian'],
    vegNonveg: 'Both',
    avgServingMins: 18,
    priceRange: '₹120–₹350',
    menu: [
      { item: 'Butter Chicken', price: 220 },
      { item: 'Paneer Tikka', price: 180 },
      { item: 'Dal Makhani', price: 150 },
      { item: 'Naan', price: 40 },
    ],
    reviews: [],
    rating: 4.2,
    imageUrl: dawatBurla,
  },
  {
    id: 'f4',
    name: 'Alibaba Hotel',
    phone: '+91 7340226768',
    type: ['Hotel', 'Meals'],
    vegNonveg: 'Both',
    avgServingMins: 20,
    priceRange: '₹100–₹300',
    menu: [
      { item: 'Veg Thali', price: 100 },
      { item: 'Non-Veg Thali', price: 150 },
      { item: 'Fish Curry', price: 200 },
      { item: 'Rice', price: 40 },
    ],
    reviews: [],
    rating: 4.0,
    imageUrl: alibabaHotel,
  },
  {
    id: 'f5',
    name: "Engineer's Bro Delight",
    phone: '+91 7328099908',
    type: ['Fast Food', 'Cafe'],
    vegNonveg: 'Both',
    avgServingMins: 12,
    priceRange: '₹60–₹220',
    menu: [
      { item: 'Burger', price: 80 },
      { item: 'Pasta', price: 120 },
      { item: 'Mojito', price: 70 },
      { item: 'Sandwich', price: 60 },
    ],
    reviews: [],
    rating: 4.3,
    imageUrl: engineersBroDelight,
  },
  {
    id: 'f6',
    name: 'Biriyani Vibes',
    phone: '+91 9692582114',
    type: ['Biryani'],
    vegNonveg: 'Both',
    avgServingMins: 15,
    priceRange: '₹90–₹250',
    menu: [
      { item: 'Chicken Biryani', price: 150 },
      { item: 'Mutton Biryani', price: 220 },
      { item: 'Veg Biryani', price: 100 },
      { item: 'Raita', price: 30 },
    ],
    reviews: [
      { id: 'r4', user: 'BiryaniLover', rating: 4, comment: 'Good quantity.', date: '2023-11-20', avatarColor: 'bg-violet-500' },
    ],
    rating: 4.0,
    imageUrl: biriyaniVibes,
  },
  {
    id: 'f7',
    name: 'Lucky Biriyani',
    phone: '+91 7077978086',
    type: ['Biryani'],
    vegNonveg: 'Both',
    avgServingMins: 14,
    priceRange: '₹100–₹240',
    menu: [
      { item: 'Chicken Dum Biryani', price: 140 },
      { item: 'Egg Biryani', price: 100 },
      { item: 'Special Biryani', price: 200 },
    ],
    reviews: [],
    rating: 3.8,
    imageUrl: luckyBiriyani,
  },
  {
    id: 'f8',
    name: 'Zaika',
    phone: '+91 6200937326',
    type: ['Restaurant'],
    vegNonveg: 'Both',
    avgServingMins: 18,
    priceRange: '₹120–₹320',
    menu: [
      { item: 'Chicken Curry', price: 180 },
      { item: 'Paneer Butter Masala', price: 160 },
      { item: 'Roti (2 pcs)', price: 30 },
      { item: 'Fried Rice', price: 120 },
    ],
    reviews: [],
    rating: 4.1,
    imageUrl: zaika,
  },
  {
    id: 'f9',
    name: 'Chai Sutta Bar',
    phone: '+91 9040452004',
    type: ['Cafe', 'Tea'],
    vegNonveg: 'Veg',
    avgServingMins: 6,
    priceRange: '₹15–₹150',
    menu: [
      { item: 'Kulhad Chai', price: 20 },
      { item: 'Bun Maska', price: 30 },
      { item: 'Maggi', price: 50 },
      { item: 'Cold Coffee', price: 80 },
    ],
    reviews: [],
    rating: 4.4,
    imageUrl: chaiSuttaBar,
  },
];

// Services Data
export const services: Service[] = [
  {
    id: 's1',
    name: 'Campus Print Shop',
    type: 'Printing & Xerox',
    phone: '+91 9000011101',
    estimatedTime: '5–10 mins',
    distance: '200m from Campus',
    price: '₹2/page',
    reviews: [
      { id: 'sr1', user: 'Student1', rating: 5, comment: 'Very fast service.', date: '2024-01-15', avatarColor: 'bg-emerald-500' },
    ],
    rating: 5.0,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZpR6-poztg_bLVRz0Go3cyTv0e1prEM96w&s'
  },
  {
    id: 's2',
    name: 'Student Mobile Repair',
    type: 'Repair',
    phone: '+91 9000011102',
    estimatedTime: '1–2 hours',
    distance: '1.2km from Campus',
    price: 'Varies',
    reviews: [],
    rating: 4.0,
    imageUrl: 'https://content.jdmagicbox.com/v2/comp/hyderabad/l8/040pxx40.xx40.130617143412.j5l8/catalogue/mind-space-systems-madhapur-hyderabad-laptop-repair-and-services-toshiba-n1bpmff21z.jpg'
  },
   {
    id: 's3',
    name: 'SBI ATM',
    type: 'Services',
    phone: '+91 ',
    estimatedTime: '5 min',
    distance: '0.2km from Campus',
    reviews: [],
    rating: 4.0,
    imageUrl: 'https://content.jdmagicbox.com/v2/comp/hyderabad/l8/040pxx40.xx40.130617143412.j5l8/catalogue/mind-space-systems-madhapur-hyderabad-laptop-repair-and-services-toshiba-n1bpmff21z.jpg'
  },
   {
    id: 's4',
    name: 'Campus Electrical Shop',
    type: 'Machinery Repair',
    phone: '+91 9348017676',
    estimatedTime: '5–10 mins',
    distance: '1km from Campus',
    price: '₹50-₹1000',
    reviews: [],
    rating: 4.6,
    imageUrl: 'https://www.bizkl.com/galleryimgs/1_shop2870.jpg'
  },
];

// Transport Data
export const transports: Transport[] = [
  {
    id: 't1',
    name: 'Main Gate Auto Stand',
    type: 'Auto Rickshaw',
    phone: '+91 9000033301',
    estimatedTime: '2–5 mins',
    price: '₹30–₹150',
    rating: 4.0,
    reviews: [
      { id: 'tr1', user: 'Traveler', rating: 4, comment: 'Fixed rates usually.', date: '2024-01-10', avatarColor: 'bg-amber-500' },
    ],
  },
  {
    id: 't2',
    name: 'Campus E-Rickshaw',
    type: 'Shared EV',
    phone: '+91 9000033303',
    estimatedTime: '5 mins',
    price: '₹10/seat',
    rating: 4.2,
    reviews: [],
  },
];

// Places Data
export const places: Place[] = [
  {
    id: 'p1',
    name: 'VSSUT Main Gate',
    type: 'Campus Landmark',
    lat: 21.497297,
    lng: 83.904025,
    notes: 'Primary campus entry point',
    rating: 4.8,
    reviews: [],
    imageUrl: 'https://i0.wp.com/orissadiary.com/wp-content/uploads/2018/01/544851_331170966982002_1120832574_n.jpg',
  },
  {
    id: 'p2',
    name: 'Hirakud Dam',
    type: 'Tourist / Landmark',
    lat: 21.5705,
    lng: 83.8711,
    notes: 'Major nearby landmark near Burla/Sambalpur',
    rating: 4.9,
    reviews: [],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Hirakud_Dam.jpg',
  },
  {
    id: 'p3',
    name: 'VIMSAR, Burla',
    type: 'Hospital',
    lat: 21.503,
    lng: 83.886,
    notes: 'Nearest major hospital for students',
    rating: 4.2,
    reviews: [],
    imageUrl: 'https://www.yashodahospital.org/assets/images/emergency-photo.webp'
  },
  {
    id: 'p4',
    name: 'Sambalpur Junction',
    type: 'Railway Station',
    lat: 21.4886,
    lng: 83.9922,
    notes: 'Main rail connectivity for Sambalpur region',
    rating: 4.0,
    reviews: [],
    imageUrl: 'https://www.orissapost.com/wp-content/uploads/2019/09/Sambalpur-best-performing-railway-division-in-country-750x375.jpg'
  },
  {
    id: 'p5',
    name: 'Samaleswari Temple',
    type: 'Hindu Temple',
    lat: 21.47407,
    lng: 83.95906,
    notes: 'Major Shakti Peetha of Sambalpur',
    rating: 4.8,
    reviews: [],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7u6zZD1u332MgRN8lOcfOZPfo3g6cCegyPQ&s%27'
  },
  {
    id: 'p6',
    name: 'Huma Duma Temple',
    type: 'Hindu Temple',
    lat: 21.281012,
    lng: 83.912289,
    notes: 'Leaning Temple of Odisha',
    rating: 4.6,
    reviews: [],
    imageUrl: 'https://tripxl.com/blog/wp-content/uploads/2024/09/Location-42.jpg'
  },
];

// Salons Data
export const salons: Service[] = [
  {
    id: 'salon1',
    name: "Smart Look Men's Salon",
    type: "Men's Salon",
    phone: '+91 9000044401',
    estimatedTime: '20–40 mins',
    distance: '800m from Campus',
    price: '₹100+',
    reviews: [],
    rating: 4.2,
    imageUrl: 'https://im.whatshot.in/img/2021/Aug/istock-872361244-cropped-1624514729-1626177802-1629879745.jpg'
  },
  {
    id: 'salon2',
    name: 'Glow & Shine Parlour',
    type: "Women's Salon",
    phone: '+91 9000044402',
    estimatedTime: '30–60 mins',
    distance: '2km from Campus',
    price: '₹250+',
    reviews: [
      { id: 'salr1', user: 'Neha', rating: 5, comment: 'Professional staff.', date: '2024-01-20', avatarColor: 'bg-pink-500' },
    ],
    rating: 5.0,
    imageUrl: 'https://media.istockphoto.com/id/827536320/photo/hairdresser-washing-womans-hair-in-hairdresser-salon.jpg?s=612x612&w=0&k=20&c=u85RRwuvK6Hb6JPY2UPwQMZR-Pvk8Mcmf-DqaoApWkY='
  },
];
