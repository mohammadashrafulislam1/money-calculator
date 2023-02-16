function getIncomeAmount(){
    const incomeField = document.getElementById('income-field');
    const incomeAmountString = incomeField.value;
    const incomeAmount = parseFloat(incomeAmountString);
    return incomeAmount;
}
document.getElementById('btn-calculate').addEventListener('click', function(){
    // Total Expense
    const foodCostField = document.getElementById('food-field');
    const foodCostString = foodCostField.value;
    const foodCost = parseFloat(foodCostString);

    const rentCostField = document.getElementById('rent-field');
    const rentCostString =rentCostField.value;
    const rentCost = parseFloat(rentCostString);

    const clothesCostField = document.getElementById('clothes-field');
    const clothesCostString = clothesCostField.value;
    const clothesCost = parseFloat(clothesCostString);

    const totalExpense = foodCost + rentCost + clothesCost;

    const totalExpenseElement = document.getElementById('total-expense');

    totalExpenseElement.innerText = totalExpense;

    // Income
    const incomeTotal = getIncomeAmount();

    // Balance After Consuming

    const balanceAmountElement = document.getElementById('balance');
    const balanceLeft = incomeTotal - totalExpense;
    balanceAmountElement.innerText = balanceLeft;

})

document.getElementById('btn-save').addEventListener('click', function(){
    const savingAmountField = document.getElementById('save-field');
    const savingAmountString = savingAmountField.value;
    const savingAmount = parseFloat(savingAmountString);

    // Income
    const incomeTotal = getIncomeAmount();

    // saving ..
    const percentage = savingAmount / 100;
    const savedAmount = incomeTotal * percentage;
    
    // display saving
    const savingDisplayElement = document.getElementById('saving-amount');
    savingDisplayElement.innerText = savedAmount;
    
    // Remaining Balance.
    const balanceAmountElement = document.getElementById('balance');
    const balanceAmountString = balanceAmountElement.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const remainigAmount =  savedAmount 
    const remainigAmountElement = document.getElementById('remaining-balance');

    const remainigAmountFinal = balanceAmount - savedAmount;
    remainigAmountElement.innerText = remainigAmountFinal;
})