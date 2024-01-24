import clsx from "clsx"
import React, {FC} from "react"

import styles from "./index.module.scss"

interface IStakeholdersItem {
  logo: string
  title: string
  info: React.ReactNode[]
}

export const StakeholdersItem: FC<IStakeholdersItem> = ({
  title,
  logo,
  info,
}) => {
  return (
    <div className={clsx(styles.StakeholdersItem)}>
      <img className={clsx(styles.StakeholdersItem_logo)} src={logo} alt="" />
      <div className={clsx(styles.StakeholdersItem_title)}>{title}</div>
      <div className={clsx(styles.StakeholdersItem_info)}>
        {info.map((e, i) => (
          <div className={clsx(styles.StakeholdersItem_info_item)} key={i}>
            {e}
          </div>
        ))}
      </div>
    </div>
  )
}
