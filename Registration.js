document.getElementById('form-submit').addEventListener('click',function(){
    const emailInput = document.getElementById('email-input');
    const emailInputValue = emailInput.value;
    console.log(emailInputValue);
    const passwordInput = document.getElementById('password-input');
    const passwordInputValue = passwordInput.value;
    console.log(passwordInputValue);
    if(emailInputValue === "abc@gmail.com" && passwordInputValue === "123"){
        window.location.href = 'my-bank.html';
    }
})