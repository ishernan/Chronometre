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

function changeValue(value, i){
  value[i]++
  if(value[i]==maxDefault){
    i++
    if(value.lenght>i){
      changeValue(value, i);
    }    
  }
}



function chronometre () {   
 timeStart = setInterval(() => {    
    mls++; 
    milisecondes.innerHTML = mls; 

    if(mls > 9){
      changeValue(tab, 0);      
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
