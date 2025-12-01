import React from 'react';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            
            {/* Left Info Panel */}
            <div className="flex flex-col justify-center space-y-8">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
                    <p className="opacity-70 text-lg leading-relaxed">
                        I'm currently available for freelance work and full-time opportunities. 
                        If you have a project that needs some creative code, drop me a line.
                    </p>
                </div>

                <div className="space-y-4">
                    <a href="mailto:alex.dev@example.com" className="flex items-center gap-4 p-4 rounded-2xl bg-base-100/50 border border-white/10 hover:bg-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <div>
                            <div className="text-xs opacity-50 font-bold tracking-wider">EMAIL</div>
                            <div className="font-mono">alex.dev@example.com</div>
                        </div>
                        <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-100/50 border border-white/10">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <div className="text-xs opacity-50 font-bold tracking-wider">LOCATION</div>
                            <div className="font-mono">San Francisco, CA</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <a href="#" className="btn btn-circle btn-ghost bg-base-200 hover:bg-black hover:text-white transition-all"><Github size={20} /></a>
                    <a href="#" className="btn btn-circle btn-ghost bg-base-200 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></a>
                    <a href="#" className="btn btn-circle btn-ghost bg-base-200 hover:bg-sky-500 hover:text-white transition-all"><Twitter size={20} /></a>
                </div>
            </div>

            {/* Right Form Panel */}
            <div className="bg-base-200/30 rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-center">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-bold text-xs opacity-70">NAME</span></label>
                        <input type="text" placeholder="John Doe" className="input input-bordered bg-base-100/50 border-white/10 focus:border-primary w-full rounded-xl" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-bold text-xs opacity-70">EMAIL ADDRESS</span></label>
                        <input type="email" placeholder="john@example.com" className="input input-bordered bg-base-100/50 border-white/10 focus:border-primary w-full rounded-xl" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-bold text-xs opacity-70">MESSAGE</span></label>
                        <textarea className="textarea textarea-bordered h-32 bg-base-100/50 border-white/10 focus:border-primary rounded-xl resize-none leading-relaxed" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button className="btn btn-primary w-full rounded-xl mt-2 shadow-lg shadow-primary/20">
                        Send Message <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;