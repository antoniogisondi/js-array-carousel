"use strict"
let image = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]
let i = 0;
let current_image = 0;

let slider = document.querySelector(".slider")
let slide = ''

for(i=0; i < image.length; i++){
    
    current_image = image[i]
    slide = `<div class="slide">img src"${current_image}"></div>`
}

slider.innerHTML = slide;

let all_slide = document.getElementsByClassName("slide")
let active = 0;
all_slide[active].classList.add("active")

let next_btn = document.querySelector("next")
let prev_btn = document.querySelector("previous")

console.log(next_btn, prev_btn)


