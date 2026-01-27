import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Netflix Clone",
            category: "Web App",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/netflix.png",
            link: "https://netflixclonehhmad-git-main-ahmadshahzad1424s-projects.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["React", "Tailwind", "Firebase"]
        },
        {
            title: "FoodPanda Clone",
            category: "UI Design",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/FoodPanda.png",
            link: "https://food-panda-z9ws.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            title: "Country API Explorer",
            category: "API Integration",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/Country%20API.png",
            link: "https://country-api-two-tau.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["React", "REST API"]
        },
        {
            title: "Age Calculator",
            category: "Utility Tool",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/Age_calculator.png",
            link: "https://age-calculator-eight-smoky.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["JavaScript", "CSS"]
        },
        {
            title: "QR Code Generator",
            category: "Mini Tool",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/QR_Code_Generator.png",
            link: "https://qr-code-generator-virid-chi.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["JS", "API"]
        },
        {
            title: "Text to Speech",
            category: "Web Speech API",
            image: "https://raw.githubusercontent.com/ahmadshahzad1424/Ahmad-Shahzad-portfolio-/main/img/Text%20to%20Speech.png",
            link: "https://text-into-speech.vercel.app/",
            github: "https://github.com/ahmadshahzad1424",
            tags: ["JavaScript", "Speech API"]
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-primary border border-white/5"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-accent/20 text-accent uppercase tracking-wider">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                    <div className="flex items-center space-x-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-primary hover:bg-accent transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 block group-hover:hidden transition-all">
                                <span className="text-accent text-[10px] font-bold tracking-widest uppercase">{project.category}</span>
                                <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
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
