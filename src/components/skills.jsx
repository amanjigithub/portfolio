import React from "react";
import { motion } from "framer-motion";
import { Code, Brain, Users } from "lucide-react";
import { textVariant, fadeIn } from "../utils/motion";
import { SkillCard } from "../components/ui";
import SkillsBall from "../components/3d/skills-ball";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";

const Skills = () => {
  // Combine all skills for the 3D ball
  const allSkills = [...skills.languages, ...skills.technologies];

  return (
    <section className="relative w-full py-20 bg-portfolio-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <h2 className="text-portfolio-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skills.
          </h2>
        </motion.div>
        
        {/* 3D Skills Ball */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          initial="hidden"
          whileInView="show"
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-portfolio-white-100 text-2xl font-bold mb-4">
              Interactive Skills Universe
            </h3>
            <p className="text-portfolio-secondary">
              Hover over the skills to explore Aman's technical expertise
            </p>
          </div>
          <SkillsBall skills={allSkills} />
        </motion.div>
        
        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 0.75)}
            initial="hidden"
            whileInView="show"
          >
            <SkillCard
              title="Languages & Tools"
              icon={<Code className="w-10 h-10 text-portfolio-electric-purple" />}
              skills={skills.languages}
            />
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", "spring", 0.6, 0.75)}
            initial="hidden"
            whileInView="show"
          >
            <SkillCard
              title="Technologies"
              icon={<Brain className="w-10 h-10 text-portfolio-electric-purple" />}
              skills={skills.technologies}
            />
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", "spring", 0.8, 0.75)}
            initial="hidden"
            whileInView="show"
          >
            <SkillCard
              title="Soft Skills"
              icon={<Users className="w-10 h-10 text-portfolio-electric-purple" />}
              skills={skills.softSkills}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
