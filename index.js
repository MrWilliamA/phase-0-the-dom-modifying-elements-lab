// Write your code here!

const element = document.createElement('div'); 
document.body.appendChild(element); 

element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2; 
element.style.background = 'grey';
element.style.height = '100px';

element.className = "dog";
element.classList.add("pet-listing", "doggy"); 
