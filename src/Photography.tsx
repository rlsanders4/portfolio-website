import atrani from "./assets/photography/atrani.jpg";
import bigBend from "./assets/photography/big_bend.jpg";
import bigBend2 from "./assets/photography/big_bend2.jpg";
import bigBend3 from "./assets/photography/big_bend3.jpg";
import bigBend4 from "./assets/photography/big_bend4.jpg";
import capri from "./assets/photography/capri.jpg";
import carlsbadCaverns from "./assets/photography/carlsbad_caverns.jpg";
import charleston from "./assets/photography/charleston.jpg";
import enchantedRock from "./assets/photography/enchanted_rock.jpg";
import florence from "./assets/photography/florence.jpg";
import florence2 from "./assets/photography/florence2.jpg";
import florence3 from "./assets/photography/florence3.jpg";
import florence4 from "./assets/photography/florence4.jpg";
import florence5 from "./assets/photography/florence5.jpg";
import greatSmokyMountains from "./assets/photography/great_smoky_mountains.jpg";
import greatSmokyMountains2 from "./assets/photography/great_smoky_mountains2.jpg";
import jacksonHole from "./assets/photography/jackson_hole.jpg";
import jacksonHole2 from "./assets/photography/jackson_hole2.jpg";
import pompeii from "./assets/photography/pompeii.jpg";
import positano from "./assets/photography/positano.jpg";
import puntaCana from "./assets/photography/punta_cana.jpg";
import rockyMountain from "./assets/photography/rocky_mountain.jpg";
import rockyMountain2 from "./assets/photography/rocky_mountain2.jpg";
import rome from "./assets/photography/rome.jpg";
import rome2 from "./assets/photography/rome2.jpg";
import sanDiego from "./assets/photography/san_diego.jpg";
import sanDiego2 from "./assets/photography/san_diego2.jpg";
import sanFrancisco from "./assets/photography/san_francisco.jpg";
import sanFrancisco2 from "./assets/photography/san_francisco2.jpg";
import santaCruz from "./assets/photography/santa_cruz.jpg";
import tucson from "./assets/photography/tucson.jpg";
import vatican from "./assets/photography/vatican_city.jpg";
import vatican2 from "./assets/photography/vatican_city2.jpg";
import vatican3 from "./assets/photography/vatican_city3.jpg";
import venice from "./assets/photography/venice.jpg";
import venice2 from "./assets/photography/venice2.jpg";
import venice3 from "./assets/photography/venice3.jpg";
import venice4 from "./assets/photography/venice4.jpg";
import whiteSands from "./assets/photography/white_sands.jpg";
import yellowstone from "./assets/photography/yellowstone.jpg";
import yellowstone2 from "./assets/photography/yellowstone2.jpg";
import { useState } from 'react'; 

function Photography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const photos = [
    { index: 1, name: atrani, location: "Atrani, Italy" },
    { index: 2, name: bigBend, location: "Big Bend National Park, Texas" },
    { index: 3, name: bigBend2, location: "Big Bend National Park, Texas" },
    { index: 4, name: bigBend3, location: "Big Bend National Park, Texas" },
    { index: 5, name: bigBend4, location: "Big Bend National Park, Texas" },
    { index: 6, name: capri, location: "Capri, Italy" },
    { index: 7, name: carlsbadCaverns, location: "Carlsbad Caverns National Park, New Mexico" },
    { index: 8, name: charleston, location: "Charleston, South Carolina" },
    { index: 9, name: enchantedRock, location: "Enchanted Rock, Texas" },
    { index: 10, name: florence, location: "Florence, Italy" },
    { index: 11, name: florence2, location: "Florence, Italy" },
    { index: 12, name: florence3, location: "Florence, Italy" },
    { index: 13, name: florence4, location: "Florence, Italy" },
    { index: 14, name: florence5, location: "Florence, Italy" },
    { index: 15, name: greatSmokyMountains, location: "Great Smoky Mountain National Park, Tennessee" },
    { index: 16, name: greatSmokyMountains2, location: "Great Smoky Mountain National Park, Tennessee" },
    { index: 17, name: jacksonHole, location: "Jackson Hole, Wyoming" },
    { index: 18, name: jacksonHole2, location: "Jackson Hole, Wyoming" },
    { index: 19, name: pompeii, location: "Pompeii, Italy" },
    { index: 20, name: positano, location: "Positano, Italy" },
    { index: 21, name: puntaCana, location: "Punta Cana, Dominican Republic" },
    { index: 22, name: rockyMountain, location: "Rocky Mountain National Park, Colorado" },
    { index: 23, name: rockyMountain2, location: "Rocky Mountain National Park, Colorado" },
    { index: 24, name: rome, location: "Rome, Italy" },
    { index: 25, name: rome2, location: "Rome, Italy" },
    { index: 26, name: sanDiego, location: "San Diego, California" },
    { index: 27, name: sanDiego2, location: "San Diego, California" },
    { index: 28, name: sanFrancisco, location: "San Francisco, California" },
    { index: 29, name: sanFrancisco2, location: "San Francisco, California" },
    { index: 30, name: santaCruz, location: "Santa Cruz, California" },
    { index: 31, name: tucson, location: "Tucson, Arizona" },
    { index: 32, name: vatican, location: "Vatican City" },
    { index: 33, name: vatican2, location: "Vatican City" },
    { index: 34, name: vatican3, location: "Vatican City" },
    { index: 35, name: venice, location: "Venice, Italy" },
    { index: 36, name: venice2, location: "Venice, Italy" },
    { index: 37, name: venice3, location: "Venice, Italy" },
    { index: 38, name: venice4, location: "Venice, Italy" },
    { index: 39, name: whiteSands, location: "White Sands, New Mexico" },
    { index: 40, name: yellowstone, location: "Yellowstone, Wyoming" },
    { index: 41, name: yellowstone2, location: "Yellowstone, Wyoming" },
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
    <img className="w-full h-full object-cover transition ease-in-out duration-100 border-2 hover:scale-105 cursor-pointer select-none" src={photo.name} id={photo.location} onClick={() => clickPhoto(photo.index)}/>
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
            <img className="object-contain max-h-96 border" src={getPhotoName(slideIndex)} onContextMenu={(e)=> e.preventDefault()}/>
          </div>
          <div>
            <p className="text-lg italic pb-8">{getPhotoLocation(slideIndex)}</p>
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
