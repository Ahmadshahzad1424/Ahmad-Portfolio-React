import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';
import fawadPrinterImg from '../assets/projects/fawad-printer.png';
import humanoidRoboticsImg from '../assets/projects/humanoid-robotics.png';
import weddingHallImg from '../assets/projects/wedding-hall.png';

const Projects = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const projects = [
        {
            title: "Fawad Printer",
            category: "Web App",
            image: fawadPrinterImg,
            link: "https://fawad-printer.web.app/",
            github: "https://github.com/Ahmadshahzad1424/Fawad-printer",
            tags: ["HTML", "CSS", "JS"],
            description: "A comprehensive web application for managing printing services, showcasing responsive design and clear user interactions.",
            accent: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "Humanoid Robotics",
            category: "Hackathon Project",
            image: humanoidRoboticsImg,
            link: "https://hackathon-i-physical-ai-humanoid-ro-tau.vercel.app",
            github: "https://github.com/Ahmadshahzad1424/Hackathon-I_-Physical-AI---Humanoid-Robotics",
            tags: ["MDX", "React", "Next.js"],
            description: "An innovative project developed during a hackathon that explores the integration of Physical AI with Humanoid Robotics, emphasizing cutting-edge tech concepts.",
            accent: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Wedding Hall",
            category: "Web App",
            image: weddingHallImg,
            link: "https://github.com/Ahmadshahzad1424/Wedding_Hall",
            github: "https://github.com/Ahmadshahzad1424/Wedding_Hall",
            tags: ["JavaScript", "HTML", "CSS"],
            description: "A digital booking platform and informational site designed specifically for a wedding hall, enabling seamless event planning and management.",
            accent: "from-emerald-500/20 to-teal-500/20"
        },
        {
            title: "Netflix Clone",
            category: "Web App",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/netflix.png",
            link: "https://netflixclonehhmad-git-main-ahmadshahzad1424s-projects.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["React", "Tailwind", "Firebase"],
            description: "A feature-rich streaming platform simulation with dynamic content fetching, user authentication, and a responsive movie browser.",
            accent: "from-red-500/20 to-orange-500/20"
        },
        {
            title: "FoodPanda Clone",
            category: "UI Design",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/FoodPanda.png",
            link: "https://food-panda-z9ws.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["HTML", "CSS", "JS"],
            description: "High-fidelity recreation of a food ordering interface focusing on pixel-perfect alignment and interactive menu navigation.",
            accent: "from-pink-500/20 to-rose-500/20"
        },
        {
            title: "Country API Explorer",
            category: "API Integration",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/Country%20API.png",
            link: "https://country-api-two-tau.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["React", "REST API"],
            description: "Real-time data visualization tool for global statistics, featuring complex filtering, searching, and detailed breakdown of nation data.",
            accent: "from-indigo-500/20 to-blue-500/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="projects" className="py-24 bg-[#0a192f] relative overflow-hidden">
             {/* Ambient Background Lights */}
             <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
             <div className="absolute top-1/3 -right-48 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
             <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 relative z-10">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 mb-6 backdrop-blur-md shadow-lg"
                        >
                            <Layers className="w-4 h-4 text-accent" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">Portfolio</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Works.</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-md text-base md:text-lg leading-relaxed hidden md:block border-l-2 border-white/10 pl-6">
                        A curation of projects ranging from pure design implementations to complex API-driven web applications.
                    </p>
                </div>

                <motion.div 
                    ref={sectionRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04] shadow-xl backdrop-blur-sm"
                        >
                            {/* Ambient Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                            
                            {/* Project Image */}
                            <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-[#0c1324]">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60" />
                                
                                {/* Overlay Top Actions */}
                                <div className="absolute top-4 right-4 flex gap-2 translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-black/50 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-colors">
                                        <Github className="w-4 h-4" />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 backdrop-blur-md border border-white/20 transition-colors shadow-glow">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Minimal Text Content */}
                            <div className="p-5 flex flex-col relative z-30">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="text-emerald-400/80 text-[9px] font-bold tracking-[0.2em] uppercase">
                                        {project.category}
                                    </span>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-400 tracking-wider">
                                    {project.tags.map((tag, i) => (
                                        <React.Fragment key={tag}>
                                            <span className="group-hover:text-slate-300 transition-colors">{tag}</span>
                                            {i < project.tags.length - 1 && <span className="text-white/20">•</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-20 text-center relative z-10">
                    <a 
                        href="https://github.com/ahmadshahzad1424" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group font-bold tracking-widest text-sm uppercase shadow-lg backdrop-blur-sm"
                    >
                        <span>View Details on GitHub</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
