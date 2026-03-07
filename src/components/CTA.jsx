import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Send } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#112240] to-primary border border-white/10 p-12 md:p-20 text-center"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-highlight/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-8"
                        >
                            <Rocket className="w-10 h-10 text-accent" />
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                            Ready to transform your <span className="text-gradient">digital vision</span> into reality?
                        </h2>
                        
                        <p className="text-xl text-slate-300 mb-12 font-medium">
                            Whether you need a high-performance web application or an AI-driven solution, 
                            I'm here to build it with you.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a 
                                href="#contact"
                                className="px-10 py-5 bg-accent hover:bg-emerald-600 text-primary font-black rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transform hover:-translate-y-1 flex items-center text-sm uppercase tracking-[0.2em]"
                            >
                                Start a Conversation
                                <Send className="ml-3 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
