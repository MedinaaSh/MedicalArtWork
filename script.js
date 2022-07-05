$(document).ready(function() {

    var MSCart = [];

    $('.MS-cartbtn').click(function(e) {

        var price = $(this).data('price');
        var title = $(this).data('title');

        MSCart.push({'title': title, 'price': price});

        alert("Product added to cart!");

        // Clear cart
        $("#MS-CartShow").html("");

        // Loop through each product and append to the cart dropdown
        for(var key in MSCart) {
            if(MSCart.hasOwnProperty(key)){
                var product = MSCart[key];
                $('<li><a class="dropdown-item" href="#">'+ product.title +' - $'+ product.price +'</a></li>').appendTo("#MS-CartShow");
            }
        } 

    });
});