import React from 'react'
import styles from './description.module.css'
import { Close } from '../svgs/close'
import { SliderList } from '../SliderList'

export function Description ({
  title,
  p,
  ornament = null,
  ornament1 = null,
  ornament2 = null,
  ornament3 = null,
  altOrnament,
  servicesDesc1,
  carouselImages,
  servicesDesc2,
  servicesDesc3,
  servicesTitle,
  servicesPrice
}) {
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
      <div
        id={styles.description__container}
      >
        <picture>
          <SliderList
            carouselImages={carouselImages}
          />
        </picture>
        <div className={styles.description__text}>
          <h2>{title}</h2>
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
