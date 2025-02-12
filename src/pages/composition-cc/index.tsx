import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface ICompositionCC {}

export const CompositionCC: FC<ICompositionCC> = () => {
  return (
    <PageLayout title="Cклад методиної комісії, основні напрямки роботи">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
