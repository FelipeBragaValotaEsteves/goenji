import Request from "./api.js"

export async function getTimes() {
    try {
        const response = await Request('/times', 'GET')
        return response
    } catch (error) {
        return error
    }
}

export async function getTime(id) {
    try {
        const response = await Request(`/times/${id}`, 'GET')
        return response
    } catch (error) {
        return error
    }
}

export async function postTime(time) {
    try {
        const response = await Request('/times', 'POST', time)
        return response
    } catch (error) {
        return error
    }
}

export async function updateTime(id, time) {
    try {
        const response = await Request(`/times/${id}`, 'PUT', time)
        return response
    } catch (error) {
        return error
    }
}

export async function deleteTime(id) {
    try {
        const response = await Request(`/times/${id}`, 'DELETE')
        return response
    } catch (error) {
        return error
    }
}
