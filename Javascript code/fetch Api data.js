
const p = fetch("https://fakestoreapi.com/products");
p.then((response) => response.json())
    .then((data) => {
        const productData = data;

        // Initialize cart from localStorage or empty array
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

      
        function renderProducts(products) {
            const container = document.getElementById("container");
            const containercards = products.map((product) => {
                const title = product.title;
                const description = product.description;

                const truncatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;
                const truncatedDescription =
                    description.length > 90 ? `${description.substring(0, 90)}...` : description;

                return `
                    <div class="productcard"> 
                        <img src="${product.image}" alt="${product.name}"> 
                        <h2>${truncatedTitle}</h2>  
                        <p>${truncatedDescription}</p>
                        <hr>
                        <pre class="price">$${product.price}</pre>
                        <hr> 
                        <button class="btn1 details-btn" data-id="${product.id}">Details</button>
                        <button class="btn1 add-to-cart-btn" data-id="${product.id}">Add to cart</button>
                    </div>
                `;
            });

            container.innerHTML = containercards.join("");

            
            attachAddToCartListeners(products);
        }

        // Function to attach "Add to Cart" event listeners
        function attachAddToCartListeners(products) {
            const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
            addToCartButtons.forEach((button) => {
                button.addEventListener("click", (e) => {
                    const productId = e.target.getAttribute("data-id");
                    const selectedProduct = products.find((product) => product.id == productId);

                   
                    const existingItem = cart.find((item) => item.id === selectedProduct.id);
                    if (existingItem) {
                        existingItem.quantity++;
                    } else {
                        cart.push({ ...selectedProduct, quantity: 1 });
                    }

                    // Save cart to localStorage and update UI
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartCount(cart);
                    
                });
            });
        }

        
        function updateCartCount(cart) {
            const cartCountElement = document.getElementById("cartCount");
            cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        }

        // Function to filter and render products based on category
        function filterProducts(category) {
            const filteredProducts =
                category === "all"
                    ? productData
                    : productData.filter((product) => product.category === category);

            renderProducts(filteredProducts);
        }

       
        const categoryButtons = document.querySelectorAll(".category-btn");
        categoryButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const category = button.dataset.category; // Get category from button's data attribute
                filterProducts(category); // Filter and render products
            });
        });

        // Initial rendering of all products
        renderProducts(productData);

        
        updateCartCount(cart);
    })
    .catch((error) => {
        alert("Failed to fetch");
    });

    

    
    


    let cart = JSON.parse(localStorage.getItem("cart")) || []; 


    
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("page saved")
    } 
    // Add to cart function
    function addToCart(product) { 
        console.log("Adding product:", product);
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCartCount();
        updateCartPage();
    } 
    
    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }
    
    function updateCartPage() {
        const cartItemsDiv = document.getElementById("cart-items");
        const cartHeading = document.getElementById("cart-heading");
        const continueShoppingBtn = document.getElementById("continue-shopping"); 
        
        const orderSummary = document.getElementById("order-summary"); 
        const cartCounter = document.getElementById("cart-counter"); 
    
        cartCounter.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
        if (cart.length === 0) {
            cartHeading.textContent = "Your Cart is Empty";
            continueShoppingBtn.classList.remove("hidden"); 
            
            
            continueShoppingBtn.removeAttribute("disabled");
            cartItemsDiv.innerHTML = "";
            orderSummary.classList.add("hidden");
            return;
        }
    
        cartHeading.textContent = "Item List";
        continueShoppingBtn.classList.add("hidden");
        
        
        // continueShoppingBtn.setAttribute("disabled", "true")
        orderSummary.classList.remove("hidden");
    
        cartItemsDiv.innerHTML = cart.map((item, index) => {
            const truncatedTitle = truncateText(item.title, 20); // Truncate title to 20 characters
            const truncatedDescription = truncateText(item.description, 90); // Truncate description to 90 characters
    
            return `
                <div class="cart-item">
                    <div class="cart-products">
                    <div>
                    <img src="${item.image}" alt="${item.title}" />
                    </div>
                        <div>
                        <h3 class="item-des">${truncatedTitle}</h3>
                        </div>
                        <div>
                            <button onclick="updateQuantity(${index}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${index}, 1)">+</button>
                             <p class="price">${item.quantity}*${item.price}</p>
                        </div>
                        </div>
                        <hr>
                       
                     
                   
                </div>
            `;
        }).join(""); 
        updateOrderSummary();
        
    }
    function updateOrderSummary() {
        
        const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    
      
        const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    
       
        const roundedTotalPrice = Math.round(totalPrice);
    
       
        const shippingFee = 30;
        const finalAmount = roundedTotalPrice + shippingFee;
    
        // Update Order Summary DOM safely
        const productCountElem = document.getElementById("product-count");
        const totalPriceElem = document.getElementById("total-price");
        const finalAmountElem = document.getElementById("final-amount");
    
        if (productCountElem) productCountElem.textContent = totalQuantity;
        if (totalPriceElem) totalPriceElem.textContent = roundedTotalPrice;
        if (finalAmountElem) finalAmountElem.textContent = finalAmount;
    }
    
    
    
    
   
    updateOrderSummary();
    
    
    // Update quantity or remove item
    function updateQuantity(index, change) {
        cart[index].quantity += change;
    
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1); 
        }
    
        
        localStorage.setItem("cart", JSON.stringify(cart));
    
        // Update both pages (Home Page and Cart Page)
        updateCartPage();
        
        updateOrderSummary();
        
    } 
    
  
    
    
    // Initialize cart on page load
    document.addEventListener("DOMContentLoaded", () => {
        updateCartCount();
        if (document.getElementById("cart-items")) {
            updateCartPage();
            updateOrderSummary();
           
        }
    }) 
    
    
    

// Function to update cart count
function updateCartCount(cart) {
    
    if (!Array.isArray(cart)) cart = [];

    
    const totalCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);

    
    const cartCountElement = document.getElementById("cartCount");
    
    if (cartCountElement) {
        cartCountElement.textContent = totalCount;
    } 
   
   

    
}  


 





   