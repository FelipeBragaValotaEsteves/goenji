import Request from "./api.js"

export async function getEstatisticas() {
    try {
        const response = await Request('/estatisticas', 'GET')
        return response
    } catch (error) {
        return error
    }
}

export async function getEstatistica(id) {
    try {
        const response = await Request(`/estatisticas/${id}`, 'GET')
        return response
    } catch (error) {
        return error
    }
}

export async function getEstatisticaByJogador(id) {
    try {
        const response = await Request(`/estatisticas/jogador/${id}`, 'GET')
        return response
    } catch (error) {
        return error
    }
}

export async function postEstatistica(estatistica) {
    try {
        const response = await Request('/estatisticas', 'POST', estatistica)
        return response
    } catch (error) {
        return error
    }
}

export async function updateEstatistica(id, estatistica) {
    try {
        const response = await Request(`/estatisticas/${id}`, 'PUT', estatistica)
        return response
    } catch (error) {
        return error
    }
}

export async function deleteEstatistica(id) {
    try {
        const response = await Request(`/estatisticas/${id}`, 'DELETE')
        return response
    } catch (error) {
        return error
    }
}
