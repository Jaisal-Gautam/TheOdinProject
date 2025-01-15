let form=document.querySelector("form")
let confirmButton=document.querySelector("#confirm-btn")

form.addEventListener("submit",function(event){
    event.preventDefault()
})
confirmButton.addEventListener("click",()=>{

    let Pass=document.querySelector("#pass")
    let confirmPass=document.querySelector("#confirm-pass")
    let phoneNumber=document.querySelector("#ph-no")
    
    if ((phoneNumber.value).length!=10){
        alert("Phone Number Must be of 10 digits")
        phoneNumber.style.border="2px solid red"
    }else{
        phoneNumber.style.border="2px solid green"
    }
    if (Pass.value!=confirmPass.value){
        alert("Password is not same")
        Pass.style.border="2px solid red"
        confirmPass.style.border="2px solid red"
    }else{
        Pass.style.border="2px solid green"
        confirmPass.style.border="2px solid green"

    }
})