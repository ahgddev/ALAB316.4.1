let regForm = document.getElementById("registration");
let password = regForm.elements["password"];
let passwordCheck = regForm.elements["passwordCheck"];
let username = regForm.elements["username"];
let terms = regForm.elements["terms"];

let loginForm = document.getElementById("login");
let loginUser = loginForm.elements["username"];
let loginPassword = loginForm.elements["password"];
let loginPersist = loginForm.elements["persist"];

function showError(errItem, errMsg){
    let errorMsg = document.getElementById("errorDisplay")
    errorMsg.style.display = "inline"
    errorMsg.innerHTML = `Error: ${errMsg}`
    errItem.parentNode.insertBefore(errorMsg, errItem.nextSibling);
}

username.addEventListener("input", function(){
    username.required = true;
    password.required = true;
    passwordCheck.required = true;
    terms.required = true;
});

loginUser.addEventListener("input", function(){
    loginUser.required = true;
    loginPassword.required = true;
});

function validateInitialPassword(pstr,ustr){
   if(pstr.includes(ustr) || !regChex(pstr)){
    password.focus();
    if(pstr.includes(ustr)) {
        showError(password, "Password cannot contain username")
    } else if (!regChex(pstr)){
        showError(password, "Password needs to contain atleast 1 capital letter, 1 special character and 1 number")
    }
    return false
   } else {
    return true
   }
}

function validatePswdCheck(pstr, pstrcheck){
    if(pstr != pstrcheck){
        passwordCheck.focus();
        showError(password, "Passwords need to match")
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
        showError(password, "You need to agree to the Terms & Conditions")
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
    alert("Registration complete!")
    localStorage.setItem("user", userID);
    localStorage.setItem("password", pswd);

    return true
});

loginForm.addEventListener("submit", function(){
    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("password");

    if(savedUser != null && savedPass != null){
        if(loginPersist.checked == true){
            alert("Login success! Login remembered.")
        } else {
            alert("Login success!")
        }
    } else if (savedUser == null || savedPass == null){
        alert("Username/Password combination does not exist...")
    }
});
