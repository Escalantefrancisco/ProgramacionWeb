const API_URL = "https://dummyjson.com/products";

const loadProductsButton =
    document.getElementById("load-products");

const nameFilter =
    document.getElementById("name-filter");

const productsContainer =
    document.getElementById("products-container");

const productsCounter =
    document.getElementById("products-counter");

let products = [];


// Cargar productos de la API
async function loadProducts() {
    try {
        productsCounter.textContent = "Cargando productos...";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        const data = await response.json();

        products = data.products;

        displayProducts(products);

    } catch (error) {
        console.error("Error al cargar productos:", error);

        productsCounter.textContent =
            "No se pudieron cargar los productos.";
    }
}


// Mostrar los productos
function displayProducts(productsToDisplay) {
    productsContainer.innerHTML = "";

    productsCounter.textContent =
        `Productos encontrados: ${productsToDisplay.length}`;

    productsToDisplay.forEach(product => {
        const card = document.createElement("article");

        card.classList.add("product-card");

        card.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
                class="product-image"
            >

            <p class="product-id">
                ID: ${product.id}
            </p>

            <h3>${product.title}</h3>

            <p>${product.description}</p>

            <p class="product-price">
                Precio: $${product.price}
            </p>

            <p>
                Calificación: ${product.rating}
            </p>
        `;

        productsContainer.appendChild(card);
    });
}


// Buscar productos
function applyFilters() {
    const searchText =
        nameFilter.value.trim().toLowerCase();

    const filteredProducts = products.filter(product =>
        product.title
            .toLowerCase()
            .includes(searchText)
    );

    displayProducts(filteredProducts);
}


// Eventos
loadProductsButton.addEventListener(
    "click",
    loadProducts
);

nameFilter.addEventListener(
    "input",
    applyFilters
);