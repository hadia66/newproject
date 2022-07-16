function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var i = 0;
let txt = "Storee is a professional website that introduce to you many great products. \nhope you enjoy surfing this site";
var speed = 50;
window.onload= function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function check(){
let x=document.getElementById("uname").value
let target=0;
 for(let i=0; i<x.length;i++){
     if(x[i]=="@"){
         target=1;
     }
 }
 if(target==0){
     document.getElementById("alert").style.display="block";
 }
 else{
     document.getElementById("alert").style.display="none";
 }
}
function check1(){
    let y=document.getElementById("pwd").value
    let target=0;
         if(y.length<4){
             target=1;
         }
     if(target==1){
         document.getElementById("alert1").style.display="block";
     }
     else{
         document.getElementById("alert1").style.display="none";
     }
    }
    function check2(){
        let y=document.getElementById("country").value
        let target=0;
             if(y.length==0){
                 target=1;
             }
         if(target==1){
             document.getElementById("alert2").style.display="block";
         }
         else{
             document.getElementById("alert2").style.display="none";
         }
        }