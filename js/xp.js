"use strict"
const quest_data = {
    "Custom Experience Value": "",
    "Nightmare Crystal (Stack)": 297000,
    "Lapin's Soul (Piece)": 344000,
    "Parasited Crystal (Stack)": 380000,
    "Free from Infesters! (2k f/k)": 15000000,
    "Defeat Metal Stinger (x100)": 3240000,
    "Minotaur Skin (Stack)": 999900,
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
    "The New Diel Country":8600000,
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
    "Witch in the Woods": 34600000,
    "The Duel in Nov Diela": 36200000,
    "Chapter 11":"",
    "Flying the Ark":37800000,
    "Land of the Unknown":49000000,
    "The Strolling Forest":51000000,
    "Eumanos the Forest Dwellers": 53400000,
    "A Sproutling is Born": 55700000,
    "The Blessing-Bearer": 58100000,
    "Intense Battle in Coenubia's Stronghold": 60500000,
    "The Shadow of a Smoky Mountain": 63000000,
    "The Weredragons & the Underground World": 65500000,
    "Chapter 12": "",
    "The Sky with a Ceiling": 73400000,
    "Rivalry Between Dragons and Weredragons": 76300000,
    "Weredragon Couple and a Baby": 79300000,
    "Weredragons' Vital Point": 82300000,
    "Intense Battle in Propulsion System": 85300000,
    "Discovering a New Technology": 44200000,
    "Ark Repair": 92700000,
    "Weredragon Dispute": 96000000,
    "Cocoon in the Ice Wall": 99300000,
    "Chapter 13":"",
    "Underwater Inhabitants": 112600000,
    "Water Dome": 116500000,
    "Underwater City": 60200000,
    "The Thing in the Abandoned District": 125800000,
    "Shadow from the Abyss": 129900000,
    "The Ruthless Council": 67000000,
    "Mysterious Entity in the Little Shrine": 139900000,
    "The Great Battle Underwater": 144200000,
    "Chapter 14":"",
    "Crisis in the Sky": 159100000,
    "The Surviving Siblings": 164000000,
    "Chaotic Situation": 168900000,
    "The Bitter Truth": 173800000,
    "The Uncouth Rana Prince": 178800000,
    "Mutant Coenubia Village": 183900000
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
    $("#quest-name").val("15000000").trigger("input");
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
    for (let i = begin+1; i < end; i++) {
        xp += getXP(i);
    }
    return xp;
}

const addXP = function (begin, beginPercentage, extraXP) {
    let remainingXP = extraXP
    let lv, lvPercentage

    let XPRequiredNextLv = (1-beginPercentage/100)*getXP(begin)

    if (extraXP < XPRequiredNextLv) {
        let currentXP = beginPercentage/100*getXP(begin)+extraXP
        return [begin, floor(100*currentXP/getXP(begin))]
    } else {
        remainingXP -= XPRequiredNextLv
        lv = begin + 1
        while (getXP(lv) <= remainingXP) {
            remainingXP -= getXP(lv)
            lv += 1
        }
        lvPercentage = floor(100*remainingXP/getXP(lv));
        return [lv, lvPercentage];
    }  
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
    $("#xp-required").text(new Intl.NumberFormat().format(xpRequired));
}

