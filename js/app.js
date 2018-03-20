$(function () {

    var products = [
        { name: 'Smart Tv', price: 5000, id: 1, description: 'Experience a new world wit LG Smart Tv. Fill your life with colors and festivity.', picture: 'tvbild.jpg', category: 'Elektronik' },
        { name: 'Shirt', price: 500, id: 2, description: 'Stylish men shirt, stripes, long sleeve.', picture: 'shirtbild.jpeg', category: 'Kläder' },
        { name: 'Toy', price: 500, id: 3, description: 'Best and children friendly. Easy to playwith and save to give to children of any age', picture: 'toybild.jpg', category: 'Leksaker' },
        { name: 'Iphone 8', price: 8500, id: 4, description: 'A next generation phone', picture: 'iphone8bild.png', category: 'Telefoner' },
        { name: 'Fotboll', price: 800, id: 5, description: 'Top quality and super design. These footballs are designed Sweden in and menufactured in China', picture: 'fotbollbild.jpg', category: 'Sport' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Designed to give you maximum space and comfort.', picture: 'skrivbordbild.jpg', category: 'Kontor' }
    ];

    var cart = [];

    // Function som lägger till produkter
    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `
            <li class="product col-3">
            <div class="product-content">
            <img src="${item.picture}" alt="product image">
            <h4>
            ${item.name} - <span class="category">${item.category}</span> <small>${item.price}</small>
            </h4>
            <p>${item.description}</p>
            </div>
            <button type="button" id="${item.id}">Buy now</button>

            </li>
            `;
        });

        $(location).html(template);

    };
    appendList(products, $('.product-list'));



    // Lägger till en product i cart

    var addToCart = function (array, id, location) {
        var a = array.find(function (i) {
            return i.id === id;

        });

        cart.push(a);

        var item = `

    <li class ="item" id="${a.id}">
    <h4>${a.name}</h4>
    <button type="button">X</button>
    </li>

    `;

        $('span.amount').text(cart.length);
        $(location).append(item);
    };

    $('.product').on('click', 'button', function (event) {
        var id = $(this).attr('id');
        addToCart(products, +id, $('.cart-list'));


    });

    var removeFromCart = function (array, removedItem) {
        array.splice(removedItem, 1);

    };

    var populateCart = function (list, location) {
        var item = `
    <list class="item" id="${list.id}">
    <h4>${list.name}</h4>
    <button type="button">X</button>
    </li>

    `;
        $('span.amount').text(list.length);

    };

    $('.cart-list').on('click', 'button', function (e) {

        var item = $(e.currentTarget).closest('li').remove();
        //remove item from cart
        removeFromCart(cart, item);

        //Populate items in cart
        populateCart(cart, $('.cart-list'));


    });

});