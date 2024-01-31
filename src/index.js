let regForm = document.getElementById("registration");
let password = regForm.elements["password"];
let passwordCheck = regForm.elements["passwordCheck"];
let username = regForm.elements["username"];
let terms = regForm.elements["terms"];

function showError(errItem, errMsg){
    debugger
    let errorMsg = document.getElementById("errorDisplay")
    errItem.appendChild(errorMsg)
    errorMsg.style.display = "inline"
    errMsg.innerHTML = `Error: ${errMsg}`

}

function validateInitialPassword(pstr,ustr){
   if(pstr.includes(ustr) || !regChex(pstr)){
    password.focus();
    debugger
    if(pstr.includes(ustr)) {
        showError(password, "Password cannot contain username")
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

regForm.addEventListener("submit", function(event){
    let pswd = password.value;
    let userID = username.value;
    let checkPswd = passwordCheck.value;

    if(!checkTOS()){
        event.returnValue = false;
    }
    if(!validateInitialPassword(pswd, userID)){
        event.returnValue = false;
    }
    if(!validatePswdCheck(pswd, checkPswd)){
        event.returnValue = false;
    }
    return true
});
