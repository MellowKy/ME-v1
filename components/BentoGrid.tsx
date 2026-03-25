'use client';

import React from 'react';
import { motion } from 'framer-motion';

const bentoItems = [
    {
        title: "Strategic AI",
        description: "Moving from 'talking about AI' to architecting longevity with ZFIE audits and 3-year ACLE roadmaps.",
        size: "large",
        tag: "System Live",
        content: (
            <div className="absolute right-0 bottom-0 w-full h-1/2 p-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                    <div className="px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono text-brand-cyan tracking-widest">ZFIE_AUDIT_LOG</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-brand-cyan/40 to-transparent" />
                </div>
                <div className="space-y-3 font-mono text-[10px]">
                    <div className="flex justify-between text-zinc-500"><span>Architecture_Sync</span> <span className="text-brand-cyan animate-pulse">READY</span></div>
                    <div className="flex justify-between text-zinc-500"><span>Compliance_Layer</span> <span className="text-brand-cyan">ACTIVE</span></div>
                    <div className="flex justify-between text-zinc-500"><span>Evolution_Cycle</span> <span className="text-zinc-700">STAGED</span></div>
                </div>
                {/* 2026 Visual: Animated Grid Scan */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff05_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff05_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>
        ),
        icon: (
            <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        title: "IP Defense",
        description: "Codifying trade secrets directly into deployment manifests.",
        size: "small",
        content: (
            <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:opacity-40 transition-all duration-700 rotate-12 group-hover:rotate-0">
                <svg width="140" height="140" viewBox="0 0 24 24" className="text-brand-cyan" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
            </div>
        ),
        icon: (
            <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        title: "AI Literacy",
        description: "Upskilling leaders to act as internal AI consultants.",
        size: "small",
        content: (
            <div className="mt-6 flex items-end gap-2 h-12">
                {[0.4, 0.9, 0.6, 0.8, 0.5].map((scale, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [`${scale * 20}%`, `${scale * 100}%`, `${scale * 20}%`] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15 }}
                        className="w-2 bg-gradient-to-t from-brand-cyan/40 to-brand-cyan rounded-full"
                    />
                ))}
            </div>
        ),
        icon: (
            <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: "TCO Analytics",
        description: "Projecting 3-year ROI models beyond cloud credits.",
        size: "medium",
        content: (
            <div className="absolute right-8 bottom-8 flex items-end gap-3 h-24">
                {[30, 50, 40, 80, 60, 95].map((h, i) => (
                    <div key={i} className="relative w-8 bg-zinc-900/50 rounded-t-lg overflow-hidden border border-white/5">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1.2, delay: i * 0.1, ease: "circOut" }}
                            className="w-full bg-gradient-to-t from-brand-cyan/10 via-brand-cyan/40 to-brand-cyan"
                        />
                    </div>
                ))}
            </div>
        ),
        icon: (
            <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    }
];

export default function BentoGrid() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* 2026 Background Detail: Radial Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(0,229,255,0.05)_0%,_transparent_50%)] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                {/* UPGRADED SECTION HEADER */}
                <div className="mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-brand-cyan font-mono text-[10px] tracking-[0.4em] uppercase"
                    >
                        <span className="h-[1px] w-8 bg-brand-cyan/40"></span>
                        Architectural Pillars
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
                    >
                        Strategic <span className="text-zinc-600">Foundation.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 max-w-xl text-lg font-medium"
                    >
                        Every implementation is run through a cold technical analysis to ensure long-term Competitive Advantage[cite: 6].
                    </motion.p>
                </div>

                {/* THE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full md:h-[700px]">
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
                            whileHover={{ y: -5 }}
                            className={`
                                group relative p-px rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent overflow-hidden flex flex-col justify-end transition-all duration-500
                                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${item.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
                                ${item.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                            `}
                        >
                            {/* Inner Card Content */}
                            <div className="relative h-full w-full bg-[#0a0a0a] rounded-[2.4rem] p-10 flex flex-col justify-between overflow-hidden">

                                {/* 2026 Interactive "Beam" Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),_rgba(0,229,255,0.05)_0%,_transparent_60%)] pointer-events-none" />

                                <div className="z-10 h-full flex flex-col justify-between">
                                    <div className="flex flex-col">
                                        <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-900 border border-white/5 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/5 transition-all duration-500 w-min">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[260px] md:max-w-none group-hover:text-zinc-300 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Component Content Placeholder (The Visuals) */}
                                    <div className="relative z-10">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}