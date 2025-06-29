let img=document.querySelector("img");
 
function randomGIF(){
fetch('https://api.giphy.com/v1/gifs/translate?api_key=UPadqeIR1GjWWZkKpF8BeZEF8sb8vZaH&s=cats', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        img.src=response.data.images.fixed_height.url;
    });
setTimeout(randomGIF,40000)
}
randomGIF()