import { RiPlayFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ButtonPlayIcon = () => {
    return (
      <button className="p-1 rounded-full bg-primary-dark absolute -bottom-6">
        <Link to="" target="_blank">
            <RiPlayFill size="2em" color="white" />
        </Link>
      </button>
    );
  };
  
  export default ButtonPlayIcon;