import React from 'react';
import { Quote, Image } from 'lucide-react';

const quotes = [
  "Self-care is not selfish. You cannot serve from an empty vessel.",
  "Taking care of yourself is part of taking care of others.",
  "The most powerful relationship you will ever have is the relationship with yourself.",
  "Self-care is how you take your power back."
];

const quickPractices = [
  {
    title: "5-Minute Meditation",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80",
    description: "Find your center with a quick mindfulness practice"
  },
  {
    title: "Desk Stretches",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    description: "Simple stretches to release tension"
  },
  {
    title: "Gratitude Moment",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    description: "List three things you're thankful for"
  }
];

export default function Inspiration() {
  return (
    <section id="inspiration" className="py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-16">Inspiration Corner</h2>
        
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Quote className="h-8 w-8 text-rose-400" />
            <h3 className="text-2xl font-medium">Daily Wisdom</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <blockquote className="text-lg text-gray-600 italic">"{quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Image className="h-8 w-8 text-rose-400" />
            <h3 className="text-2xl font-medium">Quick Self-Care Practices</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickPractices.map((practice) => (
              <div
                key={practice.title}
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={practice.image}
                  alt={practice.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-medium text-lg mb-2">{practice.title}</h4>
                  <p className="text-white/80 text-sm">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}