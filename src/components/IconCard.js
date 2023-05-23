const IconCard = ({title, text, institute}) => {
    return (
      <li className="p-4 rounded-xl bg-white flex flex-col justify-between space-y-4 min-w-[50%]">
        <h3 className="flex-1">{title}</h3>
        <p className="text-lg font-bold text-center">{text}</p>
        <p className="text-sm text-text-grey">{institute}</p>
      </li>
    );
  };
  
  export default IconCard;