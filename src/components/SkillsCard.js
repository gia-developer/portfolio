import ProgressBar from "./ProgressBar";

const SkillsCard = ({icon, title, text, size}) => {
    return (
      <li className="p-4 rounded-xl bg-white flex flex-col justify-center w-40 sm:w-auto">
        {icon}
        <div className="mt-6 space-y-2">
            <h3 className="text-sm flex items-center">{title}</h3>
            <p className="text-xl font-bold">{text}</p>
            <ProgressBar size={size} />
        </div>
      </li>
    );
  };
  
  export default SkillsCard;