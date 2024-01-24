import clsx from "clsx"
import {FC, useEffect, useState} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"
import {getDataFromGoogleSheets} from "@/utils/getDataFromGoogleSheets"

interface IMethodologicalKP {}

export const MethodologicalKP: FC<IMethodologicalKP> = () => {
  const [data, setData] = useState([])
  const [isLoading, srtLoading] = useState<boolean>(true)

  useEffect(() => {
    getDataFromGoogleSheets("Практики", (data: any) => {
      setData(data)
      srtLoading(false)
    })
  }, [])
  return (
    <PageLayout title="Методичні рекомендації до КР">
      {isLoading && <PageItem content={<Loading />} />}
      {data[0] && (
        <PageItem
          content={data.map((e, i) => (
            <p
              key={i}
              className={clsx(
                styles.MethodologicalKP_item,
                !e[1] && styles.title,
              )}
            >
              {e[1] ? (
                <a target="_blank" href={e[1]}>
                  {e[0]}
                </a>
              ) : (
                <>{e[0]}</>
              )}
            </p>
          ))}
        />
      )}
    </PageLayout>
  )
}
