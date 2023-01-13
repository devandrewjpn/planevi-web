(async () => {
    setLoading()

    const token = sessionStorage.getItem('token')
    const idSale = sessionStorage.getItem('currentIdSale')

    const sale = await getSaleById(idSale, token)
    const category = await getCategoryById(sale.plan.category_id)
    const plan = await getPlanById(sale.plan.id)
    const benefits = await getBenefitByCategory(category.id)
    const statusPlan = await getStatusById(sale.plan.status_id)
    const attendance = await getAttendanceById(token, sale.plan.id)

    console.log(sale);
    console.log(category);
    console.log(plan);
    console.log(benefits);
    console.log(attendance);

    const bg = document.querySelector('.bg-plan')
    bg.style.backgroundImage = `url(${plan.image})`

    const categoryName = document.querySelectorAll(`.category-name-render`)
    const planName = document.querySelectorAll(`.plan-name-render`)
    const categoryDescription = document.querySelectorAll(`.category-description`)
    const statusPlanValue = document.querySelectorAll('.statusPlanValue')
    const answersRender = document.querySelectorAll('.answers-render')

    categoryName.forEach((e) => {
        e.textContent = category.name
    })

    planName.forEach((e) => {
        e.textContent = plan.name
    })

    categoryDescription.forEach((e) => {
        e.textContent = category.description
    })

    statusPlanValue.forEach((e) => {
        if (statusPlan.value == 'Ativado') {
            e.classList.add('butt-outline-success')
        } else e.classList.add('butt-outline-danger')
        e.textContent = statusPlan.value
    })

    answersRender.forEach((e) => {
        const answers = Object.keys(sale.answers)
        const answersArr = []
        answers.forEach((el) => {
            answersArr.push({
                question: el,
                answer: sale.answers[el]
            })
        })

        answersArr.forEach((el) => {
            e.innerHTML += `
                <li><b>${el.question}:</b> ${el.answer}</li>
            `
        })
        console.log(answersArr);
    })

    const faturas = document.querySelector(`#faturas`)

    sale.invoices.forEach(async (e) => {

        const status = await getStatusById(e.status_id)
        console.log(status);
        const buttonType = 'danger'

        if (status.value == `Ativado`) {
            buttonType = `success`
        }

        faturas.innerHTML += `
        <div class="row my-3 px-3">
            <div class="col-1 p-0 m-0 d-flex align-items-center"><img src="./img/fatura-icon.png" alt=""></div>
            <div class="col-6">
                <div class="text-truncate p-0 m-0 fs-6 simp-title">${e.description}</div>
                <div class="text-truncate p-0 m-0 simp-subtitle"> <span class="btn-boleto" data-boletoURL="${e.iugu_link}">Fatura</span> / 2ª via</div>
            </div>
            <div class="col-5 d-flex align-items-center justify-content-end">
                <button class="butt-outline-${buttonType}">${status.value}</button>
            </div>
        </div>
        `

        document.querySelectorAll(`.btn-boleto`).forEach((e) => {
            e.addEventListener(`click`, (event) => {
                const iugu_link = event.target.getAttribute(`data-boletoURL`)
                console.log(iugu_link);

                const offCanvasContent = `
                    <div class="d-flex justify-content-center flex-column align-items-center w-100 h-100">
                        <div class="fs-4 mb-5">Fatura</div>
                        <iframe src="${iugu_link}" frameborder="0" class="iframe-boleto"></iframe>
                    </div>
                `
                setOffCanvas(offCanvasContent)
                document.querySelector(`#frame-boleto`).setAttribute(`src`, iugu_link)
            })
        })


    })

    const beneficios = document.querySelector(`.beneficios`)

    if (beneficios) {
        benefits.forEach((e) => {
            beneficios.innerHTML += `
            <span>${e.name}</span>
            `
        })

    }

    const atendimentos = document.querySelector('#atendimentos')

    attendance.forEach(async (e) => {
        const statusAttendance = await getStatusById(e.status.id)
        let bgType = 'danger'
        if(statusAttendance.value == 'Concluído') {
            bgType = 'success'
        }

        atendimentos.innerHTML += `
        <div class="bg-light p-3">
            <div>
                <div class="d-flex w-100 justify-content-between">
                    <b>${e.type} - ${e.created_at}</b>
                    <span class="badge text-bg-${bgType}">${statusAttendance.value}</span>
                </div>
            </div>
        </div>
    `
    })

    removeLoading()

})()

document.querySelector('.btn-back').addEventListener('click', (e) => {
    history.back()
})