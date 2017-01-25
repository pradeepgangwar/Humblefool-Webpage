$(document).ready(function(){
var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
var ctnt = "Harsha Suryanarayana"; // Your text goes here
var speed = 20; // ms per frame
var increment = 8; // frames per step. Must be >2

    
var clen = ctnt.length;       
var si = 0;
var stri = 0;
var block = "";
var fixed = "";
//Call self x times, whole function wrapped in setTimeout
(function rustle (i) {          
setTimeout(function () {
  if (--i){rustle(i);}
  nextFrame(i);
  si = si + 1;        
}, speed);
})(clen*increment+1); 
function nextFrame(pos){
  for (var i=0; i<clen-stri; i++) {
    //Random number
    var num = Math.floor(theLetters.length * Math.random());
    //Get random letter
    var letter = theLetters.charAt(num);
    block = block + letter;
  }
  if (si == (increment-1)){
    stri++;
  }
  if (si == increment){
  // Add a letter; 
  // every speed*10 ms
  fixed = fixed +  ctnt.charAt(stri - 1);
  si = 0;
  }
  $("#output").html(fixed + block);
  block = "";
}
});

var x=document.getElementById("output");
x.onmouseover=function(){
  x.style.color="white";
}
x.onmouseout=function(){
  x.style.color="black";
}

var y=document.getElementById("harsha_img");
y.onmouseover=function(){
  y.style.height="270px";
  y.style.width="270px";
}
y.onmouseout=function(){
  y.style.height="240px";
  y.style.width="240px";
}
