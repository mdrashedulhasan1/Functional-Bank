function getInputValue(inputId) {
    const Input = document.getElementById(inputId);
    const Value = parseFloat(Input.value);
    Input.value = '';
    return Value;
}
function updateTotalField(totalFieldId, Value) {
    const Text = document.getElementById(totalFieldId);
    const previous = parseFloat(Text.innerText);
    Text.innerText = previous + Value;
}
function updateBalance(Value, isAdd) {
    const balanceText = document.getElementById('balance-text');
    const previousBalance = parseFloat(balanceText.innerText);
    if (isAdd == true) {
        balanceText.innerText = previousBalance + Value;
    }
    else {
        balanceText.innerText = previousBalance - Value;
    }
}
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositValue = getInputValue('deposit-input');
    if(depositValue > 0){
        updateTotalField('deposit-text', depositValue);
        updateBalance(depositValue, true);
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawValue = getInputValue('withdraw-input');
    if (withdrawValue > 0) {
        updateTotalField('withdraw-text', withdrawValue);
        updateBalance(withdrawValue, false);
    }
})

