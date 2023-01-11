var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Septembro", "Outubro", "Novembro", "Dezembro");



    (async () => {
        setLoading()

        const token = sessionStorage.getItem('token')
        const userSales = await getUserSales(token)
        const userInvoices = await getInvoices(token)
        console.log(userSales);

        const planos = document.querySelector('.planos')

        await userSales.forEach(async (e, i) => {

            const category = await getCategoryById(e.plan.id_category)
            const status = await getStatusById(e.plan.id_status)

            planos.innerHTML += `
        <div class="plano info bg-white boxshad rounded p-4 mt-4">
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center w-100">
                    <div class="plan-icon bg-ocean-blue"><i class='bx bx-plus-medical'></i></div>
                    <div class="ms-3 d-flex flex-column">
                        <h6 class="simp-title">Plano ${category.name}</h6>
                        <label class="simp-subtitle">Básico</label>
                    </div>
                </div>
                <div class="d-flex w-100 align-items-end flex-column">
                    <div class="d-flex mb-3">
                        <button class="butt-outline-success me-3">${status.value}</button>
                        <button class="butt-primary">Acionar</button>
                    </div>
                    <buttton class="text-link" type="button" data-astaton="collapse" data-idSale="${e.id}">Mais detalhes <img
                            class="ms-2" data-astaton="arrow" width="10px" src="img/arrow-down.svg" 
                            alt=""></button>
                </div>
            </div>
        </div>
        `

            collapse()

        const collapseButton = document.querySelectorAll('[data-astaton="collapse"]');
        console.log(collapseButton);

        collapseButton.forEach((e) => {
            e.addEventListener(`click`, (event) => {
                sessionStorage.setItem(`currentIdSale`, event.target.getAttribute(`data-idSale`))
                window.location.href = './plano.html'
            })
        })
        });

        
        removeLoading()
    })()