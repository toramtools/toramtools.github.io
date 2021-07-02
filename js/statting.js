/* this code is retarded and even myself have difficulty to understand what the fuck I wrote */

"use strict"

const MAX_FIELDS = 8;

const DB = [
    ['', 0, 0, 0.0, 0, 0, 0, 'Choose a stat', '0', 0, 0, 1, 0, 200],
    ['STR', 1, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0, 210],
    ['STR %', 1, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0, 200],
    ['INT', 2, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0, 210],
    ['INT %', 2, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0, 200],
    ['VIT', 3, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0, 210],
    ['VIT %', 3, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0, 200],
    ['AGI', 4, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0, 210],
    ['AGI %', 4, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0, 200],
    ['DEX', 5, 5, 25.0, 20, 1, 1, 'Enhance Stats', 'U', 1, 1, 10, 0, 210],
    ['DEX %', 5, 10, 50.0, 10, 1, 0, 'Enhance Stats', 'U', 1, 0, 1, 0, 200],
    ['Natural HP Regen', 3, 5, 25.0, 20, 1, 1, 'Enhance HP/MP', 'A', 1, 1, 10, 0, 210],
    ['Natural HP Regen %', 3, 10, 50.0, 10, 1, 0, 'Enhance HP/MP', 'A', 1, 0, 1, 0, 200],
    ['Natural MP Regen', 2, 10, 50.0, 10, 1, 1, 'Enhance HP/MP', 'A', 1, 1, 20, 0, 220],
    ['Natural MP Regen %', 2, 20, 100.0, 5, 1, 0, 'Enhance HP/MP', 'A', 1, 0, 1, 0, 200],
    ['MaxHP', 3, 3, 16.49, 20, 10, 160, 'Enhance HP/MP', 'U', 1, 1, 10, 0, 210],
    ['MaxHP %', 3, 10, 50.0, 10, 1, 1, 'Enhance HP/MP', 'U', 1, 1, 10, 0, 230],
    ['MaxMP', 2, 6, 33.49, 15, 10, 10, 'Enhance HP/MP', 'U', 1, 1, 20, -15, 220],
    ['ATK', 1, 3, 16.49, 20, 1, 1, 'Enhance Attack', 'W', 1, 1, 10, 0, 210],
    ['ATK %', 1, 10, 50.0, 10, 1, 1, 'Enhance Attack', 'W', 1, 1, 20, 0, 220],
    ['MATK', 2, 3, 16.49, 20, 1, 1, 'Enhance Attack', 'W', 1, 1, 10, 0, 210],
    ['MATK %', 2, 10, 50.0, 10, 1, 1, 'Enhance Attack', 'W', 1, 1, 20, 0, 220],
    ['Stability %', 5, 20, 100.0, 5, 1, 0, 'Enhance Attack', 'U', 1, 0, 1, 0, 200],
    ['Physical Pierce %', 1, 20, 100.0, 5, 1, 1, 'Enhance Attack', 'W', 1, 1, 20, 0, 230],
    ['Magic Pierce %', 2, 20, 100.0, 5, 1, 1, 'Enhance Attack', 'W', 1, 1, 20, 0, 230],
    ['DEF', 3, 3, 16.49, 20, 1, 10, 'Enhance Defense', 'A', 1, 1, 10, 0, 210],
    ['DEF %', 3, 10, 50.0, 10, 1, 1, 'Enhance Defense', 'A', 1, 1, 20, 0, 230],
    ['MDEF', 3, 3, 16.49, 20, 1, 10, 'Enhance Defense', 'A', 1, 1, 10, 0, 210],
    ['MDEF %', 3, 10, 50.0, 10, 1, 1, 'Enhance Defense', 'A', 1, 1, 20, 0, 230],
    ['Physical Resistance %', 3, 10, 50.0, 10, 1, 1, 'Enhance Defense', 'A', 1, 1, 20, 0, 230],
    ['Magical Resistance %', 2, 10, 50.0, 10, 1, 1, 'Enhance Defense', 'A', 1, 1, 20, 0, 230],
    ['Accuracy', 5, 10, 50.0, 10, 1, 2, 'Enhance Accuracy', 'W', 1, 1, 10, 0, 220],
    ['Accuracy %', 5, 20, 100.0, 5, 1, 0, 'Enhance Accuracy', 'W', 1, 0, 1, 0, 200],
    ['Dodge', 4, 10, 50.0, 10, 1, 2, 'Enhance Dodge', 'A', 1, 1, 10, 0, 220],
    ['Dodge %', 4, 20, 100.0, 5, 1, 0, 'Enhance Dodge', 'A', 1, 0, 1, 0, 200],
    ['ASPD', 4, 1, 1.49, 20, 1, 16, 'Enhance Speed', 'U', 1, 1, 10, 0, 210],
    ['ASPD %', 4, 1, 5.0, 20, 1, 0, 'Enhance Speed', 'U', 1, 0, 1, 0, 200],
    ['CSPD', 5, 1, 1.49, 20, 1, 16, 'Enhance Speed', 'U', 1, 1, 10, 0, 210],
    ['CSPD %', 5, 1, 5.0, 20, 1, 0, 'Enhance Speed', 'U', 1, 0, 1, 0, 200],
    ['Critical Rate', 6, 1, 5.0, 20, 1, 1, 'Enhance Critical', 'U', 1, 1, 10, -20, 210],
    ['Critical Rate %', 6, 1, 5.0, 20, 1, 1, 'Enhance Critical', 'U', 1, 1, 10, -20, 210],
    ['Critical Damage', 6, 3, 16.49, 20, 1, 1, 'Enhance Critical', 'U', 1, 1, 10, 0, 230],
    ['Critical Damage %', 6, 10, 50.0, 10, 1, 0, 'Enhance Critical', 'U', 1, 0, 1, 0, 200],
    ['% stronger against Fire', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'W', 1, 1, 10, 0, 230],
    ['% stronger against Water', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'W', 1, 1, 10, 0, 230],
    ['% stronger against Wind', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'W', 1, 1, 10, 0, 230],
    ['% stronger against Earth', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'W', 1, 1, 10, 0, 230],
    ['% stronger against Light', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'W', 1, 1, 10, 0, 230],
    ['% stronger against Dark', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'W', 1, 1, 10, 0, 230],
    ['Fire resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 10, 0, 220],
    ['Water resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 10, 0, 220],
    ['Wind resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 10, 0, 220],
    ['Earth resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 10, 0, 220],
    ['Light resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 10, 0, 220],
    ['Dark resistance %', 6, 5, 25.0, 20, 1, 1, 'Enhance Elements', 'A', 1, 1, 10, 0, 220],
    ['Ailment Resistance %', 6, 20, 100.0, 5, 1, 0, 'Special Enhancement', 'U', 1, 0, 1, 0, 200],
    ['Guard Power %', 6, 20, 100.0, 5, 1, 0, 'Special Enhancement', 'U', 1, 0, 1, 0, 200],
    ['Guard Recharge %', 6, 20, 100.0, 5, 1, 0, 'Special Enhancement', 'U', 1, 0, 1, 0, 200],
    ['Evasion Recharge %', 6, 20, 100.0, 5, 1, 0, 'Special Enhancement', 'U', 1, 0, 1, 0, 200],
    ['Aggro %', 6, 6, 33.49, 15, 1, 1, 'Special Enhancement', 'U', 1, 1, 20, -15, 220],
    ['Reduce Dmg (Player Epicenter) %', 3, 3, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0, 210],
    ['Reduce Dmg (Foe Epicenter) %', 3, 3, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0, 210],
    ['Reduce Dmg (Floor) %', 5, 3, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0, 210],
    ['Reduce Dmg (Charge) %', 1, 3, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0, 210],
    ['Reduce Dmg (Bullet) %', 2, 3, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0, 210],
    ['Reduce Dmg (Bowling) %', 2, 3, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0, 210],
    ['Reduce Dmg (Meteor) %', 5, 3, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0, 210],
    ['Reduce Dmg (Straight Line) %', 1, 3, 13.0, 0, 0, 1, 'Enhance Defense', 'A', 0, 1, 10, 0, 210],
    ['Fire Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0, 200],
    ['Water Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0, 200],
    ['Wind Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0, 200],
    ['Earth Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0, 200],
    ['Light Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0, 200],
    ['Dark Element', 6, 100, 150.0, 1, 1, 0, 'Awaken Elements', 'E', 0, 0, 1, 0, 200]
];

/* ['Stat Name', 'Base Material Type', 'Potential Cost', 'Base Material Cost', 'Legacy Stat Cap','View Increment', 'Model Increment', 'Stat Category', 'Stat Nature', 'Signed?', 'View Increment After Cap', 'Level Gap Requirement', 'Bottom Cap? [0=No]', 'Min Level to Apply After Cap']; */

let ZEROES = [];
for (let i = 0; i < MAX_FIELDS; i++) {
    ZEROES.push("0");
}

angular.module("StattingSim", []).controller("StattingSimController", function ($scope) {
    var SS = this;
    SS.DB = DB;

    SS.ARMOR_CHOICES = DB.slice(0, DB.length-6).map((entry) => entry[0]);
    SS.WEAPON_CHOICES = DB.map((entry) => entry[0]);

    SS.lvcap = LV_CAP;
    SS.recipePot = 0;
    SS.itemNature = "W";
    SS.startingPot = floor(HIGHEST_WPN_POT*1.3)+floor((PRIMARY_STAT+SECONDARY_STAT)/20);

    SS.showthisbs = function () {
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
        const minLv = DB[SS.statList[i].id][13];

        if (SS.statList[i].amount == statCap && overCapInc == 0)
            return;

        if (abs(SS.statList[i].amount+1) > statCap) {
            const nextValue = SS.statList[i].amount+overCapInc;
            if (SS.lvcap >= minLv+floor(((abs(nextValue)-statCap)/overCapInc-1)*lvUnitInc)) {
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
        const minLv = DB[SS.statList[i].id][13];

        let maxAmount = statCap+max(0, overCapInc*(floor((SS.lvcap-minLv)/lvUnitInc)+1));
        SS.statList[i].amount = maxAmount;
        SS.evaluatePotential();
    }

    SS.subOne = function (i) {
        const statCap = DB[SS.statList[i].id][4];
        const overCapInc = DB[SS.statList[i].id][10];
        const lvUnitInc = DB[SS.statList[i].id][11];
        const canBeNegative = DB[SS.statList[i].id][9];
        const lowestNegative = DB[SS.statList[i].id][12];
        const minLv = DB[SS.statList[i].id][13];

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
            if (SS.lvcap >= minLv+floor(((abs(nextValue)-statCap)/overCapInc-1)*lvUnitInc)) {
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
        const minLv = DB[SS.statList[i].id][13];

        if (SS.statList[i].amount >= 0 && canBeNegative == 0) {
            SS.statList[i].amount = 0;
            SS.statList[i].delta = 0;
            SS.evaluatePotential();
            return;
        }

        let maxAmount = statCap+max(0, overCapInc*(floor((SS.lvcap-minLv)/lvUnitInc)+1));
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
            const statCap = DB[SS.statList[i].id][4];
            const overCapInc = DB[SS.statList[i].id][10];
            const lvUnitInc = DB[SS.statList[i].id][11];
            const lowestNegative = DB[SS.statList[i].id][12];
            const minLv = DB[SS.statList[i].id][13];
            const maxAmount = statCap+max(0, overCapInc*(floor((SS.lvcap-minLv)/lvUnitInc)+1));
            const minAmount = (lowestNegative != 0)?lowestNegative:-maxAmount;

            const lastValue = (SS.stepList.length > 0)?SS.stepList[SS.stepList.length-1].stats[i].amount:0;
            const beforeLast = (SS.stepList.length > 1)?SS.stepList[SS.stepList.length-2].stats[i].amount:0;

            SS.statList[i].amount = min(maxAmount, max(minAmount, SS.statList[i].amount+lastValue-beforeLast));
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
            $scope.SS.successRate = min(100, max(0, trunc(sr)));
        }
        else {
            $scope.SS.successRate = 100;
        }
    });
});