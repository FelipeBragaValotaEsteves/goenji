// const gols = [
//     { nome: "Lionel Messi", valor: "672 gols" },
//     { nome: "Cristiano Ronaldo", valor: "800 gols" },
//     { nome: "Neymar Jr.", valor: "350 gols" },
//     { nome: "Robert Lewandowski", valor: "500 gols" },
//     { nome: "Karim Benzema", valor: "400 gols" }
// ]

// const assistencias = [
//     { nome: "Lionel Messi", valor: "305 assistências" },
//     { nome: "Cristiano Ronaldo", valor: "230 assistências" },
//     { nome: "Neymar Jr.", valor: "200 assistências" },
//     { nome: "Kevin De Bruyne", valor: "170 assistências" },
//     { nome: "Thomas Müller", valor: "175 assistências" }
// ]

// const cartaoVermelho = [
//     { nome: "Sergio Ramos", valor: "26 cartões" },
//     { nome: "Gerard Piqué", valor: "10 cartões" },
//     { nome: "Neymar Jr.", valor: "5 cartões" },
//     { nome: "Cristiano Ronaldo", valor: "11 cartões" },
//     { nome: "Zlatan Ibrahimović", valor: "14 cartões" }
// ]

// const cartaoAmarelo = [
//     { nome: "Sergio Ramos", valor: "179 cartões" },
//     { nome: "Lionel Messi", valor: "86 cartões" },
//     { nome: "Cristiano Ronaldo", valor: "106 cartões" },
//     { nome: "Andrés Iniesta", valor: "70 cartões" },
//     { nome: "Luis Suárez", valor: "85 cartões" }
// ]

// const times = [
//     { nome: "Real Madrid", valor: "25 jogadores" },
//     { nome: "Barcelona", valor: "24 jogadores" },
//     { nome: "Paris Saint-Germain", valor: "23 jogadores" },
//     { nome: "Manchester City", valor: "22 jogadores" },
//     { nome: "Bayern Munich", valor: "26 jogadores" }
// ]

// const jogadoresJovens = [
//     { nome: "Jude Bellingham", valor: "20 anos" },
//     { nome: "Giovanni Reyna", valor: "21 anos" },
//     { nome: "Ansu Fati", valor: "21 anos" },
//     { nome: "Kylian Mbappé", valor: "25 anos" },
//     { nome: "Erling Haaland", valor: "23 anos" }
// ]


import Card from "../../components/Card/index.js"

export default () => {
    const Dashboard = document.createElement("div")
    Dashboard.classList.add("dashboard")

    const dashboardTitle = document.createElement("h1")
    dashboardTitle.classList.add("dashboard-title")
    dashboardTitle.innerText = "Seja Bem Vindo ao INAZUMA!"

    const divImg = document.createElement("div")
    divImg.classList = "div-img-home"
    const img = document.createElement("img")
    img.classList = "img-home"
    img.src = "../../../assets/Soccer-bro.svg"
    divImg.append(img)
    Dashboard.append(dashboardTitle, divImg)

    // const estatisticasCards = document.createElement("div")
    // estatisticasCards.classList.add("estatisticas-cards")

    // estatisticasCards.appendChild(Card("⚽ Mais Gols", gols))
    // estatisticasCards.appendChild(Card("⚽ Mais Assistências", assistencias))
    // estatisticasCards.appendChild(Card("🟥 Mais Cartões Vermelhos", cartaoVermelho))
    // estatisticasCards.appendChild(Card("🟨 Mais Cartões Amarelos", cartaoAmarelo))
    // estatisticasCards.appendChild(Card("👥 Mais Jogadores", times))
    // estatisticasCards.appendChild(Card("👶 Mais Jovens", jogadoresJovens))

    // Dashboard.appendChild(estatisticasCards)

    return Dashboard
}