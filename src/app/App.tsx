import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

// Import the user's profile image
import profileImage from 'figma:asset/33515fe8bf0fb0ab1236be412f3fdeaf9d5bd105.png';

// Custom Icons for brands not in Lucide or specific styling
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5382-9.6752-3.5685-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.004 0C5.378 0 0 5.374 0 11.996c0 6.626 5.374 12 12.004 12 6.622 0 11.996-5.374 11.996-12 0-6.626-5.374-11.996-11.996-11.996zm6.816 16.912c-.28.468-1.156 1.056-2.184.908-.592-.084-1.108-.344-1.596-.344-.452 0-.828.2-1.168.452-.304.224-2.812 2.228-3.056 2.204-.156-.016-.3-.396-.344-.544-.224-.752 1.624-2.58 1.48-3.28-.052-.256-.376-.36-1.072-.256-.412.064-.9.232-1.3.432-.108.052-.224.032-.26-.076-.02-.068-.008-.14.04-.196.388-.44 1.144-1.04 1.144-1.604 0-.328-.316-.768-1.028-.768-.26 0-.5.06-.712.18-.112.064-.244.028-.3-.08-.028-.056-.016-.12.032-.164.216-.204.604-.468.56-.84-.044-.38-.572-.516-1.1-.648-.28-.072-.656-.168-.66-.464-.004-.204.22-.36.42-.5.536-.376.552-.696.552-.92 0-1.824 1.356-3.804 3.844-3.804 2.508 0 3.792 1.948 3.792 3.804 0 .224.016.544.552.92.2.14.424.296.42.5-.004.296-.38.392-.66.464-.528.132-1.056.268-1.1.648-.044.372.344.636.56.84.048.044.06.108.032.164-.056.108-.188.144-.3.08-.212-.12-.452-.18-.712-.18-.712 0-1.028.44-1.028.768 0 .564.756 1.164 1.144 1.604.048.056.06.128.04.196-.036.108-.152.128-.26.076-.4-.2-.888-.368-1.3-.432-.696-.104-1.02.004-1.072.256-.144.7 1.704 2.528 1.48 3.28-.044.148-.188.528-.344.544-.244.024-2.752-1.98-3.056-2.204-.34-.252-.716-.452-1.168-.452-.488 0-1.004.26-1.596.344-1.028.148-1.904-.44-2.184-.908-.172-.284-.624-.308-.752.02-.072.184.032.484.252.664.236.196.488.292.736.292.512 0 .916-.404 1.252-1.228.144-.348.616-.408.828-.108z" />
  </svg>
);


interface LinkItem {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialLinks: LinkItem[] = [
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    url: 'https://github.com/khanh0ssen',
  },
  {
    name: 'Linkedin',
    icon: <Linkedin className="w-6 h-6" />,
    url: '#', // Intentionally empty as per user request
  },
  {
    name: 'X',
    icon: <XIcon className="w-5 h-5" />, // Custom X Icon
    url: 'https://x.com/khanh0ssen',
  },
  {
    name: 'Discord',
    icon: <DiscordIcon className="w-6 h-6" />,
    url: '#', // No URL provided
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://www.instagram.com/khan_h0ssen',
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    url: 'https://www.facebook.com/khanh0ssen',
  },
  {
    name: 'Telegram',
    icon: <TelegramIcon className="w-6 h-6" />,
    url: 'https://t.me/khanh0ssen',
  },
  {
    name: 'Snapchat',
    icon: <SnapchatIcon className="w-6 h-6" />,
    url: 'https://www.snapchat.com/add/khan_h0ssen',
  },
  {
    name: 'Mail',
    icon: <Mail className="w-6 h-6" />,
    url: 'mailto:hossenkhan828@gmail.com',
  },
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#050011] text-white flex flex-col items-center py-10 px-4 relative overflow-hidden font-sans">
      
      {/* Background Grid Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
          transform: 'perspective(500px) rotateX(20deg) scale(1.5)',
          transformOrigin: 'top center',
        }}
      />
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-purple-900/20 blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* Profile Image */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-purple-600 blur-md opacity-50"></div>
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/50 relative z-10 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <img 
              src={profileImage} 
              alt="Hossen Khan" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl font-light mb-8 text-purple-100 tracking-wide"
        >
          Stay connected with me
        </motion.h1>

        {/* Links Container */}
        <div className="w-full flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.url !== '#' && !link.url.startsWith('mailto') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.3, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(168, 85, 247, 0.15)",
                borderColor: "rgba(192, 132, 252, 0.8)",
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex items-center p-4 rounded-xl border border-purple-900/50 bg-black/40 backdrop-blur-sm
                transition-all duration-300 group relative overflow-hidden
                ${link.url === '#' ? 'cursor-default opacity-80' : 'cursor-pointer'}
              `}
              onClick={(e) => link.url === '#' && e.preventDefault()}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent z-0 pointer-events-none" />

              {/* Icon Container */}
              <div className="p-2 rounded-lg bg-purple-900/30 text-purple-300 group-hover:text-white group-hover:bg-purple-600/50 transition-colors mr-4 z-10">
                {link.icon}
              </div>

              {/* Text */}
              <span className="text-lg font-medium text-gray-200 group-hover:text-white z-10 tracking-wide">
                {link.name}
              </span>

              {/* Right decorative glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500/0 group-hover:bg-purple-500/20 blur-xl rounded-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 text-xs text-gray-500 text-center"
        >
          <p>© 2026 Hossen Khan. All rights reserved.</p>
        </motion.footer>

      </div>
      
      {/* Global Styles for Shimmer */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
