import profilePic from './assets/profile_pic.jpg'

function About() {

  return (
    <>
      <div className='grid md:grid-cols-5'>
        <div className="md:col-span-3 p-8 m-auto">
          <h3 className="text-3xl">Hi, I'm</h3>
          <h1 className="text-8xl font-bold">Ralph Sanders</h1>
          <h3 className="text-3xl pt-4">Software Developer</h3>
          <p className="pt-10">
            I'm a backend Java developer at IBM in Austin, TX. I love to learn new technologies and build intresting projects. I also enjoy running, playing the guitar, and travel photography.
          </p>
        </div>
        <div className="md:col-span-2 p-8 block m-auto">
          <img className="object-contain max-h-[70vh] rounded border-2 border-white" src={profilePic} />
        </div>
      </div>
    </>
  )
}

export default About
