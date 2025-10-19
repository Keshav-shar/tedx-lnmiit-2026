import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import GalleryCard from './GalleryCard.jsx'

const Gallery = () => {
  const gallery = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
    },
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    //  Desktop/Laptop animation 
    if (window.innerWidth >= 640) {
      gsap.from('.hero', {
        height: '100px',
        stagger: {
          amount: 0.4,
        },
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 100%',
          end: 'top -150%',
          scrub: true,
        },
      })
    }

    //  Mobile-only animation
    if (window.innerWidth < 640) {
      gsap.from('.hero', {
        opacity: 0,
        y: 100,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 90%',
          end: 'top 10%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  })

  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Gallery</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {gallery.map((elem, idx) => (
          <div
            key={idx}
            className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'
          >
            <GalleryCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
