import { Fragment, useEffect, useState } from "react"
import { css } from "@emotion/core"

import { getAllCardData } from "@util/cardUtil"

import Card from "@components/Card"
import Modal from "@components/Modal"

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

  const updateSelectedCard = (id: string) => {
    if (selectedCard !== id) {
      setSelectedCard(id)
    }
  }

  console.log(selectedCard)

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
                onClick={() => updateSelectedCard(card.id)}
              />
              <Modal
                isVisible={selectedCard === card.id}
                title={card.title}
                id={card.id}
                backgroundColor={card.backgroundColor}
                closeModal={() => updateSelectedCard("")}
              />
            </Fragment>
          )
        })}
      </div>
    )
  )
}

export default Home
