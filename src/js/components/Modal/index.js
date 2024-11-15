import { getEstatisticaByJogador, postEstatistica, updateEstatistica } from "../../service/estatisticaRequest.js"

export default async (id) => {
    document.getElementById("btn_save").onclick = ''
    document.getElementById("gols").value = ''
    document.getElementById("assistencias").value = ''
    document.getElementById("cartoes_amarelos").value = ''
    document.getElementById("cartoes_vermelhos").value = ''

    const estatisticas = await getEstatisticaByJogador(id)

    if (!estatisticas.message) {
        document.getElementById("gols").value = estatisticas.gols
        document.getElementById("assistencias").value = estatisticas.assistencias
        document.getElementById("cartoes_amarelos").value = estatisticas.cartoes_amarelos
        document.getElementById("cartoes_vermelhos").value = estatisticas.cartoes_vermelhos

        document.getElementById("btn_save").onclick = async () => {
            const data = {
                "gols": document.getElementById("gols").value,
                "assistencias": document.getElementById("assistencias").value,
                "cartoes_amarelos": document.getElementById("cartoes_amarelos").value,
                "cartoes_vermelhos": document.getElementById("cartoes_vermelhos").value,
                "jogador_id": id
            }
            updateEstatistica(estatisticas.id_estatistica, data)
        }
    } else {
        document.getElementById("btn_save").onclick = async () => {
            const data = {
                "gols": document.getElementById("gols").value,
                "assistencias": document.getElementById("assistencias").value,
                "cartoes_amarelos": document.getElementById("cartoes_amarelos"),
                "cartoes_vermelhos": document.getElementById("cartoes_vermelhos").value,
                "jogador_id": id
            }
            postEstatistica(data)
        }
    }
}