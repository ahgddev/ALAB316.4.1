let emailInput = document.getElementsByName("email")[0]
let regForm = document.getElementById("registration")

emailInput.addEventListener("change", validateEmail());

function validateEmail(){
    debugger
    //Need help figuring out why this isn't detecting the email value?
   console.log(typeof(emailInput.value))
    if(emailInput.value.includes("@example.com")){
        console.log("Incorrect")
        return false
    }
}
