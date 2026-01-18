def gets_free_shipping(cart, minimum):
    amount_config = {
        "shirt"	: 34.25,
        "jeans" : 48.50,
        "shoes" : 75.00,
        "hat"   : 19.95,
        "socks" : 15.00,
        "jacket": 109.95
    }
    order_amount = 0
    for i in cart:
        order_amount += amount_config[i]

    return order_amount >= minimum

gets_free_shipping(["shoes"], 50)