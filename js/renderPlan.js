(async () => {
    setLoading()

    const token = sessionStorage.getItem('token')
    const idSale = sessionStorage.getItem('currentIdSale')
    
    const sale = await getSaleById(idSale, token)
    const category = await getCategoryById(sale.plan.category_id)
    const plan = await getPlanById(sale.plan.id)

    console.log(sale);
    console.log(category);
    console.log(plan);

    const bg = document.querySelector('.bg-plan')
    bg.style.backgroundImage = `url(${plan.image})`

    const categoryName = document.querySelectorAll(`.category-name-render`)
    const planName = document.querySelectorAll(`.plan-name-render`)

    categoryName.forEach((e) => {
        e.textContent = category.name
    })

    planName.forEach((e) => {
        e.textContent = plan.name
    })
    
    removeLoading()
})()