import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Calculator, 
  Eye, 
  BarChart3, 
  TrendingUp, 
  BookOpen 
} from "lucide-react";

const iconMap = {
  SiJava: Code,
  SiPython: Code,
  SiHtml5: Code,
  SiCsharp: Code,
  SiMysql: Database,
  SiLinux: Code,
  Cloud: Cloud,
  SiTensorflow: Brain,
  Brain: Brain,
  Calculator: Calculator,
  Eye: Eye,
  BarChart3: BarChart3,
  TrendingUp: TrendingUp,
  BookOpen: BookOpen,
};

export default function SkillsBall({ skills }) {
  return (
    <div className="relative w-96 h-96 mx-auto perspective-1000">
      <motion.div
        className="relative w-full h-full transform-style-3d"
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Central core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-portfolio-electric-purple rounded-full flex items-center justify-center z-10">
          <Code className="w-8 h-8 text-white" />
        </div>

        {/* Skill spheres positioned in 3D space */}
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon] || Code;
          const angle = (index * 360) / skills.length;
          const radius = 140;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const z = Math.sin((angle * Math.PI) / 180) * radius;
          const y = Math.sin((index * 60 * Math.PI) / 180) * 30; // Vertical variation

          return (
            <motion.div
              key={index}
              className="absolute w-16 h-16 bg-portfolio-tertiary rounded-full border-2 border-portfolio-electric-purple/50 flex items-center justify-center cursor-pointer group"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                left: "50%",
                top: "50%",
                marginLeft: "-32px",
                marginTop: "-32px",
              }}
              whileHover={{ 
                scale: 1.2,
                backgroundColor: "#915eff",
                borderColor: "#915eff"
              }}
              animate={{ rotateY: -360 }}
              transition={{
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.2 },
                backgroundColor: { duration: 0.2 },
                borderColor: { duration: 0.2 }
              }}
            >
              <IconComponent className="w-6 h-6 text-portfolio-electric-purple group-hover:text-white transition-colors" />
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-portfolio-black-200 text-portfolio-white-100 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20">
                {skill.name}
              </div>
            </motion.div>
          );
        })}

        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-80 border border-portfolio-electric-purple/20 rounded-full"></div>
          <div className="absolute top-4 left-4 w-72 h-72 border border-portfolio-electric-purple/10 rounded-full"></div>
          <div className="absolute top-8 left-8 w-64 h-64 border border-portfolio-electric-purple/5 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
