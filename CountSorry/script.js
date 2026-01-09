const SorryDisplay=document.getElementById('counting');
const addingBtn=document.getElementById('adding');
const resettingBtn=document.getElementById('reseting');

let count=0;
addingBtn.addEventListener('click',function(){
 count++;
 SorryDisplay.textContent=count;

})
resettingBtn.addEventListener('click',function(){
    count=0;
    SorryDisplay.textContent=count;

});