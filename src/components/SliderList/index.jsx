import { useRef, useEffect } from 'react'
import { Slider } from '../Slider'
import './styles.css'
import { useUpdate } from '../../hooks/useUpdate'

export function SliderList ({ carouselImages }) {
  const carouselListRef = useRef()
  const carouselItemsRef = useRef()
  const carouselItemsCurrent = carouselItemsRef.current
  const carouselListCurrent = carouselListRef.current

  const handlerSliderEvents = e => {
    const newActive = e.target
    const isItem = newActive.closest('.carousel__item')

    if (!isItem || newActive.classList.contains('carousel__item_active')) {
      return
    }
    useUpdate({ newActive, carouselListCurrent })
  }

  useEffect(() => {
    if (carouselItemsCurrent && carouselListCurrent) {
      carouselListCurrent.addEventListener('click', handlerSliderEvents)
    }

    return carouselListCurrent & carouselItemsCurrent && carouselListCurrent.removeEventListener('click', handlerSliderEvents)
  }, [carouselListCurrent, carouselItemsCurrent])

  return (
    <section>
      <div className='carousel'>
        <ul ref={carouselListRef} className='carousel__list'>
          {
          carouselImages.map(({ dataPos, src, alt }) => {
            return (
              <Slider
                key={+dataPos}
                carouselItemsRef={carouselItemsRef}
                className='carousel__item'
                dataPos={dataPos}
                src={src}
                alt={alt}
              />
            )
          })
        }
        </ul>
      </div>
    </section>
  )
}
