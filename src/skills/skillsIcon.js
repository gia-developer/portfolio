import { RiCss3Fill, RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiTypescript, SiFigma, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const icon = (type) => {
    switch(type) {
      case 'html':
        return <RiHtml5Fill size="2.5em" className="text-[#E34626]" />;
      break;
      case 'css':
        return <RiCss3Fill size="2.5em" className="text-[#264DE4]" />;
      break;
      case 'tailwind':
        return <SiTailwindcss size="2.5em" className="text-[#38BDF8]" />;
      break;
      case 'sass':
        return <DiSass size="2.5em" className="text-[#cc6699]" />;
      break;
      case 'reactjs':
        return <RiReactjsLine size="2.5em" className="text-[#61DBFB]" />;
      break;
      case 'reactnative':
        return <TbBrandReactNative size="2.5em" className="text-[#61DBFB]" />;
      break;
      case 'typescript':
        return <SiTypescript size="2.5em" className="text-[#007acc]" />;
      break;
      case 'figma':
        return <SiFigma size="2.5em" className="text-[#e4041d]" />;
      break;
      case 'photoshop':
        return <SiAdobephotoshop size="2.5em" className="text-[#001E36]" />;
      break;
      case 'illustrator':
        return <SiAdobeillustrator size="2.5em" className="text-[#330000]" />;
      break;
    }
};

export default icon;