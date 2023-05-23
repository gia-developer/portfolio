import ButtonShowMoreIcon from "./ButtonShowMoreIcon";

const ProjectsCard = ({icon, title, image, link}) => {
    return (
      <li className="p-4 h-56 rounded-xl space-y-2 relative bg-center bg-cover" style={{backgroundImage: "linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.5) 100%), url(" + image + ")"}}>
        <h3 className="text-lg text-white font-bold flex justify-between items-center">
            {title}
            <span className="bg-white rounded-xl p-2 shadow-sm">{icon}</span>
        </h3>
        <ButtonShowMoreIcon link={link} />
      </li>
    );
  };
  
  export default ProjectsCard;