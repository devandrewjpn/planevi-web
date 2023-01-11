function collapse() {
    const collapseButton = document.querySelectorAll('[data-astaton="collapse"]');
    const collapseContent = document.querySelectorAll('[data-astaton="collapse-content"]');
    const collapseArrow = document.querySelectorAll('[data-astaton="arrow"]');


    if (collapseButton.length > 0) {
        collapseButton.forEach((e, i) => {
            collapseArrow[i].style.transform = "rotate(-90deg)";
        })
    }

}