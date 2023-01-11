sessionStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM0Mzk4OTUsIm5iZiI6MTY3MzQzOTg5NSwiZXhwIjoxNjc2MTE4Mjk1LCJ1aWQiOiI3In0.Na-58AUR8Ch1sMHY-bS7aksH0Y95-v3XUtk6YYfdCjg')
(async () => {
    setLoading()

    const token = sessionStorage.getItem('token')
    const userData = await getUser(token)
    const userPlans = await getUserPlans(userData.id)

    console.log(userData);
    console.log(userPlans);

    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const cpf = document.querySelector('#cpf')
    const phone = document.querySelector('#phone')
    const address = document.querySelector('#address')
    const district = document.querySelector('#district')
    const cep = document.querySelector('#cep')
    const city = document.querySelector('#city')
    const state = document.querySelector('#state')

    name.textContent = userData.name
    email.textContent = userData.email
    cpf.textContent = userData.cpf
    phone.textContent = userData.phone
    address.textContent = userData.address.address
    district.textContent = userData.address.district
    cep.textContent = userData.address.zip_code
    city.textContent = userData.address.city
    state.textContent = userData.address.state

    const planos = document.querySelector('.planos')

    userPlans.forEach(async(e, i) => {
        const category = await getCategoryById(e.id_category)
        const status = await getStatusById(e.id_status)
        console.log(status);
        planos.innerHTML += `
        <div class="plano-box">
            <div class="d-flex align-items-center">
                <div class="planoimage bg-pink me-3"><img src="img/pet.svg" alt=""></div>
                <div class="d-flex flex-column">
                    <span class="simp-title">${category.name}</span>
                    <label class="simp-subtitle">${e.name}</label>
                </div>
            </div>
            <button class="status-button bg-success">${status.value}</button>
        </div>
        `
    });

    removeLoading()
})()