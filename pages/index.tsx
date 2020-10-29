import React, { useEffect, useState } from "react"
import { getCardDataArray } from "@util/cardUtil"

import Card from "@components/Card"

const Home = () => {
  // cardData.forEach((card) => {
  //   set(card.id, card)
  // })

  const [cardData, setCardData] = useState<CardDataType[]>([])

  useEffect(() => {
    updateCardData()
  }, [])

  const updateCardData = async () => {
    const cardDataArray = await getCardDataArray()
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

// const cardData: CardDataType[] = [
//   {
//     id: "c",
//     title: "5 Food Apps Delivering the Best of Your City",
//     backgroundColor: "#814A0E",
//   },
//   {
//     id: "f",
//     title: "Arrange Your Apple Devices for the Gram",
//     backgroundColor: "#959684",
//   },
//   {
//     id: "a",
//     title: "Map Apps for the Superior Mode of Transport",
//     backgroundColor: "#5DBCD2",
//   },
//   {
//     id: "g",
//     title: "Our Pick of Apps to Help You Escape From Apps",
//     backgroundColor: "#8F986D",
//   },
//   {
//     id: "d",
//     title: "The Latest Ultra-Specific Photography Editing Apps",
//     backgroundColor: "#FA6779",
//   },
//   {
//     id: "h",
//     title: "100 Cupcake Apps for the Cupcake Connoisseur",
//     backgroundColor: "#282F49",
//   },
//   {
//     id: "e",
//     title: "Yes, They Are Sociopaths",
//     backgroundColor: "#AC7441",
//   },
//   {
//     id: "b",
//     title: "Seriously the Only Escape is the Stratosphere",
//     backgroundColor: "#CC555B",
//   },
// ]

export default Home
