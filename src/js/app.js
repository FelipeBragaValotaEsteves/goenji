import Dashboard from "./pages/Dashboard/index.js"
import Jogadores from "./pages/Jogadores/index.js"
import Times from "./pages/Times/index.js"

function loadDashboard() {
    resetApp()
    document.getElementById("app").append(Dashboard())
}

function loadTimes() {
    resetApp()
    document.getElementById("app").append(Times())
}

function loadJogadores() {
    resetApp()
    document.getElementById("app").append(Jogadores())
}

function resetApp() {
    document.getElementById("app").innerHTML = ""
}

function handleRouting() {
    const path = window.location.hash

    if (path === "#times") {
        loadTimes()
    } else if (path === "#jogadores") {
        loadJogadores()
    } else {
        loadDashboard()
    }
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        window.location.hash = event.target.getAttribute("href")
        handleRouting()
    })
})

window.addEventListener("hashchange", handleRouting)

document.addEventListener("DOMContentLoaded", () => {
    handleRouting()
})
