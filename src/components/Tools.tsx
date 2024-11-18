import React, { useState } from 'react';
import { CheckSquare, BookHeart, Calendar } from 'lucide-react';

const tools = [
  {
    icon: <CheckSquare className="h-6 w-6 text-emerald-400" />,
    title: 'Self-Care Checklist',
    description: 'Track your daily self-care practices',
    items: ['Morning meditation', 'Healthy meals', 'Exercise', 'Gratitude practice', 'Evening reflection']
  },
  {
    icon: <BookHeart className="h-6 w-6 text-rose-400" />,
    title: 'Self-Care Journal',
    description: 'Document your wellness journey',
    prompts: ['How are you feeling today?', 'What brought you joy?', 'What challenged you?']
  },
  {
    icon: <Calendar className="h-6 w-6 text-violet-400" />,
    title: 'Monthly Planner',
    description: 'Plan your self-care activities',
    weeks: ['Week 1: Physical Health', 'Week 2: Mental Wellness', 'Week 3: Social Connections', 'Week 4: Personal Growth']
  }
];

export default function Tools() {
  const [activeItems, setActiveItems] = useState(new Set());

  const toggleItem = (item: string) => {
    const newItems = new Set(activeItems);
    if (newItems.has(item)) {
      newItems.delete(item);
    } else {
      newItems.add(item);
    }
    setActiveItems(newItems);
  };

  return (
    <section id="tools" className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-16">Interactive Tools</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.title} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                {tool.icon}
                <h3 className="text-xl font-medium">{tool.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{tool.description}</p>
              
              {tool.items && (
                <div className="space-y-2">
                  {tool.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => toggleItem(item)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeItems.has(item)
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
              
              {tool.prompts && (
                <div className="space-y-4">
                  {tool.prompts.map((prompt) => (
                    <div key={prompt} className="rounded-lg bg-rose-50 p-4">
                      <p className="text-rose-600 font-medium mb-2">{prompt}</p>
                      <textarea
                        className="w-full p-2 rounded border-rose-200 focus:border-rose-400 focus:ring focus:ring-rose-200 focus:ring-opacity-50"
                        rows={2}
                        placeholder="Write your thoughts..."
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {tool.weeks && (
                <div className="space-y-3">
                  {tool.weeks.map((week) => (
                    <div key={week} className="p-3 rounded-lg bg-violet-50 text-violet-600">
                      {week}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}