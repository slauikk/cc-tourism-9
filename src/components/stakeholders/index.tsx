import clsx from "clsx"
import {FC, useRef} from "react"
import "swiper/css"
import {Autoplay} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import {SwiperOptions, Swiper as SwiperTypes} from "swiper/types"

import styles from "./index.module.scss"
import {dataStakeholders} from "./lib/dataStakeholders"
import {StakeholdersItem} from "./ui/stakeholders-item"

interface IStakeholders {}

export const Stakeholders: FC<IStakeholders> = () => {
  const refSwiper = useRef<SwiperTypes>()
  const refSwiperWrapper = useRef<HTMLDivElement>(null)

  const swiperSettings: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1500,
    allowTouchMove: false,
    direction: "horizontal",
    grabCursor: false,
    modules: [Autoplay],
    autoplay: {
      delay: 1500,
    },
    loop: true,
  }

  return (
    <div className={clsx(styles.Stakeholders)}>
      <Swiper
        {...swiperSettings}
        className={clsx(styles.Stakeholders_swiper)}
        onInit={(swiper) => {
          refSwiper.current = swiper
        }}
      >
        {Array(3)
          .fill(null)
          .map(() => (
            <>
              {dataStakeholders.map((e, i) => (
                <SwiperSlide className={clsx(styles.Stakeholders_swiper_slide)}>
                  {({}) => <StakeholdersItem {...e} key={i} />}
                </SwiperSlide>
              ))}
            </>
          ))}
      </Swiper>
    </div>
  )
}
