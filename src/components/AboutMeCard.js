const AboutMeCard = ({icon, title, text}) => {
    return (
      <li className="p-4 rounded-xl bg-white flex flex-col justify-center space-y-2">
        <h3 className="text-sm flex items-center">{icon} {title}</h3>
        <p className="text-lg font-bold text-center">{text}</p>
      </li>
    );
  };
  
  export default AboutMeCard;