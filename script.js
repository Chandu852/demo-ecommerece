// Sample product data for each category
const products = {
    shirts: [
        { id: 1, name: 'Shirt 1', price: 20.99, image: 'https://via.placeholder.com/200', category: 'shirts' },
        { id: 2, name: 'Shirt 2', price: 25.99, image: 'https://via.placeholder.com/200', category: 'shirts' },
    ],
    pants: [
        { id: 3, name: 'Pant 1', price: 40.99, image: 'https://via.placeholder.com/200', category: 'pants' },
        { id: 4, name: 'Pant 2', price: 35.99, image: 'https://via.placeholder.com/200', category: 'pants' },
    ],
    jackets: [
        { id: 5, name: 'Jacket 1', price: 60.99, image: 'https://via.placeholder.com/200', category: 'jackets' },
        { id: 6, name: 'Jacket 2', price: 55.99, image: 'https://via.placeholder.com/200', category: 'jackets' },
    ],
    hoodies: [
        { id: 7, name: 'Hoodie 1', price: 45.99, image: 'https://via.placeholder.com/200', category: 'hoodies' },
        { id: 8, name: 'Hoodie 2', price: 50.99, image: 'https://via.placeholder.com/200', category: 'hoodies' },
    ],
    shoes: [
        { id: 9, name: 'Shoes 1', price: 70.99, image: 'https://via.placeholder.com/200', category: 'shoes' },
        { id: 10, name: 'Shoes 2', price: 75.99, image: 'https://via.placeholder.com/200', category: 'shoes' },
    ],
};

// Function to render products based on category
function renderProducts(category) {
    const productList = document.getElementById('product-list');
    const categoryTitle = document.getElementById('category-title');
    
    const selectedCategory = products[category];
    
    // Set the title to the selected category
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    
    productList.innerHTML = '';  // Clear the previous product list
    
    // If no products found, show a message
    if (!selectedCategory || selectedCategory.length === 0) {
        productList.innerHTML = '<p>No products available in this category.</p>';
        return;
    }

    selectedCategory.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Function to filter and render products based on selected category
function filterCategory(category) {
    renderProducts(category);
}

// Function to add products to the cart
function addToCart(productId) {
    const product = Object.values(products).flat().find(p => p.id === productId);
    if (product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;  // Set the cart count in the navbar
}

// Initial setup: render products for the default category (Shirts)
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('shirts');
    updateCartCount(); // Update the cart count on page load
});
// **Move the event listener attachment here, after the items are rendered**
cart = cart.filter(item => item.id === parseInt(itemId));