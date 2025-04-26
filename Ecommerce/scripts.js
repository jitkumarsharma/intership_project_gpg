
const products = [
    {
        id: 1,
        name: "Men's Green Jacket",
        price: 29.99,
        original_price: 30.99,
        image: "/image/product_1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        features: ["High-quality material", "Durable design", "Available in multiple colors"],
        inStock: true
    },
    {
        id: 2,
        name: "Women's Long Dress",
        price: 49.99,
        original_price: 60.99,
        image: "/image/product_2.png",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        features: ["Premium quality", "Ergonomic design", "Long-lasting"],
        inStock: true
    },
    {
        id: 3,
        name: "Men's Brown Shirt",
        price: 19.99,
        original_price: 33.99,
        image: "/image/product_3.png",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        features: ["Compact size", "Easy to use", "Affordable price"],
        inStock: true
    },
    {
        id: 4,
        name: "Leather Brown Jacket",
        price: 39.99,
        original_price: 40.99,
        image: "/image/product_4.png",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        features: ["Versatile use", "Stylish look", "Reliable performance"],
        inStock: true
    },
    {
        id: 5,
        name: "Blue Denim Jacket",
        price: 59.99,
        original_price: 70.99,
        image: "/image/product_5.png",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        features: ["Advanced technology", "High durability", "Multiple configurations"],
        inStock: true
    },
    {
        id: 6,
        name: "Girl's White T-shirt",
        price: 24.99,
        original_price: 39.99,
        image: "/image/product_6.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 7,
        name: "Men's Trouser",
        price: 34.99,
        original_price: 58.99,
        image: "/image/product_7.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 8,
        name: "Men's White Classic T-shirt",
        price: 14.99,
        original_price: 22.99,
        image: "/image/product_8.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 9,
        name: "Men's Denim Shirt(Black)",
        price: 44.99,
        original_price: 59.99,
        image: "/image/product_9.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 10,
        name: "Women's Top",
        price: 41.99,
        original_price: 49.99,
        image: "/image/product_10.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 11,
        name: "Women's Long Coat",
        price: 56.99,
        original_price: 69.99,
        image: "/image/product_11.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 12,
        name: "Women's Black Long Coat",
        price: 44.99,
        original_price: 59.99,
        image: "/image/product_12.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 13,
        name: "Women's White T-shirt",
        price: 33.99,
        original_price: 45.99,
        image: "/image/product_13.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 14,
        name: "Women's Brown Slim Frock",
        price: 34.99,
        original_price: 65.99,
        image: "/image/product_14.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 15,
        name: "Girl's White Classic T-shirt",
        price: 14.99,
        original_price: 29.99,
        image: "/image/product_15.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
    {
        id: 16,
        name: "Women's Hijab",
        price: 44.99,
        original_price: 59.99,
        image: "/image/product_16.png",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        features: ["Lightweight", "Portable", "Cost-effective"],
        inStock: true
    },
];

const dealProducts = [
    {
        id: 1,
        name: "Men's Green Jacket",
        image: "/image/product_1.png",
        description: "High-quality material, durable design, available in multiple colors."
    }
];

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    container.innerHTML = '';
    products.slice(0, 3).forEach(product => {
        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card product-card">
                    <a href="product-info.html?id=${product.id}"><img src="${product.image}" class="card-img-top" alt="${product.name}"></a>
                    <div class="card-body">
                        <h5 class="card-title"><a href="product-info.html?id=${product.id}" class="text-decoration-none">${product.name}</a></h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <p class="card-text original_price"><del>$${product.original_price.toFixed(2)}</del></p>
                        <button class="btn btn-outline-primary add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
    addCartEventListeners();
}

function loadAllProducts() {
    const container = document.getElementById('product-list');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    if (!container || !viewMoreBtn) return;

    let visibleCount = 6; // Number of products initially visible
    const increment = 3; // Number of products to show on each click

    // Function to render products
    function renderProducts() {
        container.innerHTML = products
            .slice(0, visibleCount)
            .map(product => `
                <div class="col-md-4 mb-4 product-card">
                    <div class="card product-card">
                        <a href="product-info.html?id=${product.id}"><img src="${product.image}" class="card-img-top" alt="${product.name}"></a>
                        <div class="card-body">
                            <h5 class="card-title"><a href="product-info.html?id=${product.id}" class="text-decoration-none">${product.name}</a></h5>
                            <p class="card-text">$${product.price.toFixed(2)}</p>
                            <p class="card-text original_price"><del>$${product.original_price.toFixed(2)}</del></p>
                            <button class="btn btn-outline-primary add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `)
            .join('');

        // Show all product cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.add('visible');
        });

        // Update button visibility
        viewMoreBtn.style.display = visibleCount >= products.length ? 'none' : 'block';
        addCartEventListeners();
    }

    // Initial render
    renderProducts();

    // View More button event listener
    viewMoreBtn.removeEventListener('click', viewMoreHandler); // Prevent duplicate listeners
    viewMoreBtn.addEventListener('click', viewMoreHandler);

    function viewMoreHandler() {
        visibleCount = Math.min(visibleCount + increment, products.length);
        renderProducts();
    }
}

