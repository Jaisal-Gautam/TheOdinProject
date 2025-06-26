let imageIndex = 0;
let img = document.querySelectorAll("img");
let dot=document.querySelectorAll(".dot")

function showImage() {
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    if (imageIndex === img.length) imageIndex = 0;
    if (imageIndex < 0) imageIndex = img.length - 1;

    img[imageIndex].style.display = "block";
    for (let i = 0; i < img.length; i++) {
        dot[i].style.backgroundColor = "#bbb";
    }
    
     dot.forEach(dotClicked=>{
        dotClicked.addEventListener('click',()=>{
            imageIndex=dotClicked.id;
            showImage();
        })
    })

    dot[imageIndex].style.backgroundColor="#000000b5"

    setTimeout(showImage,2000)
}

let leftarrow = document.querySelector(".leftarrow");
let rightarrow = document.querySelector(".rightarrow");

leftarrow.addEventListener('click', () => {
    imageIndex--;
    showImage();
});

rightarrow.addEventListener('click', () => {
    imageIndex++; 
    showImage();
});


showImage();