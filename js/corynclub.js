const EFF_NAME = {'Base DEF': '1', 'Base ATK': '2', 'STR': '3', 'STR %': '4', 'INT': '5', 'INT %': '6', 'VIT': '7', 'VIT %': '8', 'AGI': '9', 'AGI %': '10', 'DEX': '11', 'DEX %': '12', 'Natural HP Regen': '13', 'Natural HP Regen %': '14', 'Natural MP Regen': '15', 'Natural MP Regen %': '16', 'MaxHP': '17', 'MaxHP %': '18', 'MaxMP': '19', 'ATK': '20', 'ATK %': '21', 'MATK': '22', 'MATK %': '23', 'Stability %': '24', 'Physical Pierce %': '25', 'Magic Pierce %': '26', 'DEF': '27', 'DEF %': '28', 'MDEF': '29', 'MDEF %': '30', 'Physical Resistance %': '31', 'Magical Resistance %': '32', 'Accuracy': '33', 'Accuracy %': '34', 'Dodge': '35', 'Dodge %': '36', 'ASPD': '37', 'ASPD %': '38', 'CSPD': '39', 'CSPD %': '40', 'Critical Rate': '41', 'Critical Rate %': '42', 'Critical Damage': '43', 'Critical Damage %': '44', '% stronger against Fire': '45', '% stronger against Water': '46', '% stronger against Wind': '47', '% stronger against Earth': '48', '% stronger against Light': '49', '% stronger against Dark': '50', 'Fire resistance %': '51', 'Water resistance %': '52', 'Wind resistance %': '53', 'Earth resistance %': '54', 'Light resistance %': '55', 'Dark resistance %': '56', 'Ailment Resistance %': '57', 'Guard Power %': '58', 'Guard Recharge %': '59', 'Evasion Recharge %': '60', 'Aggro %': '61', 'Fire Element': '62', 'Water Element': '63', 'Wind Element': '64', 'Earth Element': '65', 'Light Element': '66', 'Dark Element': '67', 'Attack MP Recovery': '68', 'Short Range Damage %': '69', 'Long Range Damage %': '70', 'Motion Speed %': '71', 'Weapon ATK': '73', 'Weapon ATK %': '74', 'Neutral Resistance %': '75', 'HP': '79', 'MP': '80', 'Teleport to Rugio Ruins': '81', 'Teleport to Sofya City': '82', 'Teleport to the last town you visited': '83', 'HP %': '84', 'MP %': '85', "Teleport to Ancient Empress' Tomb": '86', 'Can form a guild once': '87', 'EXP Gain %': '95', 'Drop Rate %': '96', 'MaxMP %': '101', 'Revive Time %': '104', 'Base Drop Rate %': '105', 'Damage from Boss %': '107', 'Damage to Boss %': '108', '% stronger against Neutral': '110', 'Base Stability %': '111', 'Potential': '113', 'Teleport to Ethos Fortress': '115', 'Unsheathe Attack': '116', 'Unsheathe Attack %': '117', 'Teleport to El Scaro': '119', 'Flinch Unavailable': '122', 'ATK DOWN (VIT)': '123', 'Physical Barrier': '124', 'Tumble Unavailable': '125', 'Reflect %': '126', 'Fractional Barrier %': '127', 'Magic Barrier': '128', 'Additional Melee %': '129', 'Additional Magic %': '130', 'ATK UP (INT)': '131', 'ATK DOWN (STR)': '132', 'ATK DOWN (DEX)': '133', 'ATK DOWN (AGI)': '134', 'Teleport to the Garden of Beginning': '136', 'Anticipate %': '139', 'Guard Break %': '140', 'Barrier Cooldown %': '141', 'Teleport to the Dark Manor': '142', 'ATK UP (VIT)': '143', 'Teleport to Einklang': '149', 'ATK UP (DEX)': '158', 'ATK UP (AGI)': '159', 'MATK UP (INT)': '160', 'MATK DOWN (VIT)': '161', 'MATK UP (VIT)': '162', 'MATK UP (STR)': '163', 'MATK UP (AGI)': '164', 'Attack MP Recovery %': '165', 'MATK DOWN (DEX)': '166', 'Teleport to Hora Diomedea': '167', 'Stun Unavailable': '168', 'Reduce Dmg (Player Epicenter) %': '170', 'Reduce Dmg (Foe Epicenter) %': '171', 'Recoil %': '172', 'Reduce Dmg (Floor) %': '173', 'Reduce Dmg (Charge) %': '174', 'Absolute Accuracy %': '175', 'Reduce Dmg (Bullet) %': '176', 'Reduce Dmg (Bowling) %': '177', 'Invicible Aid (sec)': '179', 'Reduce Dmg (Meteor) %': '180', 'Absolute Dodge %': '181', 'MATK DOWN (STR)': '184', 'Teleport to Nov Saterica': '185', 'ATK UP (STR)': '186', 'Reduce Dmg (Straight Line) %': '187', 'Pet EXP %': '188', 'Teleport to Rokoko Plains': '189', 'Item Cooldown': '190', 'Teleport to Garden of Beginning': '195', 'Teleport to Garden of Ice & Snow': '196', 'ATK DOWN (INT)': '197', 'MATK DOWN (INT)': '198', 'MATK DOWN (AGI)': '199', 'MATK UP (DEX)': '200', 'Teleport to Dikkit Sector': '201'};
const ITEM_TYPES = {'Any': '-1', 'All Equipments': '-2', '1 Handed Sword': '4', '2 Handed Tword': '5', 'Additional': '6', 'Additional Crysta': '23', 'Armor': '8', 'Armor Crysta': '22', 'Arrow': '7', 'Bow': '9', 'Bowgun': '10', 'Dagger': '11', 'Enhancer Crysta (Blue)': '200', 'Enhancer Crysta (Green)': '220', 'Enhancer Crysta (Purple)': '240', 'Enhancer Crysta (Red)': '210', 'Enhancer Crysta (Yellow)': '230', 'Gem': '12', 'Halberd': '26', 'Katana': '27', 'Knuckles': '13', 'Magic Device': '15', 'Material': '14', 'Normal Crysta': '20', 'Ore': '16', 'Piercer': '3', 'Refinement Support': '2', 'Shield': '17', 'Special': '18', 'Special Crysta': '24', 'Staff': '19', 'Usable': '1', 'Weapon Crysta': '21'};

