const btn=document.getElementById("button");
let randomNumber=()=>{
    return Math.floor(Math.random()*256);
};
let changeColor=()=>{
    let randomColor=`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    document.body.style.backgroundColor=randomColor;
};
button.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);