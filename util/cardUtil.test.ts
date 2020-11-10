import { setAllCardData, getAllCardData, getCardDataById } from "./cardUtil"
import "fake-indexeddb/auto"
import { cardData } from "./cardData"

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
