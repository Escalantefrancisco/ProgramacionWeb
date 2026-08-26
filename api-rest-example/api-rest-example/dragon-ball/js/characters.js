const API_URL =
    "https://dragonball-api.com/api/characters";


const charactersContainer =
    document.getElementById("dragon-ball-container");


const previousButton =
    document.getElementById("previous-button");


const nextButton =
    document.getElementById("next-button");


const paginationList =
    document.getElementById("pagination-list");


let currentPage = 1;


const limit = 5;


const totalPages = 6;



function createCharacterCard(character) {

    const card =
        document.createElement("article");


    card.classList.add("character-card");


    card.innerHTML = `
        <img
            src="${character.image}"
            alt="${character.name}"
        >

        <h2>${character.name}</h2>

        <p>
            Raza: ${character.race}
        </p>

        <p>
            Género: ${character.gender}
        </p>

        <p>
            Ki: ${character.ki}
        </p>

        <p>
            <strong>
                Presiona para ver detalles
            </strong>
        </p>
    `;


    card.addEventListener(
        "click",
        () => {

            window.location.href =
                `character-detail.html?id=${character.id}`;
        }
    );


    return card;
}



function showPageNumbers() {

    paginationList.innerHTML = "";


    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        const button =
            document.createElement("button");


        button.textContent = page;


        if (page === currentPage) {

            button.disabled = true;

            button.classList.add("active");
        }


        button.addEventListener(
            "click",
            () => {

                currentPage = page;

                getCharacters(currentPage);
            }
        );


        paginationList.appendChild(button);
    }
}



async function getCharacters(page) {

    try {

        const response = await fetch(
            `${API_URL}?limit=${limit}&page=${page}`
        );


        if (!response.ok) {

            throw new Error(
                "No se pudieron cargar los personajes"
            );
        }


        const data =
            await response.json();


        console.log(
            "Respuesta de Dragon Ball:",
            data
        );


        charactersContainer.innerHTML = "";


        data.items.forEach(character => {

            const card =
                createCharacterCard(character);


            charactersContainer.appendChild(card);
        });


        previousButton.disabled =
            currentPage === 1;


        nextButton.disabled =
            currentPage === totalPages;


        showPageNumbers();

    } catch (error) {

        console.error(error);


        charactersContainer.innerHTML = `
            <p>
                No fue posible cargar los personajes.
            </p>
        `;
    }
}



previousButton.addEventListener(
    "click",
    () => {

        if (currentPage > 1) {

            currentPage--;

            getCharacters(currentPage);
        }
    }
);



nextButton.addEventListener(
    "click",
    () => {

        if (currentPage < totalPages) {

            currentPage++;

            getCharacters(currentPage);
        }
    }
);



getCharacters(currentPage);