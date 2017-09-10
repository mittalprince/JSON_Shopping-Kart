// common to both cart.js & portal.js

var catalog = [];
var cart ={};

// Assign JSON file data into catalog array
function get_Catalog(done){
    $.getJSON('data.json',function(data){
        catalog = data;
        done();
    })
}


function getQtyinCart(productId){
if(cart[productId]){
    return cart[productId]
    }
    else {
    return 0;
    }
}

function fetch_cart(){
    let save_cart= localStorage.getItem('Cart')
    if(save_cart){
        cart = JSON.parse(save_cart)
    }
}

function add_to_cart(productId){
    if(cart[productId]){
        cart[productId]++
    }
    else{
        cart[productId]=1;
    }

    localStorage.setItem('Cart', JSON.stringify(cart))
    fetch_cart();
}

function remove_from_cart(productId){
    if(cart[productId]){
        if(cart[productId] <=1){
            cart[productId]=1;
        }
        else{
            cart[productId]--;
        }
    }

    localStorage.setItem('Cart', JSON.parse(cart))
    fetch_cart();
}