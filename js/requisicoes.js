
const base_url = `https://sirius.bplink.com.br/public/api`
const site_url = 'http://127.0.0.1:5500/'

const req = (method = `GET`, headers = {}, body = undefined) => {
    return {
        method: method,
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(body)
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

const register = async (name, email, password, cpf, phone, zip_code, state, city, district, address, number) => {
    const cadastro = await fetch(`${base_url}/user`, initPost({
        name: name,
        email: email,
        password: password,
        cpf: cpf,
        phone: phone,
        address: {
            zip_code: zip_code,
            state: state,
            city: city,
            district: district,
            street: address,
            number: number
        }
    }), { 'Content-Type': 'application/json' })
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })

    const result = await login(email, password)
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

const getInvoices = async (token) => {

    const result = await fetch(`${base_url}/invoice`, req(`GET`, { Authorization: `Bearer ${token}` }))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result

}

const getUserPlans = async (idUser) => {
    const result = await fetch(`${base_url}/plan?user=${idUser}`, req(`GET`))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result
}

const getCategoryById = async (idCategory) => {
    const result = await fetch(`${base_url}/category/${idCategory}`, req(`GET`))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result
}

const getStatusById = async (idStatus) => {
    const result = await fetch(`${base_url}/status/${idStatus}`, req(`GET`))
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

const getSaleById = async (idSale, token) => {
    const result = await fetch(`${base_url}/sale/${idSale}`, req(`GET`, { Authorization: `Bearer ${token}` }))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result
}

const getPlanById = async (idPlan) => {
    const result = await fetch(`${base_url}/plan/${idPlan}`, req(`GET`, {}))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result
}

const getBenefitByCategory = async (idCategory) => {
    const result = await fetch(`${base_url}/benefit?category=${idCategory}`, req(`GET`, {}))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result
}

const getAttendanceById = async (token, idPlan) => {
    const result = await fetch(`${base_url}/attendance?plan=${idPlan}`, req(`GET`, { Authorization: `Bearer ${token}` }))
        .then((res) => {
            return res.json();
        }).then((body) => {
            return body.data;
        })
    return result
}

const redirect = (url) => {
    window.location.href = site_url + url
}