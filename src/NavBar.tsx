import { Outlet, NavLink } from "react-router-dom"
import { useState } from 'react'; 

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="block md:hidden">
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <svg 
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              >
                <line x1="2" y1="6" x2="20" y2="6" />
                <line x1="2" y1="12" x2="20" y2="12" />
                <line x1="2" y1="18" x2="20" y2="18" />
            </svg>
            </button>
        </div>

        <div className={isOpen ? "showMenuNav bg-black" : "hidden" }>
        <div className="absolute top-0 left-0 mx-6 my-7">
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
        </div>
        <div className="flex flex-col items-center justify-between min-h-[200px]">
                  <NavLink to="/" end className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 hover:underline decoration-2 underline-offset-8"}
                    onClick={() => setIsOpen(!isOpen)}>
                    About
                </NavLink>

                <NavLink to="/projects" className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 hover:underline decoration-2 underline-offset-8"}
                    onClick={() => setIsOpen(!isOpen)}>
                    Projects
                </NavLink>

                <NavLink to="/photography" className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 hover:underline decoration-2 underline-offset-8"}
                    onClick={() => setIsOpen(!isOpen)}>
                    Photography
                </NavLink>
        </div>
        </div>

                <div className="DESKTOP hidden w-full flex-grow md:flex md:items-center md:w-auto text-md mr-4">

                <NavLink to="/" end className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 md:inline-block md:mt-0 mr-4 hover:underline decoration-2 underline-offset-8"}>
                    About
                </NavLink>

                <NavLink to="/projects" className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 md:inline-block md:mt-0 mr-4 hover:underline decoration-2 underline-offset-8"}>
                    Projects
                </NavLink>

                <NavLink to="/photography" className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 md:inline-block md:mt-0 mr-4 hover:underline decoration-2 underline-offset-8"}>
                    Photography
                </NavLink>

                </div>
                <div className="flex items-center flex-shrink-0">
                <a href="https://www.linkedin.com/in/ralph-sanders-3b1704177" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2">
                    <svg className="fill-current h-8 w-8" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>
                </a>
                <a href="/contact-me" className="inline-block px-4 py-2  border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white">Contact Me</a>
                </div>
        </nav>
        <style>{`
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin: 0;
      }
    `}</style>

        <Outlet />
    </>
  )
}

export default NavBar
