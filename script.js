console.log("script running!");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
button1.addEventListener("click", e => { alert("Meh-eh-eh-eh!")});
button2.addEventListener("click", e => { status2.innerHTML = "Thanks for petting the bunny! He looks really happy!";});
let carrots = 2;
button3.addEventListener("click", e => { 
  if(carrots < 10){
  carrots = carrots + 1;
  status3.innerHTML = "Coco has had " + carrots + " carrots today.";
}else{
  status3.innerHTML = "Coco is full on eating carrots at " + carrots + " carrots for today!";}});
button4.addEventListener("click", e => { zoo.innerHTML = `<h1 class="title">Due to some dangerous rulebreaking, the petting zoo is temporarily closed</h1>`;});
button5.addEventListener("click", e=> {status5.innerHTML = "Caramel has been fed and he is feeling happy and satisfied!"});

const status2 = document.querySelector("#status2");
const status3 = document.querySelector("#status3");
const zoo = document.querySelector(".container");
const status5 = document.querySelector("#status5");
  
