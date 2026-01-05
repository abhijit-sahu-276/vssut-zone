import { useState } from 'react';
import { Star, Heart, Phone, MapPin, Clock, IndianRupee, MessageSquare } from 'lucide-react';

interface ContentCardProps {
  id: string;
  name: string;
  type: string | string[];
  rating: number;
  imageUrl?: string;
  phone?: string;
  priceRange?: string;
  distance?: string;
  time?: string;
  vegNonveg?: 'Veg' | 'Non-veg' | 'Both';
  reviewCount?: number;
  onReviewClick: () => void;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

const ContentCard = ({
  name,
  type,
  rating,
  imageUrl,
  phone,
  priceRange,
  distance,
  time,
  vegNonveg,
  reviewCount = 0,
  onReviewClick,
  isFavorite = false,
  onFavoriteToggle,
}: ContentCardProps) => {
  const [imgError, setImgError] = useState(false);

  const getBadgeClass = () => {
    if (vegNonveg === 'Veg') return 'badge-veg';
    if (vegNonveg === 'Non-veg') return 'badge-nonveg';
    if (vegNonveg === 'Both') return 'badge-both';
    return 'badge-service';
  };

  const typeArray = Array.isArray(type) ? type : [type];

  const handleCall = () => {
    if (phone && phone !== 'App Based') {
      window.location.href = `tel:${phone.replace(/\s/g, '')}`;
    }
  };

  const placeholderBg = `bg-gradient-to-br from-primary/20 to-accent/20`;

  return (
    <div className="content-card group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {imageUrl && !imgError ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full ${placeholderBg} flex items-center justify-center`}>
            <span className="text-4xl opacity-50">🍽️</span>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle?.();
          }}
          className="absolute top-3 left-3 btn-icon"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-pink-500 text-pink-500' : 'text-white'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="card-body">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-semibold text-lg text-foreground line-clamp-1">{name}</h3>
          <button
            onClick={onReviewClick}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{reviewCount}</span>
          </button>
        </div>

        {/* Type Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {vegNonveg && (
            <span className={getBadgeClass()}>
              {vegNonveg}
            </span>
          )}
          {typeArray.slice(0, 2).map((t, i) => (
            <span key={i} className="badge-service">
              {t}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          {priceRange && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <IndianRupee className="w-4 h-4" />
              <span>{priceRange}</span>
            </div>
          )}
          {time && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
          )}
          {distance && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{distance}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {phone && phone !== 'App Based' && (
            <button
              onClick={handleCall}
              className="flex-1 btn-glass py-2 flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call
            </button>
          )}
          <button className="flex-1 btn-primary py-2 text-sm">
            <MapPin className="w-4 h-4 inline mr-1" />
            Maps
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
