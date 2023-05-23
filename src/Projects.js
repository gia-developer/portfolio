import { RiBehanceFill } from "react-icons/ri";
import Title from "./components/Title";
import ProjectsCard from "./components/ProjectsCard";

const Projects = () => {
  return (
    <>
      <section className="space-y-4 p-4">
        <Title title="Projects" />
        <ul className="space-y-10 sm:grid sm:gap-x-4 sm:gap-y-10 sm:grid-cols-2 sm:space-y-0">
          <ProjectsCard icon={<RiBehanceFill size="1.2em" className="text-text-dark" />} title="Groovy Bretzelhaus" image="https://mir-s3-cdn-cf.behance.net/projects/404/35d787107002021.Y3JvcCw4MDgsNjMyLDAsMA.png" link="https://www.behance.net/gallery/107002021/Groovy-Bretzelhaus-Branding-Website" />
          <ProjectsCard icon={<RiBehanceFill size="1.2em" className="text-text-dark" />} title="Groovy Bretzelhaus" image="https://mir-s3-cdn-cf.behance.net/projects/404/35d787107002021.Y3JvcCw4MDgsNjMyLDAsMA.png" link="https://www.behance.net/gallery/107002021/Groovy-Bretzelhaus-Branding-Website" />
          <ProjectsCard icon={<RiBehanceFill size="1.2em" className="text-text-dark" />} title="Groovy Bretzelhaus" image="https://mir-s3-cdn-cf.behance.net/projects/404/35d787107002021.Y3JvcCw4MDgsNjMyLDAsMA.png" link="https://www.behance.net/gallery/107002021/Groovy-Bretzelhaus-Branding-Website" />
        </ul>
      </section>
    </>
  );
};

export default Projects;