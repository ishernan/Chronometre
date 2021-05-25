
const heures   = document.querySelector('#heures'); 
const minutes  = document.querySelector('#minutes') ;
const secondes = document.querySelector('#secondes'); 
const button   = document.querySelector('#button');
const button2  = document.querySelector('#button2');
const reset    = document.querySelector('#reset');

let ms = 0
let s  = 0
let m  = 0
let h  = 0
let time;

function chronometre () { 
  
  time = setInterval(() => {
    if (s == 60){
      s = 0;
      m ++;
      minutes.textContent = min;
         
    } else if (m == 60) {
      m = 0;
      h++;
      heures.textContent = h; 
    }   
  secondes.textContent = s;
    s++;  
  }, 100);
};   


button.addEventListener('click', ()=>{
  button.classList.add("d-none");
  button2.classList.remove("d-none"); 
  chronometre()
}); 

button2.addEventListener('click', ()=>{
  clearInterval(time);
  button.classList.remove("d-none");
  button2.classList.add("d-none");
})
  
 
reset.addEventListener('click', ()=>{
  location.reload();
})
