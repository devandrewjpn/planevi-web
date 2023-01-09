// sessionStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzMyODExNDIsIm5iZiI6MTY3MzI4MTE0MiwiZXhwIjoxNjc1OTU5NTQyLCJ1aWQiOiIyIn0.HCqY3tIUV857RlW5DPd6uuKm6LQxlDuXYZO_QLoULjc')
(async () => {
    const token = sessionStorage.getItem('token')
    const a = await getUserSales(token)
    const userData = await getUser(token)

    console.log(userData);

    const nameProfile = document.querySelector('#nameProfile')
    const emailProfile = document.querySelector('#emailProfile')

    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const cpf = document.querySelector('#cpf')
    const phone = document.querySelector('#phone')
    const address = document.querySelector('#address')
    const district = document.querySelector('#district')
    const cep = document.querySelector('#cep')
    const city = document.querySelector('#city')
    const state = document.querySelector('#state')

    nameProfile.textContent = userData.name
    emailProfile.textContent = userData.email

    name.textContent = userData.name
    email.textContent = userData.email
    cpf.textContent = userData.cpf
    phone.textContent = userData.phone
    address.textContent = userData.address.address
    district.textContent = userData.address.district
    cep.textContent = userData.address.zip_code
    city.textContent = userData.address.city
    state.textContent = userData.address.state

})()