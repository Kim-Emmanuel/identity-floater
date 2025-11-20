import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Mail, 
  Globe, 
  Key, 
  Maximize2, 
  Minimize2,
  Activity,
  GripHorizontal,
  Github,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const FloatingCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail': return <Mail size={14} />;
      case 'globe': return <Globe size={14} />;
      case 'key': return <Key size={14} />;
      case 'github': return <Github size={14} />;
      case 'linkedin': return <Linkedin size={14} />;
      case 'whatsapp': return <MessageCircle size={14} />;
      default: return <Terminal size={14} />;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <motion.div
        drag
        // Constraints to keep it generally on screen
        dragConstraints={{ left: -window.innerWidth / 2 + 150, right: window.innerWidth / 2 - 150, top: -window.innerHeight / 2 + 100, bottom: window.innerHeight / 2 - 100 }}
        dragElastic={0.2}
        dragTransition={{ power: 0.4, timeConstant: 300 }}
        whileDrag={{ scale: 1.02, cursor: 'grabbing', boxShadow: "0 20px 50px rgba(0,0,0,0.7)" }}
        layout
        transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => !isExpanded && setIsExpanded(true)}
        className={`
          pointer-events-auto
          relative
          backdrop-blur-xl
          bg-black/80
          border border-white/10
          rounded-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          overflow-hidden
          transition-colors duration-300
          group
          ${isHovered ? 'border-cyan-500/30' : 'border-white/10'}
        `}
        style={{
          width: isExpanded ? 320 : 280,
          cursor: isExpanded ? 'default' : 'pointer'
        }}
      >
        {/* Decorative Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Drag Handle / Window Controls */}
        <div className="flex justify-between items-center px-4 pt-3 pb-1 opacity-60 hover:opacity-100 transition-opacity">
          <div className="cursor-grab active:cursor-grabbing">
            <GripHorizontal size={16} className="text-white/40 hover:text-cyan-400 transition-colors" />
          </div>
          <div className="flex gap-2">
             {/* Status Indicator */}
             <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
               <motion.div 
                 animate={{ opacity: [0.4, 1, 0.4] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                <Activity size={10} className="text-amber-400" />
               </motion.div>
               <span className="text-[9px] uppercase tracking-wider text-white/60 font-mono">
                 {PROFILE_DATA.status}
               </span>
             </div>
             <button 
               onClick={(e) => {
                 e.stopPropagation();
                 toggleExpand();
               }}
               className="text-white/40 hover:text-white transition-colors"
             >
               {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
             </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5 pt-2">
          {/* Identity Header */}
          <div className="flex items-start gap-4 mb-2">
            <div className="relative">
              <div className="w-12 h-12 rounded-lg p-[1px] bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-inner overflow-hidden">
                 <img 
                   src={PROFILE_DATA.avatarUrl} 
                   alt="Avatar" 
                   className="w-full h-full object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
                 />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-black rounded-full flex items-center justify-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="font-mono text-lg text-white font-bold tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                {PROFILE_DATA.handle}
              </h1>
              <span className="text-xs text-white/50 font-light tracking-wide">
                {PROFILE_DATA.title}
              </span>
            </div>
          </div>

          {/* Expanded Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="w-full h-[1px] bg-white/5 my-3" />
                
                <div className="space-y-2 pb-2">
                  {PROFILE_DATA.links.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-all group/link"
                    >
                      <div className="text-white/40 group-hover/link:text-cyan-400 transition-colors">
                        {getIcon(link.icon)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-white/30 font-mono tracking-wider">
                          {link.label}
                        </span>
                        <span className="text-sm text-white/80 font-mono group-hover/link:text-white truncate w-40">
                          {link.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-50" />
      </motion.div>
    </div>
  );
};

export default FloatingCard;