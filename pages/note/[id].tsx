import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { css } from "@emotion/core"
import { getCardDataById } from "@util/cardUtil"

const Note = () => {
  const router = useRouter()
  const { id } = router.query

  const [cardData, setCardData] = useState<CardDataType | undefined>(undefined)
  useEffect(() => {
    if (typeof id !== "undefined") {
      getNoteData(id)
    }
  }, [id])

  const getNoteData = async (id: string | string[]) => {
    const cardData: CardDataType = await getCardDataById(id)
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
