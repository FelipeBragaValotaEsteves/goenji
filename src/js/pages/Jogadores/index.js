import Input from "../../components/Input/index.js"
import Select from "../../components/Select/index.js"
import Table from "../../components/Table/index.js"
import Button from "../../components/Button/index.js"
import Modal from "../../components/Modal/index.js"
import { getTimes } from "../../service/timesRequest.js"
import { getJogadores, getJogador, postJogador, updateJogador, deleteJogador } from "../../service/jogadoresRequest.js"

let times = await getTimes()

export default () => {

    function save() {
        console.log(jogadores)
    }

    const Jogadores = document.createElement("div")
    Jogadores.classList.add("jogadores")

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
    titleCadastro.innerText = "Cadastro de Jogadores"
    const inputNome = Input("Nome", "text", "nome", "", "100")
    const inputDataNascimento = Input("Data de Nascimento", "date", "dataNascimento", "", null)
    const inputPosicao = Input("Posição", "text", "posicao", "", "5")
    const selectTime = Select("Time", "time", times)

    const formJogadores = document.createElement("form")
    formJogadores.append(
        inputNome,
        inputDataNascimento,
        inputPosicao,
        selectTime,
        Button("SALVAR", controlCreateJogador)
    )

    cadastro.append(
        titleCadastro,
        formJogadores
    )

    const consulta = document.createElement("div")
    consulta.classList = "hide"

    const titleConsulta = document.createElement("h1")
    titleConsulta.innerText = "Consulta de Jogadores"

    const tableJogadores = Table(["Código", "Nome", "Data de Nascimento", "Posição", "Time", "Ações"], "tbody-jogadores")

    consulta.append(
        titleConsulta,
        Button("PESQUISAR", controlGetJogadores),
        tableJogadores
    )

    Jogadores.append(
        tabContainer,
        cadastro,
        consulta
    )

    return Jogadores

    async function controlCreateJogador() {
        const data = {
            "nome": inputNome.querySelector("input").value,
            "data_nascimento": inputDataNascimento.querySelector("input").value,
            "posicao": inputPosicao.querySelector("input").value,
            "time_id": selectTime.querySelector("select").value,
        }

        await postJogador(data)
        await controlGetJogadores()
    }

    async function controlGetJogadores() {
        const jogadores = await getJogadores()
        console.log(jogadores)
        const tbody = document.getElementById("tbody-jogadores")
        tbody.innerHTML = ''
        jogadores.forEach(time => {
            tbody.appendChild(createLineJogadores(time))
        })
    }

    function createLineJogadores(data) {
        let row = document.createElement("tr")

        let columnCodigo = document.createElement("td")
        columnCodigo.innerHTML = data.id
        row.appendChild(columnCodigo)

        let columnNome = document.createElement("td")
        let inputNomeEdit = document.createElement("input")
        inputNomeEdit.value = data.nome
        columnNome.appendChild(inputNomeEdit)
        row.appendChild(columnNome)

        let columnDataNascimento = document.createElement("td")
        let inputDataNascimentoEdit = document.createElement("input")
        inputDataNascimentoEdit.type = "date"
        inputDataNascimentoEdit.value = data.data_nascimento
        columnDataNascimento.appendChild(inputDataNascimentoEdit)
        row.appendChild(columnDataNascimento)

        let columnPosicao = document.createElement("td")
        let inputPosicaoEdit = document.createElement("input")
        inputPosicaoEdit.value = data.posicao
        columnPosicao.appendChild(inputPosicaoEdit)
        row.appendChild(columnPosicao)

        let columnTime = document.createElement("td")
        let selectTimeEdit = document.createElement("select")
        times.forEach(time => {
            const optionElement = document.createElement('option')
            optionElement.value = time.id
            optionElement.textContent = time.nome
            selectTimeEdit.appendChild(optionElement)
        })
        selectTimeEdit.value = data.time_id
        columnTime.appendChild(selectTimeEdit)
        row.appendChild(columnTime)

        let columnAcoes = document.createElement("td")
        columnAcoes.style.display = 'flex'
        columnAcoes.style.justifyContent = 'end'
        columnAcoes.style.alignItems = 'center'
        columnAcoes.style.gap = '1rem'
        columnAcoes.style.height = 'auto'
        columnAcoes.append(
            Button("Editar", controlUpdateJogador, data.id, inputNomeEdit, inputDataNascimentoEdit, inputPosicaoEdit, selectTimeEdit),
            Button("Deletar", controlDeteleJogador, data.id),
            Button("Estatísticas", abrirModal, data.id)
        )
        row.appendChild(columnAcoes)

        return row
    }

    async function controlUpdateJogador(id, inputNomeEdit, inputDataNascimentoEdit, inputPosicaoEdit, selectTimeEdit) {
        const data = {
            "nome": inputNomeEdit.value,
            "data_nascimento": inputDataNascimentoEdit.value,
            "posicao": inputPosicaoEdit.value,
            "time_id": selectTimeEdit.value,
        }

        await updateJogador(id, data)
    }

    async function controlDeteleJogador(id) {
        await deleteJogador(id)
        await controlGetJogadores()
    }

    function abrirModal(id) {
        const modalElement = document.getElementById('modal-estatisticas')
        modalElement.style.display = 'block'
        Modal(id)
    }
}
