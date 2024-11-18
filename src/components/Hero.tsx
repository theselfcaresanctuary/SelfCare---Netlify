import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl font-serif font-medium text-gray-900 mb-6">
          Your Personal Self-Care Journey Begins Here
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's take care of you today. Every small step towards self-care is a step towards a more balanced, fulfilled you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition-colors shadow-lg hover:shadow-xl">
            Start Your Journey
          </button>
          <button className="px-8 py-3 bg-white text-rose-400 rounded-full border-2 border-rose-400 hover:bg-rose-50 transition-colors">
            Explore Self-Care Tips
          </button>
        </div>

        <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
          <Sparkles className="h-5 w-5 text-amber-400" />
          <span className="text-gray-600">Daily Tip: Take 5 deep breaths when feeling overwhelmed</span>
        </div>
      </div>
    </div>
  );
}