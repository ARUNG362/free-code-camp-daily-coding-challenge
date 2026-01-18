function getsFreeShipping(cart, minimum) {
    const amountConfig = {
        "shirt"	: 34.25,
        "jeans" : 48.50,
        "shoes" : 75.00,
        "hat"   : 19.95,
        "socks" : 15.00,
        "jacket": 109.95
    };

    const orderAmount = cart.reduce((acc, val) => {
        return amountConfig[val] + acc;
    },0)
    return orderAmount >= minimum ;
}

// getsFreeShipping(["shoes"], 50)
console.log(
    getsFreeShipping(["hat", "socks"], 50)
)