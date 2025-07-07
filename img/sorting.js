// let containerBox = document.getElementById('sorting');
// let value;
// function getSelectedValue() {
//     const select = document.getElementById("mySelect");
//     value = select.value; // Gets the value of the selected option
//     const text = select.options[select.selectedIndex].text; // Gets the text of the selected option
//     displayItem(value);
//     console.log("Selected Value:", value);
//     console.log("Selected Text:", text);
//   }
// // let URL3 = 'https://dummyjson.com/products?sortBy=${'value'}&order=asc';


// async function displayItem(value){
//     let response = await fetch(`https://dummyjson.com/products?sortBy=${value}&order=asc`);
//     console.log(response);
//     let shorted = await response.json();
//     console.log(shorted);
//     displaySortedItem(shorted);
// }

// function displaySortedItem(shorted){
//     shorted.products.forEach(itm => {
//         const box = document.createElement('div');
//         box.className=`sortItem`
//         box.innerHTML=`
//         <img src="${itm.images[0]}" alt="${itm.title}" />
//         <h3>${itm.title}</h3>
//         <p>Rs. ${itm.price.toFixed(2)}</p>
//         <button onclick="addToCart(${itm.id})">Add to Cart</button>
//       `;
//       containerBox.appendChild(box);
//     });
// }
// getSelectedValue();
