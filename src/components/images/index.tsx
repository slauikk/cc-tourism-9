import clsx from "clsx"
import {FC} from "react"

import {Img} from "../img"

import styles from "./index.module.scss"
import {getAdaptiveValue} from "@/utils/getAdaptiveValue"

interface IImages {
  images: string[]
  height?: number
}

export const Images: FC<IImages> = ({images, height = 200}) => {
  return (
    <div className={clsx(styles.Images)}>
      {images.map((img, i) => (
        <Img
          src={img}
          style={{height: `${getAdaptiveValue(height)}px`}}
          key={i}
        />
      ))}
    </div>
  )
}
