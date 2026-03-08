import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { MousePointer2, ChevronDown, Github, Linkedin, FileText, Bot } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-highlight/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6">
                        Available for Freelance
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Building Digital <br />
                        <span className="text-gradient">Experiences</span>
                    </h1>
                    
                    <div className="text-xl md:text-2xl text-slate-400 mb-8 font-mono flex items-center">
                        <span className="mr-2">I am a</span>
                        <span className="text-accent underline decoration-accent/30 underline-offset-4">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Frontend Developer',
                                        'MERN Stack Enthusiast',
                                        'AI Explorer',
                                        'Problem Solver'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                }}
                            />
                        </span>
                    </div>

                   <p className="text-lg md:text-xl text-slate-100/70 max-w-2xl mb-10 leading-relaxed font-medium">
    I specialize in crafting high-performance, visually stunning web applications with modern technologies. 
    Currently diving deep into the world of 
    <span className="text-highlight/90 font-bold"> Agentic AI</span> and 
    <span className="text-accent/90 font-bold"> Robotic Intelligence</span>.
</p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <a 
                            href="#projects"
                            className="px-8 py-4 bg-accent hover:bg-emerald-600 text-primary font-black rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 flex items-center text-sm uppercase tracking-widest"
                        >
                            View Projects
                            <MousePointer2 className="ml-2 w-4 h-4" />
                        </a>
                        <a 
                            href="#" 
                            className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-black rounded-xl transition-all flex items-center text-sm uppercase tracking-widest group"
                        >
                            <FileText className="mr-2 w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                            Resume
                        </a>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a href="https://github.com/ahmadshahzad1424" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmad-shahzad-14f24/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <div className="h-px w-12 bg-slate-800" />
                        <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] font-bold">Connect on socials</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-white/10 p-2 glass-morphism">
                        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-800">
                             <img 
                                src={profileImg} 
                                alt="Ahmad Shahzad" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>
                    </div>
                    
                    {/* Floating cards / labels */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-10 -right-6 glass-morphism p-5 rounded-2xl hidden lg:block z-20 border-white/20 shadow-2xl"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-emerald-400 flex items-center justify-center shadow-glow">
                                <span className="text-primary text-lg font-black tracking-tighter">17+</span>
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Personal</div>
                                <div className="text-sm font-black text-white">Projects</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-slate-500">
                <span className="text-[10px] uppercase tracking-widest mb-2 font-bold">Scroll Down</span>
                <ChevronDown className="w-5 h-5" />
            </div>
        </section>
    );
};

export default Hero;
