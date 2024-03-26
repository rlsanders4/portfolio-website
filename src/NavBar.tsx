import './home.css'
import { Outlet, NavLink } from "react-router-dom"

function NavBar() {

  return (
    <>
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="lg:flex-grow">
                <NavLink to="/" end className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 lg:inline-block lg:mt-0 hover:underline decoration-2 underline-offset-8 mr-4"}>
                    About
                </NavLink>
                <NavLink to="/NoPage" className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 lg:inline-block lg:mt-0 hover:underline decoration-2 underline-offset-8 mr-4"}>
                    Projects
                </NavLink>
                <NavLink to="/NoPage" className={({isActive}) => [ isActive ? "underline" : "" ]
                    + " block mt-4 lg:inline-block lg:mt-0 hover:underline decoration-2 underline-offset-8"}>
                    Photography
                </NavLink>
                </div>
                <div className="flex items-center flex-shrink-0">
                <svg className="fill-current h-8 w-8 mr-4" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>
                <a href="#" className="inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Contact Me</a>
                </div>
            </div>
        </nav>

        <Outlet />
    </>
  )
}

export default NavBar
