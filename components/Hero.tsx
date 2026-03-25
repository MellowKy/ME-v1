'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#050505]">
            {/* Background Mesh Pattern */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#ffffff11 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    {/* Lab Status Badge */}
                    <div className="mb-8 flex justify-center">
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan ring-1 ring-brand-cyan/30 bg-brand-cyan/5 backdrop-blur-xl">
                            <span className="relative flex h-2 w-2 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                            </span>
                            Strategic Lab // AI_MATURITY_SYNC v4.0 Active
                        </div>
                    </div>

                    <h1 className="text-6xl font-black tracking-tighter text-white sm:text-8xl lg:text-9xl uppercase leading-[0.85]">
                        Architecting<br />
                        <span className="text-brand-cyan drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">AI Maturity.</span>
                    </h1>

                    <p className="mt-8 text-lg md:text-xl leading-relaxed text-zinc-500 max-w-3xl mx-auto font-medium">
                        Beyond the experimental. Mellow Ego engineers the <span className="text-zinc-200">Strategic Frameworks</span> and
                        <span className="text-zinc-200"> Operational Workflows</span> required to transition from AI potential to
                        <span className="text-zinc-200"> Capital Efficiency</span>.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto rounded-full bg-brand-cyan px-10 py-4 text-sm font-black uppercase tracking-widest text-black shadow-[0_20px_40px_-10px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Engineer Your Strategy
                        </Link>
                        <Link href="/services/ai-education" className="group text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                            The Frameworks <span className="group-hover:translate-x-2 transition-transform duration-300 text-brand-cyan">→</span>
                        </Link>
                    </div>
                </motion.div>

                {/* The ACLE Engine Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-24 relative mx-auto max-w-6xl"
                >
                    <div className="rounded-[2.5rem] p-px bg-gradient-to-b from-white/20 to-transparent">
                        <div className="aspect-[21/9] rounded-[2.4rem] bg-[#0a0a0a] overflow-hidden relative border border-white/5 shadow-2xl">

                            {/* Dashboard Simulation */}
                            <div className="absolute inset-0 p-8 flex flex-col">
                                <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                                        </div>
                                        <div className="h-4 w-px bg-zinc-800"></div>
                                        <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">system_manifest / workflow_synthesis</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-brand-cyan animate-pulse">● LIVE_OPERATIONAL_AUDIT</div>
                                </div>

                                <div className="flex-grow grid grid-cols-3 gap-8">
                                    {/* Column 1 */}
                                    <div className="space-y-6">
                                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                            <div className="text-[9px] text-zinc-600 mb-2 uppercase font-bold tracking-tighter">Strategic_Friction_Analysis</div>
                                            <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                                                <motion.div
                                                    animate={{ x: ['-100%', '100%'] }}
                                                    transition={{ repeat: Infinity, duration: 3 }}
                                                    className="h-full w-1/3 bg-brand-cyan opacity-40"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                            <div className="text-[9px] text-zinc-600 mb-2 uppercase font-bold tracking-tighter">Workflow_Efficiency_Vector</div>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5, 6].map(i => (
                                                    <div key={i} className="h-4 w-full bg-brand-cyan/10 rounded-sm"></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Middle Main Viewport */}
                                    <div className="col-span-2 rounded-2xl bg-gradient-to-br from-brand-cyan/5 to-transparent border border-white/5 flex items-center justify-center relative group">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.1)_0%,_transparent_70%)]"></div>
                                        <span className="text-[10px] font-mono text-brand-cyan/40 tracking-[1em] uppercase group-hover:text-brand-cyan transition-colors">Synthesizing_AI_Enterprise_Logic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Decorative Glows */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-cyan/10 blur-[100px] -z-10"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-cyan/5 blur-[100px] -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
}