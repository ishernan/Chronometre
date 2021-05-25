//AUTRE VARIANTE

const milisecondes = document.querySelector('#milisecondes');
const heures       = document.querySelector('#heures'); 
const minutes      = document.querySelector('#minutes') ;
const secondes     = document.querySelector('#secondes'); 
const button       = document.querySelector('#button');
const button2      = document.querySelector('#button2');
const reset        = document.querySelector('#reset');
const maxDefault   = 60; 

let mls,s,m,h,timeStart; 
let tab = []

function init() { 
  mls = 00;
  s   = 00;
  m   = 00;
  h   = 00;
  tab = [s,m,h]
  timeStart;
}

function changeValue(v, i, max){
  v[i]++
  if(v[i]==max){
    i++
    if(v.lenght>i){
      changeValue(v, i);
    }    
  }
}

function chronometre () {   
 timeStart = setInterval(() => {    
    mls++; 
    milisecondes.innerHTML = mls; 

    if(mls > 9){
      changeValue(tab, 0, maxDefault);      
      secondes.innerHTML = s;
    }
 
    
  }, 100);
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
