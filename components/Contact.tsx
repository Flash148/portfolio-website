import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
        <p className="text-xl text-slate-300 mb-12">
          I'm always open to discussing new projects, opportunities, or just chatting about tech!
        </p>
        
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <a
            href="mailto:maragonrobbins@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Mail size={24} />
            <span>Email</span>
          </a>
          
          <a
            href="https://github.com/Flash148"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/michaelaragonrobbins/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="text-slate-500 text-sm">
          © 2026 Mike Robbins. Built with Next.js & TypeScript
        </div>
      </div>
    </section>
  );
}