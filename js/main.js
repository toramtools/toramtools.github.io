"use strict"

const LV_CAP = 260;

const HIGHEST_PROF = 220;
const HIGHEST_ARM_POT = 49;
const HIGHEST_WPN_POT = 50;
const ARMOR_DIFFICULTY = 220;
const WEAPON_DIFFICULTY = 220;
const PRIMARY_STAT = 425;
const SECONDARY_STAT = 247;

const range = function (begin, end, step=1) {
    let list = [];
    for (var i = begin; i <= end; i=i+step) {
        list.push(i);
    }
    return list;
}

const fillOptions = function (values, keys=null, selected=false) {
    if (values.length == 0) {
        return;
    }

    let s = "";
    if (keys != null) {
        s += `<option value="${values[0]}"${selected ? " selected" : ""}>${keys[0]}</option>\n`;
        for (var i = 1; i < values.length; i++) {
            s += `<option value="${values[i]}">${keys[i]}</option>\n`;
        }
    }
    else {
        s += `<option value="${values[i]}"${selected ? " selected" : ""}>${values[i]}</option>\n`;
        for (var i = 1; i < values.length; i++) {
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

const max = Math.max;
const min = Math.min;
const floor = Math.floor;
const ceil = Math.ceil;
const abs = Math.abs;
const sign = Math.sign;
const trunc = Math.trunc;