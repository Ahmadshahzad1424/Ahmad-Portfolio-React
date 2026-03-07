<<<<<<< HEAD
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Award, Layers } from 'lucide-react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const skillGroups = [
        {
            category: "Intelligence & Logic",
            icon: <Cpu className="w-5 h-5" />,
            skills: [
                { name: 'Python', level: 'Advanced', icon: 'https://img.icons8.com/color/50/000000/python.png' },
                { name: 'Agentic AI', level: 'Researcher', icon: 'https://img.icons8.com/plasticine/100/bot.png' },
                { name: 'Oracle SQL', level: 'Database', icon: 'https://img.icons8.com/color/48/000000/oracle-logo.png' },
                { name: 'Logic Design', level: 'Mastery', icon: 'https://img.icons8.com/fluency/48/processor.png' }
            ]
        },
        {
            category: "Core Engineering",
            icon: <Layers className="w-5 h-5" />,
            skills: [
                { name: 'React.js', level: 'Architecture', icon: 'https://img.icons8.com/color/50/000000/react-native.png' },
                { name: 'JavaScript', level: 'Mastery', icon: 'https://img.icons8.com/color/50/000000/javascript.png' },
                { name: 'MERN Stack', level: 'Full Stack', icon: 'https://img.icons8.com/color/50/000000/web.png' },
                { name: 'Tailwind', level: 'Styling', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png' }
            ]
        },
        {
            category: "Creative Systems",
            icon: <Award className="w-5 h-5" />,
            skills: [
                { name: 'Adobe PS', level: 'Visuals', icon: 'https://img.icons8.com/color/50/000000/adobe-photoshop.png' },
                { name: 'UI / UX', level: 'Product', icon: 'https://img.icons8.com/color/48/000000/interface.png' },
                { name: 'Figma', level: 'Design', icon: 'https://img.icons8.com/color/48/000000/figma--v1.png' },
                { name: 'Deployment', level: 'DevOps', icon: 'https://img.icons8.com/color/48/000000/google-cloud-platform.png' }
            ]
        }
=======
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
>>>>>>> b4864b745af08b49b6f50518f519045be4559c14
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-[#0a192f]">
            {/* Professional Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-highlight/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center space-x-3 text-accent mb-6"
                    >
                        <div className="w-10 h-px bg-accent/20" />
                        <span className="font-mono text-xs tracking-[0.4em] uppercase font-black">Technical Matrix</span>
                        <div className="w-10 h-px bg-accent/20" />
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                        Powering <span className="text-slate-500">Innovation.</span>
                    </h2>
                </div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, gIndex) => (
                        <motion.div
<<<<<<< HEAD
                            key={gIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: gIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#112240] border border-white/5 rounded-3xl p-8 hover:border-accent/20 transition-all group shadow-2xl"
=======
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl border border-white/5 bg-secondary/20 hover:bg-secondary/40 hover:border-accent/30 transition-all group flex flex-col items-center justify-center text-center relative overflow-hidden"
>>>>>>> b4864b745af08b49b6f50518f519045be4559c14
                        >
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent group-hover:scale-110 transition-transform">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-black text-white">{group.category}</h3>
                            </div>
<<<<<<< HEAD

                            <div className="space-y-4">
                                {group.skills.map((skill, sIndex) => (
                                    <div 
                                        key={sIndex}
                                        className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all group/skill"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 flex items-center justify-center grayscale group-hover/skill:grayscale-0 transition-all duration-300">
                                                <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm tracking-wide">{skill.name}</p>
                                                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{skill.level}</p>
                                            </div>
                                        </div>
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 group-hover/skill:opacity-100 transition-opacity shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                    </div>
                                ))}
=======
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
>>>>>>> b4864b745af08b49b6f50518f519045be4559c14
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-16 text-slate-500 font-mono text-xs tracking-widest"
                >
                    CONSTANTLY UPDATING STACK AS THE ECOSYSTEM EVOLVES
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;
