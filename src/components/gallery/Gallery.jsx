import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import GalleryCard from './GalleryCard.jsx'

const Gallery = () => {
  const gallery = [
    {
      image1: '/Gallery/img1.JPG',
      image2: '/Gallery/img2.jpg',
    },
    {
      image1: '/Gallery/img3.jpg',
      image2: '/Gallery/img4.webp',
    },
    {
      image1: '/Gallery/img5.png',
      image2: '/Gallery/img22.webp',
    },
    {
      image1: '/Gallery/img8.png',
      image2: '/Gallery/img38.png',
    },
    {
      image1: '/Gallery/img9.png',
      image2: '/Gallery/img10.jpg',
    },
    {
      image1: '/Gallery/img11.jpg',
      image2: '/Gallery/img12.png',
    },
    {
      image1: '/Gallery/img13.png',
      image2: '/Gallery/img14.png',
    },
    {
      image1: '/Gallery/img15.png',
      image2: '/Gallery/img16.JPG',
    },
     {
      image1: '/Gallery/img17.JPG',
      image2: '/Gallery/img18.JPG',
    },
     {
      image1: '/Gallery/img19.png',
      image2: '/Gallery/img21.png',
    },
    {
      image1: '/Gallery/img23.JPG',
      image2: '/Gallery/img24.png',
    },
    {
      image1: '/Gallery/img27.png',
      image2: '/Gallery/img28.png',
    },
    {
      image1: '/Gallery/img29.JPG',
      image2: '/Gallery/img30.png',
    },
    {
      image1: '/Gallery/img31.png',
      image2: '/Gallery/img32.png',
    },
    {
      image1: '/Gallery/img33.JPG',
      image2: '/Gallery/img34b.png',
    },
    {
      image1: '/Gallery/img36.png',
      image2: '/Gallery/img35.JPG',
    },
    {
      image1: '/Gallery/img39.JPG',
      image2: '/Gallery/img42.png',
    },
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    if (window.innerWidth >= 640) {
      gsap.from('.hero', {
        height: '100px',
        stagger: { amount: 0.4 },
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 100%',
          end: 'top -150%',
          scrub: true,
        },
      })
    }

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
    <div className='lg:p-4 p-2 mb-[70vh]'>
      <div className=" pt-[15vw] w-full relative overflow-hidden">
  <h1
    className="
      text-white
      font-extrabold
      uppercase
      leading-none
      tracking-tight

      text-[18vw]
      sm:text-[14vw]
      md:text-[12vw]
      lg:text-[10vw]

      ml-10
      sm:ml-10
      md:ml-5
    "
  >
    Gallery
  </h1>
</div>

      {/*  group/gallery controls global dimming */}
      <div className="lol group/gallery">
        {gallery.map((elem, idx) => (
          <div
            key={idx}
            className="hero w-full lg:h-[650px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
          >
            <GalleryCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
