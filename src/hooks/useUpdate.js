
const getPos = function ({ itemPos: current, newActivePos: active }) {
  const diff = current - active

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff
}

export const useUpdate = function ({ newActive, carouselListCurrent }) {
  const newActivePos = newActive.dataset.pos

  const current = carouselListCurrent.children[0]
  const prev = carouselListCurrent.children[1]
  const next = carouselListCurrent.children[2]
  const first = carouselListCurrent.children[3]
  const last = carouselListCurrent.children[4]
  current.classList.remove('carousel__item_active')

  const list = [current, prev, next, first, last]

  list.forEach(item => {
    const itemPos = item?.dataset?.pos

    if (itemPos) {
      item.dataset.pos = getPos({ itemPos, newActivePos })
    }
  })
}
