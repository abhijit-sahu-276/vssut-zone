import { useState } from 'react';
import { Star, Phone, MapPin, Navigation, MessageSquare, Camera } from 'lucide-react';
import { Place } from '@/data/campusData';

interface PlaceCardProps {
  place: Place;
  onReviewClick?: () => void;
}

const PlaceCard = ({ place, onReviewClick }: PlaceCardProps) => {
  const [imgError, setImgError] = useState(false);

  const getTypeIcon = () => {
    switch (place.type) {
      case 'Tourist Spot':
        return '🏛️';
      case 'Temple':
        return '🛕';
      case 'Shopping':
        return '🛍️';
      case 'Nature':
        return '🌿';
      case 'Hospital':
        return '🏥';
      case 'Transport Hub':
        return '🚉';
      default:
        return '📍';
    }
  };

  const handleOpenMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    if (place.phone) {
      window.location.href = `tel:${place.phone.replace(/\s/g, '')}`;
    }
  };

  return (
    <div className="glass-card-hover overflow-hidden group">
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        {place.imageUrl && !imgError ? (
          <img
            src={place.imageUrl}
            alt={place.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center">
            <span className="text-5xl">{getTypeIcon()}</span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Rating */}
        <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold">{place.rating.toFixed(1)}</span>
        </div>

        {/* Type Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="badge-place">{place.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{place.name}</h3>
          {onReviewClick && (
            <button
              onClick={onReviewClick}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{place.reviews.length}</span>
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span>{place.distance || 'Nearby'} from campus</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {place.notes}
        </p>

        {/* Review Button with Photo indicator */}
        {onReviewClick && (
          <button
            onClick={onReviewClick}
            className="w-full btn-glass py-2 mb-3 flex items-center justify-center gap-2 text-sm"
          >
            <Camera className="w-4 h-4" />
            Add Review with Photo
          </button>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          {place.phone && (
            <button onClick={handleCall} className="flex-1 btn-glass py-2 flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              Call
            </button>
          )}
          <button onClick={handleOpenMaps} className="flex-1 btn-primary py-2 text-sm flex items-center justify-center gap-2">
            <Navigation className="w-4 h-4" />
            Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
