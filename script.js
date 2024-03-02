$(document).ready(function() {
    // Function to fetch products using AJAX
    function fetchProducts() {
        $.ajax({
            url: 'products.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                displayProducts(data);
            },
            error: function(error) {
                console.error('Error fetching products:', error);
            }
        });
    }

    // Function to display products
    function displayProducts(products) {
        const container = $('#products-container');
        container.empty();

        products.forEach(product => {
            const productElement = $('<div>').addClass('product');

            productElement.html(`
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <div class="rating">${getStarRating(product.rating)}</div>
                <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
                <button onclick="addToCatalogue(${product.id})">Add to Catalogue</button>
            `);

            container.append(productElement);
        });
    }

    // Function to generate star rating HTML
    function getStarRating(rating) {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '★';
        }
        return stars;
    }

    // Dummy functions for adding to wishlist and catalogue
    window.addToWishlist = function(productId) {
        console.log(`Added product ${productId} to wishlist.`);
    };

    window.addToCatalogue = function(productId) {
        console.log(`Added product ${productId} to catalogue.`);
    };

    // Fetch products on page load
    fetchProducts();
});
