import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
    const details = [
        { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Peshawar, Pakistan' },
        { icon: <GraduationCap className="w-5 h-5" />, label: 'Specialization', value: 'Agentic Intelligence' },
        { icon: <Calendar className="w-5 h-5" />, label: 'Status', value: 'Active Academic Researcher' },
    ];

    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <div className="flex items-center space-x-2 text-accent">
                            <User className="w-5 h-5" />
                            <span className="font-mono text-sm tracking-widest uppercase font-bold">About Me</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Crafting pixels, <br />
                            <span className="text-slate-500">Mastering logic.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Hey, I'm <strong>Ahmad Shahzad</strong> — a curious mind with a keyboard. I'm not just coding pixels; 
                            I'm crafting smooth, responsive interfaces that users love. 
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Currently pursuing <strong>BS in Artificial Intelligence</strong> (2023–2027) at the 
                            University of Agriculture Peshawar, I fuse creativity with logic, one project at a time. 
                            From <em>Divine Coders</em> to <strong>PIAIC</strong>, my mission is clear: create beautiful 
                            things that solve real problems.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            {details.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{item.label}</p>
                                        <p className="text-slate-200 font-medium">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="h-64 rounded-2xl bg-gradient-to-br from-accent/20 to-primary border border-white/5 p-8 flex flex-col justify-end group hover:border-accent/30 transition-all shadow-xl hover:shadow-accent/5">
                                    <h4 className="text-2xl font-black text-white group-hover:text-accent transition-colors">Architect</h4>
                                    <p className="text-sm text-slate-400 font-medium">Designing systems that last</p>
                                </div>
                                <div className="h-40 rounded-2xl bg-[#112240] border border-white/5 flex items-center justify-center group hover:scale-[1.02] transition-transform">
                                    <span className="text-accent text-5xl font-black tracking-tighter opacity-80 group-hover:opacity-100">LLM</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-40 rounded-2xl bg-highlight/10 border border-white/5 flex items-center justify-center group hover:scale-[1.02] transition-transform">
                                    <span className="text-highlight text-5xl font-black tracking-tighter opacity-80 group-hover:opacity-100">AI</span>
                                </div>
                                <div className="h-64 rounded-2xl bg-gradient-to-tr from-[#112240] to-primary border border-white/5 p-8 flex flex-col justify-end group hover:border-highlight/30 transition-all shadow-xl hover:shadow-highlight/5">
                                    <h4 className="text-2xl font-black text-white group-hover:text-highlight transition-colors">Full Stack</h4>
                                    <p className="text-sm text-slate-400 font-medium">Bridging Frontend & Logic</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
