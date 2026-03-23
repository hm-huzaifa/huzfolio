'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 3000);
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <footer className="bg-surface py-24 border-t border-neutral-900" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-text mb-8">
              LET'S <span className="text-accent">BUILD</span> <br /> SOMETHING <br /> VISCERAL.
            </h2>
            <p className="text-muted text-lg max-w-md mb-12">
              Open to new opportunities and interesting projects. Let's discuss how we can work together.
            </p>
            
            <a 
              href="mailto:mhuzaifa150@gmail.com"
              className="inline-flex items-center gap-4 text-2xl font-mono text-text hover:text-accent transition-colors border-b border-neutral-700 hover:border-accent pb-2"
            >
              <Mail /> mhuzaifa150@gmail.com
            </a>
          </div>

          <div className="space-y-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-base border border-neutral-800 p-4 text-text focus:border-accent outline-none transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-base border border-neutral-800 p-4 text-text focus:border-accent outline-none transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-base border border-neutral-800 p-4 text-text focus:border-accent outline-none transition-colors" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              {statusMessage && (
                <div className={`p-4 text-sm font-mono ${
                  status === 'success' 
                    ? 'bg-green-900/20 border border-green-800 text-green-400' 
                    : 'bg-red-900/20 border border-red-800 text-red-400'
                }`}>
                  {statusMessage}
                </div>
              )}
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-text text-base font-bold uppercase tracking-widest py-4 hover:bg-accent hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-sm font-mono">© 2025 Muhammad Huzaifa. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 text-neutral-500">
            <a href="https://linkedin.com/in/hmhuzaifa" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:mhuzaifa150@gmail.com" className="hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;