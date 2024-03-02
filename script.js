document.addEventListener('DOMContentLoaded', function () {
    const productsSection = document.getElementById('products');

    //Product data (replace with actual product data from your backend)
    const productsData = [
        { id: 1, title: 'Lace Bra Set', price: 29.99, image: 'img/product1.jpg' },
        { id: 2, title: 'Silk Chemise', price: 39.99, image: 'img/product2.jpg' },
        // Add more product data as needed
    ];

    // Wishlist (replace with actual data or fetch from backend)
    let wishlist = [];

    // Function to toggle the wishlist status of a product
    function toggleWishlist(productId) {
        const index = wishlist.indexOf(productId);
        if (index === -1) {
            wishlist.push(productId);
        } else {
            wishlist.splice(index, 1);
        }
        updateWishlistUI();
    }

    // Function to update the UI based on the wishlist
    function updateWishlistUI() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const productId = parseInt(card.dataset.productId);

            if (wishlist.includes(productId)) {
                card.classList.add('starred');
            } else {
                card.classList.remove('starred');
            }
        });
    }

    // Generate product cards
    productsData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.productId = product.id;

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <span class="wishlist-icon" onclick="toggleWishlist(${product.id})">&#9734;</span>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;

        productsSection.appendChild(productCard);
    });

    // Add this function to handle adding products to the cart
    function addToCart(productId) {
        // Implement your add to cart logic here
        console.log(`Product with ID ${productId} added to the cart`);
    }
});
