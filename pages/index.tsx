import { Fragment, useEffect, useState } from "react"
import { css } from "@emotion/core"

import { getAllCardData } from "@util/cardUtil"

import Card from "@components/Card"
import Modal from "@components/Modal"

// import { cardData } from "@util/cardData"
// import { setAllCardData } from "@util/cardUtil"

// setAllCardData(cardData)

const Home = () => {
  const [cardData, setCardData] = useState<CardDataType[]>([])
  const [selectedCard, setSelectedCard] = useState<string>("")

  useEffect(() => {
    updateCardData()
  }, [])

  const updateCardData = async () => {
    const cardDataArray = await getAllCardData()
    setCardData(cardDataArray)
  }

  return (
    cardData.length > 0 && (
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {cardData.map((card) => {
          return (
            <Fragment key={card.id}>
              <Card
                id={card.id}
                title={card.title}
                backgroundColor={card.backgroundColor}
                onClick={() => setSelectedCard(card.id)}
              />
              <Modal
                isVisible={selectedCard === card.id}
                title={card.title}
                id={card.id}
                backgroundColor={card.backgroundColor}
                closeModal={() => setSelectedCard("")}
              />
            </Fragment>
          )
        })}
      </div>
    )
  )
}

export default Home
