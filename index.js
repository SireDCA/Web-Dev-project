let quoteBtn = document.querySelector(".btns");

quoteBtn.onclick = function(){
    console.log("button was clicked!");
    changeText();
}
function changeText() {
    // console.log("button was clicked!");
    // let newBtn = 
   quoteBtn.innerHTML = "Quote Sent";
   console.log(quoteBtn.innerHTML);
}