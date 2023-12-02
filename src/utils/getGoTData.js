/**
 *
 * @param {"random" | "houses" | "house" | "characters" | "character"} resouce
 * @param {string} param
 *
 * @returns
 */
export async function getGoTData(resouce, param = "") {
  try {
    const response = await fetch(
      `https://api.gameofthronesquotes.xyz/v1/${resouce}/${param}`
    )
    const data = await response.json()
    if (resouce === "character" || resouce === "house") return data[0]
    return data
  } catch (error) {
    console.error(error)
  }
}
