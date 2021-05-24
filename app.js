
const button = document.querySelector('#button');
var time;

 function chronometre () {
  let heures= document.querySelector('#heures'); 
  let minutes= document.querySelector('#minutes') ;
  let secondes = document.querySelector('#secondes'); 

  let sec = 0
  let min = 0
  let heur = 0

  time = setInterval(() => {
    if (sec == 60){
      sec = 0;
      min ++;
      minutes.textContent = min;
      if (min == 60) {
        min = 0;
        heur++;
        heures.textContent = heur; 

    } 
   

    }
   secondes.textContent = sec;
    sec++;  
  }, 1000);
}  


button.addEventListener('click', function(){
  chronometre()}); 
  
 
