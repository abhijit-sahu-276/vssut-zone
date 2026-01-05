import { Search, ChevronDown, Utensils, MapPin, Car } from 'lucide-react';
import heroCampusImage from '@/assets/hero-campus.jpg';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onChatbotOpen: () => void;
}

const Hero = ({ searchQuery, onSearchChange, onChatbotOpen }: HeroProps) => {
  const features = [
    { icon: Utensils, label: 'Local Food', count: '12+' },
    { icon: MapPin, label: 'Places', count: '6+' },
    { icon: Car, label: 'Transport', count: '4+' },
  ];

  const scrollToContent = () => {
    const element = document.querySelector('#food');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroCampusImage} 
          alt="VSSUT Campus" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-float" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-muted-foreground">VSSUT Burla, Odisha</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          Your Campus
          <span className="block gradient-text">Companion</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up">
          Discover local food, services, transport, and places around VSSUT campus. 
          Everything you need, just a tap away.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10 animate-slide-up">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for food, services, places..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input pl-14"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
          <button onClick={scrollToContent} className="btn-primary px-8">
            Explore Campus
          </button>
          <button onClick={onChatbotOpen} className="btn-glass px-8">
            Ask Campus AI
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{feature.label}</p>
                <p className="text-sm text-muted-foreground">{feature.count} options</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
