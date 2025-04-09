import { pics } from "./data.js"; 

let randomIndex = Math.floor(Math.random() * pics.length);
let picItem = pics[randomIndex];  


document.querySelector('.img-container').innerHTML = `<img class="img" src="images/images ${randomIndex + 1}.jpg">`;

const nextButton = document.querySelector('.next')

nextButton.addEventListener('click', nextButtonFunction)
nextButton.addEventListener('keydown',(event) => {
    if (event.keyCode === 32){
        nextButtonFunction()
    }
})

document.querySelector('.Author')
    .addEventListener('click', () => {
        document.querySelector('.content')
            .innerHTML = `${picItem.author}`;  
    });

document.querySelector('.Name')
    .addEventListener('click', () => {
        document.querySelector('.content')
            .innerHTML = `${picItem.name}`;  
    });

document.querySelector('.Year')
    .addEventListener('click', () => {
        document.querySelector('.content')
            .innerHTML = `${picItem.year}`; 
    });

document.querySelector('.All')
    .addEventListener('click', () => {
        document.querySelector('.content')
            .innerHTML = `${picItem.author} - ${picItem.name} - ${picItem.year}`; 
    });

function nextButtonFunction() {
        randomIndex = Math.floor(Math.random() * pics.length);  
        picItem = pics[randomIndex];  
        document.querySelector('.img-container')
            .innerHTML = `<img class="img" src="images/images ${randomIndex + 1}.jpg">`;  

        
        document.querySelector('.content').innerHTML = "Select an option to view more info."; 
    }
