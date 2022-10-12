let priceField = undefined;
let bottleDepositField = undefined;
let quantityField = undefined;
let outputContainer = undefined;
let siqQuantity = undefined;
let siqPrice = undefined;
let siqOut = undefined;

class Prices{
    constructor(price, bottleDeposit, quantity, total){
        this.price = price;
        this.bottleDeposit = bottleDeposit
        this.quantity = quantity;
        this.total = total;
    }

    
}

// define global field values in order to get values
function setupFields(){
     priceField = document.getElementById("cost");
     bottleDepositField = document.getElementsByClassName("bottle-deposit")[0];
     quantityField = document.getElementsByClassName("bottle-quantity")[0];
     outputContainer = document.getElementById("output-container");
     siqQuantity = document.getElementById("siq-quantity");
     siqPrice = document.getElementById("siq-price");
     siqOut = document.getElementById("n-for-n-result");

     console.log("Finshed setup");
}

// calculates the price with a bottle deposit
function calculateBottleDeposit(){
    let price = parseFloat(priceField.value) * 100; // converting value to pennies
    let bottleDeposit = parseInt(bottleDepositField.value);
    let quantity = parseInt(quantityField.value);

    let totalBottleDepositPerQuantity = bottleDeposit * quantity;
    let priceWithBottleDeposit = price + totalBottleDepositPerQuantity;
    
    let output = document.createElement("P");
    
    

    outputContainer.appendChild(output);
    displayNumber(priceWithBottleDeposit)
}

function displayNumber(number){
    let output = document.createElement("P");
    
    
    if (isNaN(number)){
        output.innerText = "You must provide a price.\n";
        output.className = "output-text-bad";
    }else{
        output.innerText += "Price with bottle deposit: " + number + "\n"; 
        output.className = "output-text-good";
    }

    outputContainer.appendChild(output);
}

function calculateSingleItem(){
    let quantity = parseFloat(siqQuantity.value);
    let price = parseFloat(siqPrice.value);

    if (quantity > 0){
        let singleItemPrice = price / quantity;
        siqOut.innerText = "1 unit cost: $" + singleItemPrice.toFixed(2);
    }else{
        siqOut.innerText = "You cannot have a quantity less then 1!"
    }
}