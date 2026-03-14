import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Fawad Printer",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1612815154858-60aa4c59acea?q=80&w=1000&auto=format&fit=crop",
            link: "https://fawad-printer.web.app/",
            github: "https://github.com/Ahmadshahzad1424/Fawad-printer",
            tags: ["HTML", "CSS", "JS"],
            description: "A comprehensive web application for managing printing services, showcasing responsive design and clear user interactions."
        },
        {
            title: "Humanoid Robotics",
            category: "Hackathon Project",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
            link: "https://hackathon-i-physical-ai-humanoid-ro-tau.vercel.app",
            github: "https://github.com/Ahmadshahzad1424/Hackathon-I_-Physical-AI---Humanoid-Robotics",
            tags: ["MDX", "React", "Next.js"],
            description: "An innovative project developed during a hackathon that explores the integration of Physical AI with Humanoid Robotics, emphasizing cutting-edge tech concepts."
        },
        {
            title: "Wedding Hall",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
            link: "https://github.com/Ahmadshahzad1424/Wedding_Hall",
            github: "https://github.com/Ahmadshahzad1424/Wedding_Hall",
            tags: ["JavaScript", "HTML", "CSS"],
            description: "A digital booking platform and informational site designed specifically for a wedding hall, enabling seamless event planning and management."
        },
        {
            title: "Netflix Clone",
            category: "Web App",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/netflix.png",
            link: "https://netflixclonehhmad-git-main-ahmadshahzad1424s-projects.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["React", "Tailwind", "Firebase"],
            description: "A feature-rich streaming platform simulation with dynamic content fetching, user authentication, and a responsive movie browser."
        },
        {
            title: "FoodPanda Clone",
            category: "UI Design",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/FoodPanda.png",
            link: "https://food-panda-z9ws.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["HTML", "CSS", "JS"],
            description: "High-fidelity recreation of a food ordering interface focusing on pixel-perfect alignment and interactive menu navigation."
        },
        {
            title: "Country API Explorer",
            category: "API Integration",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/Country%20API.png",
            link: "https://country-api-two-tau.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["React", "REST API"],
            description: "Real-time data visualization tool for global statistics, featuring complex filtering, searching, and detailed breakdown of nation data."
        }
    ];

    return (
        <section id="projects" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-6">
                    <div>
                        <div className="flex items-center space-x-2 text-accent mb-4">
                            <Layers className="w-5 h-5" />
                            <span className="font-mono text-sm tracking-widest uppercase font-bold">Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Selected <span className="text-slate-500">Works.</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-md hidden md:block">
                        A curation of projects ranging from pure design implementations to complex API-driven web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-[500px] overflow-hidden rounded-3xl bg-[#112240] border border-white/5 hover:border-accent/30 transition-all duration-500 shadow-2xl"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                                
                                {/* Overlay Badges */}
                                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                    {project.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[10px] font-black px-3 py-1 transparent-glass rounded-lg text-white uppercase tracking-widest border border-white/10 backdrop-blur-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Project Content */}
                            <div className="p-8 flex flex-col flex-1 relative">
                                <span className="text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-black text-white group-hover:text-accent transition-colors mb-4 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                    {project.description || "A high-performance implementation focusing on scalability and modern user experience patterns."}
                                </p>

                                {/* Action Bar - Hidden initially, Slides up on hover */}
                                <div className="mt-auto flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="flex items-center space-x-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-accent text-primary hover:bg-emerald-400 transition-all shadow-glow hover:scale-110">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all border border-white/10 hover:scale-110">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Case Study</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a 
                        href="https://github.com/ahmadshahzad1424" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-400 hover:text-white transition-colors group"
                    >
                        <span className="border-b border-slate-700 group-hover:border-white transition-all pb-1">See more on GitHub</span>
                        <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
