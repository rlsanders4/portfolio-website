import pic from './assets/cactus.jpg'
import { useState } from 'react'; 

function Photography() {

  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div>
        <div className="text-center m-auto py-16">
          <h1 className="font-bold text-7xl">Photography</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-16" onContextMenu={(e)=> e.preventDefault()}>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
          <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={pic} onClick={() => setLightboxOpen(!lightboxOpen)}/>
        </div>
        <div className="text-center pb-8">
          <p>© 2024 Ralph Sanders. All rights reserved.</p>
        </div>
      </div>
      <div onClick={() => setLightboxOpen(!lightboxOpen)} className={lightboxOpen ? "bg-black/90 fixed w-full h-full top-0 left-0 z-10 flex flex-col m-0 justify-center center items-center" : "hidden"}>
        <div className="flex flex-col items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className="grow flex items-end p-8 justify-center">
            <img className="border-4 object-contain max-h-[70vh]" src={pic} onContextMenu={(e)=> e.preventDefault()}/>
          </div>
          <div className="flex-none w-14 h-14 flex items-start justify-center">
          <button
            onClick={() => setLightboxOpen(!lightboxOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <svg
                  className="h-24 w-24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <line x1="22" y1="22" x2="2" y2="12" />
                <line x1="2" y1="12" x2="22" y2="2" />

              </svg>
            </button>
            <button
            onClick={() => setLightboxOpen(!lightboxOpen)}
            className="inline-flex items-center p-2 mx-16 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <svg
                  className="h-24 w-24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <line x1="22" y1="2" x2="2" y2="22" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            </button>
            <button
            onClick={() => setLightboxOpen(!lightboxOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <svg
                  className="h-24 w-24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <line x1="2" y1="22" x2="22" y2="12" />
                <line x1="22" y1="12" x2="2" y2="2" />

              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Photography
