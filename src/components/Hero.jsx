import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { MousePointer2, ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.png';

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
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
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

                    <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
                        I specialize in crafting high-performance, visually stunning web applications with modern technologies. 
                        Currently diving deep into the world of Agentic AI and Robotic Intelligence.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="#projects"
                            className="px-8 py-4 bg-accent hover:bg-emerald-600 text-primary font-bold rounded-lg transition-all transform hover:-translate-y-1 flex items-center"
                        >
                            View Projects
                            <MousePointer2 className="ml-2 w-5 h-5" />
                        </a>
                        <a 
                            href="#contact"
                            className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-lg transition-all"
                        >
                            Contact Me
                        </a>
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
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute -top-6 -right-6 glass-morphism p-4 rounded-lg hidden lg:block"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                <span className="text-accent text-xl font-bold">17+</span>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Personal</div>
                                <div className="text-sm font-bold text-white">Projects</div>
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
