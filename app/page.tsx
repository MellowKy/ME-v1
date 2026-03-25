import React from 'react';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import ExecutionEngine from '@/components/ExecutionEngine';
import StrategyRoadmap from "@/components/StrategyRoadmap";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <main>
        <Hero />
        <BentoGrid />
        <ExecutionEngine />
        <StrategyRoadmap />
      </main>
    </div>
  );
}