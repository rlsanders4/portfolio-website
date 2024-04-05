import * as PhotoData from "./PhotoData.json";
import cactus from "./assets/photography/cactus.jpg";
import cactus2 from "./assets/photography/cactus2.jpg";
import cactus3 from "./assets/photography/cactus3.jpg";
import { useState } from 'react'; 

function Photography() {
  console.log(PhotoData)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const photos = [
    { index: 1, name: cactus, location: "Tucson, Arizona" },
    { index: 2, name: cactus2, location: "Tucson2, Arizona" },
    { index: 3, name: cactus3, location: "Tucson3, Arizona" },
  ]

  function clickPhoto(photoIndex: number): void {
    setSlideIndex(photoIndex)
    setLightboxOpen(true)
  }
  
  function getPhotoName(photoIndex: number): string {
    let name = ""
    photos.forEach(photo => {
      if (photo.index == photoIndex) {
        name = photo.name
      }
    })
    return name
  }

  function getPhotoLocation(photoIndex: number): string {
    let location = ""
    photos.forEach(photo => {
      if (photo.index == photoIndex) {
        location = photo.location
      }
    })
    return location
  }

  function incrementIndex(): void {
    if (slideIndex == photos.length) {
      setSlideIndex(1)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }

  function decrementIndex(): void {
    if (slideIndex == 1) {
      setSlideIndex(photos.length)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  const photoElements = photos.map(photo =>
    <img className="transition ease-in-out duration-100 border-2 hover:scale-105" src={photo.name} id={photo.location} onClick={() => clickPhoto(photo.index)}/>
  );

  return (
    <>
      <div>
        <div className="text-center m-auto py-16">
          <h1 className="font-bold text-7xl">Photography</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-16" onContextMenu={(e)=> e.preventDefault()}>
          {photoElements}
        </div>
        <div className="text-center pb-8">
          <p>© 2024 Ralph Sanders. All rights reserved.</p>
        </div>
      </div>
      <div onClick={() => setLightboxOpen(!lightboxOpen)} className={lightboxOpen ? "bg-black/85 fixed w-full h-full top-0 left-0 z-10 flex flex-col m-0 justify-center center items-center" : "hidden"}>
        <div className="flex flex-col items-center justify-center bg-zinc-900 rounded border-2" onClick={(e) => e.stopPropagation()}>
          <div className="grow flex items-end px-8 pt-8 pb-2 justify-center">
            <img className="object-contain max-h-[70vh]" src={getPhotoName(slideIndex)} onContextMenu={(e)=> e.preventDefault()}/>
          </div>
          <div>
            <p className="text-2xl italic pb-8">{getPhotoLocation(slideIndex)}</p>
          </div>
          <div className="flex-none w-14 h-14 flex items-start justify-center">
          <button
            onClick={() => decrementIndex()}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/40 active:outline-none active:ring-2 active:ring-gray-200">
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
            onClick={() => setLightboxOpen(false)}
            className="inline-flex items-center p-2 mx-16 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/40 active:outline-none active:ring-2 active:ring-gray-200">
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
            onClick={() => incrementIndex()}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-white/40 active:outline-none active:ring-2 active:ring-gray-200">
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
