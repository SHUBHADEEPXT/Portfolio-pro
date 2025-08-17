"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
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


function AnimatedText({
  items,
  hold = 1200,
  typeSpeed = 60,
  deleteSpeed = 40,
  className = '',
}: {
  items: string[];
  hold?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = items[idx % items.length];
    let t: number;

    if (!deleting && text.length < word.length) {
      t = window.setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
    } else if (!deleting && text.length === word.length) {
      t = window.setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text.length > 0) {
      t = window.setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % items.length);
    }

    return () => clearTimeout(t);
  }, [text, deleting, idx, items, hold, typeSpeed, deleteSpeed]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-px h-6 align-[-3px] bg-current ml-0.5 animate-pulse" />
    </span>
  );
}



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
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
  <div className="max-w-6xl mx-auto px-4 py-20">
    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
      {/* Copy */}
      <div className="text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mt-2 ">
          Shubhadeep Bhowmik
        </h1>
        <h2 className="text-3xl md:text-2xl font-bold mt-1 uppercase text-white/80">
          Devops Engineer
        </h2>

        <p className="mt-4 text-xl md:text-2xl text-blue-100">
          <AnimatedText
            items={[
              'Automating infrastructure',
              'Streamlining deployments',
              'Building scalable systems',
              'Observability & SRE',
              'Cost optimisation on AWS',
            ]}
            className="font-medium"
          />
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
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

      {/* Photo */}
      <div className="justify-self-center">
        <div className="relative h-40 w-40 sm:h-52 sm:w-52 lg:h-64 lg:w-64 rounded-full ring-4 ring-white/25 shadow-xl">
          {/* Use any square image you already have under /public/images/hero/ */}
          <Image
            src="/images/hero/profile.jpg"   // <— change this filename if needed
            alt="Shubhadeep Bhowmik"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Background glows (unchanged but scoped) */}
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