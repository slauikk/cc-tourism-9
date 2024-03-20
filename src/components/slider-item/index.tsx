import clsx from "clsx"
import {FC} from "react"

import {ISponsors} from "@/types/global"

import styles from "./index.module.scss"

interface ISliderItemProps extends ISponsors {}

export const SliderItem: FC<ISliderItemProps> = ({img}) => {
  return (
    <div className={clsx(styles.SlideItem)}>
      <img src={img} alt="" />
    </div>
  )
}