function loadProductDetails() {
    const container = document.getElementById('product-details');
    if (!container) return;
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    if (!product) {
        container.innerHTML = '<p>Product not found.</p>';
        return;
    }
    container.innerHTML = `
        <div class="col-md-6 img_product">
            <img src="${product.image}" class="img-fluid product-image" alt="${product.name}">
        </div>
        <div class="col-md-6">
            <h2>${product.name}</h2>
            <p class="fs-4 text-primary">$${product.price.toFixed(2)}</p>
            <p><strong>Availability:</strong> ${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Features:</strong></p>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn btn-primary add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" ${!product.inStock ? 'disabled' : ''}>Add to Cart</button>
        </div>
    `;
    addCartEventListeners();
}

function initializeCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart(cart);
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            cart.push({ id, name, price });
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart(cart);
        });
    });
}

function updateCart(cart) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    if (!cartItems || !cartTotal || !cartCount) return;
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-index'));
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart(cart);
        });
    });
}

function loadOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    if (!orderItems || !orderTotal) return;
    orderItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        orderItems.appendChild(row);
    });
    orderTotal.textContent = total.toFixed(2);
}

function addCartEventListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.removeEventListener('click', addToCartHandler); // Prevent duplicate listeners
        button.addEventListener('click', addToCartHandler);
    });
}

function addToCartHandler() {
    const id = parseInt(this.getAttribute('data-id'));
    const name = this.getAttribute('data-name');
    const price = parseFloat(this.getAttribute('data-price'));
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(cart);
}

function validateCheckoutForm() {
    const form = document.getElementById('checkout-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const zip = document.getElementById('zip').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const zipRegex = /^\d{5}$/;
        let errors = [];
        if (!fullName) errors.push('Full name is required.');
        if (!email || !emailRegex.test(email)) errors.push('Valid email is required.');
        if (!address) errors.push('Address is required.');
        if (!city) errors.push('City is required.');
        if (!zip || !zipRegex.test(zip)) errors.push('Valid ZIP code is required.');
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }
        alert('Order placed successfully!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });
}

function validateSignInForm() {
    const form = document.getElementById('signin-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errors = [];
        if (!name) errors.push('Full name is required.');
        if (!email || !emailRegex.test(email)) errors.push('Valid email is required.');
        if (!password || password.length < 6) errors.push('Password must be at least 6 characters.');
        if (password !== confirmPassword) errors.push('Passwords do not match.');
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email)) {
            alert('Email already registered.');
            return;
        }
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify({ name, email }));
        alert('Sign up successful!');
        window.location.href = 'index.html';
    });
}

function validateLoginForm() {
    const form = document.getElementById('login-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert('Valid email is required.');
            return;
        }
        if (!password) {
            alert('Password is required.');
            return;
        }
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            alert('Invalid email or password.');
            return;
        }
        localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
        alert('Login successful!');
        window.location.href = 'index.html';
    });
}

function validateForgotPasswordForm() {
    const form = document.getElementById('forgot-password-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert('Valid email is required.');
            return;
        }
        alert('Password reset link sent to your email.');
        window.location.href = 'login.html';
    });
}

function updateUserNav() {
    const userNav = document.getElementById('user-nav');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        userNav.innerHTML = `
            <a class="nav-link" href="#">${currentUser.name}</a>
            <a class="nav-link" href="#" onclick="logout()">Logout</a>
        `;
    } else {
        userNav.innerHTML = `<a class="nav-link" href="login.html">Login</a>`;
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function searchProducts() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const container = document.getElementById('product-list') || document.getElementById('featured-products');
        if (!container) return;
        container.innerHTML = '';
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        filteredProducts.forEach(product => {
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card product-card">
                        <a href="product-info.html?id=${product.id}"><img src="${product.image}" class="card-img-top" alt="${product.name}"></a>
                        <div class="card-body">
                            <h5 class="card-title"><a href="product-info.html?id=${product.id}" class="text-decoration-none">${product.name}</a></h5>
                            <p class="card-text">$${product.price.toFixed(2)}</p>
                            <p class="card-text original_price"><del>$${product.original_price.toFixed(2)}</del></p>
                            <button class="btn btn-outline-primary add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        });
        addCartEventListeners();
    });
}

function startCountdown() {
    const endDate = new Date('April 28, 2025 23:59:59').getTime();
    const dealProduct = dealProducts[0];
    document.getElementById('deal-product-name').textContent = dealProduct.name;
    document.querySelector('.deal-description').textContent = dealProduct.description;
    document.querySelector('.deal-img').src = dealProduct.image;
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }, 1000);

    document.querySelectorAll('.timer-circle').forEach(circle => circle.classList.add('pulse'));
}

document.addEventListener('DOMContentLoaded', () => {
    searchProducts();
    validateSignInForm();
    validateLoginForm();
    validateForgotPasswordForm();
    startCountdown();
    loadAllProducts(); // Ensure loadAllProducts is called on page load
});
