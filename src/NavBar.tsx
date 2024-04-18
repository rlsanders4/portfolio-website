import { Outlet, NavLink } from "react-router-dom"
import { useState } from 'react'; 

function NavBar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const email: string = "rlsanders4@gmail.com"

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6">
        {/* Display the hamburger menu icon on mobile displays*/}
        <div className="block md:hidden">
          <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-gray-200">
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
        {/* Display the pop-up menu when the hamburger icon is clicked*/}
        <div className={mobileMenuOpen ? "bg-black fixed w-full h-full top-0 left-0 z-10 flex flex-col m-0 center justify-evenly items-center" : "hidden" }>
          <div className="absolute top-0 left-0 mx-6 my-7">
            <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="flex flex-col items-center justify-between min-h-32">
            <NavLink to="/" end className={({isActive}) => [ isActive ? "underline" : "" ]
              + " block mt-4 hover:underline decoration-2 underline-offset-8"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => [ isActive ? "underline" : "" ]
              + " block mt-4 hover:underline decoration-2 underline-offset-8"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              Projects
            </NavLink>
            <NavLink to="/photography" className={({isActive}) => [ isActive ? "underline" : "" ]
              + " block mt-4 hover:underline decoration-2 underline-offset-8"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              Photography
            </NavLink>
          </div>
        </div>
        {/* Display the menu bar at the top on desktop displays*/}
        <div className="hidden w-full flex-grow md:flex md:items-center md:w-auto text-md mr-4">
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
          <a href="https://www.linkedin.com/in/ralph-sanders-3b1704177" target="_blank" rel="noopener noreferrer" className="inline-block py-2">
            <svg className="fill-current h-8 w-8" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>
          </a>
          <a href="https://www.github.com/rlsanders4" target="_blank" rel="noopener noreferrer" className="inline-block pl-2 pr-6 py-2">
            <svg className="fill-current h-8 w-8" width="98" height="96" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
          </a>
          <div className="inline-block px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white cursor-pointer select-none" onClick={() => setContactOpen(true)}>Contact Me</div>
        </div>
      </nav>
      {/* Display contact info */}
      <div className={contactOpen ? "bg-black/85 fixed w-full h-full top-0 left-0 z-10 flex flex-col m-0 justify-center center items-center" : "hidden"} onClick={() => setContactOpen(false)}>
        <div className="flex flex-col items-center justify-center bg-zinc-900 rounded border-2 px-8 pb-16 w-10/12 md:w-1/2" onClick={(e) => e.stopPropagation()}>
          <div className="mr-[99%] mt-[2%] pt-0">
            <button 
            onClick={() => setContactOpen(false)}
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
          <h1 className="text-7xl pb-12 text-center font-bold">Contact Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="text-center border rounded p-8 flex flex-col justify-center">
              <h3 className="text-4xl pb-2">Send a message</h3>
              <p className="text-lg pb-2">{email}</p>
              <div className="flex flex-row gap-4 justify-center">
                <a className="border rounded p-1 flex flex-row hover:border-transparent hover:text-zinc-900 hover:bg-white" href={"mailto:" + email}>
                  <svg className="fill-current h-6 w-6 border-r pr-1 mr-1" fill="#ffffff" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 75.294 75.294" xmlSpace="preserve"><path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path></svg>
                  <p>Email</p>
                </a>
                <button className="border rounded p-1 flex flex-row hover:border-transparent hover:text-zinc-900 hover:bg-white" onClick={() => {navigator.clipboard.writeText(email)}}>
                  <svg className="fill-current h-6 w-6 border-r pr-1 mr-1" fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve"><path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228 C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999 c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64 h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002 C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228 c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999 c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699 c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946 c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999 h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"></path> <path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005 c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997 C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"></path> <path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986 c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016 C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"></path> <path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997 s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997 S39.16465,29.4603004,38.6031494,29.4603004z"></path> <path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997 s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997 S29.0059509,37.5872993,28.4444485,37.5872993z"></path></svg>
                  <p>Copy</p>
                </button>
              </div>
            </div>
            <div className="text-center border rounded p-8 flex flex-col justify-center">
              <h3 className="text-4xl pb-4">Let's connect</h3>
              <div className="flex flex-row gap-4 justify-center">
                <a href="https://www.linkedin.com/in/ralph-sanders-3b1704177" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
                  <svg className="fill-current h-8 w-8" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>
                  <p className="text-center">
                    LinkedIn
                  </p>
                </a>
                <a href="https://www.github.com/rlsanders4" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center">
                  <svg className="fill-current h-8 w-8" width="98" height="96" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
                  <p className="text-center">
                    GitHub
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Do not render the page when the mobile pop-up menu is open*/}
      <div className={mobileMenuOpen ? "hidden" : "" }>
        <Outlet />
      </div>
    </>
  )
}

export default NavBar
