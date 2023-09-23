const uriServer = import.meta.env.VITE_URI_SERVER_BACKEND

const postAuth = async ( code ) => {
    try {
        const result = await (await fetch(`${uriServer}/auth/code`, {
            method: 'POST',
            body: JSON.stringify({ code }),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json()
        if (result.error) throw new Error(result.error)
        return result
    }
    catch (err) {
        console.log(err.message)
    }
}

export {
    postAuth
}