import ProgressBar from "./ProgressBar";

const LanguagesCard = ({level, language, size}) => {
    return (
      <li className="p-4 rounded-xl bg-white flex justify-between items-center space-x-4">
        <p className="font-bold">{level}</p>
        <p>{language}</p>
        <ProgressBar size={size} />
      </li>
    );
  };
  
  export default LanguagesCard;