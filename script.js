const submit=document.getElementById("One")
const cross=document.querySelector(".pop2")
const popup=document.querySelector(".popup")
const overlay=document.querySelector(".overlay")
console.log(submit)


//--------------------------------------------------------------------------------------->>

submit.addEventListener("click",()=>{
    popup.style.display="block"
    overlay.style.display="inline"
   
   // popup.style.transform="translate(0%,56%)";
    popup.style.animation="myAnimation 1s ease-in";

})


cross.addEventListener("click",()=>{
    popup.style.display="none"
    overlay.style.display="none"
    popup.style.animation="none"
  //  popup.style.transform="none"

})






