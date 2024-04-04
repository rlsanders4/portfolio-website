function Projects() {

  return (
    <>
      <div className="text-center m-auto py-16">
        <h1 className="font-bold text-7xl">Projects</h1>
      </div>
      <div className="w-3/4 m-auto px-4 pt-4 pb-16 grid grid-cols-1 gap-8">
        <div className="border rounded p-4 bg-zinc-900">
          <h3 className="font-bold text-4xl">Daras</h3>
          <p className="pb-2 italic">Kotlin</p>
          <p className="pb-2">Daras is an Android app to help you learn Arabic. 
          This app serves as a quick reference guide for common grammer and vocabulary topics, such as the alphabet, numbers, pronouns, and verb conjugations. 
          I was inspired to create this app while taking Arabic classes in college. 
          It consolidates and conveniently displays key concepts for any Arabic language learner.
          </p>
          <div className="col-span-1 md:col-span-2">
            <a href="https://github.com/rlsanders4/daras" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-4 py-2 my-2 mr-4 border rounded hover:border-transparent hover:bg-white hover:text-zinc-900">View Source</button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.ralphsanders.daras&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-4 py-2 my-2 mr-4 border rounded hover:border-transparent hover:bg-white hover:text-zinc-900">View in Play Store</button>
            </a>
          </div>
        </div>
        <div className="border rounded p-4 bg-zinc-900">
          <h3 className="font-bold text-4xl">Portfolio Website</h3>
          <p className="pb-2 italic">React, TypeScript, HTML, Tailwind CSS</p>
          <p className="pb-2">This is the website that you are on right now. 
          It's built using multiple frontend technologies. 
          React is used to build different components, and the React Router is used to switch between pages. 
          Tailwind CSS is used to provide a utility-based approach to styling. 
          The interactive elements on the site are designed with TypeScript.
          </p>
          <a href="https://github.com/rlsanders4/portfolio-website" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-4 py-2 my-2 mr-4 border rounded hover:border-transparent hover:bg-white hover:text-zinc-900">View Source</button>
          </a>
        </div>
        <div className="border rounded p-4 bg-zinc-900">
          <h3 className="font-bold text-4xl">Cron Jobs</h3>
          <p className="pb-2 italic">Python, HTML, CSS</p>
          <p>This project includes several scripts that I have configured as cron jobs on my home linux server.</p>
          <ul className="pl-2 pb-2">
            <li>- <code>newsletter.py</code>: Generate and email a configurable daily morning report containing the weather forecast, stock prices, and the top news articles.</li>
            <li>- <code>email_wifi_report.py</code>: Generate and email a weekly Wi-Fi Speed Report with a daily breakdown of average download and upload speeds.</li>
            <li>- <code>system_update.py</code>: Automatically keep your system up to date.</li>
          </ul>
          <a href="https://github.com/rlsanders4/cron-jobs" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-4 py-2 my-2 mr-4 border rounded hover:border-transparent hover:bg-white hover:text-zinc-900">View Source</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projects
