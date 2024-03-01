document.addEventListener('DOMContentLoaded', function () {
    const productsSection = document.getElementById('products');

    // Dummy product data (replace with actual product data from your backend)
    const productsData = [
        { title: 'Lace Bra Set', price: 29.99, image: 'img/product1.jpg' },
        { title: 'Silk Chemise', price: 39.99, image: 'img/product2.jpg' },
        // Add more product data as needed
    ];

    // Dynamically generate product cards
    productsData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
        `;

        productsSection.appendChild(productCard);
    });
});
