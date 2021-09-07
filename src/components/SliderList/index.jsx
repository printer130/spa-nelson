import { useRef, useEffect } from 'react'
import { Slider } from '../Slider'
import './styles.css'

export function SliderList ({ carouselImages }) {
  const carouselListRef = useRef()
  const carouselItems = useRef()

  const handlerSliderEvents = e => {
    const newActive = e.target
    const isItem = newActive.closest('.carousel__item')

    if (!isItem || newActive.classList.contains('carousel__item_active')) {
      return
    }
    update(newActive)
  }

  useEffect(() => {
    if (carouselItems.current && carouselListRef.current) {
      carouselListRef.current.addEventListener('click', handlerSliderEvents)
    }

    return () => carouselListRef.current !== false && carouselListRef.current.removeEventListener('click', handlerSliderEvents)
  }, [carouselListRef.current, carouselItems.current])

  const update = function (newActive) {
    const newActivePos = newActive.dataset.pos

    const current = carouselListRef.current.children[0]
    const prev = carouselListRef.current.children[1]
    const next = carouselListRef.current.children[2]
    const first = carouselListRef.current.children[3]
    const last = carouselListRef.current.children[4]
    current.classList.remove('carousel__item_active')

    const list = [current, prev, next, first, last]

    list.forEach(item => {
      const itemPos = item.dataset.pos

      item.dataset.pos = getPos(itemPos, newActivePos)
    })
  }

  const getPos = function (current, active) {
    const diff = current - active

    if (Math.abs(current - active) > 2) {
      return -current
    }

    return diff
  }

  return (
    <section>
      <div className='carousel'>
        <ul ref={carouselListRef} className='carousel__list'>
          {
          carouselImages.map(({ dataPos, src, alt }) => {
            return (
              <Slider
                key={+dataPos}
                carouselItemsRef={carouselItems}
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
