let container=document.querySelector(".container")

let buton=document.querySelector(".button1");
let allchar="0123456789ABCDEF";
buton.addEventListener("click",function(){
    let randColor= "";
    for (let i=0; i<6; i++){
        randColor=Math.floor(Math.random()*16777215).toString(16);
    }
    console.log(randColor);
    document.querySelector(".container").style.backgroundColor= "#"+randColor;
}
)


