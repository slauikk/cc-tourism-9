import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface ISocialWorker {}

export const SocialWorker: FC<ISocialWorker> = () => {
  return (
    <PageLayout title={<>Освітня програма "Соціальний робітник"</>}>
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
