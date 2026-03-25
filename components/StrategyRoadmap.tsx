'use client';

import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        number: "PHASE_01",
        title: "The Guardian",
        subtitle: "Architecture & Compliance",
        description: "Zero-Friction Infrastructure Audits (ZFIE) to identify core differentiating logic and establish private LLM environments with zero data leakage.",
        metadata: ["ZFIE_READY", "PII_RESIDENCY_LOCKED", "MANIFEST_GEN_V1"],
    },
    {
        number: "PHASE_02",
        title: "The Architect",
        subtitle: "IP Moat Construction",
        description: "Codifying trade secrets directly into deployment manifests. Strategic build-vs-buy analysis to ensure custom engineering only occurs at the competitive edge.",
        metadata: ["PATENT_STRAT_ACTIVE", "LATENCY_<20MS", "TCO_MODEL_STAGED"],
    },
    {
        number: "PHASE_03",
        title: "The Strategist",
        subtitle: "Long-term Evolution",
        description: "Executing the Strategic Alignment Program. Moving leadership away from black-box hype toward an internal consulting mandate for high-scale ROI.",
        metadata: ["EXEC_LITERACY_SYNCED", "ROI_MAXIMIZED", "ACLE_V4_INITIALIZED"],
    }
];

export default function StrategyRoadmap() {
    return (
        <section className="bg-[#050505] py-32 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#00e5ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                            Strategic Alignment // Roadmap
                        </h2>
                        <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                            Defining the <br />
                            <span className="text-zinc-800 italic">Standard.</span>
                        </h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-xs text-zinc-500 text-sm font-medium border-l border-zinc-900 pl-6"
                    >
                        Every roadmap is a ACLE vision designed to prevent disposable tech and maximize proprietary assets.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Horizontal Connector Line (2026 Style) */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-brand-cyan/50 via-zinc-800 to-transparent hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={phase.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative lg:pt-16 group"
                            >
                                {/* Terminal Connector Node */}
                                <div className="hidden lg:block absolute top-[-4px] left-0 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_15px_#00e5ff]" />

                                <div className="relative p-8 lg:p-12 hover:bg-white/[0.01] transition-colors duration-500 rounded-3xl">
                                    {/* Micro-Metadata Header */}
                                    <div className="flex items-center justify-between mb-12">
                                        <span className="font-mono text-[9px] text-zinc-600 tracking-widest">{phase.number}</span>
                                        <div className="h-[1px] w-12 bg-zinc-900 group-hover:w-24 group-hover:bg-brand-cyan/40 transition-all duration-700" />
                                    </div>

                                    <h4 className="text-3xl font-black text-white uppercase mb-2 tracking-tighter">
                                        {phase.title}
                                    </h4>
                                    <p className="text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                                        {phase.subtitle}
                                    </p>

                                    <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-medium">
                                        {phase.description}
                                    </p>

                                    {/* Tech Tags Array */}
                                    <div className="flex flex-wrap gap-2">
                                        {phase.metadata.map((tag) => (
                                            <span key={tag} className="text-[8px] font-mono text-zinc-700 bg-zinc-900/50 px-2 py-1 rounded border border-white/[0.03]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Animated Scanline (Hover Effect) */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}