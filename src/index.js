let emailInput = document.getElementsByName("email").value

form.addEventListener("submit", validateForm)

function validateForm(){
    if(emailInput.includes("@example.com")){
        document.getElementsByName("email").setCustomValidity("Cannot use an @example.com address")
    }
}
