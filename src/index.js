let regForm = document.getElementById("registration")

document.getElementsByName("password")[0].addEventListener("change", function(){
    let pswd = document.getElementsByName("password")[0].value
    validateInitialPassword(pswd)
});

document.getElementsByName("passwordCheck")[0].addEventListener("change", function(){
    let pswd = document.getElementsByName("password")[0].value
    let checkPswd = document.getElementsByName("passwordCheck")[0].value
    validatePswdCheck(pswd, checkPswd)
})

function validateInitialPassword(str){
   if(str == "123456789201"){
        console.log("Wrong!")
   }
}

function validatePswdCheck(pstr, pstrcheck){
    if(pstr != pstrcheck){
        return false
    } else {
        return true
    }
}
