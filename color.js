// 1. Remove the '#' symbols
const colorback = document.getElementById("color-name"); 
const btnn = document.getElementById("btn");

let color = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFFF33"];
let index = 0;

// 2. Change 'colorback' to 'btnn' so the button works
// 3. Fix the spelling to 'addEventListener'
btnn.addEventListener("click", function() {
    
    document.body.style.backgroundColor = color[index];
    colorback.textContent = color[index];
    
    index++;
    if (index >= color.length) {
        index = 0;
    }
});

