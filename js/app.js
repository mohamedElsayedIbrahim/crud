var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productDesc = document.getElementById('productDesc');
var tableView = document.getElementById('result');
var submitBtn = document.getElementById('submit');

var productList = localStorage.getItem('products') !== null ? JSON.parse(localStorage.getItem('products')):[];
displayProducts();

var selectedUpdateIndex = -1;

function addProduct(){
 
    var product = {
        title: productName.value,
        desc: productDesc.value,
        price:productPrice.value,
    }

    if (submitBtn.innerText === 'save') {
        productList.unshift(product);    
    }else{
        productList.splice(selectedUpdateIndex,1,product);
        submitBtn.innerText = 'save';
    }

    localStorage.setItem('products',JSON.stringify(productList));

    displayProducts();
    clearInputs();
    
}

function displayProducts(){
    tableView.innerHTML = '';

    for (let index = 0; index < productList.length; index++) {
        tableView.insertAdjacentHTML('beforeend',`<tr>
            <td>${index}</td>
            <td>${productList[index].title}</td>
            <td>${productList[index].price}</td>
            <td>${productList[index].desc}</td>
            <td><button onclick="deleteProduct(${index})" class="btn-danger btn">Delete</button></td>
            <td><button onclick="editProduct(${index})" class="btn btn-warning">Edit</button></td>
          </tr>`)
        
    }
}

function deleteProduct(index) { 

    productList.splice(index,1);

    localStorage.setItem('products',productList);

    displayProducts();
 }

 function editProduct(index){
    var product  = productList[index];

    productName.value = product.title;
    productPrice.value = product.price;
    productDesc.value = product.desc;
    

    selectedUpdateIndex = index;
    submitBtn.innerText = 'update';
 }

 function clearInputs(){
    productDesc.value = null;
    productName.value = null;
    productPrice.value = null;
 }

//store

//  sessionStorage.setItem('mood','light');
//  sessionStorage.setItem('age','16');

 
 //retrive

//  console.log(sessionStorage.getItem('age'));

 //delete specific item

//  sessionStorage.removeItem('age')

//  sessionStorage.clear()

// frindsList = ['ali','mohamed','mahmoud']

// localStorage.setItem('friendsList',JSON.stringify(frindsList))

// var list = JSON.parse(localStorage.getItem('friendsList'))

// console.log(list);

/*Trenery opretor */

// var age = 16;

// var status;

// if (age >= 16) {
//     status = 'qualified'
// } else {
//     status = 'dis-qualified'
// }

// console.log(status);


// var result =  age >= 16 ? ['qualified'] : null;

// console.log(result);
