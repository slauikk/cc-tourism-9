import axios from "axios"
import clsx from "clsx"
import {FC, useEffect, useState} from "react"

import {Loading} from "@/components/loading"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {getDataFromGoogleSheets} from "@/utils/getDataFromGoogleSheets"

interface ISyllabuses {}

export const Syllabuses: FC<ISyllabuses> = () => {
  const [data, setData] = useState([])
  const [isLoading, srtLoading] = useState<boolean>(true)

  useEffect(() => {
    getDataFromGoogleSheets("Предмети", (data: any) => {
      setData(data)
      srtLoading(false)
    })
  }, [])

  return (
    <PageLayout title="Дисципліни (силабуси)">
      {isLoading && <PageItem content={<Loading />} />}
      {data[0] && (
        <PageItem
          content={data.map((e, i) => (
            <p
              key={i}
              className={clsx(styles.Syllabuses_item, !e[1] && styles.title)}
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
