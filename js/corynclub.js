const EFF_NAME = {
    'Base DEF': '1',
    'Base ATK': '2',
    'STR': '3',
    'STR %': '4',
    'INT': '5',
    'INT %': '6',
    'VIT': '7',
    'VIT %': '8',
    'AGI': '9',
    'AGI %': '10',
    'DEX': '11',
    'DEX %': '12',
    'Natural HP Regen': '13',
    'Natural HP Regen %': '14',
    'Natural MP Regen': '15',
    'Natural MP Regen %': '16',
    'MaxHP': '17',
    'MaxHP %': '18',
    'MaxMP': '19',
    'ATK': '20',
    'ATK %': '21',
    'MATK': '22',
    'MATK %': '23',
    'Stability %': '24',
    'Physical Pierce %': '25',
    'Magic Pierce %': '26',
    'DEF': '27',
    'DEF %': '28',
    'MDEF': '29',
    'MDEF %': '30',
    'Physical Resistance %': '31',
    'Magical Resistance %': '32',
    'Accuracy': '33',
    'Accuracy %': '34',
    'Dodge': '35',
    'Dodge %': '36',
    'ASPD': '37',
    'ASPD %': '38',
    'CSPD': '39',
    'CSPD %': '40',
    'Critical Rate': '41',
    'Critical Rate %': '42',
    'Critical Damage': '43',
    'Critical Damage %': '44',
    '% stronger against Fire': '45',
    '% stronger against Water': '46',
    '% stronger against Wind': '47',
    '% stronger against Earth': '48',
    '% stronger against Light': '49',
    '% stronger against Dark': '50',
    'Fire resistance %': '51',
    'Water resistance %': '52',
    'Wind resistance %': '53',
    'Earth resistance %': '54',
    'Light resistance %': '55',
    'Dark resistance %': '56',
    'Ailment Resistance %': '57',
    'Guard Power %': '58',
    'Guard Recharge %': '59',
    'Evasion Recharge %': '60',
    'Aggro %': '61',
    'Fire Element': '62',
    'Water Element': '63',
    'Wind Element': '64',
    'Earth Element': '65',
    'Light Element': '66',
    'Dark Element': '67',
    'Attack MP Recovery': '68',
    'Short Range Damage %': '69',
    'Long Range Damage %': '70',
    'Motion Speed %': '71',
    'Weapon ATK': '73',
    'Weapon ATK %': '74',
    'Neutral Resistance %': '75',
    'HP': '79',
    'MP': '80',
    'Teleport to Rugio Ruins': '81',
    'Teleport to Sofya City': '82',
    'Teleport to the last town you visited': '83',
    'HP %': '84',
    'MP %': '85',
    "Teleport to Ancient Empress' Tomb": '86',
    'Can form a guild once': '87',
    'EXP Gain %': '95',
    'Drop Rate %': '96',
    'MaxMP %': '101',
    'Revive Time %': '104',
    'Base Drop Rate %': '105',
    'Damage from Boss %': '107',
    'Damage to Boss %': '108',
    '% stronger against Neutral': '110',
    'Base Stability %': '111',
    'Potential': '113',
    'Teleport to Ethos Fortress': '115',
    'Unsheathe Attack': '116',
    'Unsheathe Attack %': '117',
    'Teleport to El Scaro': '119',
    'Flinch Unavailable': '122',
    'ATK DOWN (VIT)': '123',
    'Physical Barrier': '124',
    'Tumble Unavailable': '125',
    'Reflect %': '126',
    'Fractional Barrier %': '127',
    'Magic Barrier': '128',
    'Additional Melee %': '129',
    'Additional Magic %': '130',
    'ATK UP (INT)': '131',
    'ATK DOWN (STR)': '132',
    'ATK DOWN (DEX)': '133',
    'ATK DOWN (AGI)': '134',
    'Teleport to the Garden of Beginning': '136',
    'Anticipate %': '139',
    'Guard Break %': '140',
    'Barrier Cooldown %': '141',
    'Teleport to the Dark Manor': '142',
    'ATK UP (VIT)': '143',
    'Teleport to Einklang': '149',
    'ATK UP (DEX)': '158',
    'ATK UP (AGI)': '159',
    'MATK UP (INT)': '160',
    'MATK DOWN (VIT)': '161',
    'MATK UP (VIT)': '162',
    'MATK UP (STR)': '163',
    'MATK UP (AGI)': '164',
    'Attack MP Recovery %': '165',
    'MATK DOWN (DEX)': '166',
    'Teleport to Hora Diomedea': '167',
    'Stun Unavailable': '168',
    'Reduce Dmg (Player Epicenter) %': '170',
    'Reduce Dmg (Foe Epicenter) %': '171',
    'Recoil %': '172',
    'Reduce Dmg (Floor) %': '173',
    'Reduce Dmg (Charge) %': '174',
    'Absolute Accuracy %': '175',
    'Reduce Dmg (Bullet) %': '176',
    'Reduce Dmg (Bowling) %': '177',
    'Invicible Aid (sec)': '179',
    'Reduce Dmg (Meteor) %': '180',
    'Absolute Dodge %': '181',
    'MATK DOWN (STR)': '184',
    'Teleport to Nov Saterica': '185',
    'ATK UP (STR)': '186',
    'Reduce Dmg (Straight Line) %': '187',
    'Pet EXP %': '188',
    'Teleport to Rokoko Plains': '189',
    'Item Cooldown': '190',
    'Teleport to Garden of Beginning': '195',
    'Teleport to Garden of Ice & Snow': '196',
    'ATK DOWN (INT)': '197',
    'MATK DOWN (INT)': '198',
    'MATK DOWN (AGI)': '199',
    'MATK UP (DEX)': '200',
    'Teleport to Dikkit Sector': '201',
    'Gem Dust Drop Amount %': '207',
    'Permanently unlock an unique emotion': '208',
    'Teleport to Naiata': '210',
    'Attack Range (m)': '211'
};

