let passwordInput = document.getElementsByName("password")[0]
let pswdCheck = document.getElementsByName("passwordCheck")[0]
let regForm = document.getElementById("registration")

passwordInput.addEventListener("change", validateInitialPassword());
pswdCheck.addEventListener("change", validatePswdCheck());

function validateInitialPassword(){
   let pswd = passwordInput.value

   console.log(pswd)
}

function validatePswdCheck(){

}
