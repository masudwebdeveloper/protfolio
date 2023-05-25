import { ISkill } from "../common/SKills";
type SkillType = {
  skill: ISkill;
};

const SkillCard = ({ skill }: SkillType) => {

  return (
    <div className="group text-center p-5 dark:bg-gradient-to-tr dark:from-gray-900 to-transparent backdrop-filter backdrop-blur-md shadow-md border-opacity-20 border border-white-20 rounded-lg transition duration-300 ease-in-out">
      <div className="w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center bg-gray-300 dark:bg-gray-700 shadow-lg mx-auto rounded-full my-4 border-2 border-gray-400 dark:border-gray-700 group-hover:border-pink-600 duration-300 transition-all">
        <span className="group-hover:hidden">{skill.icon}</span>
        <span className="hidden group-hover:block text-md font-bold text-pink-500">{skill.percentage}</span>
      </div>
      <h2 className="uppercase text-lg sm:text-3xl font-bold text-gray-950 dark:text-gray-200">
        {skill.name}
      </h2>
      <button className="btn-effect text-pink-500 dark:text-yellow-500">{skill.label}</button>
    </div>
  );
};

export default SkillCard;
