(async() => {
    const token = sessionStorage.getItem('token')
    const userData = await getUser(token)

    const nameWelcome = document.querySelector('#welcome-name')
    const nameRender = document.querySelectorAll('.name-render')
    const emailRender = document.querySelectorAll('.email-render')

    if(nameWelcome) {
        nameWelcome.textContent = userData.name.split(` `)[0]
    }

    nameRender.forEach((e) => {
        e.textContent = userData.name
    })

    emailRender.forEach((e) => {
        e.textContent = userData.email
    })
})()

const setToast = (text, tipo = 'error') => {

    const toast = document.createElement('div')
    toast.setAttribute('class', 'toast')
    toast.classList.add(tipo)
    toast.textContent = text
    document.querySelector('body').appendChild(toast)

    setTimeout(() => {
        document.querySelector('body').removeChild(toast)
    }, 4000)
}

const setLoading = () => {
    const loading_bg = document.createElement('div')
    document.querySelector('body').appendChild(loading_bg)
    loading_bg.setAttribute('class', 'bg-loading')
    const loading = document.createElement('img')
    loading_bg.appendChild(loading)
    loading.setAttribute('class', 'loading')
    loading.setAttribute('src', './img/loading.gif')
}

const removeLoading = () => {
    const loading_bg = document.querySelector('.bg-loading')
    loading_bg.parentNode.removeChild(loading_bg)
}