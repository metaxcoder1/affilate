document.addEventListener('DOMContentLoaded', () => {
    fetch('/products.json')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <a href="${product.link}" target="_blank">Buy Now</a>
                `;
                productList.appendChild(productDiv);
            });
        });
});