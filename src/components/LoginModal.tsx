import { useState } from 'react';
import { X, User, Hash } from 'lucide-react';
import { User as UserType } from '@/data/campusData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType) => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const validateRegNo = (reg: string) => {
    // VSSUT registration number format: 21XXXXX (year + 5 digits)
    const regPattern = /^[0-9]{7}$/;
    return regPattern.test(reg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!regNo.trim()) {
      setError('Please enter your registration number');
      return;
    }

    if (!validateRegNo(regNo)) {
      setError('Please enter a valid 7-digit registration number');
      return;
    }

    onLogin({ name: name.trim(), regNo: regNo.trim() });
    setName('');
    setRegNo('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold gradient-text">Welcome Student!</h2>
            <p className="text-sm text-muted-foreground">Login to add reviews</p>
          </div>
          <button onClick={onClose} className="btn-icon">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="search-input pl-12"
                maxLength={50}
              />
            </div>
          </div>

          {/* Registration Number Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Registration Number</label>
            <div className="relative">
              <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value.replace(/\D/g, '').slice(0, 7))}
                placeholder="e.g., 2112345"
                className="search-input pl-12"
                maxLength={7}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">7-digit VSSUT registration number</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="w-full btn-primary py-4">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-muted-foreground text-center mt-4">
          Your data is stored locally on this device
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
