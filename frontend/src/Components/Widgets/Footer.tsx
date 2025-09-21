import { useState } from 'react';
import { footerLinks } from '../../Constants/constants';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  DiscordIcon,
  NetscanLogoIcon
} from '../../assets/svg/index';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Subscribing email: ${email}`);
      setSubscribed(true);
      setEmail('');
      
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'GitHub', href: '#', icon: GitHubIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
    { name: 'Discord', href: '#', icon: DiscordIcon },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
                <NetscanLogoIcon className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">Netscan</span>
            </div>
            <p className="max-w-xs mb-6">
              Powerful web application scanning for developers and security professionals. 
              Identify vulnerabilities and secure your applications.
            </p>
            
            {/* Newsletter subscription */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white mb-2">Stay updated</h3>
              {subscribed ? (
                <div className="bg-green-900/20 text-green-400 px-4 py-3 rounded-lg">
                  Thanks for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent flex-grow"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
            
            {/* Social links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Follow us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                      aria-label={link.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Netscan. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;