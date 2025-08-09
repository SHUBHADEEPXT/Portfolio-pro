"use client";

import { useState } from 'react';

function SkillCard({ name, rating }: { name: string; rating: number }) {
  // This is React STATE - it remembers if card is expanded!
  const [isExpanded, setIsExpanded] = useState(false);
  
  const stars = '⭐'.repeat(rating);
  
  // This function runs when user clicks the card
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded); // Flip between true/false
  };
  
  return (
    <div 
      className="border border-gray-300 rounded-lg p-6 text-center bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={toggleExpanded} // Listen for clicks!
    >
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="text-2xl mb-2">{stars}</div>
      <span className="text-gray-600">{rating}/10</span>
      
      {/* This only shows when expanded! */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {name === "Docker" && "Containerization, multi-stage builds, Docker Compose"}
            {name === "Kubernetes" && "Pod management, Services, Deployments, ConfigMaps"}
            {name === "Terraform" && "Infrastructure as Code, AWS/Azure providers"}
            {name === "CI/CD" && "Jenkins pipelines, GitHub Actions, automated testing"}
            {name === "Monitoring" && "Prometheus, Grafana, log aggregation"}
          </p>
          <p className="text-xs text-blue-600 mt-2">Click to collapse</p>
        </div>
      )}
    </div>
  );
}

// Keep the same Home function as before
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-4">My DevOps Skills</h1>
      <p className="text-center text-gray-600 mb-12">Click any skill card to see details</p>
      
      <div className="flex gap-6 justify-center flex-wrap max-w-4xl mx-auto">
        <SkillCard name="Docker" rating={8} />
        <SkillCard name="Kubernetes" rating={6} />
        <SkillCard name="Terraform" rating={5} />
        <SkillCard name="CI/CD" rating={9} />
        <SkillCard name="Monitoring" rating={4} />
      </div>
    </div>
  );
}