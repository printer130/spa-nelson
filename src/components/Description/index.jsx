import React from 'react'
import styles from './description.module.css'
import { useStyles } from '../../hooks/useStyles'

export function Description ({ image, title, p, ornament = null, ornament1 = null, ornament2 = null, ornament3 = null, altImage, altOrnament, stylesConfig = null, titleImage }) {
  const { ref } = useStyles({ stylesConfig })

  return (
    <div className={styles.description}>
      <img className={styles.position} src={ornament} alt={altOrnament} />
      {
        ornament1 && <img className={styles.position} src={ornament1} alt={altOrnament} />
      }
      {
        ornament2 && <img className={styles.position} src={ornament2} alt={altOrnament} />
      }
      {
        ornament3 && <img className={styles.position} src={ornament3} alt={altOrnament} />
      }
      <div ref={ref} className={styles.description__container}>
        <picture>
          <img
            loading='lazy'
            className={styles.description_image}
            src={image}
            width='320px'
            title={titleImage}
            height='320px'
            alt={altImage}
          />
        </picture>
        <div className={styles.description__text}>
          <h2 ref={ref}>{title}</h2>
          <div className={styles.description__text_p}>
            <p> {p} </p>
          </div>
        </div>
      </div>
    </div>
  )
}
