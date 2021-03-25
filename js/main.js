"use strict"

const LV_CAP = 225;

const range = function (begin, end, step=1) {
    let list = [];
    for (var i = begin; i <= end; i=i+step) {
        list.push(i);
    }
    return list;
}

const fillOptions = function (values, keys=null) {
    let s = "";
    if (keys != null) {
        for (var i = 0; i < values.length; i++) {
            s += `<option value="${values[i]}">${keys[i]}</option>\n`;
        }
    }
    else {
        for (var i = 0; i < values.length; i++) {
            s += `<option value="${values[i]}">${values[i]}</option>\n`;
        }
    }
    return s;
}

const parseInput = function (selector, std = 1) {
    let field = $(selector).val();
    return field != ""?parseInt(field):std;
}

const parseInputf = function (selector, std = 1) {
    let field = $(selector).val();
    return field != ""?parseFloat(field):std;
}

const showSection = function (itemId, sectionSelector, title) {
    $('#'+sectionSelector).show();
    $('#'+itemId).show();
    //$(`${'#'+sectionSelector} .closeable-body :not(div[id="${itemId}"])`).each(function () {$(this).hide()});
    $(`${'#'+sectionSelector} .closeable-body div`).not(`#${itemId}`).hide();
    $("#description-section h2 span:first-child").text(title);
}

const max = Math.max;
const min = Math.min;
const floor = Math.floor;
const ceil = Math.ceil;
const abs = Math.abs;
const sign = Math.sign;
const trunc = Math.trunc;