"use strict"

const floor = Math.floor;
const statPoints = (level) => 2*level+5*(floor((level-level%10)/10)+floor((level%10)/5));
const skillPoints = (level) => level+floor(level/5);

$("#level").attr("max", $("#lvcap").val());
$("#stat-points").attr("max", statPoints(parseInt($("#lvcap").val())));
$("#skill-points").attr("max", skillPoints(parseInt($("#lvcap").val())));

function levelHighlight () {
    $("#level").addClass("highlight");
    $("#stat-points").removeClass("highlight");
    $("#skill-points").removeClass("highlight");
}

function spHighlight () {
    $("#level").removeClass("highlight");
    $("#stat-points").addClass("highlight");
    $("#skill-points").addClass("highlight");
}

function clearHighlight () {
    $("#level").removeClass("highlight");
    $("#stat-points").removeClass("highlight");
    $("#skill-points").removeClass("highlight");
}

function binSearch (value, evalFunction) {
    if (!isNaN(value)) {
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
                $('#level').val(mid);
                return;
            }
        }
        $('#level').val(end);
    }
    else {
        $('#level').val("");
    }
}

$("#lvcap").on("change", function () {
    $("#level").attr("max", $("#lvcap").val());
});

$("#level").on("change", function () {
    if (this.value != "") {
        let level = parseInt(this.value);
        $("#stat-points").val(statPoints(level));
        $("#skill-points").val(skillPoints(level));
        spHighlight();
    }
    else {
        $("#stat-points").val("");
        $("#skill-points").val("");
        clearHighlight();
    }
});

$("#stat-points").on("change", function () {
    binSearch(parseInt(this.value), statPoints);
    levelHighlight();
});

$("#skill-points").on("change", function () {
    binSearch(parseInt(this.value), skillPoints);
    levelHighlight();
});