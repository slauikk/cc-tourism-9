import {ReactNode} from "react"

import {ISponsors} from "@/types/global"

import {SliderItem} from "@/components/slider-item"

export const getSliderElements = (items: ISponsors[]) => {
  let dataSponsors: ReactNode[] = []

  items.map((e) => {
    const elem = <SliderItem {...e} />
    dataSponsors = [...dataSponsors, elem]
  })

  return dataSponsors
}
