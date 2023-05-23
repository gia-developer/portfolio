import ButtonPlayIcon from "./ButtonPlayIcon";

const VideosCard = ({icon, title}) => {
    return (
      <li className={`p-4 h-80 rounded-xl space-y-2 bg-primary-light relative`}>
        <h3 className="text-lg text-white font-bold">{title}</h3>
        <ButtonPlayIcon />
      </li>
    );
  };
  
  export default VideosCard;