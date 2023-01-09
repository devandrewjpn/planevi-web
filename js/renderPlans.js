(async () => {
    const token = sessionStorage.getItem('token')
    const userData = await getUser(token)
    const userPlans = await getUserPlans(userData.id)
    const userSales = await getUserSales(token)
    const userInvoices = await getInvoices(token)
    console.log(userInvoices);
    console.log(userSales);

    const planos = document.querySelector('.planos')

    userSales.forEach((e, i) => {


        planos.innerHTML += `
        <div class="plano info bg-white boxshad rounded p-4 mt-4">
        <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center w-100">
                <div class="plan-icon bg-ocean-blue"><i class='bx bx-plus-medical'></i></div>
                <div class="ms-3 d-flex flex-column">
                    <h6 class="simp-title">Plano Odontológico</h6>
                    <label class="simp-subtitle">Básico</label>
                </div>
            </div>
            <div class="d-flex w-100 align-items-end flex-column">
                <div class="d-flex mb-3">
                    <button class="butt-outline-success me-3">Ativo</button>
                    <button class="butt-primary">Acionar</button>
                </div>
                <buttton class="text-link" type="button" data-astaton="collapse">Mais detalhes <img
                        class="ms-2" data-astaton="arrow" width="10px" src="img/arrow-down.svg"
                        alt=""></button>
            </div>
        </div>
        <div data-astaton="collapse-content">
            <div class="py-4 d-flex align-items-start row">
                <div class="col-md-3">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                        aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile" type="button" role="tab"
                            aria-controls="v-pills-profile" aria-selected="false">Financeiro</button>
                        <button class="nav-link " id="v-pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-home" type="button" role="tab"
                            aria-controls="v-pills-home" aria-selected="true">Benefícios</button>

                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages" type="button" role="tab"
                            aria-controls="v-pills-messages" aria-selected="false">Infos</button>
                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" type="button" role="tab"
                            aria-controls="v-pills-settings" aria-selected="false">Atendimentos</button>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="tab-content w-100 px-3" id="v-pills-tabContent">
                        <div class="tab-pane fade show active financeiro-${i}" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab" tabindex="0">
                            
                        </div>
                        <div class="tab-pane fade" id="v-pills-home" role="tabpanel"
                            aria-labelledby="v-pills-home-tab" tabindex="0">
                            <h6>Benefícios do seu plano</h6>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit,
                            mollitia.
                            <ul class="mt-3">
                                <li>Benefício 1</li>
                                <li>Benefício 2</li>
                                <li>Benefício 3</li>
                                <li>Benefício 4 </li>
                            </ul>
                        </div>

                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                            aria-labelledby="v-pills-messages-tab" tabindex="0">
                            <div class="d-flex">
                                <div class="info-card me-5">
                                    <h6 class="simp-title">CARUSO</h6>
                                    <label class="simp-subtitle">Nome do PET</label>
                                </div>
                                <div class="info-card">
                                    <h6 class="simp-title">CARUSO</h6>
                                    <label class="simp-subtitle">Nome do PET</label>
                                </div>
                            </div>
                            <button class="mt-5 butt-outline-danger">Cancelar assinatura</button>
                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                            aria-labelledby="v-pills-settings-tab" tabindex="0">
                            <div class="p-3 bg-light">
                                <div class="d-flex justify-content-between align-items-center">
                                    <label><b>Solicitação</b></label>
                                    <span class="badge p-3 text-bg-danger">PENDENTE</span>
                                </div>
                                <div>
                                    <b>Ultima atualização: 09/01/2023</b>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                                        omnis
                                        explicabo numquam ducimus illum commodi repellendus quos,
                                        tenetur
                                        sapiente facere placeat consequuntur excepturi quia atque velit
                                        beatae nihil reprehenderit ab?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
        const financeiro = document.querySelector(`.financeiro-${i}`)

        e.invoices.forEach((element) => {

            financeiro.innerHTML += `
            <div class="financeiro-card p-3 mb-3">

            <div class="d-flex align-items-center">
                <img src="img/fatura-icon.png" alt="">
                <div class="ms-3 d-flex flex-column">
                    <h6 class="simp-title">${element.description}</h6>
                    <label class="simp-subtitle">PET Básico</label>
                </div>
            </div>
            <div class="d-flex flex-column">
                <label>Vencimento: 9 Jan 2023</label>
                <label>Paga: 6 Jan 2023</label>
            </div>
            <div>
                <span class="badge p-3 text-bg-success">PAGA</span>
                <span class="text-link  badge p-3 text-bg-info text-white"
                    data-bs-toggle="offcanvas" data-bs-target="#fatura"
                    aria-controls="fatura">FATURA</span>
            </div>

        </div>
            `
        })
    });

    collapse()
})()