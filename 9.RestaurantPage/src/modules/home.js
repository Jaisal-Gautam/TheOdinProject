import MinatureFood from "/Users/jaisal/repos/TheOdinProject/9.RestaurantPage/src/asset/images/Miniature Food.jpg";

export default function loadhome(){
    let content=document.querySelector(".content")
    let subContent=document.createElement("ul")
    let imgList=document.createElement("li")
    let cntList=document.createElement("li")
    let img=document.createElement("img")
    img.src=MinatureFood;
    subContent.classList.add="subCnt";
    let cntListItem=document.createElement("ul")
    cntListItem.classList.add="innerContent"
    let cntListItem1=document.createElement("li")
    cntListItem1.classList.add="cntHeading";
    let cntListItem2=document.createElement("li")
    let cntListItem3=document.createElement("li")
    let cntListItem4=document.createElement("li")
    cntListItem2.classList.add="cntBody";
    cntListItem3.classList.add="cntBody";
    cntListItem4.classList.add="cntBody";

    cntListItem1.innerHTML="Big Flavour Small Bites";
    cntListItem2.innerHTML="Tucked away in the heart of the city, Nibble & Nest is a cozy, modern eatery offering an adventurous twist on dining — with a focus on small portions packed with flavor. Inspired by global tapas culture, every dish is crafted to be shared, savored, and remembered."
    cntListItem3.innerHTML="Whether you’re here for a light bite, a full tasting journey, or an evening of grazing with friends, our rotating seasonal menu brings you everything from truffle-stuffed mushrooms to mini ramen bowls and fire-roasted halloumi skewers. Vegetarian, vegan, and gluten-free options are abundant, and our team is always ready with pairing suggestions from our curated list of wines and mocktails."
    cntListItem4.innerHTML="With intimate lighting, laid-back vibes, and a commitment to quality ingredients and playful presentation, Nibble & Nest turns every meal into a flavorful exploration — one bite at a time."


    cntListItem.appendChild(cntListItem1);
    cntListItem.appendChild(cntListItem2);
    cntListItem.appendChild(cntListItem3);
    cntListItem.appendChild(cntListItem4);

    cntList.appendChild(cntListItem);
    imgList.appendChild(img);

    subContent.appendChild(imgList);
    subContent.appendChild(cntList);

    content.appendChild(subContent);

}


