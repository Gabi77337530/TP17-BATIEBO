// // SELECTEURS
// document.querySelector('h4').style.background="yellow"

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow"

//click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const reponse = document.querySelector("p");



questionContainer.addEventListener("click" , () => {
     
     questionContainer.classList.toggle("question-clicked"); 
    });


btn1.addEventListener("click",() => {
     response.classList.add("show-response");
     response.style.background = "green";
});
btn2.addEventListener("click",() => {
     response.classList.add("show-response");
     response.style.background = "red";
});

{/* <div> > #id > .class > baliseHTML */}

// ----------------------------------------------------------
//Mousemove Events
const mousemove = document.querySelector(".mousemove");
// console.log(mousemove);

window.addEventListener("mousemove",(e) => {
     mousemove.style.left = e.pageX + "px";
     mousemove.style.top = e.pageY + "px";
     // console.log
});

window.addEventListener("mousedown", () => {
     mousemove.style.transform ="scale(2) translale(-25%, -25%)";
     
});
window.addEventListener("mouseup", () => {
     mousemove.style.transform ="scale(1) translale(-50%, -50%)";
     mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () =>{
     questionContainer.style.background= "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () =>{
     questionContainer.style.background="pink";
});

response.addEventListener("mouseover", () => {
     response.style.transform = "rotate(2deg)";
});
// ------------------------------------------------------------

// Keypress Event
const KeypressContainer =document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
     const audio = new Audio();
     audio.src = `${key}01-Intro.mp3`;
     audio.play()
};

document.addEventListener("keypress", (e) =>{
     key.textContent =e.key;

     if(e.key ==="j"){
          KeypressContainer.style.background= "pink";
     } else if (e.key==="h"){
          KeypressContainer.style.background ="teal";
     }else{
          KeypressContainer.style.background="red";
     }
     if (e.key === "01-Intro") ring(e.key);
});

//------------------------------------------------------
// scroll event


const nav = document.querySelector("nav");

window.addEventListener('scrol', () => {
     console.log(window.scrollY);

if (window.scrollY > 120) {
     nav.style.top = 0;
} else nav.style.top = "-50px"
});

//------------------------------------------------------------
//Form Events


const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";


inputName.addEventListener("input", (e) => {
     pseudo = e.target.value;
} );
select.addEventListener("input", (e) => {
     language= e.target.value;
});
form.addEventListener("sumbit", (e) => {
     e.preventDefault();
     
     if (cgv.checked){
          document.querySelector("form > div").innerHTML = `
          <h3>Pseudo : ${pseudo}</h3>
          <h4>Language préféré : ${language}</h4>
          `;
     } else {
          alert("Veuillez accepter les CGV");

     }
});

//--------------------------------------------------------------
// Load Events
window.addEventListener("load", () => {
     console.log("Document chargé !");
});

//--------------------------------------------------------------------
//ForEach
//const boxes= document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
     box.addEventListener("click", (e) => {
          box.style.transform = "scale(0.7)";
     });
});

//------------------------------------------------------------------------
//addvEventListtenner Vs onclick
// document.body.onclick = () => {
//      console.log("click !");
// };
// document.body.onclick = () => {
//      console.log("Scroll !");
// };

//Bubbling => fin (de base l'enventListenner est parametré en mode bubbling)
document.body.addEventListener("click", () => {
     console.log("click 1 !")
},
false
);
//usecapture
document.body.addEventListener("click", () =>{
      console.log("click 2 !")
},
true 
);

//------------------------------------------------------------------------
//stop propagation
// questionContainer.addEventListener("click", () => {
//      alert("Test !");
//      e.stopPropagation();
// });

// removeEventListenner
//------------------------------------------------------------------------------
//BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);

window.open("http://google.com", "cours js", "height=600,width=800");
// window.close()

//Evenement adossés à window
//alert("hello");
//confirm
btn2.addEventListener("click", () => {
     confirm("voulez vous vraiment vous tromper?");
});

//prompt
btn1.addEventListener("click", () => {
   let  answer = prompt("Entrez votre nom !");
   questionContainer.innerHTML += "<h3>Bravo" + answer + "</h3>";
});

//Timer, compte à rebours
setTimeout(() => {
     questionContainer.style.borderRaduis ="300px";
},2000);

let interval = setInterval(() => {
     document.body.innerHTML +=`
     "<div class='box'>
          <h2>Nouvelle Boite !</h2>
     </div>"
     `;
}, 1000);

document.body.addEventListener("click", ()=> {
    clearInterval(interval); 
});

//Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//      location.href= "http://twitter.fr";
// };
//Navigator
//console.log(navigator.userAgent);



//History
//console.log(history);
//window.history.back();
//history.go(-2)

//-----------------------------------------------------------------
//SetProperty
window.addEventListener('mousemove', (e) =>{
     nav.style.setProperty("--x", e.layerX + "px");
     nav.style.setProperty("--y", e.layerY + "px");
});

