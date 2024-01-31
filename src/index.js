let regForm = document.getElementById("registration")

document.getElementsByName("password")[0].addEventListener("change", function(){
    let pswd = document.getElementsByName("password")[0].value
    validateInitialPassword(pswd)
});

document.getElementsByName("passwordCheck")[0].addEventListener("change", function(){
    let userID = document.getElementsByName("username")[0].value
    let pswd = document.getElementsByName("password")[0].value
    let checkPswd = document.getElementsByName("passwordCheck")[0].value
    validateInitialPassword(pswd, userID)
    validatePswdCheck(pswd, checkPswd)
})

function validateInitialPassword(pstr,ustr){
   if(pstr.includes(ustr) || !regChex(pstr)){
       return false
   } else {
    return true
   }
}

function validatePswdCheck(pstr, pstrcheck){
    if(pstr != pstrcheck){
        return false
    } else {
        return true
    }
}

function regChex(str){
    let specialCheck = new RegExp('.*[!@#$%^&*(),.?":{}|<>].*');
    let letterCheck = new RegExp('.*([a-z]*[A-Z]*[0-9]).*');

    if(specialCheck.test(str) && letterCheck.test(str)){
        return true
    } else {
        return false
    }
}

function checkTOS(){
    if(document.getElementsByName("terms")[0].checked){
        return true
    } else {
        return false
    }
}

regForm.addEventListener("submit", function(){
    debugger
    checkTOS()
});
