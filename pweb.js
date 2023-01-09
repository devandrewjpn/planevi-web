function collapse() {
    const collapseButton = document.querySelector('[data-astaton="collapse"]');
    const collapseContent = document.querySelector('[data-astaton="collapse-content"]');
    const collapseArrow = document.querySelector('[data-astaton="arrow"]');


    if (document.body.contains(collapseButton)) {
        collapseButton.addEventListener('click', () => {
            collapseContent.classList.toggle('show-content');
            if (collapseContent.classList.contains('show-content')) {
                collapseArrow.style.transform = "rotate(180deg)";
            } else {
                collapseArrow.style.transform = "rotate(0deg)";
            }
        })
    }

}

collapse()