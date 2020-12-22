"use strict"

const MAX_FIELDS = 8;

const DB = [
    ['', 0, 0, 0.0, 0, 0, 0, 'Choose a stat', '0', 0, 0, 1, 0], 
    ['STR', 1, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0], 
    ['STR %', 1, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0], 
    ['INT', 2, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0], 
    ['INT %', 2, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0], 
    ['VIT', 3, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0], 
    ['VIT %', 3, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0], 
    ['AGI', 4, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0], 
    ['AGI %', 4, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0], 
    ['DEX', 5, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0], 
    ['DEX %', 5, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0], 
    ['Natural HP Regen', 3, 5, 25.0, 20, 1, 1, 'Enhance HP/MP', 'A', 1, 1, 10, 0], 
    ['Natural HP Regen %', 3, 10, 50.0, 10, 1, 0, 'Enhance HP/MP', 'A', 1, 0, 1, 0], 
    ['Natural MP Regen', 2, 10, 50.0, 10, 1, 1, 'Enhance HP/MP', 'A', 1, 1, 20, 0], 
    ['Natural MP Regen %', 2, 20, 100.0, 5, 1, 0, 'Enhance HP/MP', 'A', 1, 0, 1, 0], 
    ['MaxHP', 3, 3, 16.49, 20, 10, 160, 'Enhance HP/MP', 'U', 1, 1, 10, 0], 
    ['MaxHP %', 3, 10, 50.0, 10, 1, 0, 'Enhance HP/MP', 'U', 1, 0, 1, 0], 
    ['MaxMP', 2, 6, 33.49, 15, 10, 10, 'Enhance HP/MP', 'U', 1, 1, 20, 0], 
    ['ATK', 1, 3, 16.49, 20, 1, 1, 'Enhance Attack', 'W', 1, 1, 10, 0], 
    ['ATK %', 1, 10, 50.0, 10, 1, 1, 'Enhance Attack', 'W', 1, 1, 20, 0], 
    ['MATK', 2, 3, 16.49, 20, 1, 1, 'Enhance Attack', 'W', 1, 1, 10, 0], 
    ['MATK %', 2, 10, 50.0, 10, 1, 1, 'Enhance Attack', 'W', 1, 1, 20, 0], 
    ['Stability %', 5, 20, 100.0, 5, 1, 0, 'Enhance Attack', 'U', 1, 0, 1, 0], 
    ['Physical Pierce %', 1, 20, 100.0, 5, 1, 0, 'Enhance Attack', 'W', 1, 0, 1, 0], 
    ['Magic Pierce %', 2, 20, 100.0, 5, 1, 0, 'Enhance Attack', 'W', 1, 0, 1, 0], 
    ['DEF', 3, 3, 16.49, 20, 1, 10, 'Enhance Defense', 'A', 1, 1, 10, 0], 
    ['DEF %', 3, 10, 50.0, 10, 1, 0, 'Enhance Defense', 'A', 1, 0, 1, 0], 
    ['MDEF', 3, 3, 16.49, 20, 1, 10, 'Enhance Defense', 'A', 1, 1, 10, 0], 
    ['MDEF %', 3, 10, 50.0, 10, 1, 0, 'Enhance Defense', 'A', 1, 0, 1, 0], 
    ['Physical Resistance %', 3, 10, 50.0, 10, 1, 0, 'Enhance Defense', 'A', 1, 0, 1, 0], 
    ['Magical Resistance %', 2, 10, 50.0, 10, 1, 0, 'Enhance Defense', 'A', 1, 0, 1, 0], 
    ['Accuracy', 5, 10, 50.0, 10, 1, 2, 'Enhance Accuracy', 'W', 1, 1, 20, 0], 
    ['Accuracy %', 5, 20, 100.0, 5, 1, 0, 'Enhance Accuracy', 'W', 1, 0, 1, 0], 
    ['Dodge', 4, 10, 50.0, 10, 1, 2, 'Enhance Dodge', 'A', 1, 1, 20, 0], 
    ['Dodge %', 4, 20, 100.0, 5, 1, 0, 'Enhance Dodge', 'A', 1, 0, 1, 0], 
    ['ASPD', 4, 1, 1.49, 20, 1, 16, 'Enhance Speed', 'U', 1, 1, 10, 0], 
    ['ASPD %', 4, 1, 5.0, 20, 1, 0, 'Enhance Speed', 'U', 1, 0, 1, 0], 
    ['CSPD', 5, 1, 1.49, 20, 1, 16, 'Enhance Speed', 'U', 1, 1, 10, 0], 
    ['CSPD %', 5, 1, 5.0, 20, 1, 0, 'Enhance Speed', 'U', 1, 0, 1, 0], 
    ['Critical Rate', 6, 1, 5.0, 20, 1, 1, 'Enhance Critical', 'U', 1, 1, 10, -20], 
    ['Critical Rate %', 6, 1, 5.0, 20, 1, 1, 'Enhance Critical', 'U', 1, 1, 10, -20], 
    ['Critical Damage', 6, 3, 16.49, 20, 1, 0, 'Enhance Critical', 'U', 1, 0, 1, 0], 
    ['Critical Damage %', 6, 10, 50.0, 10, 1, 0, 'Enhance Critical', 'U', 1, 0, 1, 0], 
    ['% stronger against Fire', 6, 5, 25.0, 20, 1, 0, 'Enhance Elements', 'W', 1, 0, 1, 0], 
    ['% stronger against Water', 6, 5, 25.0, 20, 1, 0, 'Enhance Elements', 'W', 1, 0, 1, 0], 
    ['% stronger against Wind', 6, 5, 25.0, 20, 1, 0, 'Enhance Elements', 'W', 1, 0, 1, 0], 
    ['% stronger against Earth', 6, 5, 25.0, 20, 1, 0, 'Enhance Elements', 'W', 1, 0, 1, 0], 
    ['% stronger against Light', 6, 5, 25.0, 20, 1, 0, 'Enhance Elements', 'W', 1, 0, 1, 0], 
    ['% stronger against Dark', 6, 5, 25.0, 20, 1, 0, 'Enhance Elements', 'W', 1, 0, 1, 0], 
    ['Fire resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 20, 0], 
    ['Water resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 20, 0], 
    ['Wind resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 20, 0], 
    ['Earth resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 20, 0], 
    ['Light resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 20, 0], 
    ['Dark resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 20, 0], 
    ['Ailment Resistance %', 6, 20, 100.0, 5, 1, 0, 'Special Enhancement', 'U', 1, 0, 1, 0], 
    ['Guard Power %', 6, 20, 100.0, 5, 1, 0, 'Special Enhancement', 'U', 1, 0, 1, 0], 
    ['Guard Recharge %', 6, 20, 100.0, 5, 1, 0, 'Special Enhancement', 'U', 1, 0, 1, 0], 
    ['Evasion Recharge %', 6, 20, 100.0, 5, 1, 0, 'Special Enhancement', 'U', 1, 0, 1, 0], 
    ['Aggro %', 6, 6, 33.49, 15, 1, 1, 'Special Enhancement', 'U', 1, 1, 20, -15], 
    ['Reduce Dmg (Player Epicenter) %', 3, 6, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0], 
    ['Reduce Dmg (Foe Epicenter) %', 3, 6, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0], 
    ['Reduce Dmg (Floor) %', 5, 6, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0], 
    ['Reduce Dmg (Charge) %', 1, 6, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0], 
    ['Reduce Dmg (Bullet) %', 2, 6, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0], 
    ['Reduce Dmg (Bowling) %', 2, 6, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0], 
    ['Reduce Dmg (Meteor) %', 5, 6, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0], 
    ['Reduce Dmg (Straight Line) %', 1, 6, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0],
    ['Fire Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0], 
    ['Water Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0], 
    ['Wind Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0], 
    ['Earth Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0], 
    ['Light Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0], 
    ['Dark Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0]
];

/* DB MAPPING
DB[i][11] = Level unit requirement to apply increment post cap
DB[i][5] = Shown amount increment (usual)
DB[i][6] = Shown amount increment (post cap)
DB[i][4] = Stat Cap (<200)
DB[i][10] = Amount increment post cap
DB[i][9] = Can go below 0?
DB[i][8] = Stat nature
DB[i][2] = Potential cost
DB[i][7] = Stat Group
DB[i][12] = Lowest nega (0 = no such restriction)
*/

/* REMIND:
Floating points in Javascript = Code full of bugs
Turn into integer, do operations and turn into float later to avoid bugs.
*/

let ZEROES = [];
for (let i = 0; i < MAX_FIELDS; i++) {
    ZEROES.push("0");
}

/*
const NO_PENALTY = {
    "Enhance Stats": 0,
    "Enhance HP/MP": 0,
    "Enhance Attack": 0,
    "Enhance Defense": 0,
    "Enhance Accuracy": 0,
    "Enhance Dodge": 0,
    ​"Enhance Speed": 0,
    "Enhance Critical": 0,
    ​"Enhance Elements": 0,
    "Special Enhancement": 0,
    ​"Awaken Elements": 0
}
*/

angular.module("StattingSim", []).controller("StattingSimController", function ($scope) {
    var SS = this;
    SS.DB = DB;

    SS.ARMOR_CHOICES = DB.slice(0, DB.length-6).map((entry) => entry[0]);
    SS.WEAPON_CHOICES = DB.map((entry) => entry[0]);

    SS.lvcap = LV_CAP;
    SS.recipePot = 0;
    SS.itemNature = "W";
    SS.startingPot = 86;

    // Insane debugging skills
    SS.showthisbs = function () {
        //console.log(SS.shownSteps);
    }

    SS.trackShownSteps = (index, step) => step.amount;

    SS.getPenalty = function () {
        let groups = {};
        for (let i = 0; i < MAX_FIELDS; i++) {
            const group = DB[SS.statList[i].id][7];
            if (group == 'Choose a stat') {
                continue;
            }
            
            if (groups.hasOwnProperty(group)) {
                groups[group] += 1;
            }
            else {
                groups[group] = 1;
            }
        }

        let penalty = 100;
        for (const key of Object.keys(groups)) {
            const n = groups[key];
            penalty += (n > 1)?5*n**2:0;
        }

        return penalty/100;
    }

    SS.deltaPotential = function (index, prev, post) {
        const statNature = DB[SS.statList[index].id][8];
        const statCap = DB[SS.statList[index].id][4];
        const potCost = DB[SS.statList[index].id][2];

        let multiplier = 1000; 
        if (statNature != SS.itemNature && (statNature == "A" || statNature == "W")) {
            multiplier = 2000;
        }
        if (statNature == "E" && SS.matchingElement) {
            multiplier = 100;
        }

        let delta = 0;
        if (post > prev) {
            for (let i = prev+1; i <= post; i++) {
                if (i <= statCap) {
                    delta -= potCost*multiplier;
                }
                else {
                    delta -= 2*potCost*multiplier;
                }
            }
        }
        else {
            for (let i = prev-1; i >= post; i--) {
                if (i < -statCap) {
                    delta += potCost*0.1525*multiplier;
                }
                else {
                    delta += potCost*0.305*multiplier;
                }
            }
        }
        
        return trunc(delta/1000);
    }

    SS.evaluatePotential = function () {
        SS.curPot = SS.prevPot;
        let delta = 0;
        for (let i = 0; i < MAX_FIELDS; i++) {
            if (SS.stepList.length != 0 && SS.stepList[SS.stepList.length-1].id == 0) {
                continue;
            }
            
            const refValue = (SS.stepList.length != 0)?SS.stepList[SS.stepList.length-1].stats[i].amount:0;
            SS.statList[i].delta = SS.deltaPotential(i, refValue, SS.statList[i].amount);
            delta += SS.statList[i].delta;

            const shownPost200 = DB[SS.statList[i].id][6];
            const shownPre200 = DB[SS.statList[i].id][5];
            const statCap = DB[SS.statList[i].id][4];

            if (SS.statList[i].amount >= 0) {
                SS.statList[i].shownAmount = min(SS.statList[i].amount, statCap)*shownPre200+max(0, SS.statList[i].amount-statCap)*shownPost200;
            }
            else {
                SS.statList[i].shownAmount = max(SS.statList[i].amount, -statCap)*shownPre200+min(0, SS.statList[i].amount+statCap)*shownPost200;
            }
        }
        SS.curPot = SS.curPot+trunc(delta*SS.getPenalty());
    }

    SS.setPot = function () {
        SS.curPot = SS.startingPot;
        SS.prevPot = SS.curPot;
        SS.configDisabled = true;
        SS.statNames = (SS.itemNature == "A")?SS.ARMOR_CHOICES:SS.WEAPON_CHOICES;
        SS.disabledStats = 0;
        SS.finished = false;
        SS.successRate = 100;

        SS.stepList = [];
        SS.statList = [];
        SS.shownSteps = [];
        for (let i = 0; i < MAX_FIELDS; i++) {
            SS.statList.push({id: "0", amount: 0, shownAmount: 0, delta: 0});
        }
    }

    SS.resetPot = function () {
        SS.configDisabled = false;
    }

    SS.setZero = function (i) {
        SS.statList[i].amount = 0;
        SS.statList[i].delta = 0;
        SS.evaluatePotential();
    }

    SS.addOne = function (i) {
        const statCap = DB[SS.statList[i].id][4];
        const overCapInc = DB[SS.statList[i].id][10];
        const lvUnitInc = DB[SS.statList[i].id][11];

        if (SS.statList[i].amount == statCap && overCapInc == 0)
            return;

        if (abs(SS.statList[i].amount+1) > statCap) {
            const nextValue = SS.statList[i].amount+overCapInc;
            if (SS.lvcap >= 200+floor(((abs(nextValue)-statCap)/overCapInc)*lvUnitInc)) {
                SS.statList[i].amount = nextValue;
                SS.evaluatePotential();
            }
        }
        else {
            SS.statList[i].amount = min(SS.statList[i].amount+1, statCap);
            SS.evaluatePotential();
        }
    }

    SS.addMax = function (i) {
        const statCap = DB[SS.statList[i].id][4];
        const overCapInc = DB[SS.statList[i].id][10];
        const lvUnitInc = DB[SS.statList[i].id][11];

        let maxAmount = statCap+max(0, overCapInc*floor((SS.lvcap-200)/lvUnitInc));
        SS.statList[i].amount = maxAmount;
        SS.evaluatePotential();
    }

    SS.subOne = function (i) {
        const statCap = DB[SS.statList[i].id][4];
        const overCapInc = DB[SS.statList[i].id][10];
        const lvUnitInc = DB[SS.statList[i].id][11];
        const canBeNegative = DB[SS.statList[i].id][9];
        const lowestNegative = DB[SS.statList[i].id][12];

        if (SS.statList[i].amount == 0 && canBeNegative == 0) {
            return;
        }

        if (SS.statList[i].amount == -statCap && overCapInc == 0) {
            return;
        }

        if (lowestNegative != 0 && SS.statList[i].amount == lowestNegative) {
            return;
        }

        if (abs(SS.statList[i].amount-1) > statCap) {
            let nextValue = SS.statList[i].amount-overCapInc;
            if (SS.lvcap >= 200+floor(((abs(nextValue)-statCap)/overCapInc)*lvUnitInc)) {
                SS.statList[i].amount = nextValue;
                SS.evaluatePotential();
            }
        }
        else {
            SS.statList[i].amount = min(SS.statList[i].amount-1, statCap);
            SS.evaluatePotential();
        }
    }

    SS.subMax = function (i) {
        const statCap = DB[SS.statList[i].id][4];
        const overCapInc = DB[SS.statList[i].id][10];
        const lvUnitInc = DB[SS.statList[i].id][11];
        const canBeNegative = DB[SS.statList[i].id][9];
        const lowestNegative = DB[SS.statList[i].id][12];

        if (SS.statList[i].amount >= 0 && canBeNegative == 0) {
            SS.statList[i].amount = 0;
            SS.statList[i].delta = 0;
            SS.evaluatePotential();
            return;
        }

        let maxAmount = statCap+max(0, overCapInc*floor((SS.lvcap-200)/lvUnitInc));
        let minAmount = (lowestNegative != 0)?lowestNegative:-maxAmount;

        SS.statList[i].amount = minAmount;
        SS.evaluatePotential();
    }

    SS.statDisabled = function (index) {
        return SS.disabledStats >> index & 1;
    }

    SS.disableOption = function (index) {
        if (!SS.stepList.length) {
            return;
        }

        for (let i = 0; i < MAX_FIELDS; i++) {
            if (SS.stepList[i].id == index) {
                return true;
            }
        }
    }

    SS.clearStatChoice = function (index) {
        SS.statList[index].amount = 0;
        SS.statList[index].delta = 0;

        SS.evaluatePotential();
    }

    SS.addStep = function () {
        if (!SS.finished) {
            SS.disabledStats = 0;

            let changed = 0;
            for (let i = 0; i < MAX_FIELDS; i++) {
                const refStat = (SS.stepList.length != 0)?SS.stepList[SS.stepList.length-1].stats:0;

                if (SS.statList[i].amount == 0) {
                    if (SS.stepList.length != 0) {
                        if (SS.statList[i].id != refStat[i].id) {
                            SS.statList[i].id = "0";
                            SS.statList[i].amount = 0;
                        }
                    }
                    else {
                        SS.statList[i].id = "0";
                        SS.statList[i].amount = 0;
                    }
                }

                if (SS.statList[i].id != 0) {
                    SS.disabledStats += 2**i;
                }

                changed += ((refStat && refStat[i].amount == SS.statList[i].amount) || (!refStat && SS.statList[i].amount == 0))?0:1;
            }

            if (!changed) {
                return;
            }

            SS.evaluatePotential();
            SS.prevPot = SS.curPot;
            SS.stepList.push({stats: SS.statList, pot: SS.curPot});

            const oldStats = SS.stepList[SS.stepList.length-1].stats;
            SS.statList = [];
            for (let i = 0; i < MAX_FIELDS; i++) {
                SS.statList.push({id: oldStats[i].id, amount: oldStats[i].amount, shownAmount: oldStats[i].shownAmount, delta: 0});
            }

            if (SS.prevPot <= 0) {
                SS.finished = true;
            }

            SS.addShownStep();
        };
    }

    SS.addShownStep = function () {
        if (SS.stepList.length == 0) {
            return;
        }
        else if (SS.stepList.length == 1) {
            SS.shownSteps.push({repr: SS.formatStepLine(SS.stepList[0].stats), delta:SS.stepList[0].stats, pot: SS.stepList[0].pot, repeat: 1});
            return;
        }
        else {
            let delta = [];
            let isSameStep = 0;
            let addedStep = SS.stepList[SS.stepList.length-1];
            let lastStep = SS.stepList[SS.stepList.length-2];
            let lastShownStep = SS.shownSteps[SS.shownSteps.length-1];

            for (let j = 0; j < MAX_FIELDS; j++) {
                delta.push({id: "0", amount: 0});
                if (addedStep.stats[j].id != 0) {
                    delta[j].id = addedStep.stats[j].id;
                    delta[j].amount = addedStep.stats[j].amount-lastStep.stats[j].amount;
                    delta[j].shownAmount = addedStep.stats[j].shownAmount-lastStep.stats[j].shownAmount;
                }

                if (delta[j].id == lastShownStep.delta[j].id && delta[j].amount == lastShownStep.delta[j].amount) {
                    isSameStep += 1;
                }
            }

            if (isSameStep == MAX_FIELDS) {
                lastShownStep.repeat += 1;
                lastShownStep.pot = addedStep.pot;
            }
            else {
                SS.shownSteps.push({repr: SS.formatStepLine(delta), delta: delta, pot: addedStep.pot, repeat: 1});
            }
            return;
        }
    }

    SS.formatStepLine = function (delta) {
        let formatted = String();
        for (let i = 0; i < MAX_FIELDS; i++) {
            if (delta[i].id != 0 && delta[i].amount != 0) {
                formatted += `${DB[delta[i].id][0]} ${delta[i].shownAmount < 0?'':'+'}${delta[i].shownAmount}, `;
            }
        }
        
        return formatted.slice(0, formatted.length-2);
    }

    SS.repeatStep = function () {
        for (let i = 0; i < MAX_FIELDS; i++) {
            const lastValue = (SS.stepList.length > 0)?SS.stepList[SS.stepList.length-1].stats[i].amount:0;
            const beforeLast = (SS.stepList.length > 1)?SS.stepList[SS.stepList.length-2].stats[i].amount:0;

            SS.statList[i].amount += lastValue-beforeLast;
        }
        SS.addStep();
        SS.evaluatePotential();
    }

    SS.undoStep = function () {
        if (SS.finished) {
            SS.finished = false;
        }

        if (SS.stepList.length == 0) {
            return;
        }
        else if (SS.stepList.length == 1) {
            SS.stepList.pop();
            SS.disabledStats = 0;
            for (let i = 0; i < MAX_FIELDS; i++) {
                SS.statList[i].id = 0;
                SS.statList[i].amount = 0;
                SS.statList[i].delta = 0
            }
            SS.prevPot = SS.curPot = SS.startingPot;
        }
        else {
            SS.stepList.pop();
            let lastStep = SS.stepList[SS.stepList.length-1];
            SS.disabledStats = 0;
            for (let i = 0; i < MAX_FIELDS; i++) {
                SS.statList[i].id = lastStep.stats[i].id;
                SS.statList[i].amount = lastStep.stats[i].amount;
                SS.statList[i].delta = 0;

                if (SS.statList[i].id != 0) {
                    SS.disabledStats += 2**i;
                }
            }
            SS.prevPot = SS.curPot = lastStep.pot;
        }
        SS.evaluatePotential();

        let lastShownStep = SS.shownSteps.length?SS.shownSteps[SS.shownSteps.length-1]:[];
        if (SS.shownSteps.length && lastShownStep.repeat > 1) {
            lastShownStep.pot = SS.stepList[SS.stepList.length-1].pot;
            lastShownStep.repeat -= 1;
        }
        else {
            SS.shownSteps.pop();
        }
    }

    $scope.$watch("SS.curPot", function () {
        if (SS.finished) {
            return;
        }

        if (SS.curPot < 0) {
            const sr = 160+230*SS.curPot/max(SS.prevPot, max(1, SS.recipePot));
            console.log(sr);
            $scope.SS.successRate = min(100, max(0, trunc(sr)));
        }
        else {
            $scope.SS.successRate = 100;
        }
    });
});