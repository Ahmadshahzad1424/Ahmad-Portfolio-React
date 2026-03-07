import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationCard = ({ item, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div ref={ref} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-16 last:mb-0">
            {/* Timeline element */}
            <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 h-full top-0">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-primary shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10" />
                <div className="w-px h-full bg-slate-800" />
            </div>

            {/* Content Card - Full width, short height rectangle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex-1 w-full bg-[#112240] hover:bg-[#1a3060] border border-white/10 hover:border-accent/40 rounded-lg p-6 md:p-8 transition-all group overflow-hidden relative shadow-2xl`}
            >
                {/* Background numbers or icons */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                     <GraduationCap className="w-32 h-32 text-white" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 relative z-10">
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                             <span className="text-accent font-bold text-sm md:text-base tracking-[0.2em] uppercase font-mono bg-accent/10 px-3 py-1 rounded">
                                {item.period}
                            </span>
                            <div className="h-px w-8 bg-slate-700 hidden md:block" />
                            <p className="text-slate-200 text-lg md:text-xl font-bold tracking-tight">
                                {item.institution}
                            </p>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black text-white group-hover:text-accent transition-colors">
                            {item.title}
                        </h3>
                    </div>
                    
                    <div className="max-w-md">
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

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
        <section id="education" className="py-24 bg-[#0a192f] px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center mb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-3 text-accent mb-6"
                    >
                        <div className="w-8 h-px bg-accent/30" />
                        <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-black">Academic Journey</span>
                        <div className="w-8 h-px bg-accent/30" />
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight text-center">
                        Education & <span className="text-slate-400">Milestones.</span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <EducationCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
