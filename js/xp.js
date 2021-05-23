"use strict"
const quest_data = {
    "Custom Experience Value": "",
    "Nightmare Crystal (Stack)": 285000,
    "Lapin's Soul (Piece)": 400000,
    "Parasited Crystal (Stack)": 380000,
    "Free from Infesters! (2k f/k)": 15000000,
    "Defeat Metal Stinger (x100)": 3240000,
    "Minotaur Skin (Stack)": 333300,
    "Cracked Platinum Armguard (Stack)": 677000
};

const mq_data = {
    "Chapter 1":"",
    "First Time Visit":30,
    "Straye Brother and Sister":80,
    "A Golem on a Rampage":730,
    "The Goddess of Wisdom":2050,
    "The Dragon's Den":4700,
    "The Ruined Temple":9330,
    "The First Magic Stone":16700,
    "Purification Incense":27900,
    "The Dragon and Black Crystal":43000,
    "Chapter 2":"",
    "The Merchant Girl":64000,
    "Where Are the Gems?":92000,
    "Who is the Black Knight?!":118200,
    "Trials in the Palace":149000,
    "The Moon Wizard":172000,
    "The Follower and Hater":227000,
    "The Wizard's Cave":240000,
    "The Star Wizard":255000,
    "Chapter 3":"",
    "The Invincible... Enemy??":270000,
    "The Ancient Empress":284000,
    "The Culprit":319000,
    "Fate of the Fortress":335000,
    "Memory in the Lost Town":398000,
    "The Stolen Sorcery Gem":417000,
    "Living with a Dragon":462300,
    "Monsters from Outerworld":540000,
    "Chapter 4":"",
    "The Mage Diels":562000,
    "Journey for Reconstruction":585000,
    "The Sacred Gem in Akaku":710000,
    "The King of Darkan":740000,
    "The Lurking Evil":803000,
    "Find the False Black Knight!":913000,
    "Technista's Movement":1000000,
    "The Falling Feather of Death":1100000,
    "Chapter 5":"",
    "In The Unknown Darkness":1150000,
    "The Charm":1310000,
    "Parching Dark Mirror":1370000,
    "Fierce Battle in the Garden":1550000,
    "A Light in the Darkness":1750000,
    "The Ones Nesting in the Manor":1970000,
    "The Dark Castle":2210000,
    "To The Living World":2220000,
    "Chapter 6":"",
    "Demi Machina":2600000,
    "The Town of Pax Faction":2700000,
    "Mechanical Heart":2800000,
    "Black Knights of Lyark":2820000,
    "The Mysterious Artifact":3030000,
    "Truth of the Artifact":3099000,
    "The Price of Treachery":3320000,
    "The Blasphemous Factory":3640000,
    "Mystery of the Black Knights":4020000,
    "Chapter 7":"",
    "Monster's Forest":4730000,
    "The Underground Town":4820000,
    "The Elves in Lyark":5070000,
    "The Mad Laboratory":5500000,
    "Tragedy in the Jail":6000000,
    "Calamity in Droma Square":6400000,
    "Head for Ultimea Palace":6900000,
    "The Chaotic Truth":7400000,
    "Chapter 8":"",
    "The Mine Where Monsters Lurk":8400000,
    "The Mysterious Shadow":8500000,
    "The New Diel Country":"",
    "The Ruins of the Gods":8800000,
    "The Former God of Justice":9100000,
    "The Remaining Thrones in the Shrine":9700000,
    "Gods' Whereabouts":10400000,
    "The Wait at Specia's Shrine":11100000,
    "The Warden of Ice & Snow":11800000,
    "At Mountains' End":12500000,
    "Chapter 9":"",
    "Deadly Road to Eldenbaum":15800000,
    "Unforeseen Traps":17100000,
    "Traces of Technological Progress":18200000,
    "An Unexpected Acquaintance":19200000,
    "Front Line Base Operation":20300000,
    "Strategy to Redeem the Treetop Harbor":21500000,
    "The Teleporter Left Behind":22700000,
    "The Man Who Seeks Death":23900000,
    "The Battle to Recapture Eldenbaum":25000000,
    "A New Beginning":13000000,
    "Chapter 10":"",
    "Off to the Fateful Land":26000000,
    "The Inhabitants Under the Cliff":27400000,
    "The Nightmare Returns":28800000,
    "The Whereabouts of the Missing Monks":30200000,
    "The Goddess of Justice and the Squatters":31600000,
    "Navigator of the Ark":33100000,
    "Witch in the Woods": 34600000
 };


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
    $("#target-level").val(LV_CAP);
    $("#quest-name").html(fillOptions(Object.values(quest_data), Object.keys(quest_data)));
    let [keys, vals] = splitMqInfo(); 
    $("#mq-from").html(fillOptions(vals, keys));
    $("#mq-until").html(fillOptions(vals.reverse(), keys.reverse()));
    $("body form").trigger("input");
});

$("#quest-popup").on("click", function () {
    alert('Use custom experience to set unlisted quest or monster experience.\n\nHint: Type "1" on "Exp" field to discover total raw XP required to reach target Lv.');
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
    let xpRequired = getTotalXP(lv, percentage, target);
    let targetTimes = ceil(xpRequired/questXP);
    let [nLv, nLvP] = addXP(lv, percentage, questXP*parseInput("#quest-times", 0));
    $("#target-times").text(targetTimes);
    $("#times-level").text(`${nLv} (${nLvP}%)`);
    $("#times-value").text(parseInput("#quest-times", 0));
    $("#xp-required").text(xpRequired);
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
