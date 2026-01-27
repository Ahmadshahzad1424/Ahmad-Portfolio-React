import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-primary">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <span className="text-xl font-bold tracking-tighter text-white">AHMAD</span>
                    <span className="text-accent ml-1 uppercase font-mono text-sm">Shahzad</span>
                </div>
                <p className="text-slate-500 text-sm font-medium">
                    © {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind.
                </p>
                <div className="flex space-x-6 text-slate-500 text-sm font-mono uppercase tracking-widest">
                    <a href="#home" className="hover:text-accent transition-colors">Home</a>
                    <a href="#projects" className="hover:text-accent transition-colors">Work</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
