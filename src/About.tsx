import './home.css'
import profilePic from './assets/profile_pic.jpg'

function About() {

  return (
    <>
      <div className='flex flex-row p-16 items-center'>
        <div className="basis-3/5 align-middle">
          <p className="text-3xl">Hi, I'm</p>
          <h1 className="text-8xl font-bold">Ralph Sanders</h1>
          <h3 className="text-3xl pt-4">Software Engineer</h3>
          <p className="pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="basis-2/5">
          <img className="max-w-sm mx-auto rounded border-2 border-white" src={profilePic} />
        </div>
      </div>
    </>
  )
}

export default About
