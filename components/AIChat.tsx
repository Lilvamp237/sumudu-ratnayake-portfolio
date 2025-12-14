import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { generateResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Greetings. I am Sumudu's automated assistant. Ask me anything about her projects, skills, or background.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setIsLoading(true);

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', text: userText, timestamp: new Date() }
    ];
    setMessages(newMessages);

    try {
      const responseText = await generateResponse(userText);
      setMessages(prev => [
        ...prev,
        { role: 'model', text: responseText, timestamp: new Date() }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'model', text: "Error: Communication packet lost.", timestamp: new Date() }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex flex-col h-full bg-slate-900/80 border border-purple-500/50 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-sm">
      {/* Header */}
      <div className="bg-slate-950 p-3 border-b border-purple-500/50 flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
        <span className="font-orbitron font-bold text-purple-400 tracking-wider">AI ASSISTANT LINK</span>
        <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`p-2 rounded-lg border flex-shrink-0 ${
              msg.role === 'user' 
                ? 'bg-purple-900/20 border-purple-500/50 text-purple-300' 
                : 'bg-green-900/20 border-green-500/50 text-green-300'
            }`}>
              {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className={`p-3 rounded-md max-w-[80%] text-sm ${
              msg.role === 'user' 
                ? 'bg-purple-900/10 border border-purple-500/30 text-purple-100' 
                : 'bg-green-900/10 border border-green-500/30 text-green-100'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-green-400 text-xs animate-pulse">
            <Loader2 className="animate-spin w-4 h-4" />
            <span>PROCESSING REQUEST...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-slate-950 border-t border-purple-500/50 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask about my projects..."
          className="flex-1 bg-slate-900 border border-slate-700 text-green-300 placeholder-slate-600 rounded px-3 py-2 focus:outline-none focus:border-green-500 font-mono text-sm"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded transition-colors disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default AIChat;