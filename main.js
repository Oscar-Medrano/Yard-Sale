const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerIcon = document.querySelector('.menu');
const carIcon = document.querySelector('.navbar-shoppingcart');
const asideShoppingCar = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


emailMenu.addEventListener('click', toggleDesktop);
burgerIcon.addEventListener('click', toggleBurger)
carIcon.addEventListener('click', toggleCar)


function toggleDesktop() {
    asideShoppingCar.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
}

function toggleBurger() {
    asideShoppingCar.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}

function toggleCar() {
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    asideShoppingCar.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name: "Bike",
    price: "120 USD",
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
})

productList.push({
    name: "Air Jordans",
    price: "50 USD",
    image: "https://images.pexels.com/photos/9252069/pexels-photo-9252069.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
})

productList.push({
    name: "Beetle Car",
    price: "500 USD",
    image: "https://images.pexels.com/photos/9940949/pexels-photo-9940949.jpeg?auto=compress&cs=tinysrgb&w=600",
})

productList.push({
    name: "Classic Guitar",
    price: "70 USD",
    image: "https://images.pexels.com/photos/1995803/pexels-photo-1995803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
})

productList.push({
    name: "Motorcycle",
    price: "400 USD",
    image: "https://images.pexels.com/photos/1715191/pexels-photo-1715191.jpeg?auto=compress&cs=tinysrgb&w=600",
})


productList.push({
    name: "Laptop",
    price: "700 USD",
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=",
})

productList.push({
    name: "Camera",
    price: "90 USD",
    image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
})

productList.push({
    name: "TV",
    price: "150 USD",
    image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=600",
})
/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/2412368/pexels-photo-2412368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
    <div class="product-info">
        <div>
            <p>120,00 $</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./iconos/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

    /*Maquetación HTMl desde JS*/
function renderProducts(arr) {
    for (product of arr) {
        /*CREAMOS UN ELEMENTO DIV Y LE AGREGAMOS LA CLASE product-Card*/
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

         /*CREAMOS UN ELEMENTO img Y LE CAMBIAMOS LA SRC POR EL
        VALOR QUE SE ENCUENTRE EN EL DICCIONARIO BAJO EL KEY image*/
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);

        /*CREAMOS UN ELEMENTO DIV Y LE AGREGAMOS LA CLASE product-info*/
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
        /*CREAMOS UN ELEMENTO DIV Y LE AGREGAMOS LAS ETIQUETAS P 
        QUE VAN A CONTENER EL PRECIO Y EL NOMBRE DEL PRODUCTO*/
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
        /*CREAMOS UN ELEMENTO FIGURE Y UN ELEMENTO IMG 
        (ESTE POR DENTRO TIENE LA IMAGEN DE AGREGAR AL CARRITO DE COMPRAS)*/
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './iconos/bt_add_to_cart.svg');

        /*CON .append ASIGNAMOS CADA ELEMENTO HIJO CON SU PADRE*/
            cardsContainer.append(productCard);
            productInfoDiv.append(productPrice, productName);
            productInfoFigure.append(productImgCart);
            productCard.append(productImg, productInfo);
            productInfo.append(productInfoDiv, productInfoFigure);
    }
}
renderProducts(productList);