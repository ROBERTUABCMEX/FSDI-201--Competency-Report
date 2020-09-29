var links = document.getElementByIdTagName('a');

links[0].setAttribute('target','blank');
links[0].setAttribute('class','bordered');

var input = document.getElementById("petType");
input.hasAttribute('class');
input.getAttribute('class');

//create elements
var h1=document.createElement('h1');
console.log(h1);

var text = document.createTextNode("Hello world");
console.log(text);

h1.appendChild(text);
console.log(h1);

var main=document.getElementById("register-main");
main.appendChild(h1);

//hide an element

input.style.display="none";

//remove an element
var txtpetname=document.getElementById("petname");
var pPetName=document.getElementById("pPetName");
pPetName.removeChild(textpetname);

//create an ul with three li

var ul=document.createElement("ul");

for(var i=1;i<=3;i++){
    var li=document.createElement("li");
    textLi=document.createTextNode("Element" +i);
    
}