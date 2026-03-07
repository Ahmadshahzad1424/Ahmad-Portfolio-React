import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavLinkClick = (href) => {
        setIsOpen(false);
        // Small delay to let menu close before scrolling
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-morphism' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-3 cursor-pointer group"
                    onClick={() => handleNavLinkClick('#home')}
                >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary font-black text-xl shadow-glow group-hover:scale-110 transition-transform">
                        AS
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className="text-white font-black tracking-tighter text-xl">AHMAD</span>
                        <span className="text-slate-500 font-bold text-[10px] tracking-[0.3em] uppercase">Shahzad</span>
                    </div>
                </motion.div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-accent transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4 border-l border-white/10 pl-4">
                        <a href="https://github.com/ahmadshahzad1424" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/ahmad-shahzad-14f24" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-1 rounded-md focus:outline-none"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <X size={28} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <Menu size={28} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile menu overlay — uses clipping trick instead of height:auto */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, scaleY: 0, originY: 0 }}
                        animate={{ opacity: 1, scaleY: 1, originY: 0 }}
                        exit={{ opacity: 0, scaleY: 0, originY: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="md:hidden glass-morphism border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavLinkClick(link.href);
                                    }}
                                    className="text-lg font-medium text-slate-300 hover:text-accent transition-colors py-1"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-4 pt-2 border-t border-white/10">
                                <a href="https://github.com/ahmadshahzad1424" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                                </a>
                                <a href="https://linkedin.com/in/ahmad-shahzad-14f24" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
