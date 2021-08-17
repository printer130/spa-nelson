import React, { useRef, useEffect } from 'react'
import './styles.css'

export default function Slider () {
  const carouselList = useRef()
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
    if (carouselItems.current && carouselList.current) {
      carouselList.current.addEventListener('click', handlerSliderEvents)
    }

    return () => carouselList.current.removeEventListener(handlerSliderEvents)
  }, [carouselList.current, carouselItems.current])

  const update = function (newActive) {
    const newActivePos = newActive.dataset.pos

    const current = carouselList.current.children[0]
    const prev = carouselList.current.children[1]
    const next = carouselList.current.children[2]
    const first = carouselList.current.children[3]
    const last = carouselList.current.children[4]

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
        <ul ref={carouselList} className='carousel__list'>
          <li ref={carouselItems} className='carousel__item' data-pos='-2'>1</li>
          <li ref={carouselItems} className='carousel__item' data-pos='-1'>2</li>
          <li ref={carouselItems} className='carousel__item' data-pos='0'>3</li>
          <li ref={carouselItems} className='carousel__item' data-pos='1'>4</li>
          <li ref={carouselItems} className='carousel__item' data-pos='2'>5</li>
        </ul>
      </div>
    </section>
  )
}
