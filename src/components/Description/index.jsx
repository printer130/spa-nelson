import React from 'react'
import styles from './description.module.css'
import { useStyles } from '../../hooks/useStyles'
import { Close } from '../svgs/close'

export function Description ({ image, title, p, ornament = null, ornament1 = null, ornament2 = null, ornament3 = null, altImage, altOrnament, stylesConfig = null, titleImage, servicesDesc1, servicesDesc2, servicesDesc3, servicesTitle, servicesPrice }) {
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
      <div ref={ref} id={styles.description__container}>
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
            <p className={styles.description__p}> <i> <small> <b>"</b> {p} <b>"</b> </small> </i> </p>
            <div className={styles.description__container_services}>
              <h3 className={styles.description__services_title}> {servicesTitle}</h3>
              <p className={styles.description__services_desc}> {servicesDesc1} <Close /> {servicesDesc2} <Close /> {servicesDesc3} </p>
              <p className={styles.description__services_price}>{servicesPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
