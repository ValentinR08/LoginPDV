const table = document.querySelector('.table');
const belt = document.querySelector('.conveyor-belt');


function addProduct(){
    let newProduct = document.createElement('div');
    newProduct.classList.add('product');
    table.appendChild(newProduct)
}

function removeProduct(){
    let product = belt.querySelector('.product')
    belt.removeChild(product)
}
function addProductBelt(){
    let newProduct = document.createElement('div');
    newProduct.classList.add('product');
    belt.appendChild(newProduct)
}
function engineProduct() {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
             addProduct()
             removeProduct()
        },i*10000);   
    }

    setTimeout(() => {
        engineProduct();
    }, 4 * 20000);
}

engineProduct();

