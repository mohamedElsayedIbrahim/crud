var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productDesc = document.getElementById('productDesc');
var tableView = document.getElementById('result');
var submitBtn = document.getElementById('submit');

var productList = [];

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