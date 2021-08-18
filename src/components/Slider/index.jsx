import React from 'react'
import './styles.css'

export function Slider ({ className, carouselItemsRef, dataPos, src, alt }) {
  return (
    <img
      ref={carouselItemsRef}
      className={className}
      data-pos={dataPos}
      src={src}
      alt={alt}
    />
  )
}
