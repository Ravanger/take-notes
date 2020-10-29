import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { get } from "idb-keyval"
import { css } from "@emotion/core"

const Note = () => {
  const router = useRouter()
  const { id } = router.query

  const [cardData, setCardData] = useState<CardDataType | undefined>(undefined)
  useEffect(() => {
    if (typeof id !== "undefined") {
      getCardData(id)
    }
  }, [id])

  const getCardData = async (id: string | string[]) => {
    const cardData: CardDataType = await get(id)
    setCardData(cardData)
  }

  return (
    typeof cardData !== "undefined" && (
      <>
        <h1
          css={css`
            background-color: ${cardData.backgroundColor};
          `}
        >
          {cardData.id}
        </h1>
        <p>{cardData.title}</p>
      </>
    )
  )
}

export default Note