$(document).ready(function () {
    $("select[name='itype[]']").on("focus", function () {
        $(this).removeClass("multiple-1");
        $(this).addClass("multiple-5");
    });
    $("select[name='itype[]']").on("focusout", function () {
        $(this).removeClass("multiple-5");
        $(this).addClass("multiple-1");
        $(this).scrollTop(0);
    });
});

angular.module('corynclub', []).controller("StatListController", function () {
    var st = this;
    st.type = 0;

    st.entries = EFF_NAME;
    st.types = ITEM_TYPES;

    st.itemOptions = Object.entries(ITEM_TYPES);
    st.operators = ['>=', '=', '<=', '>', '<'];
    st.statEntries = Object.entries(EFF_NAME);

    st.itemList = [];
    st.statList = [];

    st.addStat = function () {
        st.statList.push({'stat': '', 'op': '>=', 'amount': ''});
        console.log(st.itemList);
    }

    st.removeStat = function (index) {
        st.statList.splice(index, 1);
    }

    st.statBgColor = function (value) {
        return st.entries.hasOwnProperty(value)?"highlight":"error";
    }

    st.fix = function () {
        if (!st.itemList.length) {
            console.log("?????");
            st.itemList.push("-1");
        }
        if (!st.statList.length) {
            st.statList.push({'stat': '', 'op': '>=', 'amount': ''});
        }
        for (var entry of st.statList) {
            if (st.statBgColor(entry.stat) == "error") {
                entry.stat = "";
                entry.amount = "";
            }
        }
        console.log(st.itemList[0], st.statList[0]);
    }
});