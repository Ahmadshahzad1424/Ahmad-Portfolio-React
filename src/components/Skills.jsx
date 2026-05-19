import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Award, Layers } from 'lucide-react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skillGroups = [
        {
            category: "Intelligence & Logic",
            icon: <Cpu className="w-5 h-5" />,
            skills: [
                { name: 'Python', level: 'Advanced', icon: 'https://img.icons8.com/color/50/000000/python.png' },
                { name: 'Agentic AI / RAG', level: 'Architecture', icon: 'https://img.icons8.com/plasticine/100/bot.png' },
                { name: 'LLMs (Groq, Claude)', level: 'Integration', icon: 'https://img.icons8.com/fluency/48/artificial-intelligence.png' },
                { name: 'Machine Learning', level: 'CodeAlpha', icon: 'https://img.icons8.com/fluency/48/combo-chart.png' }
            ]
        },
        {
            category: "Core Engineering",
            icon: <Layers className="w-5 h-5" />,
            skills: [
                { name: 'React.js / Next.js', level: 'Frontend', icon: 'https://img.icons8.com/color/50/000000/react-native.png' },
                { name: 'JavaScript / TS', level: 'Mastery', icon: 'https://img.icons8.com/color/50/000000/javascript.png' },
                { name: 'SQLite / WAL mode', level: 'Backend', icon: 'https://img.icons8.com/color/50/000000/database.png' },
                { name: 'WebSockets', level: 'Real-time', icon: 'https://img.icons8.com/color/50/000000/network.png' }
            ]
        },
        {
            category: "Creative Systems",
            icon: <Award className="w-5 h-5" />,
            skills: [
                { name: 'Tailwind CSS', level: 'Styling', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png' },
                { name: 'Framer Motion', level: 'Animations', icon: 'https://img.icons8.com/fluency/48/video-trimming.png' },
                { name: 'UI / UX Design', level: 'Product', icon: 'https://img.icons8.com/color/48/000000/interface.png' },
                { name: 'Deployment (Vercel)', level: 'DevOps', icon: 'https://img.icons8.com/color/48/000000/server.png' }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-[#0a192f]">
            {/* Professional Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-highlight/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center space-x-3 text-accent mb-6"
                    >
                        <div className="w-10 h-px bg-accent/20" />
                        <span className="font-mono text-xs tracking-[0.4em] uppercase font-black">Technical Matrix</span>
                        <div className="w-10 h-px bg-accent/20" />
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                        Powering <span className="text-slate-500">Innovation.</span>
                    </h2>
                </div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, gIndex) => (
                        <motion.div
                            key={gIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: gIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#112240] border border-white/5 rounded-3xl p-8 hover:border-accent/20 transition-all group shadow-2xl"
                        >
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:scale-110 transition-transform">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-black text-white">{group.category}</h3>
                            </div>
                            <div className="space-y-4">
                                {group.skills.map((skill, sIndex) => (
                                    <div 
                                        key={sIndex}
                                        className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group/skill"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 flex items-center justify-center grayscale group-hover/skill:grayscale-0 transition-all duration-300">
                                                <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm tracking-wide">{skill.name}</p>
                                                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{skill.level}</p>
                                            </div>
                                        </div>
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 group-hover/skill:opacity-100 transition-opacity shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-16 text-slate-500 font-mono text-xs tracking-widest"
                >
                    CONSTANTLY UPDATING STACK AS THE ECOSYSTEM EVOLVES
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;
