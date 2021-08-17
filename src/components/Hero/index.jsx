import React from 'react'
import './styles.css'

export function Hero () {
  return (
    <section className='home__section'>
      <div className='home__container'>
        <div>
          <h1 className='home__subtitle'>
            Cortamos pelo
          </h1>
        </div>
        <a
          href='https://wa.link/4xfia9'
          target='_blank'
          className='home__anchor'
          rel='noreferrer'
        >
          Contactar por WhatsApp
        </a>
      </div>
      <div>
        <picture>
          <img className='hero__image' src='https://res.cloudinary.com/djc1umong/image/upload/v1628785222/PRO2_h5d5hr.png' alt='nelson' />
        </picture>
      </div>
    </section>
  )
}
