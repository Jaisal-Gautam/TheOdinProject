export default function loadcontact(){
    let content=document.querySelector(".content")
    let list=document.createElement("ul");
    list.classList.add="contact_list"
    //Address Content
    let address=document.createElement("li");
    let addressHeading=document.createElement("h4");
    addressHeading.classList.add="contact_heading"
    let addressCnt=document.createElement("p");
    addressCnt.classList.add="contact_Cnt"
    addressHeading.innerHTML="Find Us";
    addressCnt.innerHTML="21 Street,Flavour Town";
    address.appendChild(addressHeading);
    address.appendChild(addressCnt);
    list.appendChild(address);

    //Timing Content
    let timing=document.createElement("li");
    let timingHeading=document.createElement("h4");
    timingHeading.classList.add="contact_heading"
    let timingCnt=document.createElement("p");
    timingCnt.classList.add="contact_Cnt"
    timingHeading.innerHTML="Hours";
    timingCnt.innerHTML="10am - 5pm"
    timing.appendChild(timingHeading)
    timing.appendChild(timingCnt);
    list.append(timing);

    //Contact Content
    let contact=document.createElement("li");
    let contactHeading=document.createElement("h4");
    contactHeading.classList.add="contact_heading"
    let contactCnt=document.createElement("p");
    contactCnt.classList.add="contact_Cnt"
    contactHeading.innerHTML="Reach Us At";
    contactCnt.innerHTML="+03 9231295782";
    contact.appendChild(contactHeading);
    contact.appendChild(contactCnt);
    list.append(contact);

    content.appendChild(list);
}