const evaluateDiaries = function () {
    let mqBegin = parseInt($("#mq-from").val());
    let mqEnd = parseInt($("#mq-until").val());
    const skipVenena = $("#skip-venena").prop("checked");
    if (mqBegin <= mqEnd) {
        const keys = Object.keys(mq_data);
        let lv = parseInput("#level");
        let initialLv = lv;
        let lvP = parseInput("#level-percentage", 0);
        let initialLvP = lvP;
        let targetLv = parseInput("#target-level");
        let targetXP = getTotalXP(lv, lvP, targetLv); // 1

        let mqXP = 0;
        for (let i = mqBegin; i <= mqEnd; i++) {
            mqXP += Number(mq_data[keys[i]]);
            if (i == 85 && !skipVenena) { // 85 = metacoenubia quest, not skipping gives +12.5m xp after decel fight
                mqXP += 12500000;
            }
        } // 2

        const runs = floor(targetXP/mqXP);
        const exact_runs = (runs == ceil(targetXP/mqXP)); //#####PAREI AQUI

        if (runs <= 100) {
            $("#mq-table-results").html(`
                <div class="col-1 grid nogap" id="mq-table-header">
                    <div>N°</div>
                    <div style="text-align: left;">Final Chapter</div>
                    <div>Lv (%)</div>
                </div>
            `);
        } else {
            $("#mq-table-results").html(`
                <div style="padding: 1em;">
                    <span style="text-align: justify;"><span style="font-weight: bold;">Error</span>: Too many runs required (${runs+1}), select a wider range between quests.</span>
                </div>
            `);
            return;
        }

        for (let i = 1; i <= runs; i++) {
            [lv, lvP] = addXP(lv, lvP, mqXP);
            $("#mq-table-results").append(`
                <div class="col-1 grid nogap" id="mq-table-row">
                    <div>${i}</div>
                    <div>${$(`#mq-until option[value="${mqEnd}"]`).text()}</div>
                    <div>${lv} (${lvP}%)</div>
                </div>
            `);
        }

        if (!exact_runs) {
            let mqStopIndex = mqBegin;
            let curXP = getTotalXP(initialLv, initialLvP, lv)+lvP/100*getXP(lv+1);
            let stackedXP = 0;
            for (let i = mqBegin; i <= mqEnd; i++) {
                curXP += Number(mq_data[keys[i]]);
                stackedXP += Number(mq_data[keys[i]]);
                if (i == 85 && !skipVenena) { // 85 = metacoenubia quest, not skipping gives +12.5m xp after decel fight
                    curXP += 12500000;
                    stackedXP += Number(mq_data[keys[i]]);
                }
                if (curXP > targetXP) {
                    mqStopIndex = i;
                    [lv, lvP] = addXP(lv, lvP, stackedXP);
                    break;
                }
            }
            $("#mq-table-results").append(`
                <div class="col-1 grid nogap" id="mq-table-row">
                    <div>${runs+1}</div>
                    <div>${$(`#mq-until option[value="${mqStopIndex}"]`).text()}</div>
                    <div>${lv} (${lvP}%)</div>
                </div>
            `);
        }
    }
}

const evaluateMQ = function () {
    let mqBegin = parseInt($("#mq-from").val());
    let mqEnd = parseInt($("#mq-until").val());
    const skipVenena = $("#skip-venena").prop("checked");
    if (mqBegin <= mqEnd) {
        const keys = Object.keys(mq_data);
        let mqXP = 0;
        let mqXPReverse = 0;
        let lv = parseInput("#level");
        let lvP = parseInput("#level-percentage", 0);
        let targetLv = parseInput("#target-level");
        let targetXP = getTotalXP(lv, lvP, targetLv);
        let mqStopIndex = mqBegin;
        let mqStartIndex = mqEnd;
        let mqStopAt = false;
        let mqStartFrom = false;
        for (let i = mqBegin; i <= mqEnd; i++) {
            mqXP += Number(mq_data[keys[i]]);
            mqXPReverse += Number(mq_data[keys[mqEnd-(i-mqBegin)]])
            if (i == 85 && !skipVenena) { // 85 = metacoenubia quest, not skipping gives +12.5m xp after decel fight
                mqXP += 12500000;
            }
            if (mqEnd-(i-mqBegin) == 85 && !skipVenena) {
                mqXPReverse += 12500000;
            }
            if (!mqStopAt && mqXP > targetXP) {
                mqStopAt = true;
                mqStopIndex = i;
            }
            if (!mqStartFrom && mqXPReverse > targetXP) {
                mqStartFrom = true;
                mqStartIndex = mqEnd-(i-mqBegin);
            }
        }
        $("#mq-xp").html(`<strong>XP</strong>: ${new Intl.NumberFormat().format(mqXP)}`);
        let [mqLv, mqLvP] = addXP(lv, lvP, mqXP);
        $("#mq-eval").html(`After doing Main Quest's above range you'll reach <strong>Lv.${mqLv} (${mqLvP}%)</strong>`);

        const spamAdv = $("#multiple-mq").prop("checked");

        if (mqStopAt && !spamAdv) {
            let quest = $(`#mq-until option[value="${mqStopIndex}"]`).text();
            $("#mq-stopAt").html(`You may <strong>stop</strong> after quest <strong>${quest}</strong> to reach target level`);
            $("#mq-or").show();
        }
        else {
            $("#mq-stopAt").html("");
            $("#mq-or").hide();
        }

        if (mqStartFrom && !spamAdv) {
            let quest = $(`#mq-until option[value="${mqStartIndex}"]`).text();
            $("#mq-startFrom").html(`You may <strong>start</strong> from quest <strong>${quest}</strong> to reach target level`);
        }
        else {
            $("#mq-startFrom").html("");
        }
    }
    else {
        $("#mq-eval").html("<em>Seems we have a time travel here</em>");
        $("#mq-stop").html("");
    }
}

$('input[name="ui-select"]').on("change", function() {
    let tag = $(this).attr("id").split('-')[0];
    $('.ui-group').not(`.${tag}-group`).hide();
    $(`.${tag}-group`).show();

    const spamAdv = $("#multiple-mq").prop("checked");
    if (spamAdv && tag == "mq") {
        evaluateDiaries();
        $("#mq-table").show();
    }
    else {
        $("#mq-table").hide();
    }
});
$("#quest-name").on("input", function () {
    $("#quest-exp").val(this.value);
});
$("body form").on("input", function () {
    evaluateTarget();
    evaluateMQ();

    const spamAdv = $("#multiple-mq").prop("checked");
    if (spamAdv) {
        evaluateDiaries();
        $("#mq-table").show();
    }
    else {
        $("#mq-table").hide();
    }
});
