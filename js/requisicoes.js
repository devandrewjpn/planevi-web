
const base_url = `https://sirius.bplink.com.br/public/api`

const req = (method = `GET`, headers = {}, body = undefined) => {
    return {
        method: method,
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: body
    }
}

const login = async (email, password) => {
    const body = {
        email: email,
        password: password
    }

    const result = await fetch(`${base_url}/token`, req(`POST`, {}, body))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result
}

const getUser = async (token) => {

    const result = await fetch(`${base_url}/user`, req(`GET`, { Authorization: `Bearer ${token}` }))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result

}

const getUserSales = async (token) => {
    const result = await fetch(`${base_url}/sale`, req(`GET`, { Authorization: `Bearer ${token}` }))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result
}
