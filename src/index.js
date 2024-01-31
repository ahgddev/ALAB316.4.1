let regForm = document.getElementById("registration");
let password = regForm.elements["password"];
let passwordCheck = regForm.elements["passwordCheck"]
let terms = regForm.elements["terms"]

function showError(errItem, errMsg){
    let errorMsg = document.getElementById("errorDisplay")
    errItem.appendChild(errorMsg)
    errorMsg.style.display = "inline"
    errMsg.innerHTML = `Error: ${errMsg}`

}

password.addEventListener("change", function(){
    let pswd = password.value
    validateInitialPassword(pswd)
});

passwordCheck.addEventListener("change", function(){
    let userID = document.getElementsByName("username")[0].value
    let pswd = password.value
    let checkPswd = passwordCheck.value
    validateInitialPassword(pswd, userID)
    validatePswdCheck(pswd, checkPswd)
})

function validateInitialPassword(pstr,ustr){
   if(pstr.includes(ustr) || !regChex(pstr)){
    debugger
    password.focus();
    if(pstr.includes(ustr)) {

    } else if (!regChex(pstr)){

    }
    return false
   } else {
    return true
   }
}

function validatePswdCheck(pstr, pstrcheck){
    if(pstr != pstrcheck){
        passwordCheck.focus();
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
    if(terms.checked){
        return true
    } else {
        terms.focus();
        return false
    }
}

regForm.addEventListener("submit", function(){
    checkTOS()
});
