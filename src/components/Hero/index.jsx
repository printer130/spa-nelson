import { useRef, useEffect, useState } from 'react'
import './styles.css'

export function Hero () {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(null)

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
      } else {
        setIsIntersecting(false)
      }
    })
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(handleIntersection, { threshold: 0.5 })
    observer.observe(ref.current)
  }, [])

  return (
    <>
      {
        isIntersecting === false &&
          <a
            className='portal'
            href='https://wa.link/4xfia9'
            target='_blank'
            rel='noreferrer'
          >
            Contactar con Nelson por <span> WhatsApp</span>
          </a>
      }
      <section className='home__section'>
        <div className='home__container'>
          <div>
            <h1 className='home__subtitle'>
              Nelson Peluqueria <span> Spa</span>
            </h1>
          </div>
          <div
            ref={ref}
            className='home__anchor_container'
          >
            <a
              href='https://wa.link/4xfia9'
              target='_blank'
              className='home__anchor'
              rel='nofollow noopener noreferrer'
            >
              Contactar con Nelson por <span> whatsapp </span>
            </a>
          </div>
        </div>
        <div>
          <picture>
            <img
              className='hero__image'
              src='https://res.cloudinary.com/djc1umong/image/upload/v1628785222/PRO2_h5d5hr.png'
              alt='Fotografia de Nelson Torrico | Nelson Peluqueria Spa'
            />
          </picture>
        </div>
      </section>
    </>
  )
}
