
import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  Cpu, 
  GraduationCap, 
  Trophy, 
  Mail, 
  Terminal, 
  Linkedin, 
  Github, 
  Gamepad2,
  BrainCircuit,
  Menu,
  X,
  FileText,
  BookOpen,
  Phone,
  Globe,
  ExternalLink,
  Award,
  Wrench,
  Download,
  Zap,
  Users,
  MessageSquare,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Data
import { USER_INFO, SKILLS, TECH_STACK, EDUCATION, PUBLICATIONS, CERTIFICATIONS, SOFT_SKILLS } from './constants';
import { Section } from './types';

// Components
import SkillBar from './components/SkillBar';
import AIChat from './components/AIChat';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Simulating a system boot sequence
    const timer = setTimeout(() => setBooted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: Section.ABOUT, label: 'IDENTITY', icon: User },
    { id: Section.EDUCATION, label: 'EDUCATION', icon: GraduationCap },
    { id: Section.SKILLS, label: 'ABILITIES', icon: Cpu },
    { id: Section.PROJECTS, label: 'PROJECTS', icon: Gamepad2 },
    { id: Section.PUBLICATIONS, label: 'ARCHIVES', icon: BookOpen },
    { id: Section.ACHIEVEMENTS, label: 'TROPHIES', icon: Trophy },
    { id: Section.CONTACT, label: 'COMMS', icon: Mail },
    { id: Section.AI_CHAT, label: 'AI LINK', icon: BrainCircuit },
  ];

  // Helper to highlight keywords in tagline
  const renderTagline = () => {
    const parts = USER_INFO.tagline.split(/(AI\/ML|XR)/g);
    return (
      <p className="text-sm md:text-base text-purple-400 font-mono tracking-widest mt-1">
        {parts.map((part, i) => {
          if (part === 'AI/ML') return <span key={i} className="text-green-400 font-bold drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">AI/ML</span>;
          if (part === 'XR') return <span key={i} className="text-green-400 font-bold drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">XR</span>;
          return <span key={i}>{part}</span>;
        })}
      </p>
    );
  };

  const getSoftSkillIcon = (index: number) => {
    switch (index) {
      case 0: return <Lightbulb size={24} className="text-yellow-400" />;
      case 1: return <Users size={24} className="text-blue-400" />;
      case 2: return <Zap size={24} className="text-purple-400" />;
      case 3: return <MessageSquare size={24} className="text-green-400" />;
      default: return <Cpu size={24} className="text-slate-400" />;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case Section.ABOUT:
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 border border-green-500/30 bg-green-900/10 p-6 rounded-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <Terminal size={200} className="text-green-500"/>
               </div>
               
               {/* Avatar Section */}
               <div className="flex-shrink-0 mx-auto md:mx-0 relative z-10">
                 <div className="relative w-32 h-32 md:w-40 md:h-40 group cursor-pointer">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500/30 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-1 rounded-full border border-green-500/50"></div>
                    <img 
                      src={USER_INFO.avatar} 
                      alt={USER_INFO.name} 
                      className="w-full h-full object-cover rounded-full p-2 transition-transform duration-500 group-hover:scale-125 relative z-10"
                    />
                 </div>
               </div>

               {/* Text Section */}
               <div className="relative z-10 flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-orbitron font-bold text-green-400 mb-4 flex items-center justify-center md:justify-start gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    SYSTEM IDENTITY
                  </h2>
                  <p className="text-slate-300 leading-relaxed font-mono">
                    {USER_INFO.about}
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="border border-purple-500/30 bg-purple-900/10 p-4 rounded-lg">
                  <h3 className="text-purple-400 font-bold mb-2">CURRENT STATUS</h3>
                  <div className="text-sm text-slate-300">
                    <p>Level 4 Undergraduate</p>
                    <p>Spec: : AI/ML, Agents, and XR </p>
                    <p>Location: {USER_INFO.location}</p>
                    <p>Status: Research Mode</p>
                  </div>
               </div>
               <div className="border border-slate-700 bg-slate-800/50 p-4 rounded-lg flex flex-col justify-center items-center gap-4">
                  <h3 className="text-slate-400 font-bold text-sm">DATA CHANNELS</h3>
                  <div className="flex gap-4">
                    <a href={USER_INFO.linkedin} target="_blank" className="p-2 bg-blue-600/20 text-blue-400 border border-blue-500 rounded hover:bg-blue-600 hover:text-white transition-all">
                      <Linkedin size={24} />
                    </a>
                    <a href={USER_INFO.github} target="_blank" className="p-2 bg-slate-600/20 text-slate-400 border border-slate-500 rounded hover:bg-slate-600 hover:text-white transition-all">
                      <Github size={24} />
                    </a>
                  </div>
                  <a 
                    href={USER_INFO.resume} 
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 border border-green-500/30 text-green-400 rounded hover:bg-green-600 hover:text-white transition-all text-xs font-bold font-orbitron tracking-wider shadow-[0_0_10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                  >
                    <Download size={16} />
                    DOWNLOAD RESUME
                  </a>
               </div>
            </div>
          </div>
        );

      case Section.SKILLS:
        return (
          <div className="space-y-12">
            
            {/* Competencies Section */}
            <div>
              <h3 className="text-lg font-orbitron text-purple-400 mb-6 border-b border-purple-500/30 pb-2 flex items-center gap-2">
                 <Cpu className="text-purple-500" /> CORE COMPETENCIES
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 p-6 border border-purple-500/30 rounded-lg">
                  <h4 className="text-sm font-bold text-slate-400 mb-4">PRIMARY PROTOCOLS (AI/Data)</h4>
                  {SKILLS.filter(s => ['AI/ML', 'Data', 'Dev'].includes(s.category)).map((skill) => (
                    <SkillBar key={skill.name} {...skill} color="purple" />
                  ))}
                </div>
                <div className="bg-slate-900/50 p-6 border border-green-500/30 rounded-lg">
                  <h4 className="text-sm font-bold text-slate-400 mb-4">SECONDARY MODULES (XR/Design)</h4>
                  {SKILLS.filter(s => !['AI/ML', 'Data', 'Dev'].includes(s.category)).map((skill) => (
                    <SkillBar key={skill.name} {...skill} color="green" />
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div>
              <h3 className="text-lg font-orbitron text-white mb-6 border-b border-slate-700 pb-2 flex items-center gap-2">
                 <BrainCircuit className="text-yellow-500" /> COGNITIVE DRIVERS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {SOFT_SKILLS.map((skill, index) => (
                   <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/40 rounded border border-slate-800 hover:border-yellow-500/30 transition-colors group">
                      <div className="p-3 bg-slate-950 rounded border border-slate-800 group-hover:border-yellow-500/50 transition-colors">
                        {getSoftSkillIcon(index)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-200 mb-1 group-hover:text-yellow-400 transition-colors">{skill.name}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{skill.description}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div>
              <h3 className="text-lg font-orbitron text-white mb-6 border-b border-slate-700 pb-2 flex items-center gap-2">
                <Wrench className="text-green-500" />
                TECHNICAL ARSENAL
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {Object.entries(TECH_STACK).map(([category, tools]) => (
                    <div key={category} className="bg-slate-900/40 p-4 rounded border border-slate-800 hover:border-green-500/30 hover:bg-slate-900/60 transition-all group">
                       <h4 className="text-green-400 font-bold mb-3 text-xs font-orbitron tracking-wide group-hover:text-green-300">{category.toUpperCase()}</h4>
                       <div className="flex flex-wrap gap-2">
                          {tools.map(tool => (
                             <span 
                               key={tool} 
                               className="px-2.5 py-1 bg-slate-950 text-slate-400 text-[11px] rounded border border-slate-800 font-mono hover:text-white hover:border-purple-500 hover:bg-purple-900/10 transition-colors cursor-default"
                             >
                               {tool}
                             </span>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        );

      case Section.PROJECTS:
        return (
          <ProjectsSection />
        );

      case Section.PUBLICATIONS:
        return (
          <div className="space-y-6">
             <div className="flex items-center gap-2 mb-6 text-green-400">
               <BookOpen className="animate-pulse" />
               <span className="font-orbitron font-bold text-xl">RESEARCH ARCHIVE</span>
             </div>
             
             <div className="grid gap-6">
               {PUBLICATIONS.map((pub, idx) => (
                 <div key={idx} className="group relative bg-slate-900/50 border border-slate-700 p-6 rounded-lg hover:border-purple-500 transition-colors">
                    {/* Decorative bits */}
                    <div className="absolute top-0 right-0 p-2 opacity-50">
                      <FileText size={40} className="text-slate-800 group-hover:text-purple-900/50 transition-colors" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors max-w-2xl">
                        {pub.title}
                      </h3>
                      <span className="text-xs font-mono text-green-500 bg-green-900/20 px-2 py-1 rounded border border-green-900">
                        {pub.date}
                      </span>
                    </div>
                    
                    <p className="text-sm font-mono text-purple-300 mb-4">{pub.conference}</p>
                    
                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4 group-hover:border-purple-500 transition-colors mb-4">
                      {pub.description}
                    </p>

                    {pub.link && (
                      <div className="flex justify-end">
                        <a 
                          href={pub.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-white border border-purple-500/30 hover:bg-purple-600/20 px-3 py-2 rounded transition-all"
                        >
                          <ExternalLink size={14} />
                          VIEW PUBLICATION
                        </a>
                      </div>
                    )}
                 </div>
               ))}
             </div>
          </div>
        );

      case Section.EDUCATION:
        return (
          <div className="space-y-6">
            <h3 className="text-green-400 font-orbitron font-bold text-xl border-b border-green-500/30 pb-2 mb-4">ACADEMIC TIMELINE</h3>
            <div className="relative pl-4 space-y-8">
               {/* Timeline Line */}
               <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-slate-800"></div>

               {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-6 group">
                  <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-purple-500 group-hover:border-green-500 group-hover:scale-125 transition-all"></div>
                  <div className="bg-slate-900/40 p-5 rounded border border-slate-800 hover:border-purple-500/50 transition-colors">
                      <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm mt-1 mb-2">
                        <span className="text-purple-400 font-mono font-bold">{edu.role}</span>
                        <span className="text-slate-600">|</span>
                        <span className="text-green-500 font-mono">{edu.date}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
             <div className="mt-10">
               <h4 className="text-slate-300 font-bold mb-6 flex items-center gap-2">
                 <Award className="text-yellow-500" size={20} /> 
                 <span className="font-orbitron">CERTIFIED MODULES</span>
               </h4>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {CERTIFICATIONS.map((cert) => (
                    <div key={cert.id} className="relative flex items-center gap-4 bg-slate-900/50 p-4 rounded border border-slate-800 hover:border-green-500/50 transition-colors group">
                       <div className="w-12 h-12 flex-shrink-0 bg-slate-950 rounded-full border border-slate-700 p-1 group-hover:border-green-500 transition-colors">
                          <img src={cert.badgeUrl} alt={cert.provider} className="w-full h-full rounded-full object-cover" />
                       </div>
                       <div className="flex-1">
                          <h5 className="font-bold text-slate-200 text-sm group-hover:text-green-400 transition-colors pr-6">{cert.name}</h5>
                          <p className="text-xs text-purple-400 font-mono">{cert.provider}</p>
                          <p className="text-[10px] text-slate-500 mt-0.5">{cert.date}</p>
                       </div>
                       
                       {cert.verificationLink && (
                         <a 
                           href={cert.verificationLink} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           title="Verify Certification"
                           className="text-slate-500 hover:text-green-400 p-1.5 hover:bg-green-900/20 rounded-full transition-all"
                         >
                           <ExternalLink size={16} />
                         </a>
                       )}
                    </div>
                 ))}
               </div>

               <div className="mt-6 flex justify-center">
                 <a 
                   href="https://www.linkedin.com/in/sumudu-ratnayake-782b90235/details/certifications/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group flex items-center gap-3 px-5 py-3 bg-slate-900 border border-slate-700 rounded hover:border-blue-500 hover:bg-blue-900/10 transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                 >
                   <Linkedin size={18} className="text-blue-500 group-hover:text-white transition-colors" />
                   <span className="text-xs font-bold text-slate-400 group-hover:text-blue-300 font-orbitron tracking-wider">
                     ACCESS FULL CERTIFICATION LOG
                   </span>
                   <ExternalLink size={14} className="text-slate-600 group-hover:text-blue-400" />
                 </a>
               </div>
             </div>
          </div>
        );

      case Section.ACHIEVEMENTS:
        return (
          <AchievementsSection />
        );

      case Section.CONTACT:
        return (
          <div className="max-w-xl mx-auto space-y-8 py-10">
            <div className="text-center">
              <h2 className="text-3xl font-orbitron text-white mb-4">ESTABLISH CONNECTION</h2>
              <p className="text-slate-400">
                Open to collaborations on Machine Learning Projects, Agentic Workflows, Knowledge Graph Construction, and Research Projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-slate-900/50 p-6 rounded border border-slate-800 flex flex-col items-center gap-3 hover:border-green-500 transition-colors group">
                  <div className="p-3 bg-green-900/20 rounded-full text-green-500 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-slate-300 font-bold text-sm">EMAIL FREQUENCY</h3>
                    <a href={`mailto:${USER_INFO.email}`} className="text-slate-400 hover:text-green-400 text-sm break-all">{USER_INFO.email}</a>
                  </div>
               </div>
               
               <div className="bg-slate-900/50 p-6 rounded border border-slate-800 flex flex-col items-center gap-3 hover:border-purple-500 transition-colors group">
                  <div className="p-3 bg-purple-900/20 rounded-full text-purple-500 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-slate-300 font-bold text-sm">VOICE CHANNEL</h3>
                    <p className="text-slate-400 text-sm">{USER_INFO.phone}</p>
                  </div>
               </div>
            </div>

            <div className="text-center pt-6">
                <a 
                  href={`mailto:${USER_INFO.email}`} 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                  <Mail /> TRANSMIT MESSAGE
                </a>
            </div>

            <div className="pt-10 border-t border-slate-800 w-full flex justify-center gap-8">
               <a href={USER_INFO.linkedin} className="text-slate-500 hover:text-blue-400 transition-colors">
                 <Linkedin size={32} />
               </a>
               <a href={USER_INFO.github} className="text-slate-500 hover:text-white transition-colors">
                 <Github size={32} />
               </a>
            </div>
          </div>
        );

      case Section.AI_CHAT:
        return (
          <div className="h-[600px] w-full">
            <AIChat />
          </div>
        );

      default:
        return null;
    }
  };

  if (!booted) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center font-mono text-green-500">
        <div className="w-64 mb-4">
           <div className="h-1 bg-green-900 w-full rounded">
             <motion.div 
               className="h-full bg-green-500 shadow-[0_0_10px_#22c55e]"
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 1.5 }}
             />
           </div>
        </div>
        <p className="animate-pulse">INITIALIZING SYSTEM...</p>
        <p className="text-xs text-green-800 mt-2">LOADING MODULES: AGENTS, KNOWLEDGE GRAPHS, XR</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-green-500/30 selection:text-green-200 flex flex-col">
      
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,18,24,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,24,0.8)_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none opacity-20"></div>

      {/* Main Layout */}
      <div className="relative z-10 container mx-auto px-4 py-6 max-w-6xl flex-grow">
        
        {/* Header HUD - Sticky for Mobile Menu Access */}
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md flex justify-between items-center mb-8 border-b-2 border-green-500/30 pb-4 pt-2">
          <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
          <div>
            <h1 className="text-3xl md:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
              {USER_INFO.name.toUpperCase()}
            </h1>
            {renderTagline()}
          </div>
          
          <button 
            className="md:hidden text-green-500 p-2 hover:bg-green-900/20 rounded transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:block text-right font-mono text-xs text-slate-500">
             <div>SYS.VER.2.1.0 (AGENTIC)</div>
             <div className="text-green-500 animate-pulse">ONLINE</div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <nav className={`
            md:w-64 flex-shrink-0 space-y-2 
            ${isMobileMenuOpen ? 'block' : 'hidden md:block'}
            md:sticky md:top-32 self-start
          `}>
             {navItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => {
                   setActiveSection(item.id);
                   setIsMobileMenuOpen(false);
                 }}
                 className={`
                   w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-bold font-orbitron tracking-wide transition-all border-l-4 text-left
                   ${activeSection === item.id 
                     ? 'bg-gradient-to-r from-purple-900/40 to-transparent border-purple-500 text-purple-300 shadow-[inset_10px_0_20px_-10px_rgba(168,85,247,0.3)]' 
                     : 'border-transparent text-slate-500 hover:text-green-400 hover:bg-slate-900 hover:border-green-500/50'}
                 `}
               >
                 <item.icon size={18} />
                 {item.label}
               </button>
             ))}

             {/* Stat Box */}
             <div className="mt-8 p-4 border border-slate-800 bg-black/40 rounded hidden md:block">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>RAM</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded mb-3">
                  <div className="bg-purple-500 h-full w-[45%]"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>GPU (TRAINING)</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded">
                  <div className="bg-green-500 h-full w-[88%]"></div>
                </div>
             </div>
          </nav>

          {/* Main Content Area */}
          <main className="flex-1 min-h-[500px]">
            <div className="bg-slate-900/30 border border-slate-800 p-1 rounded-lg backdrop-blur-sm relative">
              {/* Corner Decorations */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-green-500/50"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500/50"></div>
              
              <div className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-600">
                   <span>ROOT</span>
                   <span>/</span>
                   <span className="text-green-500">{activeSection}</span>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-black/40 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Globe className="text-purple-500 animate-pulse w-5 h-5" />
            <span className="font-orbitron font-bold text-slate-300">SUMUDU RATNAYAKE</span>
          </div>
          <p className="text-slate-600 text-xs font-mono mb-2">
            AI/ML ENGINEER // XR DEVELOPER // RESEARCHER
          </p>
          <p className="text-slate-700 text-[10px] font-mono">
            SYSTEM STATUS: ONLINE. ALL SYSTEMS NOMINAL. © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