const ITEM_TYPES = {
    'Any': '-1',
    'All Equipments': '-2',
    'Armor': '8',
    'Additional': '6',
    'Special': '18',
    '1 Handed Sword': '4',
    '2 Handed Tword': '5',
    'Arrow': '7',
    'Bow': '9',
    'Bowgun': '10',
    'Dagger': '11',
    'Halberd': '26',
    'Katana': '27',
    'Knuckles': '13',
    'Magic Device': '15',
    'Shield': '17',
    'Staff': '19',
    'Additional Crysta': '23',
    'Armor Crysta': '22',
    'Normal Crysta': '20',
    'Special Crysta': '24',
    'Weapon Crysta': '21',
    'Enhancer Crysta (Blue)': '200',
    'Enhancer Crysta (Green)': '220',
    'Enhancer Crysta (Purple)': '240',
    'Enhancer Crysta (Red)': '210',
    'Enhancer Crysta (Yellow)': '230',
    'Gem': '12',
    'Usable': '1'
};

let statList = [];
let statCounter = 0;

const addStatLine = function() {
    $("#stat-lines-block").append(`<div class="col-1 stats-block" id="stat-line-${statCounter}">
        <input class="input-stats" id="stat-input-${statCounter}" type="text" onInput="validateEffectName(this, ${statCounter})" onChange="validateEffectName(this, ${statCounter})"/>
        <select id="op-${statCounter}" class="chrome-select" name="">
            <option value=">=" selected="">≥</option>
            <option value=">">&gt;</option>
            <option value="=">=</option>
            <option value="<">&lt;</option>
            <option value="<=">≤</option>
        </select>
        <input id="effect-${statCounter}" class="small-input" type="number" name="" value="0" />
        <button class="chrome-button" type="button" onClick="$('#stat-line-${statCounter}').remove()">-</button>
        </div>`);
    $(`#stat-input-${statCounter}`).autocomplete({
        source: Object.keys(EFF_NAME),
        close: function (e, ui) {
            validateEffectName(this, statCounter)
        }
    })
    statCounter += 1;
}

