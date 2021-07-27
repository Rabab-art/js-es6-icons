// {
//     name: 'cat',
//     prefix: 'fa-',
//     type: 'animal',
//     family: 'fas',
// // },
// console.log(icons);

let iconsTemplate = '';
icons.forEach((icon) => {
    iconsTemplate += `
    <div class="col col-sm-4 col-md-2 offset-md-1">
        <div class="card">
            <div class="card-body">
                <i class="${icon.family} ${icon.preafix}${icon.name} ${icon.preafix}2x "></i>
                <h6>${icon.name.toUpperCase()}</h6>
            </div>
        </div>
    </div>
    `;

});

//# STAMPO IN PAGINA #//

