"use strict";
const getS = (selector) => document.querySelector(selector); 
//click day-night
document.querySelector(".hed").addEventListener("click", () => {
    getS('.testwork').classList.add('daynight');
  

})
