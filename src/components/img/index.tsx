import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

interface IImg {
  type?: "h" | "v"
  size?: "small"
  src: string
  float?: "left" | "right" | "none"
  style?: {[key: string]: any}
}

export const Img: FC<IImg> = ({type = "h", src, size = "", float = "none"}) => {
  return (
    <img
      className={clsx(
        styles.Img,
        styles[type],
        styles[size],
        styles[`float-${float}`],
      )}
      src={src}
      alt=""
    />
  )
}
