import React from 'react'
import './styles.css'

export function Layout ({ children }) {
  return (
    <section className='layout__container'>
      {children}
    </section>
  )
}
