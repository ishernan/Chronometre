
const milisecondes = document.querySelector('#milisecondes');
const heures       = document.querySelector('#heures'); 
const minutes      = document.querySelector('#minutes') ;
const secondes     = document.querySelector('#secondes'); 
const button       = document.querySelector('#button');
const button2      = document.querySelector('#button2');
const reset        = document.querySelector('#reset');

let mls = 0
let s  = 0
let m  = 0
let h  = 0
let timeStart;

function chronometre () {   
  timeStart = setInterval(() => {
    
   

    if(mls > 9){
      s++;
      msl = 0;      
      secondes.innerHTML = s;
    }
    if (s > 59){
      s = 0;
      m ++;
      minutes.textContent = m;
    }         
    if (m > 59) {
      m = 0;
      h++;
      heures.textContent = h; 
    }   
    if (h> 24){
      h = 0;
    }
  
    mls++; 
    milisecondes.textContent = mls; 
  }, 1000);
};   

button.addEventListener('click', ()=>{
  button.classList.add("d-none");
  button2.classList.remove("d-none"); 
  chronometre()
}); 

button2.addEventListener('click', ()=>{
  clearInterval(timeStart);
  button.classList.remove("d-none");
  button2.classList.add("d-none");
})
  
 
reset.addEventListener('click', ()=>{
  location.reload();
})
