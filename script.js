// ==========================
// BHRT PROFESSIONAL SCRIPT
// ==========================

// Copy Contract Address

function copyContract() {

const contract =
document.getElementById("contractAddress");

contract.select();
contract.setSelectionRange(0,99999);

navigator.clipboard.writeText(contract.value);

alert("BHRT Contract Copied Successfully!");

}

// Navbar Scroll Effect

window.addEventListener("scroll",()=>{

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 0 25px rgba(245,197,66,0.15)";

}
else{

navbar.style.boxShadow =
"none";

}

});

// Reveal Animation

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document
.querySelectorAll(
"section,.card,.timeline div,.team-card"
)
.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

// Smooth Scroll Links

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// Welcome Message

window.addEventListener("load",()=>{

console.log(
"BHRT Website Loaded Successfully"
);

});

// Back To Top Button Create

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#f5c542";
topBtn.style.color = "#000";
topBtn.style.fontSize = "20px";
topBtn.style.fontWeight = "bold";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// Animation Classes

const style =
document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;
transform:translateY(40px);
transition:all .8s ease;

}

.show{

opacity:1;
transform:translateY(0);

}

`;

document.head.appendChild(style);