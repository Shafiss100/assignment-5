document.getElementById("calculate-btn").addEventListener("click", function(){
    const income = document.getElementById("income-input").value ;

    const foodCast = document.getElementById("food-input").value ;
    const rentCast = document.getElementById("rent-input").value ;
    const clothCast = document.getElementById("cloth-input").value ;
    let total = parseFloat(foodCast) + parseFloat(rentCast) + parseFloat(clothCast);
    var totalExpenses = document.getElementById("total-expenses");
    var balance = document.getElementById("balance");
    totalExpenses.innerText = total;
    balance.innerText = parseFloat(income) - total ;


})