import { useState, useEffect, useMemo, useCallback } from 'react';
import { Utensils, Wrench, Car, MapPin, Scissors } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContentSection from '@/components/ContentSection';
import ContentCard from '@/components/ContentCard';
import TransportCard from '@/components/TransportCard';
import PlaceCard from '@/components/PlaceCard';
import LoginModal from '@/components/LoginModal';
import ReviewModal from '@/components/ReviewModal';
import Chatbot from '@/components/Chatbot';
import NotificationContainer, { NotificationItem } from '@/components/NotificationContainer';
import { 
  User, 
  Review,
  foodVendors, 
  services, 
  transports, 
  places, 
  salons 
} from '@/data/campusData';

const Index = () => {
  // State
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedItemForReview, setSelectedItemForReview] = useState<{ id: string; name: string } | null>(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  // Load user and favorites from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('vssut_user');
    const savedFavorites = localStorage.getItem('vssut_favorites');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Show notification
  const showNotification = useCallback((type: NotificationItem['type'], message: string) => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { id, type, message }]);
  }, []);

  // Close notification
  const closeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // Handle login
  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('vssut_user', JSON.stringify(userData));
    showNotification('success', `Welcome, ${userData.name}!`);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('vssut_user');
    showNotification('info', 'You have been logged out');
  };

  // Handle favorite toggle
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
      
      localStorage.setItem('vssut_favorites', JSON.stringify(newFavorites));
      
      if (newFavorites.includes(id)) {
        showNotification('success', 'Added to favorites');
      } else {
        showNotification('info', 'Removed from favorites');
      }
      
      return newFavorites;
    });
  };

  // Handle review click
  const handleReviewClick = (id: string, name: string) => {
    setSelectedItemForReview({ id, name });
    setIsReviewModalOpen(true);
  };

  // Handle review submit
  const handleReviewSubmit = (review: Omit<Review, 'id' | 'date'>) => {
    // In a real app, this would save to a database
    showNotification('success', 'Review submitted successfully!');
  };

  // Debounced search
  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) {
      return { foodVendors, services, transports, places, salons };
    }

    return {
      foodVendors: foodVendors.filter((v) => 
        v.name.toLowerCase().includes(query) ||
        v.type.some((t) => t.toLowerCase().includes(query))
      ),
      services: services.filter((s) =>
        s.name.toLowerCase().includes(query) ||
        s.type.toLowerCase().includes(query)
      ),
      transports: transports.filter((t) =>
        t.name.toLowerCase().includes(query) ||
        t.type.toLowerCase().includes(query)
      ),
      places: places.filter((p) =>
        p.name.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      ),
      salons: salons.filter((s) =>
        s.name.toLowerCase().includes(query) ||
        s.type.toLowerCase().includes(query)
      ),
    };
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header
        user={user}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Hero */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onChatbotOpen={() => setIsChatbotOpen(true)}
      />

      {/* Food Section */}
      <ContentSection
        id="food"
        title="Food & Dining"
        subtitle="Discover delicious eats near campus"
        icon={<Utensils className="w-7 h-7 text-white" />}
        count={filteredData.foodVendors.length}
      >
        {filteredData.foodVendors.map((vendor) => (
          <ContentCard
            key={vendor.id}
            id={vendor.id}
            name={vendor.name}
            type={vendor.type}
            rating={vendor.rating}
            imageUrl={vendor.imageUrl}
            phone={vendor.phone}
            priceRange={vendor.priceRange}
            time={`~${vendor.avgServingMins} mins`}
            vegNonveg={vendor.vegNonveg}
            reviewCount={vendor.reviews.length}
            onReviewClick={() => handleReviewClick(vendor.id, vendor.name)}
            isFavorite={favorites.includes(vendor.id)}
            onFavoriteToggle={() => toggleFavorite(vendor.id)}
          />
        ))}
      </ContentSection>

      {/* Services Section */}
      <ContentSection
        id="services"
        title="General Services"
        subtitle="Essential services for students"
        icon={<Wrench className="w-7 h-7 text-white" />}
        count={filteredData.services.length}
      >
        {filteredData.services.map((service) => (
          <ContentCard
            key={service.id}
            id={service.id}
            name={service.name}
            type={service.type}
            rating={service.rating}
            imageUrl={service.imageUrl}
            phone={service.phone}
            priceRange={service.price}
            time={service.estimatedTime}
            distance={service.distance}
            reviewCount={service.reviews.length}
            onReviewClick={() => handleReviewClick(service.id, service.name)}
            isFavorite={favorites.includes(service.id)}
            onFavoriteToggle={() => toggleFavorite(service.id)}
          />
        ))}
      </ContentSection>

      {/* Salons Section */}
      <ContentSection
        id="salons"
        title="Salons"
        subtitle="Grooming services near campus"
        icon={<Scissors className="w-7 h-7 text-white" />}
        count={filteredData.salons.length}
      >
        {filteredData.salons.map((salon) => (
          <ContentCard
            key={salon.id}
            id={salon.id}
            name={salon.name}
            type={salon.type}
            rating={salon.rating}
            imageUrl={salon.imageUrl}
            phone={salon.phone}
            priceRange={salon.price}
            time={salon.estimatedTime}
            distance={salon.distance}
            reviewCount={salon.reviews.length}
            onReviewClick={() => handleReviewClick(salon.id, salon.name)}
            isFavorite={favorites.includes(salon.id)}
            onFavoriteToggle={() => toggleFavorite(salon.id)}
          />
        ))}
      </ContentSection>

      {/* Transport Section */}
      <ContentSection
        id="transport"
        title="Transport"
        subtitle="Get around easily"
        icon={<Car className="w-7 h-7 text-white" />}
        count={filteredData.transports.length}
      >
        {filteredData.transports.map((transport) => (
          <TransportCard
            key={transport.id}
            transport={transport}
            onReviewClick={() => handleReviewClick(transport.id, transport.name)}
          />
        ))}
      </ContentSection>

      {/* Places Section */}
      <ContentSection
        id="places"
        title="Nearby Places"
        subtitle="Explore attractions around Burla"
        icon={<MapPin className="w-7 h-7 text-white" />}
        count={filteredData.places.length}
      >
        {filteredData.places.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onReviewClick={() => handleReviewClick(place.id, place.name)}
          />
        ))}
      </ContentSection>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold">VSSUT Campus Companion</h3>
              <p className="text-xs text-muted-foreground">Burla, Sambalpur, Odisha</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for VSSUT Students
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        itemName={selectedItemForReview?.name || ''}
        user={user}
        onSubmit={handleReviewSubmit}
        onLoginRequired={() => {
          setIsReviewModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />

      {/* Chatbot */}
      <Chatbot
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
      />

      {/* Notifications */}
      <NotificationContainer
        notifications={notifications}
        onClose={closeNotification}
      />
    </div>
  );
};

export default Index;
