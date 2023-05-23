import React from "react";
import { ISkill } from "../common/SKills";
type SkillType = {
  skill: ISkill;
};

const SkillCard = ({ skill }: SkillType) => {
  console.log(skill.name);

  return (
    <div className="glass-effect text-center p-5 group">
      <div className="w-14 h-14 flex items-center justify-center bg-gray-500 shadow-lg mx-auto rounded-full my-4 border-2 group-hover:border-pink-600 duration-300 transition-all">
        {skill.icon}
      </div>
      <h2 className="uppercase text-3xl font-bold text-gray-200">{skill.name}</h2>
      <button className="btn-effect">

            {skill.label}
      </button>

    </div>
  );
};

export default SkillCard;
