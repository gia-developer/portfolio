import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ButtonShowMoreIcon = ({link}) => {
    return (
      <button className="p-2 rounded-full bg-primary-dark absolute -bottom-6">
        <Link to={link} target="_blank">
            <RiArrowRightSLine size="2em" color="white" />
        </Link>
      </button>
    );
  };
  
  export default ButtonShowMoreIcon;