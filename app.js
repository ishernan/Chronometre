
const heures   = document.querySelector('#heures'); 
const minutes  = document.querySelector('#minutes') ;
const secondes = document.querySelector('#secondes'); 
const button   = document.querySelector('#button');
const button2  = document.querySelector('#button2');

let time;



 function chronometre () { 
  let sec = 0
  let min = 0
  let heur = 0

  time = setInterval(() => {
    if (sec == 60){
      sec = 0;
      min ++;
      minutes.textContent = min;
         
    } else if (min == 60) {
      min = 0;
      heur++;
      heures.textContent = heur; 
    }   
  secondes.textContent = sec;
    sec++;  
  }, 10);
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
  
 
