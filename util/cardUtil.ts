import { get, keys } from "idb-keyval"

export const getCardDataById = async (id: string | string[]) => {
  const cardData: CardDataType = await get(id)
  return cardData
}

export const getAllCardData = async () => {
  const ids = (await keys()) as string[]
  let cardDataArray: CardDataType[] = []

  for (const currentId of ids) {
    const currentCard = await getCardDataById(currentId)
    cardDataArray.push(currentCard)
  }

  return cardDataArray
}
