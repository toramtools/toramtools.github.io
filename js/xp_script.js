const floor = Math.floor;
const ceil = Math.ceil;

for (const key of Object.keys(quest_data)) {
    $("#quest-name").append(`<option value=${quest_data[key]}>${key}</option>`);
}

function getTotalXP (begin, end, endPercentage) {
    let xp = 0;
    for (var i = begin; i < end; i++) {
        xp += floor(0.025*i**4+2*i);
    }
    xp += floor(floor(0.025*end**4+2*end)*endPercentage/100);
    return xp;
}

function parseInput (selector, std = 1) {
    let field = $(selector).val();
    return field != ""?parseInt(field):std;
}

function evaluateTimes () {
    let lv = parseInput("#level");
    let target = parseInput("#target-level");
    let percentage = parseInput("#level-percentage", 0);
    let questXP = parseInput("#quest-exp", 0);
    let times = ceil(getTotalXP(lv, target, percentage)/questXP);
    if (isNaN(times)) {
        $("#target-times").text("?");
    }
    else {
        $("#target-times").text(times);
    }

}

$("#quest-name").on("input", function () {
    $("#quest-exp").val(this.value);
});
$("body form").on("input", evaluateTimes);
$("body form").trigger("input");