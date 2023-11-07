// api = https://thronesapi.com/

const searchData = document.getElementById('inputBuscador')
const searchButton = document.getElementById('buttonBuscador')
const result = document.getElementById('resultado')
const filterButton = document.getElementById("buttonFiltrar")
const filterForm = document.getElementById('filtroForm')
const filterBox = document.getElementById('cajaFiltro')

document.addEventListener('DOMContentLoaded',function(){
    getCardsApi()
})

searchButton.addEventListener('click',function(){
    let info = searchData.value.toLowerCase()
    for (let i=0; i<data.length; i++){
        if (info===data[i].firstName.toLowerCase()){
            result.innerHTML = template;
        }
        else {
            result.innerHTML = `<p>No se han encontrado resultados,prueba con otro nombre</p>`
        }
    }
})

// filterButton.addEventListener('click',function(){
//     filterBox.style.display = 'block';
// })

// filterForm.addEventListener('submit', function(event) {
//     event.preventDefault();
      
//     let initial = document.getElementById('initial').value.toLowerCase();
//     let maxLevel = document.getElementById('maxLevel').value;
//     let evolution = document.getElementById('evolution').value;
      
//     let filteredData = cards.filter(card => {card.name.toLowerCase().startsWith(initial) && card.maxLevel == maxLevel && (evolution === 'si' ? card.maxEvolutionLevel : !card.maxEvolutionLevel)
//     });
      
//     showData(filteredData); //hacer funcion mostrar datos
      
//     filterBox.style.display = 'none';
// });

function showData(){
    let template = `<h3>${data.firstName} ${data.lastName}</h3>
                    <h5>${data.family}</h5>
                    <img src=${data.image}>`
    result.innerHTML = template;
}

async function getCardsApi(){
    try {
        let response = await fetch("https://thronesapi.com/api/v2/Characters");
        let data = await response.json();
        let cards = data.map(card => ({name: card.firstName, lastName: card.lastName, family: card.family, image: card.imageUrl}));
        showData(cards);
    }
    catch (error) {
    console.log(`Hubo un error: ${error}`);
    }
} 


