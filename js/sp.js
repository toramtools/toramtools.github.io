"use strict"

const floor = Math.floor;
const statPoints = (level) => 2*level+5*(floor((level-level%10)/10)+floor((level%10)/5));
const skillPoints = (level) => level+floor(level/5);

$("#level").attr("max", $("#lvcap").val());
$("#stat-points").attr("max", statPoints(parseInt($("#lvcap").val())));
$("#skill-points").attr("max", skillPoints(parseInt($("#lvcap").val())));

function binSearch (value, evalFunction) {
    let begin = 1;
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

function clearHighlights () {
    $("#level").removeClass("highlight");
    $("#stat-points").removeClass("highlight");
    $("#skill-points").removeClass("highlight");
}

function levelChange () {
    if (this.value != "") {
        let level = parseInt(this.value);
        $("#stat-points").val(statPoints(level));
        $("#skill-points").val(skillPoints(level));
        
        $("#level").removeClass("highlight");
        $("#stat-points").addClass("highlight");
        $("#skill-points").addClass("highlight");
    }
    else {
        $("#stat-points").val("");
        $("#skill-points").val("");
        clearHighlights();
    }
}

function statChange () {
    let statValue = $("#stat-points").val();
    if (statValue != "") {
        binSearch(parseInt(this.value), statPoints);
        $("#stat-points").removeClass("highlight");
        $("#level").addClass("highlight");
        $("#skill-points").addClass("highlight");
        $("#skill-points").val(skillPoints(parseInt($("#level").val())));
    }
    else {
        $("#level").val("");
        $("#skill-points").val("");
        clearHighlights();
    }
}

function skillChange () {
    let skillValue = $("#stat-points").val();
    if (skillValue != "") {
        $("#skill-points").removeClass("highlight");
        $("#level").addClass("highlight");
        $("#stat-points").addClass("highlight");
        $("#stat-points").val(statPoints(parseInt($("#level").val())));
    }
    else {
        $("#level").val("");
        $("#stat-points").val("");
        clearHighlights();
    }
}

$("#lvcap").on("input", function () {
    $("#level").attr("max", $("#lvcap").val());
});
$("#level").on("input", levelChange);
$("#stat-points").on("input", statChange);
$("#skill-points").on("input", skillChange);