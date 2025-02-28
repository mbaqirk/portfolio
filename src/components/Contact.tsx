import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import emailjs from 'emailjs-com';


  const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
  
      try {
        await emailjs.send(
          'service_wlf1pm6', 
          'template_eoxpvxe', 
          templateParams, 
          '-H8o3AeY12V0CQdaP'
        );
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        setSubmitStatus('error');
      }
  
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">Feel free to reach out to me for any inquiries, collaborations, or just to say hello!</p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="mr-4" size={20} />
                    <a href="mailto:workwithbaqir@gmail.com" className="hover:underline">
                      workwithbaqir@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="mr-4" size={20} />
                    <a 
                      href="https://in.linkedin.com/in/mbaqirkhan110" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="mr-4" size={20} />
                    <a 
                      href="https://github.com/mbaqirk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com
                    </a>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://in.linkedin.com/in/mbaqirkhan110" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="https://github.com/mbaqirk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href="mailto:workwithbaqir@gmail.com" 
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg">
                    There was an error sending your message. Please try again.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Your Name
      </label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Your Email
      </label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800"
      />
    </div>
  </div>
  
  <div className="mb-6">
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Subject
    </label>
    <input 
      type="text" 
      id="subject" 
      name="subject" 
      value={formData.subject}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800"
    />
  </div>
  
  <div className="mb-6">
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Message
    </label>
    <textarea 
      id="message" 
      name="message" 
      rows={5} 
      value={formData.message}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800"
    ></textarea>
  </div>
  
  <button 
    type="submit" 
    disabled={isSubmitting}
    className={`flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
  >
    {isSubmitting ? 'Sending...' : (
      <>
        <Send size={18} className="mr-2" />
        Send Message
      </>
    )}
  </button>
</form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;