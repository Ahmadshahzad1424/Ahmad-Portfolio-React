import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Star, CheckCircle, X, Maximize2 } from 'lucide-react';

import certGeneralAgents from '../assets/certificates/general-agents.jpg';
import certAiAgentsGoogle from '../assets/certificates/ai-agents-google.jpg';
import certGeminiStudent from '../assets/certificates/gemini-student.jpg';
import certDataAnalytics from '../assets/certificates/data-analytics.jpg';
import certAiWorkshop from '../assets/certificates/ai-workshop.jpg';
import certModernAi from '../assets/certificates/Fundamentals of Modern AI – Python Level 1.jpg';
import certGeminiEducator from '../assets/certificates/Gemini Certified Student.jpg';
import certIntelliForge from '../assets/certificates/IntelliForge AI – AI-Powered Campaign Intelligence Platform for Integrated Marketing Analytics & CRM..jpg';
import certJs from '../assets/certificates/JS certification.png';

const Certificates = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const [selectedCert, setSelectedCert] = useState(null);

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedCert]);

    const certificates = [
        {
            title: "IntelliForge AI Platform",
            issuer: "IntelliForge AI",
            date: "MAR 2026",
            icon: <Star className="w-5 h-5 text-indigo-400" />,
            image: certIntelliForge,
        },
        {
            title: "JavaScript Professional",
            issuer: "JavaScript Academy",
            date: "2026",
            icon: <ShieldCheck className="w-5 h-5 text-yellow-400" />,
            image: certJs,
        },
        {
            title: "General Agents Fundamentals",
            issuer: "Panaversity",
            date: "FEB 2026",
            icon: <Award className="w-5 h-5 text-cyan-400" />,
            image: certGeneralAgents,
        },
        {
            title: "Modern AI Python Specialist",
            issuer: "Panaversity",
            date: "JUL 2025",
            icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
            image: certModernAi,
        },
        {
            title: "AI Agents Intensive",
            issuer: "Google & Kaggle",
            date: "DEC 2025",
            icon: <Star className="w-5 h-5 text-purple-400" />,
            image: certAiAgentsGoogle,
        },
        {
            title: "Gemini Certified Educator",
            issuer: "Google for Education",
            date: "DEC 2025",
            icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
            image: certGeminiEducator,
        },
        {
            title: "Gemini University Certified",
            issuer: "Google for Education",
            date: "DEC 2025",
            icon: <Award className="w-5 h-5 text-pink-400" />,
            image: certGeminiStudent,
        },
        {
            title: "Data Analytics Capstone",
            issuer: "Google Professional",
            date: "NOV 2025",
            icon: <CheckCircle className="w-5 h-5 text-blue-400" />,
            image: certDataAnalytics,
        },
        {
            title: "AI Intelligence Workshop",
            issuer: "Next Gennect HQ",
            date: "JUL 2025",
            icon: <Star className="w-5 h-5 text-amber-400" />,
            image: certAiWorkshop,
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section id="certificates" className="py-24 bg-[#0a192f] relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 mb-8 backdrop-blur-md shadow-lg"
                    >
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">Verified Credentials</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Certifications</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        A curated collection of professional qualifications, academic milestones, and technical achievements earned from global industry leaders.
                    </p>
                </div>

                <motion.div
                    ref={sectionRef}
                    variants={container}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            onClick={() => setSelectedCert(cert)}
                            className="group relative flex flex-col rounded-2xl bg-[#0c1324] border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] shadow-xl cursor-pointer"
                        >
                            {/* Glassmorphism Shine */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            {/* Card Image Wrapper */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center p-6 pb-2">
                                {/* Ambient Blur from Image */}
                                <div 
                                    className="absolute inset-0 opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-500" 
                                    style={{ backgroundImage: `url("${cert.image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                />
                                
                                <img 
                                    src={cert.image} 
                                    alt={cert.title}
                                    className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1324] via-transparent to-transparent z-20 opacity-90" />
                                
                                {/* Hover Expand Icon */}
                                <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 text-white">
                                    <Maximize2 className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 pb-6 pt-2 flex flex-col flex-1 relative z-30 justify-between">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                                        {cert.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 group-hover:text-blue-400 transition-colors">
                                            {cert.issuer}
                                        </span>
                                        <h3 className="text-[15px] font-bold text-slate-100 leading-tight group-hover:text-white transition-colors duration-300 line-clamp-2 mt-1">
                                            {cert.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                                     <span className="text-xs font-semibold text-slate-500">{cert.date}</span>
                                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                                         Click to Expand
                                         <Maximize2 className="w-3 h-3 group-hover:animate-pulse" />
                                     </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal for Enlarged Image */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/90 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl max-h-full flex flex-col justify-center items-center"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-12 right-0 sm:-right-12 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-red-400 hover:rotate-90 transition-all duration-300 backdrop-blur-md border border-white/20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Container */}
                            <div className="relative w-full rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0a192f] border border-white/10 flex items-center justify-center p-2 sm:p-4">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg rounded-b-none"
                                />
                                
                                {/* Image Footer Overlay */}
                                <div className="absolute bottom-0 inset-x-0 p-6 pt-16 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col items-center justify-end text-center pointer-events-none rounded-b-xl">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3">
                                        {selectedCert.icon}
                                        <span className="text-xs font-bold text-white uppercase tracking-widest">{selectedCert.issuer}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">{selectedCert.title}</h3>
                                    <p className="text-slate-400 text-sm font-semibold tracking-wider uppercase mt-2">{selectedCert.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
