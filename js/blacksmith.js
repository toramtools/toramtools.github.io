"use strict"

$("#crafting-popup").on("click", function() {
    alert("Type equipment difficulty, not yours.");
});

const difficultyHandler = function () {
    let TEC = parseInput("#TEC");
    let DEX = floor(parseInput("#DEX")*(100+parseInput("#eDEXp"))/100+parseInput("#eDEX"));
    let STR = floor(parseInput("#STR")*(100+parseInput("#eSTRp"))/100+parseInput("#eSTR"));
    let proeficiency = parseInput("#proeficiency", 0);
    let createEquipment = parseInput("#create-equipment", 0);
    let difficulty = proeficiency+floor(TEC/2)+floor(DEX/6);
    let itemDifficulty = parseInput("#equipment-difficulty", 0);
    $("#your-difficulty").val(difficulty);
    $("#success-rate").val(min(100, max(0, floor((50+5*createEquipment)/100*(10+difficulty-itemDifficulty+floor(STR/10))))));

    if (difficulty < itemDifficulty) {
        $("#warning").show();
    }
    else {
        $("#warning").hide();
    }
}

const potentialHandler = function () {
    let potential = parseInput("#base-potential", 0);
    potential = floor(potential*(1+parseInput("#careful-creation", 0)*0.01+parseInput("#expert-creation", 0)*0.02));
    let craft = $("#craft-type").val();
    if (craft == "Armor") {
        potential += floor(parseInput("#VIT")/10);
    } 
    else if (craft == "1H Sword") {
        potential += floor((parseInput("#DEX")+parseInput("#STR"))/20);
    } 
    else if (craft == "2H Sword") {
        potential += floor(parseInput("#STR")/10);
    } 
    else if (craft == "Bow") {
        potential += floor((parseInput("#DEX")+parseInput("#STR"))/20);
    } 
    else if (craft == "Bowgun") {
        potential += floor(parseInput("#DEX")/10);
    } 
    else if (craft == "Staff") {
        potential += floor(parseInput("#INT")/10);
    } 
    else if (craft == "Magic Device") {
        potential += floor((parseInput("#INT")+parseInput("#AGI"))/20);
    } 
    else if (craft == "Knuckle") {
        potential += floor(parseInput("#AGI")/10);
    } 
    else if (craft == "Halberd") {
        potential += floor((parseInput("#STR")+parseInput("#AGI"))/20);
    } 
    else if (craft == "Katana") {
        potential += floor((parseInput("#DEX")+parseInput("#AGI"))/20);
    }
    $("#total-potential").val(potential);
}

const setDefaultStats = function (primary, secondary, difficulty = WEAPON_DIFFICULTY) {
    $("#STR").val('');
    $("#DEX").val(''); 
    $("#INT").val(''); 
    $("#VIT").val(''); 
    $("#AGI").val(''); 
    $("#TEC").val('');

    $("#"+primary).val(PRIMARY_STAT);
    $("#"+secondary).val(SECONDARY_STAT);

    $("#equipment-difficulty").val(difficulty);

    if (difficulty == WEAPON_DIFFICULTY) {
        $("#base-potential").val(HIGHEST_WPN_POT);
    }
    else {
        $("#base-potential").val(HIGHEST_ARM_POT);
    }
}

const craftHandler = function () {
    let craft = $("#craft-type").val();
    if (craft == "Armor") {
        setDefaultStats("VIT", "TEC", ARMOR_DIFFICULTY);
    } 
    else if (craft == "1H Sword") {
        setDefaultStats("DEX", "STR");
    } 
    else if (craft == "2H Sword") {
        setDefaultStats("STR", "DEX");
    } 
    else if (craft == "Bow") {
        setDefaultStats("DEX", "STR");
    } 
    else if (craft == "Bowgun") {
        setDefaultStats("DEX", "STR");
    } 
    else if (craft == "Staff") {
        setDefaultStats("INT", "TEC");
    } 
    else if (craft == "Magic Device") {
        setDefaultStats("INT", "AGI")
    } 
    else if (craft == "Knuckle") {
        setDefaultStats("AGI", "DEX");
    } 
    else if (craft == "Halberd") {
        setDefaultStats("STR", "AGI");
    } 
    else if (craft == "Katana") {
        setDefaultStats("DEX", "AGI");
    }
}

const bothHandler = function () {
    difficultyHandler();
    potentialHandler();
}


$(document).ready(function () {
    $("#proeficiency").val(HIGHEST_PROF);
    $("body form").on("input", bothHandler);
    $("body form").trigger("input");
    $("#craft-type").on("input", craftHandler);
    $("#craft-type").trigger("input");
});