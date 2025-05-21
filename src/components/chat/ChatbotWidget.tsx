
import { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 Welcome to Kimaya Skincare. How may I assist you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputText, isBot: false }]);
    const userInput = inputText;
    setInputText("");
    
    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Thanks for your message. Our customer support team will get back to you soon.";
      
      // Very simple response logic for the prototype
      if (userInput.toLowerCase().includes("product")) {
        botResponse = "We have a variety of natural skincare products. You can explore them on our products page!";
      } else if (userInput.toLowerCase().includes("delivery") || userInput.toLowerCase().includes("shipping")) {
        botResponse = "We offer free shipping on orders above $50. Standard delivery takes 3-5 business days.";
      } else if (userInput.toLowerCase().includes("return")) {
        botResponse = "We have a 30-day return policy for all unused products.";
      } else if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
        botResponse = "Hello! How can I help you with Kimaya Skincare products today?";
      }
      
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 md:w-96 mb-4 overflow-hidden flex flex-col" style={{ height: '400px' }}>
          <div className="bg-kimaya-primary text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>Kimaya Support</span>
            </div>
            <Button variant="ghost" size="sm" onClick={toggleChat} className="text-white hover:bg-kimaya-primary/80 p-0 h-auto">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-grow p-3 overflow-y-auto flex flex-col space-y-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.isBot 
                    ? 'bg-kimaya-secondary/30 self-start' 
                    : 'bg-kimaya-primary/10 self-end'
                }`}
              >
                <p className="text-kimaya-primary text-sm">{message.text}</p>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t p-3 flex">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 border border-kimaya-accent/30 rounded-l-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
            />
            <Button type="submit" className="rounded-l-none bg-kimaya-primary text-white">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
      
      <Button 
        onClick={toggleChat} 
        className="rounded-full w-14 h-14 bg-kimaya-primary text-white shadow-lg hover:bg-opacity-90 p-0 flex items-center justify-center"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatbotWidget;
