import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { createGeminiChat } from './utils/aiLoader';
import { Message } from '../types';
import { SYSTEM_PROMPT } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Greetings! I am the portfolio AI. How can I assist you today?', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const MotionButton = motion.button as any;
  const MotionDiv = motion.div as any;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_KEY;
      if (!apiKey) throw new Error('API Key missing');

      const ai = await createGeminiChat(apiKey);
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction: SYSTEM_PROMPT },
        history: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }))
      });

      const result = await chat.sendMessage({ message: userMessage.text });
      const botMessage: Message = {
        role: 'model',
        text: result.text ?? 'Processing error. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Gemini error:', err);
      const errorText = err.message.includes('API Key')
        ? 'System alert: API key missing'
        : 'Connection failed.';
      setMessages(prev => [...prev, { role: 'model', text: errorText, timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderedMessages = useMemo(
    () =>
      messages.map((msg, idx) => (
        <div key={idx} className={`chat ${msg.role === 'user' ? 'chat-end' : 'chat-start'}`}>
          <div className="chat-image avatar">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center text-base-content/70 border border-white/10 shadow-sm">
              {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
          </div>
          <div
            className={`chat-bubble text-sm ${
              msg.role === 'user'
                ? 'chat-bubble-primary shadow-lg shadow-primary/20 text-white'
                : 'bg-white/80 dark:bg-black/50 backdrop-blur-md text-base-content border border-white/10 shadow-sm'
            }`}
          >
            {msg.text}
          </div>
          <div className="chat-footer opacity-40 text-[9px] font-mono mt-1 ml-1">
            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      )),
    [messages]
  );

  return (
    <>
      {/* Floating Action Button */}
      <MotionButton
        className="fixed bottom-6 right-6 btn btn-circle btn-primary btn-lg shadow-xl shadow-primary/30 z-50 group border border-white/20"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
          </span>
        )}
      </MotionButton>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[90vw] sm:w-[400px] bg-base-100/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 z-50 flex flex-col overflow-hidden h-[600px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-content p-4 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bold font-pixel tracking-wide">AI COMPANION</h3>
                  <p className="text-[10px] opacity-90 font-mono">ONLINE // V2.5</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="btn btn-ghost btn-xs btn-circle text-white/80 hover:bg-white/20">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent">
              {renderedMessages}
              {isLoading && (
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                  </div>
                  <div className="chat-bubble bg-white/50 backdrop-blur-md border border-white/10">
                    <Loader2 size={16} className="animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white/10 backdrop-blur-lg border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Input command..."
                  className="input input-bordered w-full pr-12 bg-white/40 dark:bg-black/20 border-white/20 focus:outline-none focus:border-primary rounded-xl font-mono text-sm"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  disabled={isLoading}
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-sm btn-primary btn-circle shadow-lg"
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default GeminiChat;