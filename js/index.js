"use strict"

$(document).ready(function () {
    let img = new Image();
    img.src = "https://cdn.onlinewebfonts.com/svg/img_78622.png";
});

$("#help-sp").on("click", function (){
    showSection('sp', "description-section", this.dataset.title);
});
$("#help-xp").on("click", function (){
    showSection('xp', "description-section", this.dataset.title);
});
$("#help-bs").on("click", function (){
    showSection('bs', "description-section", this.dataset.title);
});
$("#close-description").on("click", function () {
    $("#description-section").hide();
});