export default (title, data) => {
    const Card = document.createElement("div")
    Card.classList.add("card")

    const cardTitle = document.createElement("h3")
    cardTitle.classList.add("card-title")
    cardTitle.innerHTML = title

    Card.appendChild(cardTitle)

    data.forEach(item => {
        const CardItem = document.createElement("p")
        CardItem.innerHTML = `${item.nome}: ${item.valor}`
        Card.appendChild(CardItem)
    })

    return Card
}