"use strict"

$(document).ready(function() {
    $("#lvcap").val(LV_CAP);
    $("#level").val(LV_CAP).trigger("input");
    $("#attacker-rank").html(fillOptions([0, 1, 1.5, 2, 3, 4], [0, 10, 100, 1000, 10000, 100000]));
    $("#defender-rank").html(fillOptions([0, 1, 1.5, 2, 3, 4], [0, 10, 100, 1000, 10000, 100000]));
    $("#supporter-rank").html(fillOptions([0, 1, 1.5, 2, 3, 4], [0, 10, 100, 1000, 10000, 100000]));
    $("#breaker-rank").html(fillOptions([0, 1, 1.5, 2, 3, 4], [0, 10, 100, 1000, 10000, 100000]));
    $("#mastered-skills").html(fillOptions(range(0, 10)));
    $("#mastered-trees").html(fillOptions(range(0, 3)));
    $("#first-aid").html(fillOptions(range(0, 4), [0, 100, 400, 700, 1000]));
    $("#KO").html(fillOptions(range(0, 4), [0, 100, 400, 700, 1000]));
    $("#consecutive-time").html(fillOptions(range(0, 8), ['0min', '15min', '30min', '1h', '2h', '3h', '4h', '5h', '6h']));
});

$("#emblem-popup").on("click", function () {
    alert('Subsections indicate which tabs you may find mentioned emblems.\n\nHighest Lv = Highest "Player Level" emblem you got.');
});

// const statPoints = (level) => 2*level+5*(floor((level-level%10)/10)+floor((level%10)/5));
const statPoints = (level) => level*2;
const maxLvPoints = (level) => level>=5?5*(floor((level-5)/10)+1):0;
const skillPoints = (level) => level+floor(level/5);

const rankStatPoints = function () {
    let total = 0;
    total += ($("#attacker-rank").val() > 1)*5;
    total += ($("#defender-rank").val() > 1)*5;
    total += ($("#supporter-rank").val() > 1)*5;
    total += ($("#breaker-rank").val() > 1)*5;
    return total;
}

const binSearch = function (value, evalFunction) {
    let begin = 0;
    let end = parseInt($("#lvcap").val());
    while (begin+1 < end) {
        let mid = floor((begin+end)/2);
        let midValue = evalFunction(mid);
        if (midValue > value) {
            end = mid;
        }
        else if (midValue < value) {
            begin = mid;
        }
        else {
            $("#level").val(mid);
            return;
        }
    }
    $("#level").val(end);
}

const clearHighlights = function () {
    $("#level").removeClass("highlight");
    $("#stat-points").removeClass("highlight");
    $("#skill-points").removeClass("highlight");
}

var lastState = 'none';
const levelChange = function () {
    if (this.value != "") {
        let level = parseInt(this.value);
        let highestLv = max(level, parseInput('#highest-level'));
        let statp = statPoints(level)+maxLvPoints(highestLv)+rankStatPoints();
        $("#stat-points").val(statp);
        $("#skill-points").val(skillPoints(level)+parseInput("#extra-skill-points", 0));
        
        $("#level").removeClass("highlight");
        $("#stat-points").addClass("highlight");
        $("#skill-points").addClass("highlight");
        lastState = 'level';
    }
    else {
        $("#stat-points").val("");
        $("#skill-points").val("");
        clearHighlights();
        lastState = 'none';
    }
}

const statChange = function () {
    let statValue = $("#stat-points").val();
    if (statValue != "") {
        let highestSP = maxLvPoints(parseInput("#highest-level"));
        binSearch(parseInt(this.value), (level) => statPoints(level)+max(highestSP, maxLvPoints(level))+rankStatPoints());
        $("#stat-points").removeClass("highlight");
        $("#level").addClass("highlight");
        $("#skill-points").addClass("highlight");
        $("#skill-points").val(skillPoints(parseInt($("#level").val())));
        lastState = 'stat';
    }
    else {
        $("#level").val("");
        $("#skill-points").val("");
        clearHighlights();
        lastState = 'none';
    }
}

const skillChange = function () {
    let skillValue = $("#skill-points").val();
    if (skillValue != "") {
        binSearch(parseInt(this.value), (level) => skillPoints(level)+parseInput("#extra-skill-points", 0));
        $("#skill-points").removeClass("highlight");
        $("#level").addClass("highlight");
        $("#stat-points").addClass("highlight");
        $("#stat-points").val(statPoints(parseInt($("#level").val())));
        lastState = 'skill';
    }
    else {
        $("#level").val("");
        $("#stat-points").val("");
        clearHighlights();
        lastState = 'none';
    }
}

const extraSkillPoints = function () {
    let totalPoints = 0;
    totalPoints += parseInt($("#attacker-rank").val());
    totalPoints += parseInt($("#defender-rank").val());
    totalPoints += parseInt($("#supporter-rank").val());
    totalPoints += parseInt($("#breaker-rank").val());
    totalPoints += parseInt($("#first-aid").val());
    totalPoints += parseInt($("#KO").val());
    totalPoints += parseInt($("input[name='minigame']:checked").val());
    totalPoints += parseInt($("#mastered-skills").val());
    totalPoints += parseInt($("#mastered-trees").val());
    totalPoints += parseInt($("#consecutive-time").val());
    return totalPoints;
}

const extraStatPoints = function () {
    let totalPoints = 0;
    let highestSP = maxLvPoints(parseInput("#highest-level"));
    let levelSP = maxLvPoints(parseInput("#level"));
    totalPoints += max(highestSP, levelSP);
    totalPoints += rankStatPoints();
    return totalPoints;
}

$("#lvcap").on("input", function () {
    $("#level").attr("max", $("#lvcap").val());
});
$("#lvcap, #level").on("change", () => $("#extra-sp").trigger("input"));
$("#level").on("input", levelChange);
$("#stat-points").on("input", statChange);
$("#skill-points").on("input", skillChange);

var emblemsDisplay = false;
$("#show-skill-emblems").on("click", function () {
    if (!emblemsDisplay) {
        emblemsDisplay = true;
        this.innerHTML = "Hide All"
        $("#extra-stp").show();
        $("#extra-sp").show();
    }
    else {
        emblemsDisplay = false;
        this.innerHTML = "Show All"
        $("#extra-stp").hide();
        $("#extra-sp").hide();
    }
});

$("#extra-sp").on("input", function () {
    $("#extra-skill-points").val(extraSkillPoints());
    $("#extra-stat-points").val(extraStatPoints());
    if (lastState == 'level') {
        $("#level").trigger("input");
    }
    else if (lastState == 'stat') {
        $("#stat-points").trigger("input");
    }
    else if (lastState == 'skill') {
        $("#skill-points").trigger("input");
    }
});