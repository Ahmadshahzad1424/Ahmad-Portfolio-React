import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, 
    SiPython, SiMongodb, SiOracle, SiAdobephotoshop 
} from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <SiHtml5 className="w-10 h-10 text-[#E34F26]" />, level: '95%' },
        { name: 'CSS3', icon: <SiCss3 className="w-10 h-10 text-[#1572B6]" />, level: '90%' },
        { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10 text-[#F7DF1E]" />, level: '85%' },
        { name: 'React', icon: <SiReact className="w-10 h-10 text-[#61DAFB]" />, level: '80%' },
        { name: 'Python', icon: <SiPython className="w-10 h-10 text-[#3776AB]" />, level: '75%' },
        { name: 'MERN Stack', icon: <SiMongodb className="w-10 h-10 text-[#47A248]" />, level: '70%' },
        { name: 'Oracle SQL', icon: <SiOracle className="w-10 h-10 text-[#F80000]" />, level: '65%' },
        { name: 'Adobe PS', icon: <SiAdobephotoshop className="w-10 h-10 text-[#31A8FF]" />, level: '80%' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
            
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16 px-6">
                    <div className="flex items-center space-x-2 text-accent mb-4">
                        <Cpu className="w-5 h-5" />
                        <span className="font-mono text-sm tracking-widest uppercase font-bold">Tech Stack</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
                        Modern Tools for <br />
                        <span className="text-slate-500">Modern Solutions.</span>
                    </h2>
                </div>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl border border-white/5 bg-secondary/20 hover:bg-secondary/40 hover:border-accent/30 transition-all group flex flex-col items-center justify-center text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-mono text-accent">{skill.level}</span>
                            </div>
                            <div className="w-16 h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                                {skill.icon}
                            </div>
                            <h3 className="text-white font-bold tracking-wide">{skill.name}</h3>
                            <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-accent/40"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
