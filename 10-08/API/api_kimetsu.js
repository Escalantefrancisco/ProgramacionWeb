// API REST sirve para comunicar 2 programas o más
const API_URL = "https://www.demonslayer-api.com/api/v1/characters";
const API_URL = "https://dragonball-api.com/api/characters"

const 
const sectionContainer = document.getElementById('characters-container');
const buttonShowCharacters = document.getElementById('button-show-characters');

buttonShowCharacters.addEventListener("click", getCharacters);


async function getCharacters() {

    console.log('Ejecutando función');

    let currentPage = 1;
    let totalPage = 1;

    while (currentPage <= totalPage) {

        const response = await fetch(API_URL + "?page=" + currentPage);

        const charactersList = await response.json();

        console.log('Esta es la respuesta de personajes:', charactersList);

        // Obtenemos el número total de páginas
        totalPage = charactersList.pagination.totalPages;

        charactersList.content.forEach(element => {

            console.log('Nombre del personaje:', element.name);
            console.log('Edad del personaje:', element.age);
            console.log('Imagen del personaje:', element.img);

            // Crear el article
            const newTag = document.createElement('article');

            newTag.className = 'article-container';

            // Agregamos los datos del personaje
            newTag.innerHTML = `
                <img src="${element.img}" alt="${element.name}">
                <h2>${element.name}</h2>
                <p><strong>Edad:</strong> ${element.age} años</p>
                <p>${element.description}</p>
            `;

            // Agregar el article al contenedor
            sectionContainer.appendChild(newTag);
        });

        currentPage++;
    }
}