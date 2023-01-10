function collapse() {
    const collapseButton = document.querySelectorAll('[data-astaton="collapse"]');
    const collapseContent = document.querySelectorAll('[data-astaton="collapse-content"]');
    const collapseArrow = document.querySelectorAll('[data-astaton="arrow"]');


    if (collapseButton.length > 0) {
        collapseButton.forEach((e, i) => {
            e.addEventListener('click', (event) => {
                collapseContent[i].classList.toggle('show-content');
                if (collapseContent[i].classList.contains('show-content')) {
                    collapseArrow[i].style.transform = "rotate(-180deg)";
                } else {
                    collapseArrow[i].style.transform = "rotate(0deg)";
                }
            })
        })
    }

}