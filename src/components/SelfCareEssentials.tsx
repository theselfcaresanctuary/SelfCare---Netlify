import React from 'react';
import { Sunrise, Sun, Sunset, Trophy } from 'lucide-react';

const routines = [
  {
    icon: <Sunrise className="h-6 w-6 text-amber-400" />,
    title: 'Morning Rituals',
    items: ['Gentle stretching', 'Mindful breakfast', 'Intention setting']
  },
  {
    icon: <Sun className="h-6 w-6 text-amber-500" />,
    title: 'Afternoon Reset',
    items: ['Deep breathing', 'Mindful walk', 'Gratitude pause']
  },
  {
    icon: <Sunset className="h-6 w-6 text-amber-600" />,
    title: 'Evening Unwinding',
    items: ['Digital sunset', 'Relaxing bath', 'Sleep ritual']
  }
];

export default function SelfCareEssentials() {
  return (
    <section id="essentials" className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-16">Daily Self-Care Essentials</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {routines.map((routine) => (
            <div key={routine.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {routine.icon}
                <h3 className="text-xl font-medium">{routine.title}</h3>
              </div>
              <ul className="space-y-3">
                {routine.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-rose-300" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="h-8 w-8 text-amber-400" />
            <h3 className="text-2xl font-medium">30-Day Self-Care Challenge</h3>
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
            {[...Array(30)].map((_, i) => (
              <button
                key={i}
                className="aspect-square rounded-lg border-2 border-rose-200 hover:border-rose-400 transition-colors flex items-center justify-center text-sm font-medium text-gray-600"
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}