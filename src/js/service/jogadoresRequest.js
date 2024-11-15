import Request from "./api.js"

export async function getJogadores() {
    try {
        const response = await Request('/jogadores', 'GET')
        return response
    } catch (error) {
        return error
    }
}

export async function getJogador(id) {
    try {
        const response = await Request(`/jogadores/${id}`, 'GET')
        return response
    } catch (error) {
        return error
    }
}

export async function postJogador(jogador) {
    try {
        const response = await Request('/jogadores', 'POST', jogador)
        return response
    } catch (error) {
        return error
    }
}

export async function updateJogador(id, jogador) {
    try {
        const response = await Request(`/jogadores/${id}`, 'PUT', jogador)
        return response
    } catch (error) {
        return error
    }
}

export async function deleteJogador(id) {
    try {
        await Request(`/jogadores/${id}`, 'DELETE')
        return response
    } catch (error) {
        return error
    }
}
