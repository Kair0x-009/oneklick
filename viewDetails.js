//function for viewing product details
const detailsContainer = document.getElementById("detailsContainer");
const prod = document.getElementById("productList");
async function viewDetails(productId) {
  prod.style.display = "none";
  
  try {
    let response = await fetch(`https://dummyjson.com/products/${productId}`);
    let product = await response.json();
    Details(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
    detailsContainer.innerHTML = `<p>Failed to fetch product details. Try again later.</p>`;
  }
}

// Create a container for the product details
function Details(product) {
  detailsContainer.innerHTML = `
           <div class="product-Details">
            <img src="${product.images[0]}" alt="${product.title}" loading="lazy" />
            <h3><strong>${product.title}</strong></h3>
            Price:  $${product.price.toFixed(2)}<br>
            Rating: ${product.rating}<br>
            Stock: ${product.stock}<br>
            Discount: ${product.discountPercentage}%<br>
            Category: ${product.category}<br>
            Brand: ${product.brand}<br>
            Warranty: ${product.warrantyInformation}<br>
            shipping: ${product.shippingInformation}<br>
            Return Policy: ${product.returnPolicy}<br>
            MiniMum order Qunatity: ${product.minimumOrderQuantity}<br>
            Description: ${product.description}<br>
            <img src="${product.meta.qrCode}" alt="${product.title}" />
            Created At: ${product.meta.updatedAt}<br>
            Updated At: ${product.meta.createdAt}<br>
            Barcode: ${product.meta.barcode}<br> 
            <div class="view-detail-btn"> 
            <button class="add-to-cart" onclick="addToCart(${product.id})" >Add to Cart</button>
            <button class="closeDetails" onclick="closeDetails()">Close</button>
            </div>
            </div>
        `;
}

//close view details
function closeDetails() {
  prod.style.display = "flex";
  detailsContainer.innerHTML = "";
}

