// common to both cart.js & portal.js

var catalog = [];
var cart ={};

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