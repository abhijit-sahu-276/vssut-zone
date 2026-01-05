import { useState } from 'react';
import { X, Star, ImagePlus, Trash2 } from 'lucide-react';
import { Review, User } from '@/data/campusData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  user: User | null;
  onSubmit: (review: Omit<Review, 'id' | 'date'>) => void;
  onLoginRequired: () => void;
}

const ReviewModal = ({
  isOpen,
  onClose,
  itemName,
  user,
  onSubmit,
  onLoginRequired,
}: ReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setImageUrl('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!user) {
      onLoginRequired();
      return;
    }

    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    if (!comment.trim()) {
      setError('Please write a comment');
      return;
    }

    const colors = ['bg-indigo-500', 'bg-violet-500', 'bg-pink-500', 'bg-emerald-500', 'bg-amber-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    onSubmit({
      user: user.name,
      rating,
      comment: comment.trim(),
      avatarColor: randomColor,
      imageUrl: imagePreview || undefined,
    });

    // Reset form
    setRating(0);
    setComment('');
    setImagePreview(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-lg" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold gradient-text">Add Review</h2>
            <p className="text-sm text-muted-foreground">{itemName}</p>
          </div>
          <button onClick={onClose} className="btn-icon">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!user ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Please login to add a review</p>
            <button onClick={onLoginRequired} className="btn-primary">
              Login Now
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Rating Stars */}
            <div>
              <label className="block text-sm font-medium mb-3">Your Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hoverRating || rating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-muted-foreground/30'
                      }`}
                    />
                  </button>
                ))}
                {rating > 0 && (
                  <span className="text-sm text-muted-foreground ml-2">
                    {rating}/5
                  </span>
                )}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience..."
                className="search-input min-h-[100px] resize-none"
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground mt-1 text-right">
                {comment.length}/500
              </p>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">Add Photo (optional)</label>
              {imagePreview ? (
                <div className="relative inline-block">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-destructive flex items-center justify-center text-white"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex items-center justify-center gap-2 glass-card p-6 cursor-pointer hover:bg-white/10 transition-colors">
                  <ImagePlus className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Click to upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="w-full btn-primary py-4">
              Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReviewModal;
