import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
    const education = [
        {
            title: "BS Artificial Intelligence",
            institution: "University of Agriculture Peshawar",
            period: "2023 – 2027",
            desc: "Focusing on Machine Learning, Agentic AI, and full-stack development. Exploring the bridge between human logic and robotic intelligence.",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            title: "MERN Stack Development",
            institution: "SMIT (Saylani Mass IT Training)",
            period: "2024 – 2026",
            desc: "Advanced training in MongoDB, Express.js, React, and Node.js. Mastering modern web architecture and deployment.",
            icon: <Award className="w-6 h-6" />
        },
        {
            title: "PIAIC Certification",
            institution: "Presidential Initiative for AI & Computing",
            period: "2023",
            desc: "Immersive program in Web Development and AI fundamentals, sparking the journey into high-performance computing.",
            icon: <BookOpen className="w-6 h-6" />
        }
    ];

    return (
        <section id="education" className="py-24 bg-primary px-6 overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col items-center mb-20">
                    <div className="flex items-center space-x-2 text-accent mb-4">
                        <GraduationCap className="w-5 h-5" />
                        <span className="font-mono text-sm tracking-widest uppercase font-bold">Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center">
                        Education & <span className="text-slate-500">Milestones.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:flex-row`}>
                                {/* Left/Right Content Card */}
                                <motion.div 
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`w-full md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                                >
                                    <div className={`p-8 rounded-2xl glass-morphism border border-white/5 hover:border-accent/30 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-left`}>
                                        <span className="text-accent text-sm font-bold tracking-widest font-mono">{item.period}</span>
                                        <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
                                        <p className="text-slate-400 font-medium mt-1">{item.institution}</p>
                                        <p className="text-slate-500 mt-4 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>

                                {/* Dot on Timeline */}
                                <div className="absolute left-4 md:left-1/2 top-10 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                                    <div className="w-8 h-8 rounded-full bg-secondary border-2 border-accent flex items-center justify-center p-1">
                                        <div className="w-full h-full rounded-full bg-accent animate-pulse opacity-50" />
                                        <div className="absolute w-2 h-2 rounded-full bg-accent" />
                                    </div>
                                </div>
                                
                                {/* Empty space for alternating layout */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
