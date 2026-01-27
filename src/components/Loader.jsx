import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    if (onComplete) {
                        setTimeout(onComplete, 500);
                    }
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center"
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-8"
                >
                    <span className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        AHMAD<span className="text-accent underline decoration-accent/30 underline-offset-8">SHAHZAD</span>
                    </span>
                </motion.div>

                <div className="w-64 md:w-80 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                        className="absolute inset-y-0 left-0 bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
                
                <div className="mt-4 font-mono text-xs text-slate-500 tracking-[0.2em] uppercase">
                    Loading Experience {progress}%
                </div>
            </div>

            {/* Background Aesthetic Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 blur-[100px] rounded-full animate-pulse" />
        </motion.div>
    );
};

export default Loader;
