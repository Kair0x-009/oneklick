//function for viewing product details
const detailsContainer = document.getElementById('detailsContainer');
const prod = document.getElementsByClassName('product-list');
    // Fetch product details from the API
    async function viewDetails(productId) {
    try{
    let response = await fetch(`https://dummyjson.com/products/${productId}`);
    let product = await response.json();
    Details(product);
    }catch(error){
        console.error('Error fetching product details:', error);
        detailsContainer.innerHTML = `<p>Failed to fetch product details. Try again later.</p>`;
    }
}

        // Create a container for the product details
        function Details(product) {
        detailsContainer.innerHTML = `
           <div class="product-Details">
            <img src="${product.images[0]}" alt="${product.title}" />
            <h3>${product.title}</h3>
            Price:  $${product.price.toFixed(2)}<br>
            Rating: ${product.rating}<br>
            Stock: ${product.stock}<br>
            Discount: ${product.discountPercentage}%<br>
            Description: ${product.description}<br>
            Category: ${product.category}<br>
            Brand: ${product.brand}<br>
            Warranty: ${product.warrantyInformation}<br>
            shipping: ${product.shippingInformation}<br>
            Return Policy: ${product.returnPolicy}<br>
            MiniMum order Qunatity: ${product.minimumOrderQuantity}<br>
            <img src="${product.meta.qrCode}" alt="${product.title}" />
            Created At: ${product.meta.updatedAt}<br>
            Updated At: ${product.meta.createdAt}<br>
            Barcode: ${product.meta.barcode}<br>  
            <button class="closeDetails" onclick="closeDetails()">Close</button>
            </div>
        `;
        }

        //close view details
        function closeDetails() {
            detailsContainer.innerHTML = '';
        }
        