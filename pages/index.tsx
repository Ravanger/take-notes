import { useEffect, useState } from "react"
import { getAllCardData } from "@util/cardUtil"

import Card from "@components/Card"

const Home = () => {
  const [cardData, setCardData] = useState<CardDataType[]>([])

  useEffect(() => {
    updateCardData()
  }, [])

  const updateCardData = async () => {
    const cardDataArray = await getAllCardData()
    setCardData(cardDataArray)
  }

  return (
    cardData.length > 0 &&
    cardData.map((card) => {
      return (
        <Card
          id={card.id}
          key={card.id}
          title={card.title}
          backgroundColor={card.backgroundColor}
          // isSelected={match.params.id === card.id}
          // history={history}
        />
      )
    })
  )
}

export default Home
