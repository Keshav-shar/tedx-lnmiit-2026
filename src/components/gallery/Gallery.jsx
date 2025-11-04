import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import GalleryCard from './GalleryCard.jsx'

const Gallery = () => {
  const gallery = [
    {
      image1: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284831/_P3A7565_m4vaab.jpg',
      image2: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/f_auto/v1734284830/IMG_1122_mwrzac.heic',
    },
    {
      image1: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/f_auto/v1734284828/IMG_4682_yi556w.heic',
      image2: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284832/IMG20240112225947_g0q4vd.jpg',
    },
    {
      image1: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284835/IMG20240113144545_hvayzz.jpg',
      image2: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734287102/_DSC0512_q0lej7.jpg',
    },
    {
      image1: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284835/IMG20240113175013_zbofr5.jpg',
      image2: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/f_auto/v1734284830/IMG_1227_y52t89.heic',
    },
    {
      image1: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284836/IMG20240113165706_ndioaf.jpg',
      image2: 'https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284836/IMG20240113124622_ncigry.jpg',
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
