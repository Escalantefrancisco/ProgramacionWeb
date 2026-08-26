//Api rest sirve para comunicar 2 programas o mas
const API_URL = " https://www.demonslayer-api.com/api/v1/characters";
const sectionContainer = document.getElementById('characters-container');
const buttonShowCharacters = document.getElementById('button-show-characters');
buttonShowCharacters.addEventListener("click",getCharacters);

async function getCharacters(){
    const response = await fetch( API_URL);   
    console.log('Valor de response: ',response);

    const charactersList = await response.json();
    //console.log('Esta es la respuesta de personajes: ', charactersList);

    charactersList.content.forEach(element => {
        //if (element.age < 15) {
           // return;
        //}
        console.log('Nombre del personaje: ', element.name);
        console.log('Imagen del personaje: ', element.img);

        const newTag = document.createElement('article');
        newTag.className = 'article-container';
        newTag.innerHTML = `
            <img src="${element.img}">
        `;
        sectionContainer.appendChild(newTag);
    });
}
//Una promesa no devuelve el valor de forma inmediata, entonces se usa await



//Crear unboton del lado de html ejecutar la funcior de character
//Crear un 2do boton y al presionarlo tambien llamara la misma fdesde el  lado de javascript