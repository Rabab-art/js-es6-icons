// {
//     name: 'cat',
//     prefix: 'fa-',
//     type: 'animal',
//     family: 'fas',
// // // },

/*FUNCTION*/
const renderIcons = (iconsArray, targerElement) => {

    let iconsTemplate = '';
    iconsArray.forEach((icon, index) => {

        /*GESTIRE L'OFFSET*/
        let hasOffset = '';
        if (index == 0 || index % 5 == 0) {
            hasOffset = ' offset-md-1'
        };

        iconsTemplate += `
        <div class="col col-sm-4 col-md-2 ${hasOffset}">
            <div class="card">
                <div class="card-body">
                    <i class="${icon.family} ${icon.prefix}${icon.name} fa-2x "></i>
                    <h2 class="h6">${icon.name.toUpperCase()}</h2>
                </div>
            </div>
        </div>
        `;

    });
    targerElement.innerHTML = iconsTemplate;
};


//# STAMPO IN PAGINA #//

const iconsSection = document.querySelector('#icons .row');
renderIcons(icons, iconsSection);

/*LOGICA FILTRO*/
const selectField = document.getElementById('type-filter');

selectField.addEventListener('change', () => {
    const filterValue = selectField.value;

    if (filterValue === 'all') {
        renderIcons(icons, iconsSection);
        return;
    }
    const filteredIcons = icons.filter((icon) => filterValue === icon.type);
    renderIcons(filteredIcons, iconsSection);

});