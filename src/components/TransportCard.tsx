import { Phone, Clock, IndianRupee, Car, Bike, Star, MessageSquare } from 'lucide-react';
import { Transport } from '@/data/campusData';

interface TransportCardProps {
  transport: Transport;
  onReviewClick?: () => void;
}

const TransportCard = ({ transport, onReviewClick }: TransportCardProps) => {
  const getIcon = () => {
    const type = transport.type.toLowerCase();
    if (type.includes('auto')) return <Car className="w-6 h-6" />;
    if (type.includes('taxi')) return <Car className="w-6 h-6" />;
    if (type.includes('rickshaw') || type.includes('ev')) return <Bike className="w-6 h-6" />;
    return <Car className="w-6 h-6" />;
  };

  const getTypeColor = () => {
    const type = transport.type.toLowerCase();
    if (type.includes('auto')) return 'from-amber-500 to-orange-500';
    if (type.includes('taxi')) return 'from-indigo-500 to-violet-500';
    if (type.includes('rickshaw') || type.includes('ev')) return 'from-emerald-500 to-teal-500';
    return 'from-primary to-accent';
  };

  const handleCall = () => {
    if (transport.phone && transport.phone !== 'App Based') {
      window.location.href = `tel:${transport.phone.replace(/\s/g, '')}`;
    }
  };

  return (
    <div className="glass-card-hover p-6">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getTypeColor()} flex items-center justify-center text-white`}>
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{transport.name}</h3>
            <div className="flex items-center gap-1 glass px-2 py-1 rounded-full">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold">{transport.rating.toFixed(1)}</span>
            </div>
          </div>
          <span className="badge-service">{transport.type}</span>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <IndianRupee className="w-4 h-4 flex-shrink-0" />
          <span>{transport.price}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span>{transport.estimatedTime}</span>
        </div>
      </div>

      {/* Review Button */}
      {onReviewClick && (
        <button
          onClick={onReviewClick}
          className="w-full btn-glass py-2 mb-3 flex items-center justify-center gap-2 text-sm"
        >
          <MessageSquare className="w-4 h-4" />
          Reviews ({transport.reviews.length})
        </button>
      )}

      {/* Actions */}
      {transport.phone !== 'App Based' ? (
        <button onClick={handleCall} className="w-full btn-glass py-3 flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Call Now
        </button>
      ) : (
        <div className="w-full glass py-3 text-center text-sm text-muted-foreground rounded-xl">
          Book via Ola/Uber App
        </div>
      )}
    </div>
  );
};

export default TransportCard;
