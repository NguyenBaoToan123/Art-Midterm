import { pics } from "./data.js"; // Assuming pics is an array of objects

let randomIndex = Math.floor(Math.random() * pics.length);
let picItem = pics[randomIndex];  // Use randomIndex directly to access the pic item

// Display a random image initially
document.querySelector('.img-container').innerHTML = `<img class="img" src="images/images ${randomIndex + 1}.jpg">`;

// Update content based on random picture
document.querySelector('.next')
    .addEventListener('click', () => {
        randomIndex = Math.floor(Math.random() * pics.length);  // Generate a new random index
        picItem = pics[randomIndex];  // Update picItem to the new picture
        document.querySelector('.img-container')
            .innerHTML = `<img class="img" src="images/images ${randomIndex + 1}.jpg">`;  // Update image source

        // Optionally update content as well
        document.querySelector('.content').innerHTML = "Select an option to view more info."; 
    });

document.querySelector('.Author')
    .addEventListener('click', () => {
        document.querySelector('.content')
            .innerHTML = `${picItem.author}`;  // Display author of the current image
    });

document.querySelector('.Name')
    .addEventListener('click', () => {
        document.querySelector('.content')
            .innerHTML = `${picItem.name}`;  // Display name of the current image
    });

document.querySelector('.Year')
    .addEventListener('click', () => {
        document.querySelector('.content')
            .innerHTML = `${picItem.year}`;  // Display year of the current image
    });

document.querySelector('.All')
    .addEventListener('click', () => {
        document.querySelector('.content')
            .innerHTML = `${picItem.author} - ${picItem.name} - ${picItem.year}`;  // Display all info of the current image
    });
