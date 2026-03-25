'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ExecutionEngine() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
            {/* 2026 Background Artifact: Technical Coordinates */}
            <div className="absolute top-10 left-10 font-mono text-[8px] text-zinc-800 uppercase tracking-[0.5em] vertical-text hidden lg:block">
                Engine_Sequence // 001-003
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="text-left"
                    >
                        <h2 className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.5em] mb-4 flex items-center gap-3">
                            <span className="h-px w-8 bg-brand-cyan/40"></span>
                            Metacognition
                        </h2>
                        <h3 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter">
                            Execution Engine <br />
                            <span className="text-zinc-800">Human in the Loop.</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="lg:max-w-xs text-left"
                    >
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed border-l border-zinc-800 pl-6">
                            We don't just consult; we engineer the ACLE framework—Architecture, Compliance, and Long-term Evolution.
                        </p>
                    </motion.div>
                </div>

                {/* Animated Connection Line */}
                <div className="relative">
                    <motion.div
                        style={{ scaleX }}
                        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent origin-left z-20"
                    />

                    {/* Step Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900/50 border-x border-zinc-900/50">

                        {/* 01 AUDIT */}
                        <motion.div
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                            className="relative p-12 transition-colors group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 font-mono text-[60px] text-white/[0.02] font-black group-hover:text-brand-cyan/[0.03] transition-colors leading-none">01</div>
                            <div className="relative z-10">
                                <div className="mb-12 h-1 w-12 bg-brand-cyan group-hover:w-20 transition-all duration-500"></div>
                                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">The ZFIE <span className="text-brand-cyan">Audit</span></h4>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                    Zero-Friction, Innovation, and Efficiency. We eliminate silos to ensure your data stack is production-ready for autonomous intelligence.
                                </p>
                                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></div>
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Structural Analysis</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 02 DEFENSE */}
                        <motion.div
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                            className="relative p-12 transition-colors group overflow-hidden border-y md:border-y-0 md:border-x border-zinc-900/50"
                        >
                            <div className="absolute top-0 right-0 p-4 font-mono text-[60px] text-white/[0.02] font-black leading-none">02</div>
                            <div className="relative z-10">
                                <div className="mb-12 h-1 w-12 bg-zinc-800 group-hover:bg-brand-cyan group-hover:w-20 transition-all duration-500"></div>
                                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">IP <span className="text-brand-cyan">Moat</span></h4>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                    Treating Intellectual Property as an offensive moat. We codify trade secrets and security directly into your deployment manifests.
                                </p>
                                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-brand-cyan transition-colors"></div>
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Asset Protection</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 03 SCALE */}
                        <motion.div
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                            className="relative p-12 transition-colors group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 font-mono text-[60px] text-white/[0.02] font-black leading-none">03</div>
                            <div className="relative z-10">
                                <div className="mb-12 h-1 w-12 bg-zinc-800 group-hover:bg-brand-cyan group-hover:w-20 transition-all duration-500"></div>
                                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">TCO <span className="text-brand-cyan">Scale</span></h4>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                    Total Cost of Ownership models. We bridge the gap between cloud credits and sustainable human capital burdens.
                                </p>
                                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-brand-cyan transition-colors"></div>
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Operational ROI</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Bottom Architectural Callout */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="px-6 py-2 border border-zinc-900 rounded-full bg-white/[0.01] flex items-center gap-4">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">Build vs. Buy Matrix Active</span>
                        <div className="h-3 w-px bg-zinc-800"></div>
                        <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-tighter">Ready for Initialize</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}