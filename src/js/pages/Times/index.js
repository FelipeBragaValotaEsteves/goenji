import Input from "../../components/Input/index.js"
import Table from "../../components/Table/index.js"
import Button from "../../components/Button/index.js"
import { getTimes, getTime, postTime, updateTime, deleteTime } from "../../service/timesRequest.js"

export default () => {

    const Times = document.createElement("div")
    Times.classList.add("jogadores")

    const tabContainer = document.createElement("div")
    tabContainer.classList = "tab-container"
    const tabCadastro = document.createElement("button")
    tabCadastro.innerText = "CADASTRO"
    tabCadastro.classList = "active"
    tabCadastro.onclick = () => {
        updateTab(tabCadastro)
    }
    const tabConsulta = document.createElement("button")
    tabConsulta.innerText = "CONSULTA"
    tabConsulta.onclick = () => {
        updateTab(tabConsulta)
    }

    function updateTab(tab) {
        tabCadastro.classList.remove("active")
        tabConsulta.classList.remove("active")

        tab.classList.add("active")

        if (tab.textContent == "CADASTRO") {
            cadastro.classList = "show"
            consulta.classList = "hide"
        } else {
            cadastro.classList = "hide"
            consulta.classList = "show"
        }
    }

    tabContainer.append(tabCadastro, tabConsulta)

    const cadastro = document.createElement("div")
    cadastro.classList = "show"

    const titleCadastro = document.createElement("h1")
    titleCadastro.innerText = "Cadastro de Times"

    const inputNome = Input("Nome", "text", "nome", "", "100")

    const formTimes = document.createElement("form")
    formTimes.append(
        inputNome,
        Button("SALVAR", controlCreateTime)
    )

    cadastro.append(
        titleCadastro,
        formTimes
    )

    const consulta = document.createElement("div")
    consulta.classList = "hide"

    const titleConsulta = document.createElement("h1")
    titleConsulta.innerText = "Consulta de Times"

    const tableTimes = Table(["Código", "Nome", "Ações"], "tbody-times")

    consulta.append(
        titleConsulta,
        Button("PESQUISAR", controlGetTime),
        tableTimes
    )

    Times.append(
        tabContainer,
        cadastro,
        consulta
    )


    return Times

    function controlCreateTime() {
        const data = {
            "nome": inputNome.querySelector("input").value
        }

        postTime(data)
    }

    async function controlGetTime() {
        const times = await getTimes()
        console.log(times)
        const tbody = document.getElementById("tbody-times")
        tbody.innerHTML = ''
        times.forEach(time => {
            tbody.appendChild(createLine(time))
        })
    }

    function createLine(data) {
        let row = document.createElement("tr")

        let columnCodigo = document.createElement("td")
        columnCodigo.innerHTML = data.id
        row.appendChild(columnCodigo)

        let columnNome = document.createElement("td")
        let inputNomeEdit = document.createElement("input")
        inputNomeEdit.value = data.nome
        columnNome.appendChild(inputNomeEdit)
        row.appendChild(columnNome)

        let columnAcoes = document.createElement("td")
        columnAcoes.style.display = 'flex'
        columnAcoes.style.justifyContent = 'end'
        columnAcoes.style.gap = '1rem'
        columnAcoes.append(Button("Editar", controlUpdateTime, data.id), Button("Deletar", controlDeteleTime, data.id))
        row.appendChild(columnAcoes)

        return row
    }

    async function controlUpdateTime(id) {
        const data = {
            "nome": inputNome.querySelector("input").value
        }

        updateTime(id, data)
    }

    async function controlDeteleTime(id) {
        await deleteTime(id)
        controlGetTime()
    }
}