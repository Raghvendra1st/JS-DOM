const ScoreDisplay=document.querySelector('#score');
const incrementC =document.querySelector('#countin');
const decrementC=document.querySelector('#countd');
let count =0;
incrementC.addEventListener('click',()=>{
    count =count+1;
    ScoreDisplay.textContent=count;

});
decrementC.addEventListener('click',()=>{
    count--;
    ScoreDisplay.textContent=count;
});