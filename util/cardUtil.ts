import { get, keys, set } from "idb-keyval"

export const getCardDataById = async (id: string | string[]) => {
  try {
    const cardData: CardDataType = await get(id)
    return cardData
  } catch (err) {
    console.trace(
      "Error getting card",
      JSON.parse(JSON.stringify(err)),
      JSON.parse(JSON.stringify(id))
    )
  }
}

export const getAllCardData = async () => {
  const ids = (await keys()) as string[]
  let cardDataArray: CardDataType[] = []

  for (const currentId of ids) {
    const currentCard = await getCardDataById(currentId)
    currentCard && cardDataArray.push(currentCard)
  }

  return cardDataArray
}

export const setCardData = async (cardData: CardDataType) => {
  try {
    await set(cardData.id, cardData)
  } catch (err) {
    console.trace(
      "Error setting card data",
      JSON.parse(JSON.stringify(err)),
      JSON.parse(JSON.stringify(cardData))
    )
  }
}

export const setAllCardData = async (cardData: CardDataType[]) => {
  cardData.forEach(async (card) => {
    await setCardData(card)
  })
}
