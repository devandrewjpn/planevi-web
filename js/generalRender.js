(async() => {
    const token = sessionStorage.getItem('token')
    const userData = await getUser(token)

    const nameWelcome = document.querySelector('#welcome-name')

    const nameProfile = document.querySelector('#nameProfile')
    const emailProfile = document.querySelector('#emailProfile')

    nameWelcome.textContent = userData.name

    nameProfile.textContent = userData.name
    emailProfile.textContent = userData.email
})()