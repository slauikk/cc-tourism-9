import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IEmergencyMedical {}

export const EmergencyMedical: FC<IEmergencyMedical> = () => {
  return (
    <PageLayout title={<>Освітня програма "Екстрений медичний технік"</>}>
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
