import { Outlet, Link, NavLink } from "react-router-dom";
import { RiMenuLine, RiEmotionLaughFill, RiMedal2Fill, RiTerminalBoxFill, RiMovieFill, RiBehanceFill, RiDribbbleLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import img from "./images/gigi.jpg";

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
      <>
        <nav className="flex justify-between items-center bg-white p-4 relative">
          <button onClick={() => setOpen(!open)}>
            <RiMenuLine size="1.5em" />
          </button>
          {open &&
            <div className="bg-white z-10 absolute p-4 top-[56px] left-0 w-[60%] sm:w-[40%] h-[calc(100vh_-_56px)] flex flex-col justify-between animate__fadeInLeft">
              <div className="space-y-8">
                <div>
                  <img src={img} alt="Gianna Russo" className="w-28 h-28 rounded-full m-auto mb-2" />
                  <p className="text-center text-lg font-medium mb-1">Gianna B. Russo</p>
                  <p className="text-center mb-1">Argentina 🇦🇷</p>
                  <p className="text-center">23 years</p>
                </div>
                <ul className="space-y-4">
                  <li>
                    <NavLink 
                      to="/" 
                      className={({ isActive }) =>
                        isActive ? "flex items-center text-primary-dark" : "flex items-center"
                      } 
                      onClick={() => setOpen(!open)}
                    >
                      <RiEmotionLaughFill size="1.5em" className="mr-2" />Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/skills" 
                      className={({ isActive }) =>
                        isActive ? "flex items-center text-primary-dark" : "flex items-center"
                      } 
                      onClick={() => setOpen(!open)}
                    >
                      <RiMedal2Fill size="1.5em" className="mr-2" />Skills
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/projects" 
                      className={({ isActive }) =>
                        isActive ? "flex items-center text-primary-dark" : "flex items-center"
                      } 
                      onClick={() => setOpen(!open)}
                    >
                      <RiTerminalBoxFill size="1.5em" className="mr-2" />Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/videos" 
                      className={({ isActive }) =>
                        isActive ? "flex items-center text-primary-dark" : "flex items-center"
                      } 
                      onClick={() => setOpen(!open)}
                    >
                      <RiMovieFill size="1.5em" className="mr-2" />Videos
                    </NavLink>
                  </li>
                </ul>
              </div>
              <ul className="flex justify-center items-center space-x-4">
                <li>
                  <Link to="https://www.behance.net/gianna-russo" target="_blank">
                    <RiBehanceFill size="1.5em" />
                  </Link>
                </li>
                <li>
                  <Link to="https://dribbble.com/gianna_russo" target="_blank">
                    <RiDribbbleLine size="1.5em" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/gianna-russo/" target="_blank">
                    <RiLinkedinBoxFill size="1.5em" />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/gia-developer" target="_blank">
                    <RiGithubFill size="1.5em" />
                  </Link>
                </li>
              </ul>
            </div>
          }
        </nav>
        <Outlet />
      </>
  );
};
export default Nav;