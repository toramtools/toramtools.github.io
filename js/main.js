"use strict"

const LV_CAP = 240;

const HIGHEST_PROF = 205;
const HIGHEST_ARM_POT = 46;
const HIGHEST_WPN_POT = 47;
const ARMOR_DIFFICULTY = 205;
const WEAPON_DIFFICULTY = 200;
const PRIMARY_STAT = 375;
const SECONDARY_STAT = 247;

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

const max = Math.max;
const min = Math.min;
const floor = Math.floor;
const ceil = Math.ceil;
const abs = Math.abs;
const sign = Math.sign;
const trunc = Math.trunc;