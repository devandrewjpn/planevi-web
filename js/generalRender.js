(async () => {
    const token = sessionStorage.getItem('token')
    const userData = await getUser(token)

    const nameWelcome = document.querySelector('#welcome-name')
    const nameRender = document.querySelectorAll('.name-render')
    const emailRender = document.querySelectorAll('.email-render')

    if (nameWelcome) {
        nameWelcome.textContent = userData.name.split(` `)[0]
    }

    nameRender.forEach((e) => {
        e.textContent = userData.name
    })

    emailRender.forEach((e) => {
        e.textContent = userData.email
    })

    const loginContainer = document.querySelector(`.login-container`)
    if (token) {
        loginContainer.innerHTML = `
            <div class="profile-img me-3"
                style="background-image: url(https://pbs.twimg.com/media/EQdBN8sWAAAZ4eu.jpg);">
                <div class="dropdown-astaton boxshad d-flex flex-column">
                    <div class=" d-flex align-items-center mb-4">
                        <div class="profile-img me-4"
                            style="background-image: url(https://pbs.twimg.com/media/EQdBN8sWAAAZ4eu.jpg);">
                        </div>
                        <div class="d-flex flex-column">
                            <h6 class="simp-title name-render">Capitão Astaton</h6>
                            <label class="simp-subtitle email-render">yuutoandrew.jpn@gmail.com</label>
                        </div>
                    </div>
                    <button class="butt-secondary py-3">Meu Perfil</button>
                    <button class="my-2 butt-secondary py-3">Configurações</button>
                    <button class="butt-primary py-3"><span class="mx-2">Sair</span><img src="img/logout.svg"
                            alt=""></button>
                </div>
            </div>
            <div class="d-flex flex-column">
                <h6 class="simp-title name-render">Capitão Astaton</h6>
                <label class="simp-subtitle email-render">yuutoandrew.jpn@gmail.com</label>
            </div>
        `
    } else {
        loginContainer.innerHTML = `
            <button class="px-4 py-2 mx-2 btn-entrar">Entrar</button>
            <button class="px-4 py-2 mx-2 btn-cadastro">Cadastrar</button>
        `
    }

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

const removeOffCanvas = () => {
    const bgOffCanvas = document.querySelector('.bg-offcanvasP')
    bgOffCanvas.parentNode.removeChild(bgOffCanvas)
    const offCanvas = document.querySelector(`.offCanvasP`)
    offCanvas.classList.remove(`open`)
}

const setOffCanvas = (content) => {
    const bgOffCanvas = document.createElement('div')
    document.querySelector('body').appendChild(bgOffCanvas)
    bgOffCanvas.setAttribute('class', 'bg-offcanvasP')
    bgOffCanvas.addEventListener(`click`, (e) => removeOffCanvas())
    const offCanvas = document.querySelector(`.offCanvasP`)
    offCanvas.classList.add(`open`)
    offCanvas.innerHTML = content
    const closeBtn = document.createElement('div')
    closeBtn.setAttribute(`class`, `close-btn`)
    offCanvas.appendChild(closeBtn)
    closeBtn.addEventListener(`click`, (e) => removeOffCanvas())
}

