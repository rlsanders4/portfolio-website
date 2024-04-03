function Projects() {

  return (
    <>
      <div className="text-center m-auto py-16">
        <h1 className="font-bold text-7xl">Projects</h1>
      </div>
      <div className="w-3/4 m-auto p-4 grid grid-cols-1 gap-8">
        <div className="border rounded p-4 bg-white/10">
          <h3 className="font-bold text-3xl">Daras</h3>
          <p className="pb-2 italic">Kotlin</p>
          <p className="pb-2">Daras is an app for leaning arabic.The website you are on now!The website you are on now!The website you are on now!The website you are on now!The website you are on now!</p>
          <div>
            <button className="pr-4">View Source</button>
            <button>View in Play Store</button>
          </div>
        </div>
        <div className="border rounded p-4 bg-white/10">
          <h3 className="font-bold text-3xl">Portfolio Website</h3>
          <p className="pb-2 italic">React, JavaScript, HTML, Tailwind CSS</p>
          <p className="pb-2">The website you are on now!The website you are on now!The website you are on now!The website you are on now!The website you are on now!</p>
          <button>View Source</button>
        </div>
        <div className="border rounded p-4 bg-white/10">
          <h3 className="font-bold text-3xl">Cron Jobs</h3>
          <p className="pb-2 italic">Python</p>
          <p className="pb-2">The website you are on now!The website you are on now!The website you are on now!The website you are on now!The website you are on now!</p>
          <button>View Source</button>
        </div>
      </div>
    </>
  )
}

export default Projects
