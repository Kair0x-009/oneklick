const container = document.getElementById("productList");
let URL = " https://dummyjson.com/products/";
let products = [];
async function getData() {
  let response = await fetch(URL);
  // console.log(response);
  products = await response.json();
  displayProducts(products);
  // console.log(products);
}
getData();

function displayProducts(products) {

  // console.log(products)
  container.innerHTML = "";
  products.products.forEach((product, index) => {
    let discountAmount = product.price * (product.discountPercentage / 100);
    let discountedPrice = product.price - discountAmount;
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
    <div onclick="viewDetails(${product.id})">
    <div class="product-image">
      <img src="${product.images[0]}" />
      </div>
      <h3 class="product-title">${product.title}</h3>
       <div class="product-price">
          <span class="current-price">$${discountedPrice.toFixed(2)}</span>
          <span class="original-price">$${product.price.toFixed(2)}</span>
        </div>
        <p id="rating">Rating:${product.rating}</p>
        
        <p>Discount: ${product.discountPercentage}%</p>
        <div class="btn">
        <button class="add-to-cart" onclick="addToCart(${product.id})" >Add to Cart</button>
       </div>
      
      
        </div>
    `;
    
    container.appendChild(div);
   
  });
}

const input = document.getElementById("input");
const btn = document.getElementById("this");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const search = input.value.trim();
  if (search) {
    getItems(search);
  }
});

async function getItems(search) {
  try {
    let response = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    products = await response.json();
    console.log(products);
    displayProducts(products); // Pass the array directly
  } catch (error) {
    console.log("Error fetching products:");
    container.innerHTML = `<p>Failed to fetch products. Try again later.</p>`;
  }
}

// logic for searching data in catorgoery
let filterContainer = document.getElementsByClassName("filter");
const selectElement = document.createElement("select");
let URL2 = "https://dummyjson.com/products/category-list";
selectElement.id = "category";
selectElement.className = "filter";
async function getCategoryList() {
  let response = await fetch(URL2);
  console.log(response);
  let categoryList = await response.json();
  displayCategory(categoryList);
  console.log(categoryList);
}

function displayCategory(categoryList) {
  categoryList.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.text = category.toUpperCase(); // Display text
    selectElement.appendChild(option);
  });
  selectElement.addEventListener("change", (e) => {
    // e.preventDefault();
    async function getData() {
      let URL = `https://dummyjson.com/products/category/${selectElement.value}`;
      let response = await fetch(URL);
      products = await response.json();
      displayProducts(products);
    }
    getData();
  });
}
document.getElementById("container").appendChild(selectElement);
getCategoryList();

let sortBy = document.getElementById("mySelect");
let sortByValue = sortBy.value;

sortBy.addEventListener("change", () => {
  sortByValue = sortBy.value;
  console.log(sortByValue);

  // Sort the products array based on the selected value
  if (products.products) {
    //bubble sort
    for (let i = 0; i < products.products.length - 1; i++) {
      for (let j = i + 1; j < products.products.length; j++) {
        if (sortByValue === "price") {
          if (products.products[i].price > products.products[j].price) {
            let temp = products.products[i];
            products.products[i] = products.products[j];
            products.products[j] = temp;
          }
        } else if (sortByValue === "title") {
          if (
            products.products[i].title.localeCompare(
              products.products[j].title
            ) > 0
          ) {
            let temp = products.products[i];
            products.products[i] = products.products[j];
            products.products[j] = temp;
          }
        } else if (sortByValue === "rating") {
          if (products.products[i].rating < products.products[j].rating) {
            let temp = products.products[i];
            products.products[i] = products.products[j];
            products.products[j] = temp;
          }
        }
      }
    }
    displayProducts(products);
  }
});
