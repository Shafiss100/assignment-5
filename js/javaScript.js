document.getElementById("calculate-btn").addEventListener("click", function(){
    const income = document.getElementById("income-input").value ;
    const foodCast = document.getElementById("food-input").value ;
    const rentCast = document.getElementById("rent-input").value ;
    const clothCast = document.getElementById("cloth-input").value ;
    let total = parseFloat(foodCast) + parseFloat(rentCast) + parseFloat(clothCast);
    var totalExpenses = document.getElementById("total-expenses");
    var balance = document.getElementById("balance");
    totalExpenses.innerText = total;
    balance.innerText = parseFloat(income) - total;
})
document.getElementById("save-btn").addEventListener("click", function(){
    const balance = document.getElementById("balance");
    const income = document.getElementById("income-input").value;
    const parsent = document.getElementById("parsent").value ;
    const savingAmount = document.getElementById("saving-amount");
    savingAmountValue = (parseFloat(income) * parseFloat(parsent))/100 ;
    savingAmount.innerText = savingAmountValue;
    const remainingBalance = document.getElementById("remaining-balance");
    remainingBalanceValue = parseFloat(balance.innerText) - savingAmountValue;
    remainingBalance.innerText = remainingBalanceValue;

})