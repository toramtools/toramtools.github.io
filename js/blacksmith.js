const floor = Math.floor;
const max = Math.max;
const min = Math.min;

function parseInput (selector, std = 1) {
    let field = $(selector).val();
    return field != ""?parseInt(field):std;
}

function difficultyHandler () {
    let TEC = parseInput("#TEC");
    let DEX = floor(parseInput("#DEX")*parseInput("#eDEXp")+parseInput("#eDEX"));
    let STR = floor(parseInput("#STR")*parseInput("#eSTRp")+parseInput("#eSTR"));
    let proeficiency = parseInput("#proeficiency", 0);
    let createEquipment = parseInput("#create-equipment", 0);
    let difficulty = proeficiency+floor(TEC/2)+floor(DEX/6);
    let itemDifficulty = parseInput("#equipment-difficulty", 0);
    $("#your-difficulty").val(difficulty);
    $("#success-rate").val(min(100, max(0, createEquipment+difficulty-itemDifficulty+floor(STR/10))));
}

function potentialHandler () {
    let potential = parseInput("#base-potential", 0);
    potential = floor(potential*(1+parseInput("#careful-creation", 0)*0.01+parseInput("#expert-creation", 0)*0.02));
    let craft = $("#craft-type").val();
    if (craft == "Armor") {
        potential += floor(parseInput("#VIT")/10);
    } else if (craft == "1H Sword") {
        potential += floor((parseInput("#DEX")+parseInput("#STR"))/20);
    } else if (craft == "2H Sword") {
        potential += floor(parseInput("#STR")/10);
    } else if (craft == "Bow") {
        potential += floor((parseInput("#DEX")+parseInput("#STR"))/20);
    } else if (craft == "Bowgun") {
        potential += floor(parseInput("#DEX")/10);
    } else if (craft == "Staff") {
        potential += floor(parseInput("#INT")/10);
    } else if (craft == "Magic Device") {
        potential += floor((parseInput("#INT")+parseInput("#AGI"))/20);
    } else if (craft == "Knuckle") {
        potential += floor(parseInput("#AGI")/10);
    } else if (craft == "Halberd") {
        potential += floor((parseInput("#STR")+parseInput("#AGI"))/20);
    } else if (craft == "Katana") {
        potential += floor((parseInput("#DEX")+parseInput("#AGI"))/20);
    }
    $("#total-potential").val(potential);
}

function bothHandler () {
    difficultyHandler();
    potentialHandler();
}

$("#STR").on("input", bothHandler);
$("#DEX").on("input", bothHandler);
$("#TEC").on("input", bothHandler);
$("#AGI").on("input", potentialHandler);
$("#VIT").on("input", potentialHandler);
$("#INT").on("input", potentialHandler);

$("#eSTR").on("input", difficultyHandler);
$("#eDEX").on("input", difficultyHandler);
$("#eSTRp").on("input", difficultyHandler);
$("#eDEXp").on("input", difficultyHandler);

$("#craft-type").on("input", potentialHandler);

$("#create-equipment").on("input", potentialHandler);
$("#careful-creation").on("input", difficultyHandler);
$("#expert-creation").on("input", difficultyHandler);

$("#equipment-difficulty").on("input", difficultyHandler);
$("#base-potential").on("input", potentialHandler);
$("#proeficiency").on("input", difficultyHandler);