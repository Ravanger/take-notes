import { setAllCardData, getAllCardData, getCardDataById } from "./cardUtil"
import "fake-indexeddb/auto"

const cardData: CardDataType[] = [
  {
    id: "c",
    title: "5 Food Apps Delivering the Best of Your City",
    backgroundColor: "#814A0E",
  },
  {
    id: "f",
    title: "Arrange Your Apple Devices for the Gram",
    backgroundColor: "#959684",
  },
  {
    id: "a",
    title: "Map Apps for the Superior Mode of Transport",
    backgroundColor: "#5DBCD2",
  },
  {
    id: "g",
    title: "Our Pick of Apps to Help You Escape From Apps",
    backgroundColor: "#8F986D",
  },
  {
    id: "d",
    title: "The Latest Ultra-Specific Photography Editing Apps",
    backgroundColor: "#FA6779",
  },
  {
    id: "h",
    title: "100 Cupcake Apps for the Cupcake Connoisseur",
    backgroundColor: "#282F49",
  },
  {
    id: "e",
    title: "Yes, They Are Sociopaths",
    backgroundColor: "#AC7441",
  },
  {
    id: "b",
    title: "Seriously the Only Escape is the Stratosphere",
    backgroundColor: "#CC555B",
  },
]

console.table(JSON.parse(JSON.stringify(cardData)))
test("Setting card data", async () => {
  try {
    await setAllCardData(cardData)
  } catch (e) {
    expect(e).toMatch("error")
  }
})

test("Get all cards should return test data", async () => {
  try {
    const data = await getAllCardData()
    expect(data).toHaveLength(8)
    expect(data.map((a) => a.id).sort()).toEqual(
      cardData.map((a) => a.id).sort()
    )
  } catch (e) {
    expect(e).toMatch("error")
  }
})

test("Get card with ID 'a'", async () => {
  try {
    const data = await getCardDataById("a")
    expect(data).toEqual({
      id: "a",
      title: "Map Apps for the Superior Mode of Transport",
      backgroundColor: "#5DBCD2",
    })
  } catch (e) {
    expect(e).toMatch("error")
  }
})
