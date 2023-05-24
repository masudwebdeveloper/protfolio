import React from "react";
import { ISkill } from "../common/SKills";
type SkillType = {
  skill: ISkill;
};

const SkillCard = ({ skill }: SkillType) => {
  console.log(skill.name);

  return (
    <div className="glass-effect group text-center p-5 group">
      <div className="w-14 h-14 flex items-center justify-center bg-gray-300 dark:bg-gray-700 shadow-lg mx-auto rounded-full my-4 border-2 border-gray-400 dark:border-gray-700 group-hover:border-pink-600 duration-300 transition-all">
        <span className="group-hover:hidden">{skill.icon}</span>
        <span className="hidden group-hover:block text-md font-bold text-pink-500">{skill.percentage}</span>
      </div>
      <h2 className="uppercase text-3xl font-bold text-gray-950 dark:text-gray-200">
        {skill.name}
      </h2>
      <button className="btn-effect">{skill.label}</button>
    </div>
  );
};

export default SkillCard;
