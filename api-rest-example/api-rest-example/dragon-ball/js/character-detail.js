const params = new URLSearchParams(
    window.location.search
);

const characterId = params.get("id");

const dragonBallDetail = document.getElementById(
    "dragon-ball-detail"
);

async function getDragonBallDetail() {
    try {
        if (!characterId) {
            throw new Error(
                "No se seleccionó ningún personaje"
            );
        }

        const response = await fetch(
            `https://dragonball-api.com/api/characters/${characterId}`
        );

        if (!response.ok) {
            throw new Error(
                "No se encontró el personaje"
            );
        }

        const character = await response.json();

        dragonBallDetail.innerHTML = `
            <article class="character-card">

                <img
                    src="${character.image}"
                    alt="${character.name}"
                    style="object-fit: contain;"
                >

                <h1>${character.name}</h1>

                <p>
                    <strong>Raza:</strong>
                    ${character.race}
                </p>

                <p>
                    <strong>Género:</strong>
                    ${character.gender}
                </p>

                <p>
                    <strong>Ki:</strong>
                    ${character.ki}
                </p>

                <p>
                    <strong>Ki máximo:</strong>
                    ${character.maxKi}
                </p>

                <p>
                    <strong>Afiliación:</strong>
                    ${character.affiliation}
                </p>

                <p>
                    <strong>Descripción:</strong>
                    ${character.description}
                </p>

            </article>
        `;

    } catch (error) {
        console.error(error);

        dragonBallDetail.innerHTML = `
            <p>No fue posible cargar el personaje.</p>
        `;
    }
}

getDragonBallDetail();