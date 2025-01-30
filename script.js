const table = document.querySelector('.table');
const belt = document.querySelector('.conveyor-belt');
const btn_Log_in = document.querySelector('#btn_Log-in');
const login = document.querySelector('.login');
const close = document.querySelector('#btn_close');
const scene = document.querySelector('.scene');

close.addEventListener('click',()=>{
    login.style.display = 'none';
    scene.style.display = 'block';
})

btn_Log_in.addEventListener('click',()=>{
    scene.style.display = 'none';
    login.style.display = 'block';
})
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

}

engineProduct();

