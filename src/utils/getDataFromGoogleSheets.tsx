import axios from "axios"

export const getDataFromGoogleSheets = (tableName: string, callback: any) => {
  const apiKey = "AIzaSyDUWS_3nDunYCHjO_FznDxHOqx9blUfLW8"
  const spreadsheetId = "1UhXpQ_c0pSvMhYVsWU4cAbDeL9aTu7SjwFzg_LZouE0"

  axios
    .get(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${tableName}?key=${apiKey}`,
    )
    .then((response) => {
      callback(response.data.values.slice(1))
    })
    .catch((error) => {
      console.error("Error:", error)
    })
}
