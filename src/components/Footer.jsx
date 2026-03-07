import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-white/5 bg-[#0a192f] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center space-x-3 group cursor-pointer" onClick={scrollToTop}>
                        <div className="w-10 h-10 rounded-lg bg-[#112240] border border-white/10 flex items-center justify-center text-accent font-black text-xl group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                            AS
                        </div>
                        <div className="flex flex-col -space-y-1 text-left">
                            <span className="text-white font-black tracking-tighter text-xl">AHMAD</span>
                            <span className="text-slate-500 font-bold text-[10px] tracking-[0.3em] uppercase">Shahzad</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="flex space-x-8 text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
                            <a href="#contact" className="hover:text-white transition-colors">Inquiry</a>
                        </div>
                        <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.2em] mt-2">
                            © {new Date().getFullYear()} Designed & Engineered by Ahmad Shahzad
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
                    <button 
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-[#112240] border border-white/10 text-slate-400 hover:text-accent hover:border-accent/30 transition-all hover:-translate-y-1 group shadow-xl"
                    >
                        <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
