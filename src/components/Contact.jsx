import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Send, Mail, Phone, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const formData = new FormData(e.target);
        formData.append('access_key', '9367ac41-27e1-4256-bdb0-b23acf04fa38');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setToast({
                    show: true,
                    message: 'Message sent successfully 🚀',
                    type: 'success',
                });
                e.target.reset();
            } else {
                setToast({
                    show: true,
                    message: 'Failed to send message ❌',
                    type: 'error',
                });
            }
        } catch (error) {
            setToast({
                show: true,
                message: 'Network error. Please try again!',
                type: 'error',
            });
        } finally {
            setStatus('');
        }
    };

    // Auto hide toast
    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                setToast((prev) => ({ ...prev, show: false }));
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toast.show]);

    return (
        <section id="contact" className="py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">

                    {/* LEFT */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 space-y-8"
                    >
                        <div>
                            <div className="flex items-center space-x-2 text-accent mb-4">
                                <Send className="w-5 h-5" />
                                <span className="font-mono text-sm tracking-widest uppercase font-bold">
                                    Contact
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold text-white">
                                Let's build <br />
                                <span className="text-slate-500">together.</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:ahmadshahzad2414@gmail.com"
                                        className="text-slate-200 hover:text-accent transition-colors font-medium"
                                    >
                                        ahmadshahzad2414@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center text-highlight">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                                        Phone / WhatsApp
                                    </p>
                                    <a
                                        href="https://wa.me/923334067991"
                                        className="text-slate-200 hover:text-highlight transition-colors font-medium"
                                    >
                                        +92 333 4067991
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex space-x-4">
                            <a
                                href="https://linkedin.com/in/ahmad-shahzad-14f24"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-slate-400 hover:text-accent border border-white/5"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/ahmadshahzad1424"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-slate-400 hover:text-white border border-white/5"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </Motion.div>

                    {/* RIGHT */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full md:w-2/3"
                    >
                        <div className="glass-morphism p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <MessageCircle size={120} />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <input
                                        name="name"
                                        required
                                        placeholder="Ahmad Shahzad"
                                        className="w-full bg-primary/50 border border-white/5 focus:border-accent/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-600 transition-colors"
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="ahmadshahzad2414@gmail.com"
                                        className="w-full bg-primary/50 border border-white/5 focus:border-accent/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-600 transition-colors"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Hello Ahmad, I want to discuss a MERN / frontend project..."
                                    className="w-full bg-primary/50 border border-white/5 focus:border-accent/50 focus:outline-none rounded-xl px-4 py-4 text-white placeholder-slate-600 resize-none transition-colors"
                                />

                                <button
                                    type="submit"
                                    className="px-10 py-4 bg-accent hover:bg-emerald-600 text-primary font-bold rounded-xl flex items-center gap-2"
                                >
                                    <span>{status || 'Send Message'}</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </Motion.div>
                </div>
            </div>

            {/* TOAST */}
            {toast.show && (
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl shadow-xl backdrop-blur-xl
                        ${
                            toast.type === 'success'
                                ? 'bg-emerald-500/90 text-white'
                                : 'bg-red-500/90 text-white'
                        }`}
                >
                    {toast.message}
                </Motion.div>
            )}
        </section>
    );
};

export default Contact;
