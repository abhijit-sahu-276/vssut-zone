import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Chatbot = ({ isOpen, onToggle }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Campus AI, your VSSUT companion. Ask me about food, services, transport, or places near campus! 🎓",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('restaurant')) {
      return "🍔 For food near VSSUT, I recommend:\n\n• **Sharma Dhaba** - Great thalis (₹60-100)\n• **Maa Tara Stall** - Authentic Odia food\n• **Biryani House** - Best biryani near campus\n• **Night Canteen** - Late night snacks\n\nCheck the Food section for more options!";
    }
    
    if (lowerMessage.includes('transport') || lowerMessage.includes('auto') || lowerMessage.includes('taxi')) {
      return "🚗 Transport options from VSSUT:\n\n• **Main Gate Auto** - ₹20-40 to Burla Town\n• **E-Rickshaw** - ₹10-20 to Railway Station\n• **Sambalpur Taxi** - ₹300-500 to Sambalpur\n• **Ola/Uber** - Available 24/7\n\nAutos are most affordable for short distances!";
    }
    
    if (lowerMessage.includes('place') || lowerMessage.includes('visit') || lowerMessage.includes('tourist')) {
      return "📍 Places to visit near VSSUT:\n\n• **Hirakud Dam** - 15 km, amazing sunset views\n• **Maa Samaleswari Temple** - 10 km, famous temple\n• **Debrigarh Sanctuary** - 40 km, wildlife\n• **Town Mall** - 9 km, shopping & food\n\nHirakud Dam is a must-visit!";
    }
    
    if (lowerMessage.includes('service') || lowerMessage.includes('xerox') || lowerMessage.includes('print')) {
      return "🛠️ Services near campus:\n\n• **Shree Xerox** - ₹1/page B&W, 200m from gate\n• **Quick Stationery** - Inside campus\n• **Raju Mobile Repair** - 500m from campus\n• **Cycle Repair Point** - 100m from hostel\n\nXerox center is closest for printouts!";
    }
    
    if (lowerMessage.includes('salon') || lowerMessage.includes('haircut') || lowerMessage.includes('hair')) {
      return "💇 Salons near VSSUT:\n\n• **Style Studio** (Men) - ₹80 haircut\n• **Beauty Point** (Women) - ₹150+ haircut\n• **Unisex Hair Hub** - ₹100+ for all\n\nAll within 500m of campus gate!";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 I'm here to help you navigate life at VSSUT Burla. Ask me about:\n\n• 🍔 Food & Restaurants\n• 🚗 Transport options\n• 📍 Places to visit\n• 🛠️ Services nearby\n• 💇 Salons\n\nWhat would you like to know?";
    }
    
    return "I can help you with information about:\n\n• 🍔 Food places near campus\n• 🚗 Transport (autos, taxis)\n• 📍 Tourist spots & places\n• 🛠️ Services (xerox, repairs)\n• 💇 Salons\n\nTry asking something like 'Where can I eat?' or 'How do I get to Sambalpur?'";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(userMessage.content),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {/* Chat Panel */}
      {isOpen && (
        <div className="chatbot-panel">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Campus AI</h3>
                <p className="text-xs text-muted-foreground">VSSUT Assistant</p>
              </div>
            </div>
            <button onClick={onToggle} className="btn-icon">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' ? 'gradient-bg' : 'bg-muted'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={message.role === 'user' ? 'chat-user' : 'chat-ai'}
                >
                  <div className="whitespace-pre-wrap text-sm">
                    {message.content.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="chat-ai">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about campus..."
                className="flex-1 glass px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="btn-icon gradient-bg disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={onToggle}
        className="chatbot-fab animate-pulse-glow"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
