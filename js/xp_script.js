const splitMqInfo = function () {
    let mqKeys = [];
    let mqValues = [];
    let currentChapter = 0;
    const keys = Object.keys(mq_data);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].startsWith('Chapter')) {
            currentChapter += 1;
        }
        else {
            mqKeys.push(`CH${currentChapter} - ${keys[i]}`);
            mqValues.push(i);
        }
    }
    return [mqKeys, mqValues];
}

$(document).ready(function () {
    $("#quest-name").html(fillOptions(Object.values(quest_data), Object.keys(quest_data)));
    let [keys, vals] = splitMqInfo(); 
    $("#mq-from").html(fillOptions(vals, keys));
    $("#mq-until").html(fillOptions(vals.reverse(), keys.reverse()));
    $("body form").trigger("input");
});

$("#quest-popup").on("click", function () {
    alert("Use custom experience to set unlisted quest or monster experience.");
});


const getXP = (lv) => floor(0.025*lv**4+2*lv);

const getTotalXP = function (begin, beginPercentage, end) {
    let xp = floor((1-beginPercentage/100)*getXP(begin));
    for (var i = begin+1; i < end; i++) {
        xp += getXP(i);
    }
    return xp;
}

const addXP = function (begin, beginPercentage, extraXP) {
    let totalXP = getTotalXP(1, 0, begin);
    let targetXP = totalXP+floor(beginPercentage/100*getXP(begin))+extraXP;
    let lv, lvPercentage;
    for (lv = begin; totalXP <= targetXP; lv++) {
        totalXP += getXP(lv);
    }
    lv -= 1;
    lvPercentage = 100-floor(100*(totalXP-targetXP)/getXP(lv));
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

const evaluateMQ = function () {
    let mqBegin = parseInt($("#mq-from").val());
    let mqEnd = parseInt($("#mq-until").val());
    if (mqBegin <= mqEnd) {
        const keys = Object.keys(mq_data);
        let mqXP = 0;
        let lv = parseInput("#level");
        let lvP = parseInput("#level-percentage", 0);
        let targetLv = parseInput("#target-level");
        let targetXP = getTotalXP(lv, lvP, targetLv);
        let mqStop = mqBegin;
        let mqStopTesting = false;
        for (var i = mqBegin; i <= mqEnd; i++) {
            mqXP += Number(mq_data[keys[i]]);
            if (!mqStopTesting && mqXP > targetXP) {
                mqStopTesting = true;
                mqStop = i;
            }
        }
        let [mqLv, mqLvP] = addXP(lv, lvP, mqXP);
        $("#mq-eval").html(`After doing Main Quest's above range you'll reach <strong>Lv.${mqLv} (${mqLvP}%)</strong>`);
        if (mqStopTesting) {
            let quest = $(`#mq-until option[value="${mqStop}"]`).text();
            $("#mq-stop").html(`You may stop after quest <strong>${quest}</strong> to reach target level.`);
        }
        else {
            $("#mq-stop").html("");
        }
    }
    else {
        $("#mq-eval").html("<em>Seems we have a time travel here</em>");
        $("#mq-stop").html("");
    }
}

$("#quest-name").on("input", function () {
    $("#quest-exp").val(this.value);
});
$("body form").on("input", function () {
    evaluateTarget();
    evaluateMQ();
});
