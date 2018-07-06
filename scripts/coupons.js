function codeChecker() {
    var codeInput = prompt("🌈Please enter Coupon Code", "");
    
    if (codeInput != null) {
        var converted = codeInput.toLowerCase();
        if (converted == "petadiscount" || converted == "setdiscount" ||converted == "vegan"  ){     
          window.open('http://www.skinvac.com/skinvac-buy-discounts.html');
        } else {
        alert("🌿Please try again 🌿")
        }
    }
}

