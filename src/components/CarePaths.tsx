import React, { useState } from 'react';
import { Heart, Brain, Smile, Sparkles } from 'lucide-react';

const paths = {
  women: {
    icon: <Heart className="h-6 w-6 text-rose-400" />,
    title: 'Self-Care for Women',
    items: ['Beauty rituals', 'Emotional wellness', 'Life balance tips']
  },
  men: {
    icon: <Brain className="h-6 w-6 text-blue-400" />,
    title: 'Self-Care for Men',
    items: ['Stress management', 'Fitness integration', 'Mental wellness']
  },
  teens: {
    icon: <Smile className="h-6 w-6 text-purple-400" />,
    title: 'Self-Care for Teens',
    items: ['Study-life balance', 'Social wellness', 'Confidence building']
  },
  kids: {
    icon: <Sparkles className="h-6 w-6 text-amber-400" />,
    title: 'Self-Care for Kids',
    items: ['Fun mindfulness', 'Emotional awareness', 'Healthy habits']
  }
};

export default function CarePaths() {
  const [activePath, setActivePath] = useState('women');

  return (
    <section id="care paths" className="py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-16">Personalized Care Paths</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(paths).map((path) => (
            <button
              key={path}
              onClick={() => setActivePath(path)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activePath === path
                  ? 'bg-rose-400 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-rose-50'
              }`}
            >
              {paths[path].title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            {paths[activePath].icon}
            <h3 className="text-2xl font-medium">{paths[activePath].title}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {paths[activePath].items.map((item) => (
              <div key={item} className="p-6 rounded-lg bg-gradient-to-br from-rose-50 to-white">
                <h4 className="font-medium mb-3">{item}</h4>
                <p className="text-gray-600">Discover personalized practices tailored just for you.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}