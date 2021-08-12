import React from 'react'
import { Navbar, Hero } from '../../components'

import './styles.css'

export default function Home () {
  return (
    <main className='home__main'>
      <Navbar />
      <Hero />
    </main>
  )
}
