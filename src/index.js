let regForm = document.getElementById("registration")
let pswd = document.getElementsByName("password")[0].value
let checkPswd = document.getElementsByName("passwordCheck")[0].value

document.getElementsByName("password")[0].addEventListener("change", function(){
    validateInitialPassword()
});

document.getElementsByName("passwordCheck")[0].addEventListener("change", function(){
    validatePswdCheck()
})

pswdCheck.addEventListener("change", validatePswdCheck());


function validateInitialPassword(){
   if(str){
    
   }
}

function validatePswdCheck(){
    if(pswd != checkPswd){
        return false
    } else {
        return true
    }
}