const validateEffectName = function (obj, id) {
    const textInput = $(obj).val();
    if (textInput == "") {
        $(obj).css("background-color", "unset");
        $(`#op-${id}`).attr("name", "");
        $(`#effect-${id}`).attr("name", "");
        return;
    }

    const textQuery = Object.keys(EFF_NAME).find(e => e.toLowerCase() == textInput.trim().toLowerCase());
    if (textQuery !== undefined) {
        $(obj).css("background-color", $(":root").css("--highlight-color"));
        $(`#op-${id}`).attr("name", `op[${EFF_NAME[textQuery]}]`);
        $(`#effect-${id}`).attr("name", `effect[${EFF_NAME[textQuery]}]`);
    } else {
        $(obj).css("background-color", $(":root").css("--error-color"));
        $(`#op-${id}`).attr("name", "");
        $(`#effect-${id}`).attr("name", "");
    }
}

const writeSelectedTypes = function () {
    const itemTypes = $("#item-types").val() || [];
    if (!itemTypes.length) {
        return;
    }

    const R_ITEM_TYPES = Object.fromEntries(Object.entries(ITEM_TYPES).map(e => [e[1], e[0]]));
    let typeNames = [];
    for (const type of itemTypes) {
        typeNames.push(R_ITEM_TYPES[type]);
    }
    let s = typeNames.join(', ')
    const commaPos = s.lastIndexOf(',');
    if (commaPos != -1) {
        $("#selected-types").html(s.substring(0, commaPos) + ' and ' + s.substring(commaPos + 1));
    }
    else {
        $("#selected-types").html(s);
    }
}

const populateItemTypes = function () {
    for (const type of Object.keys(ITEM_TYPES)) {
        $("#item-types-cg").append(`<label class="${(type.toLocaleLowerCase().replace(/ /g, '-').replace(/[\(\)]/g, ''))}"><input type="checkbox" name="itype[]" value="${ITEM_TYPES[type]}"/><span>${type}</span></label>\n`);
    }
}

const fixbs = function () {
    if ($("#item-type-selection-pc").css("display") != "none") {
        if ($('.checkbox-group input[type="checkbox"]:checked').length == 0) {
            $($('.checkbox-group input[type="checkbox"]')[0]).prop("checked", "true");
        }
    } else {
        if ($("#item-type-selection-mb select")[0].value == '') {
            $("#item-type-selection-mb select")[0].value = '-1';
        }
    }
}

const setLayout = function () {
    if ($(window).width() <= $(window).height()) {
        $("#item-type-selection-pc *[name='itype[]']").prop('checked', false);
        $("#item-type-selection-pc").remove();
        $("#item-type-selection-mb").css("display", "grid");
    } else {
        $("#item-type-selection-mb *[name='itype[]']").val([]);
        $("#item-type-selection-mb").remove();
        $("#item-type-selection-pc").show();
    }
}

$("#item-types").html(fillOptions(Object.values(ITEM_TYPES), Object.keys(ITEM_TYPES)));
//$("#stat-choices").html(fillOptions(Object.keys(EFF_NAME)));
writeSelectedTypes();
populateItemTypes();
setLayout();

$(document).ready(function() {
    $(".weapon-crysta > input").click(function() {
        if ($(this).is(":checked")) {
            $(".enhancer-crysta-red > input").prop("checked", true);
        }
        else {
            $(".enhancer-crysta-red > input").prop("checked", false);
        }
    })
    $(".additional-crysta > input").click(function() {
        if ($(this).is(":checked")) {
            $(".enhancer-crysta-yellow > input").prop("checked", true);
        } else {
            $(".enhancer-crysta-yellow > input").prop("checked", false);
        }
    })
    $(".special-crysta > input").click(function() {
        if ($(this).is(":checked")) {
            $(".enhancer-crysta-purple > input").prop("checked", true);
        } else {
            $(".enhancer-crysta-purple > input").prop("checked", false);
        }
    })
    $(".armor-crysta > input").click(function() {
        if ($(this).is(":checked")) {
            $(".enhancer-crysta-green > input").prop("checked", true);
        } else {
            $(".enhancer-crysta-green > input").prop("checked", false);
        }
    })
    $(".normal-crysta > input").click(function() {
        if ($(this).is(":checked")) {
            $(".enhancer-crysta-blue > input").prop("checked", true);
        } else {
            $(".enhancer-crysta-blue > input").prop("checked", false);
        }
    })
})