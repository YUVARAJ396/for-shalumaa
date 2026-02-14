let chapters = document.querySelectorAll(".chapter");
let current = 0;

document.body.addEventListener("dblclick", function(){

if(current < chapters.length - 1){
chapters[current].classList.remove("active");
current++;
chapters[current].classList.add("active");
}

});

// NO button move
function moveNo(){
let btn=document.getElementById("noBtn");
btn.style.top=Math.random()*(window.innerHeight-100)+"px";
btn.style.left=Math.random()*(window.innerWidth-100)+"px";
}

// YES final screen
function sayYes(){
document.body.innerHTML=
"<div style='display:flex;justify-content:center;align-items:center;height:100vh;background:#000;flex-direction:column;'>" +
"<h1 style='color:#d4af37;font-size:50px;text-shadow:0 0 40px gold;'>Love You Shalini 🖤</h1>" +
"<p style='color:white;font-size:20px;'>Thanks for coming into my life 💍</p>" +
"</div>";
}
