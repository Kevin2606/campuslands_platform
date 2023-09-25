import { useFetch } from "../hooks/useFetch"
const uriServer = import.meta.env.VITE_URI_SERVER_BACKEND

const config = {
    method: 'POST',
    body: null,
    headers: {
        'Content-Type': 'application/json'
    }
}

const postAuth =  ( code ) => {
    config.body = JSON.stringify({ code })
    return useFetch(`${uriServer}/auth/code`, config)
}

export {
    postAuth
}