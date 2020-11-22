for (const key of Object.keys(quest_data)) {
    $("#quest-name").append(`<option value=${quest_data[key]}>${key}</option>`);
}

const getXP = (lv) => floor(0.025*lv**4+2*lv);

const getTotalXP = function (begin, beginPercentage, end) {
    let xp = floor((1-beginPercentage/100)*getXP(begin));
    for (var i = begin+1; i < end; i++) {
        xp += getXP(i);
    }
    return xp;
}

const addXP = function (begin, beginPercentage, extraXP) {
    let totalXP = getTotalXP(1, 0, begin)+floor((1-beginPercentage/100)*getXP(begin));
    let targetXP = totalXP+extraXP;
    let lv, lvPercentage;
    for (lv = begin; totalXP <= targetXP; lv++) {
        totalXP += getXP(lv);
    }
    lv -= 1;
    lvPercentage = floor(100*(1-(totalXP-targetXP)/(getXP(lv))));
    return [lv, lvPercentage];
}

const evaluateTarget = function () {
    let lv = parseInput("#level");
    let target = parseInput("#target-level");
    let percentage = parseInput("#level-percentage", 0);
    let questXP = parseInput("#quest-exp", 0);
    let targetTimes = ceil(getTotalXP(lv, percentage, target)/questXP);
    let [nLv, nLvP] = addXP(lv, percentage, questXP*parseInput("#quest-times", 0));
    $("#target-times").text(targetTimes);
    $("#times-level").text(`${nLv} (${nLvP}%)`);
    $("#times-value").text(parseInput("#quest-times", 0));
}

$("#quest-name").on("input", function () {
    $("#quest-exp").val(this.value);
});
$("body form").on("input", evaluateTarget);
$("body form").trigger("input");