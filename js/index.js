"use strict"

const showSection = function (itemId, sectionSelector, title) {
    $('#'+sectionSelector).show();
    $('#'+itemId).show();
    $(`${'#'+sectionSelector} .closeable-body div`).not(`#${itemId}`).hide();
    $('#description-title').text(title);
}

$('.question-mark').each(function () {
    let id = $(this).attr('id').split('-')[1];
    $(this).on("click", function () {
        console.log($(this).parent().find('a').text());
        showSection(id, "description-section", $(this).parent().find('a').text());
    });
});

$("#close-description").on("click", function () {
    $("#description-section").hide();
});

$(document).ready(function () {
    let img = new Image();
    img.src = "https://cdn.onlinewebfonts.com/svg/img_78622.png";
});