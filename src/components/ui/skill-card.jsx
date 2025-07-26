import React from "react";
import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Calculator, 
  Eye, 
  BarChart3, 
  TrendingUp, 
  BookOpen, 
  Lightbulb, 
  Clock, 
  Users, 
  MessageCircle 
} from "lucide-react";

const iconMap = {
  SiJava: <Code className="w-5 h-5 text-portfolio-electric-purple" />,
  SiPython: <Code className="w-5 h-5 text-portfolio-electric-purple" />,
  SiHtml5: <Code className="w-5 h-5 text-portfolio-electric-purple" />,
  SiCsharp: <Code className="w-5 h-5 text-portfolio-electric-purple" />,
  SiMysql: <Database className="w-5 h-5 text-portfolio-electric-purple" />,
  SiLinux: <Code className="w-5 h-5 text-portfolio-electric-purple" />,
  Cloud: <Cloud className="w-5 h-5 text-portfolio-electric-purple" />,
  SiTensorflow: <Brain className="w-5 h-5 text-portfolio-electric-purple" />,
  Brain: <Brain className="w-5 h-5 text-portfolio-electric-purple" />,
  Calculator: <Calculator className="w-5 h-5 text-portfolio-electric-purple" />,
  Eye: <Eye className="w-5 h-5 text-portfolio-electric-purple" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-portfolio-electric-purple" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-portfolio-electric-purple" />,
  BookOpen: <BookOpen className="w-5 h-5 text-portfolio-electric-purple" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-portfolio-electric-purple" />,
  Clock: <Clock className="w-5 h-5 text-portfolio-electric-purple" />,
  Users: <Users className="w-5 h-5 text-portfolio-electric-purple" />,
  MessageCircle: <MessageCircle className="w-5 h-5 text-portfolio-electric-purple" />,
};

export function SkillCard({ title, icon, skills }) {
  return (
    <div className="bg-portfolio-tertiary p-8 rounded-3xl card-hover shadow-card">
      <div className="mb-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-portfolio-white-100 text-[24px] font-bold">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3">
            {iconMap[skill.icon] || <Code className="w-5 h-5 text-portfolio-electric-purple" />}
            <span className="text-portfolio-white-100">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
