import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import certGeneralAgents from '../assets/certificates/general-agents.jpg';
import certAiAgentsGoogle from '../assets/certificates/ai-agents-google.jpg';
import certGeminiStudent from '../assets/certificates/gemini-student.jpg';
import certDataAnalytics from '../assets/certificates/data-analytics.jpg';
import certAiWorkshop from '../assets/certificates/ai-workshop.jpg';

const Certificates = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const certificates = [
        {
            title: "General Agents Fundamentals",
            issuer: "Panaversity",
            date: "FEB 2026",
            id: "9785",
            credentialUrl: "https://www.linkedin.com/in/ahmad-shahzad-14f24/details/certifications/",
            badge: "🤖",
            image: certGeneralAgents,
            accent: "from-blue-500 to-cyan-500",
        },
        {
            title: "Modern AI Python Specialist",
            issuer: "Panaversity",
            date: "JUL 2025",
            id: "2608",
            credentialUrl: "https://www.linkedin.com/in/ahmad-shahzad-14f24/details/certifications/",
            badge: "📈",
            accent: "from-emerald-500 to-teal-500",
        },
        {
            title: "AI Agents Intensive Course",
            issuer: "Google & Kaggle",
            date: "DEC 2025",
            credentialUrl: "https://www.linkedin.com/in/ahmad-shahzad-14f24/details/certifications/",
            badge: "🚀",
            image: certAiAgentsGoogle,
            accent: "from-indigo-600 to-purple-600",
        },
        {
            title: "Gemini Certified Educator",
            issuer: "Google for Education",
            date: "DEC 2025",
            id: "168506507",
            credentialUrl: "https://www.linkedin.com/in/ahmad-shahzad-14f24/details/certifications/",
            badge: "🎓",
            accent: "from-orange-500 to-red-500",
        },
        {
            title: "Gemini University Certified",
            issuer: "Google for Education",
            date: "DEC 2025",
            id: "168496192",
            credentialUrl: "https://www.linkedin.com/in/ahmad-shahzad-14f24/details/certifications/",
            badge: "💎",
            image: certGeminiStudent,
            accent: "from-pink-500 to-rose-500",
        },
        {
            title: "Data Analytics Capstone",
            issuer: "Google Professional",
            date: "NOV 2025",
            id: "6U1NY5R4ULH3",
            credentialUrl: "https://www.linkedin.com/in/ahmad-shahzad-14f24/details/certifications/",
            badge: "📊",
            image: certDataAnalytics,
            accent: "from-blue-600 to-blue-400",
        },
        {
            title: "AI Intelligence Workshop",
            issuer: "Next Gennect HQ",
            date: "JUL 2025",
            credentialUrl: "https://www.linkedin.com/in/ahmad-shahzad-14f24/details/certifications/",
            badge: "🧠",
            image: certAiWorkshop,
            accent: "from-yellow-400 to-amber-600",
        },
        {
            title: "Full-Stack MERN Developer",
            issuer: "SMIT Global",
            date: "2024 - 2026",
            credentialUrl: "#",
            badge: "🔥",
            accent: "from-accent to-emerald-400",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="certificates" className="py-24 bg-[#0a192f] relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Verified Credentials</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Proof of <span className="text-accent underline decoration-white/10 underline-offset-8">Expertise.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto opacity-100">
                        A curated collection of professional certifications and academic milestones earned from global industry leaders.
                    </p>
                </div>

                <motion.div
                    ref={sectionRef}
                    variants={container}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative h-[420px] rounded-2xl overflow-hidden bg-[#112240] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl"
                        >
                            {/* Dynamic Glow on Hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cert.accent} transition-opacity duration-500`} />

                            {/* Card Image Wrapper */}
                            <div className="relative h-48 w-full overflow-hidden">
                                {cert.image ? (
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${cert.accent} opacity-20 flex items-center justify-center p-8`}>
                                        <div className="text-8xl opacity-10">{cert.badge}</div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent" />
                                
                                {/* Top Badge Floating */}
                                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-2xl">
                                    {cert.badge}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 pt-2 flex flex-col h-[calc(420px-192px)]">
                                <span className={`text-[10px] font-black tracking-[0.2em] mb-2 uppercase text-accent opacity-100`}>
                                    {cert.issuer}
                                </span>
                                <h3 className="text-xl font-black text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                                    {cert.title}
                                </h3>

                                <div className="mt-auto space-y-4">
                                     <div className="flex items-center justify-between text-slate-300 font-mono text-xs">
                                        <span className="font-bold opacity-100">{cert.date}</span>
                                        {cert.id && <span className="opacity-50 text-[9px]">ID: {cert.id}</span>}
                                    </div>

                                    {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 text-white text-xs font-black uppercase tracking-widest transition-all group-hover:border-accent/40`}
                                        >
                                            Verify Link
                                            <ExternalLink className="w-3 h-3 text-accent" />
                                        </a>
                                    ) : (
                                        <div className="w-full py-3 rounded-xl bg-white/5 border border-dashed border-white/5 text-slate-500 text-xs font-bold uppercase tracking-widest text-center">
                                            Coming Soon
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
