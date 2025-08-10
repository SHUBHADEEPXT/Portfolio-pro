"use client";

import { useState } from 'react';
import Navigation from './components/Navigation';

// Your existing skill data
const devopsSkills = [
  { name: 'Docker', rating: 9 },
  { name: 'Kubernetes', rating: 8 },
  { name: 'AWS', rating: 9 },
  { name: 'Terraform', rating: 8 },
  { name: 'Jenkins', rating: 7 },
  { name: 'Ansible', rating: 8 }
];

function SkillCard({ name, rating }: { name: string; rating: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="text-blue-600 font-bold">{rating}/10</span>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-600">
          <p>Detailed experience with {name} in production environments.</p>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              DevOps Engineer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Automating Infrastructure • Streamlining Deployments • Building Scalable Systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/projects" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View My Projects
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Core DevOps Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} rating={skill.rating} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}