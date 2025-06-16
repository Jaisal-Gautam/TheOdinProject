import{apps,entree,desert,drinks} from "../asset/data/menuData";
export default function loadmenu(){
    let content=document.querySelector(".content");
    let menu=document.createElement("ul");
    
    //Appetizer Menu
    let appsitem=document.createElement("li")
    let appsHeading=document.createElement("h3")
    appsHeading.innerHTML="Appetizers"
    let appsCnt=document.createElement("ul")
    apps.forEach(food=>{
        let cntName=document.createElement("li")
        cntName.innerHTML="𓎩"+food.name+"................."+food.price;
        let cntInfo=document.createElement("li")
        cntInfo.innerHTML="ⓘ"+food.info;
        appsCnt.appendChild(cntName)
        appsCnt.appendChild(cntInfo)
    })
    appsitem.appendChild(appsHeading);
    appsitem.appendChild(appsCnt);
    menu.appendChild(appsitem);

    //Entree menu
    let entreeitem=document.createElement("li")
    let entreeHeading=document.createElement("h3")
    entreeHeading.innerHTML="Entree"
    let entreeCnt=document.createElement("ul")
    entree.forEach(food=>{
        let cntName=document.createElement("li")
        cntName.innerHTML="𓎩"+food.name+"................."+food.price;
        let cntInfo=document.createElement("li")
        cntInfo.innerHTML="ⓘ"+food.info;
        entreeCnt.appendChild(cntName)
        entreeCnt.appendChild(cntInfo)
    })
    entreeitem.appendChild(entreeHeading);
    entreeitem.appendChild(entreeCnt);
    menu.appendChild(entreeitem);

    //Desert menu
    let desertitem=document.createElement("li")
    let desertHeading=document.createElement("h3")
    desertHeading.innerHTML="Deserts"
    let desertCnt=document.createElement("ul")
    desert.forEach(food=>{
        let cntName=document.createElement("li")
        cntName.innerHTML="𓎩"+food.name+".................$"+food.price;
        let cntInfo=document.createElement("li")
        cntInfo.innerHTML="ⓘ"+food.info;
        desertCnt.appendChild(cntName)
        desertCnt.appendChild(cntInfo)
    })
    desertitem.appendChild(desertHeading);
    desertitem.appendChild(desertCnt);
    menu.appendChild(desertitem);

    //Drinks menu
    let drinksitem=document.createElement("li")
    let drinksHeading=document.createElement("h3")
    drinksHeading.innerHTML="Appetizers"
    let drinksCnt=document.createElement("ul")
    drinks.forEach(food=>{
        let cntName=document.createElement("li")
        cntName.innerHTML="𓎩"+food.name+"................."+food.price;
        let cntInfo=document.createElement("li")
        cntInfo.innerHTML="ⓘ"+food.info;
        drinksCnt.appendChild(cntName)
        drinksCnt.appendChild(cntInfo)
    })
    drinksitem.appendChild(drinksHeading);
    drinksitem.appendChild(drinksCnt);
    menu.appendChild(drinksitem);

    content.appendChild(menu)
}