async function addToCart(productId) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("No user found. Please sign in first.");
    window.location.href = "signIn.html";
  }
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    // Fetch product data from API
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const product = await response.json();

    const newProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    };

    cart.push(newProduct);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  // alert("Product added to cart successfully!");
}

function viewCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cartItems");
  // alert(cart);
  cartItemsContainer.innerHTML = ""; // Clear previous items

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    let totalPrice = item.price * item.quantity;

    itemElement.innerHTML = `
            <div class="cart-item">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div>
                    <h3>${item.title}</h3>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: Rs. ${item.price}</p>
                    <p>Total: Rs.${totalPrice} </p>
                    <div class="add-to-cart-btn">
                      <button class="add-to-cart">Buy Now</button>
                      <button class="add-to-cart" onclick="removeItem(${item.id})" >Remove</button>
                    </div>
                </div>
            </div>
        `;


    cartItemsContainer.appendChild(itemElement);
  });
}
viewCart();

  function removeItem(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) {
        cart.splice(i, 1);
        break;
      }
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    viewCart();
  }

