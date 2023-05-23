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


let all_slide = document.getElementsByClassName("slide")
let active = 0;
all_slide[active].classList.add("active")

let next_btn = document.querySelector(".next")
let prev_btn = document.querySelector(".prev")
console.log(prev_btn, next_btn)

next_btn.addEventListener('click', function(){
    if(active < (image.length - 1)){
        all_slide[active].classList.remove("active")
        active++
        all_slide[active].classList.add("active")
    }
})

prev_btn.addEventListener('click', function(){
    if(active > 0){
        all_slide[active].classList.remove("active")
        active--
        all_slide[active].classList.add("active")
    }
})


