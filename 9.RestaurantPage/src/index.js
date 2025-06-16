import loadhome from "./modules/home";
import loadcontact from "./modules/contact";
import loadmenu from "./modules/menu";
let content=document.querySelector(".content")

let button=document.querySelectorAll("button")

button.forEach(ks=>{
    ks.addEventListener('click',()=>{
        content.innerHTML="";
        if(ks.id=="home"){
            loadhome()
        }else if(ks.id=="contact"){
            loadcontact()
        }else if(ks.id=="menu"){
            loadmenu()
        }
    })
})

