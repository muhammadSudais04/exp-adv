
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        
        if (!response.ok) {
            throw new Error("Failed to fetch products. Server error.");
        }

        const products = await response.json();
        const productContainer = document.getElementById("products");

        if (products.length === 0) {
            productContainer.innerHTML = "<p>No products available.</p>";
        } else {
            productContainer.innerHTML = ""; // Clear previous data

            products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");

                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description.substring(0, 100)}...</p>
                    <p class="price">$${product.price}</p>
                `;

                productContainer.appendChild(productElement);
            });
        }
    } catch (error) {
        document.getElementById("products").innerHTML = `<p>${error.message}</p>`;
        console.error("Error fetching products:", error);
    }
}

// Fetch products on page load
document.addEventListener("DOMContentLoaded", fetchProducts);

