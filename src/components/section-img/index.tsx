import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

interface ISectionImg {
  title?: string
  img?: string
  href?: string
  index: number
}

export const SectionImg: FC<ISectionImg> = ({title, img, index, href}) => {
  return (
    <div
      className={clsx(
        styles.SectionImg,
        styles[index % 2 == 0 ? "left" : "right"],
      )}
    >
      {href ? (
        <a className={clsx(styles.SectionImg_title)} href={href}>
          {title}
        </a>
      ) : (
        <div className={clsx(styles.SectionImg_title)}>{title}</div>
      )}
      {img && <img className={clsx(styles.SectionImg_img)} src={img} alt="" />}
    </div>
  )
}
