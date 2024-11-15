import Alert from "../components/Alert/index.js"

const urlBase = "http://localhost:8000"

export default async (url, method, body,) => {
    const options = {
        method: method,
        headers: { "Content-Type": "application/json" },
    }

    if (body) {
        options.body = JSON.stringify(body)
    }

    console.log(urlBase + url, options)

    try {
        const response = await fetch(urlBase + url, options)
        if (!response) {
            throw new Error(`Erro na requisição: ${response.statusText}`)
        }

        const data = await response.json()

        if (data.message) {
            Alert(data.message)
        }
        console.log(data)

        return data
    } catch (error) {
        Alert(error)
    }
}