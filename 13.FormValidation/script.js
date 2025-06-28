let email=document.querySelector("#Email")
email.addEventListener('input',(event)=>{
    if(email.validity.typeMismatch||email.value.trim()===""){
        email.setCustomValidity("Expecting an Email")
    }else{
        email.setCustomValidity("");
    }
});

let country=document.querySelector("#Country")
country.addEventListener("input",()=>{
    if(country.validity.typeMismatch||country.value.trim()===""){
        country.setCustomValidity("Expecting a Country")
    }else{
        country.setCustomValidity("");
    }
})

let postal=document.querySelector("#postalCode")
postal.addEventListener("input",()=>{
    if(postal.value.length!=6||postal.value.trim()===""){
        postal.setCustomValidity("Give correct Postal Code")
    }else{
        postal.setCustomValidity("");
    }
    
})

let password=document.querySelector("#password");
let confirmpassword=document.querySelector("#confirmpassword")

password.addEventListener("input",()=>{
    if(password.value.trim()===""){
        password.setCustomValidity("Password Empty")
    }else{
        password.setCustomValidity("");
    }
})
confirmpassword.addEventListener("input",()=>{
    if(password.value!=confirmpassword.value||confirmpassword.value.trim()===""){
        confirmpassword.setCustomValidity("Password Mismatched")
    }else{
        confirmpassword.setCustomValidity("");
    }
})