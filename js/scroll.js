"use strict"

const SCROLL_COMBINATIONS = ['1234320', '1247318', '1257351', '1267346', '1277374', '1287347', '1297370', '1323453', '1342416', '1355480', '1361413', '1377453', '1382435', '1394428', '1422540', '1431518', '1453537', '1465578', '1473540', '1483504', '1496516', '1527263', '1537230', '1543250', '1564270', '1577263', '1583235', '1592240', '1624321', '1635374', '1642345', '1657371', '1671321', '1684312', '1693350', '1725783', '1736764', '1745780', '1753753', '1765752', '1785738', '1791731', '1827138', '1835185', '1842134', '1853135', '1862140', '1871138', '1893157', '1921817', '1931815', '1945873', '1954842', '1965853', '1971817', '1985871', '2137304', '2146365', '2151341', '2165308', '2171301', '2184352', '2195380', '2311541', '2343510', '2353580', '2361514', '2373507', '2383534', '2393527', '2412470', '2431410', '2452430', '2462470', '2472400', '2482450', '2492413', '2515681', '2537632', '2546651', '2565674', '2576607', '2587634', '2595647', '2614213', '2634275', '2644240', '2653275', '2675208', '2687213', '2694257', '2715831', '2735867', '2742804', '2753857', '2765853', '2787831', '2795835', '2814362', '2831381', '2847307', '2857304', '2862345', '2871301', '2897354', '2911125', '2931104', '2941170', '2952143', '2961152', '2971103', '2985178', '3122431', '3146467', '3152400', '3167435', '3177431', '3182457', '3195480', '3217513', '3243514', '3253500', '3263541', '3275578', '3283543', '3295570', '3413375', '3427340', '3457300', '3467372', '3477340', '3483358', '3497310', '3512804', '3526865', '3541851', '3565871', '3573865', '3587830', '3592842', '3611713', '3624725', '3647743', '3655700', '3673725', '3685714', '3693750', '3717531', '3723587', '3741581', '3753500', '3762504', '3787534', '3795537', '3817367', '3827304', '3844302', '3857300', '3865347', '3872304', '3897351', '3915428', '3922413', '3943475', '3952400', '3963457', '3971413', '3982475', '4123532', '4133537', '4152547', '4163530', '4173532', '4183501', '4193580', '4212415', '4232420', '4252453', '4264402', '4277473', '4282408', '4295471', '4312347', '4323354', '4357380', '4365317', '4377354', '4383305', '4397321', '4517387', '4526364', '4531301', '4565370', '4577364', '4587305', '4597341', '4611108', '4621123', '4637173', '4655174', '4671123', '4681105', '4693154', '4714302', '4725381', '4736361', '4753354', '4763350', '4785307', '4797304', '4811861', '4825837', '4834802', '4857835', '4862840', '4877837', '4893857', '4914723', '4925718', '4931715', '4952745', '4963751', '4971718', '4987703', '5127231', '5134231', '5145267', '5164235', '5171231', '5184257', '5192284', '5211613', '5234620', '5245618', '5263645', '5276678', '5282643', '5295673', '5315840', '5323856', '5345815', '5365817', '5373856', '5387830', '5395824', '5416376', '5427340', '5437318', '5462374', '5472340', '5487358', '5497315', '5611310', '5624325', '5637378', '5647340', '5677325', '5687314', '5693356', '5711130', '5725187', '5734162', '5745180', '5762154', '5781134', '5795137', '5816760', '5827734', '5835781', '5844732', '5865740', '5872734', '5895751', '5915820', '5921813', '5931813', '5945876', '5965853', '5977813', '5983875', '6127304', '6137300', '6146368', '6151341', '6172304', '6183357', '6195380', '6211210', '6234200', '6244210', '6254250', '6275270', '6282240', '6294270', '6312741', '6324752', '6345714', '6355780', '6373752', '6385731', '6395725', '6415172', '6421140', '6431100', '6451134', '6472140', '6481157', '6492104', '6517381', '6527362', '6535307', '6543354', '6576362', '6581301', '6592345', '6717634', '6726687', '6736605', '6747683', '6754652', '6781631', '6795638', '6815867', '6821831', '6835804', '6845835', '6857831', '6877831', '6895853', '6915127', '6921104', '6931100', '6944172', '6957143', '6972104', '6981175', '7127734', '7135731', '7145762', '7157743', '7165730', '7185750', '7191781', '7215813', '7234820', '7241813', '7255857', '7262840', '7285840', '7295876', '7313543', '7325508', '7345518', '7353580', '7363510', '7383530', '7397523', '7417378', '7427340', '7437310', '7452304', '7465370', '7483350', '7495318', '7511183', '7525168', '7533135', '7542154', '7561170', '7581130', '7595147', '7616614', '7625627', '7636675', '7647643', '7656672', '7686610', '7696658', '7813265', '7827230', '7832284', '7847237', '7857230', '7864240', '7893251', '7917325', '7921314', '7937310', '7945378', '7957341', '7963356', '7985370', '8121137', '8137132', '8146160', '8153145', '8167134', '8175137', '8195187', '8211318', '8237320', '8246316', '8257354', '8262340', '8277370', '8297378', '8317346', '8323350', '8347310', '8355380', '8362314', '8377350', '8393325', '8415873', '8422840', '8431816', '8455835', '8463875', '8475840', '8497813', '8515785', '8525763', '8537734', '8545750', '8564702', '8575763', '8591741', '8611815', '8622824', '8637873', '8645840', '8655871', '8675824', '8693853', '8715237', '8725284', '8731261', '8745280', '8757253', '8764257', '8791231', '8917623', '8923615', '8935618', '8947673', '8952647', '8963658', '8976615', '9127837', '9135835', '9145863', '9152842', '9165830', '9177837', '9181851', '9215107', '9234120', '9244102', '9253153', '9265147', '9272174', '9283145', '9312402', '9323451', '9345417', '9355480', '9361415', '9373451', '9387437', '9411701', '9422740', '9431712', '9455735', '9465704', '9475740', '9482754', '9515802', '9525861', '9537831', '9543857', '9565875', '9576861', '9587837', '9613105', '9621123', '9635174', '9645147', '9657173', '9677123', '9681108', '9715307', '9721381', '9732364', '9747385', '9753351', '9765358', '9787302', '9816601', '9826632', '9836687', '9842634', '9857637', '9866643', '9874632'];

const SCROLL_SKILLS = {'-1': 'Any', '0': 'Random', '1': 'Fire Release', '2': 'Thunder Release', '3': 'Wind Release', '4': 'Water Release', '5': 'Earth Release', '6': 'Cloning', '7': 'Demon Wind Shuriken', '8': 'Kunai Throw'};
const WEAPON_TYPES = {'1': '1H Sword', '2': '2H Sword', '3': 'Bow', '4': 'Bowgun', '5': 'Katana', '6': 'Halberd', '7': 'Staff', '8': 'Magic Device', '9': 'Knuckles'};
const WEAPON_ICONS = {'1': 'ohs', '2': 'ths', '3': 'bow', '4': 'bg', '5': 'ktn', '6': 'hb', '7': 'stf', '8': 'md', '9': 'knx'}
/*const SCROLL_TYPES = {'0': 'Any Scroll', '1': 'Fire Scroll', '2': 'Water Scroll', '3': 'Earth Scroll', '4': 'Lightning Scroll', '5': 'Metal Scroll', '6': 'Dark Scroll', '7': 'Wind Scroll'};*/
const SCROLL_TYPES = {'1': 'Fire', '2': 'Lighting', '3': 'Wind', '4': 'Water', '5': 'Earth', '6': 'Dark', '7': 'Metal', '8': 'Metal'}
const SCROLL_STATS = {'1': 'MATK +1%, With Staffs: Magic Pierce +5%', '2': 'Ailment Resistance +5%, With Magic Tools: Aggro -10%', '3': 'MaxHP +10%, With One Handed Swords: Fractional Barrier +10%', '4': 'Stability +5%, With Katanas: Accuracy +10%', '5': 'Critical Rate +5', '6': 'Aggro -10%', '7': 'Attack Speed +250, With Katanas: Critical Rate +5'}

const findCombination = function (combination) {
    let matches = [];
    for (const scroll of SCROLL_COMBINATIONS) {
        const scroll_skills = scroll.slice(4);
        let count = 0;
        for (const skill of combination) {
            if (scroll_skills.search(skill) != -1) {
                count += 1;
            }
        }

        let cs_randoms = combination.split('0').length-1;
        let ss_randoms = scroll_skills.split('0').length-1;

        if (count == combination.length && ss_randoms >= cs_randoms) {
            matches.push(scroll);
        }
    }
    return matches;
}

const clickCombinationBox = function () {
    let combination = new String($(this).data('id'));
    combination.split('').map(function (value, index) {
        $("#scroll-component-" + (index + 1)).val(value);
    });
    craftScroll();
    location.href = "#HEADER";
}

const generateScrollBlock = function (array) {
    let result = new String();
    for (scroll of array) {
        result += `<div class="combination-box" data-id="${scroll.slice(0, 3)}"><div><img src="./media/images/${WEAPON_ICONS[scroll[0]]}.png"><img src="./media/images/${WEAPON_ICONS[scroll[1]]}.png"><img src="./media/images/${WEAPON_ICONS[scroll[2]]}.png"></div></div>\n`
    }
    return result;
}

const searchScroll = function () {
    let scroll = '';
    let s = [$("#scroll-skill-1").val(), $("#scroll-skill-2").val(), $("#scroll-skill-3").val()];
    for (const skill of s) {
        scroll = (skill != '-1')?scroll+skill:scroll;
    }
    let combinations = findCombination(scroll);
    if (combinations.length != 0) {
        $("#results").show();
        $(".results-container > div:not(#results)").hide();
        $("#results").html(generateScrollBlock(combinations));
        $(".combination-box").on("click", clickCombinationBox);
    }
    else {
        $("#results-warning").show();
        $(".results-container > div:not(#results-warning)").hide();
    }
    $('.results-parent').show();
}

const limitSkillOptions = function (event) {
    let prev = $(this).data('prev');
    $('select[id^="scroll-skill-"').not(this).find(`option[value="${prev}"]`).prop("disabled", false);
    let next = $(this).val();
    $(this).data('prev', next);
    if (next != '-1' && next != '0')
        $('select[id^="scroll-skill-"').not(this).find(`option[value="${next}"]`).prop("disabled", true);
}

const resetChoosenSkill = function (event) {
    $("#scroll-skill-" + $(this).data("id")).val('0');
    $('select[id^="scroll-skill-"').change();
}

const resetScrollSkills = function () {
    $('select[id^="scroll-skill-"').val('-1');
    $('.results-parent').hide();
    $('select[id^="scroll-skill-"').change();
}

const craftScroll = function () {
    let cArray = [];
    $('select[id^="scroll-component-"').each(function () {cArray.push($(this).val())});

    if (cArray.indexOf(null) != -1) {
        return;
    }

    let components = cArray.join('');
    let scroll = SCROLL_COMBINATIONS.find((x) => x.startsWith(components));
    let skills = scroll.slice(4);
    if (skills.split('0').length - 1 < 2) {
        let types = [];
        skills.split('').forEach(function (value) {
            if (value > 0) {
                types.push(SCROLL_TYPES[value]);
            }
        });
        $("#craft-results-type").html(types.map((x) => `<span>${x}</span>`).join('\n'));
    }
    else {
        $("#craft-results-type").html("Any");
    }
    $("#craft-results-skills").html(scroll.slice(4).split('').map((x) => SCROLL_SKILLS[x]).join(' | '));
    $("#craft-results-container").show();
}

const limitWeaponCombinations = function (event) {
    let prev = $(this).data('prev');
    $('select[id^="scroll-component-"').not(this).find(`option[value="${prev}"]`).prop("disabled", false);
    let next = $(this).val();
    $(this).data('prev', next);
    $('select[id^="scroll-component-"').not(this).find(`option[value="${next}"]`).prop("disabled", true);
}

const resetScrollComponents = function () {
    $('select[id^="scroll-component-"').val('-1');
    $('select[id^="scroll-component-"').change();
    $("#craft-results-container").hide();
}

$(document).ready(function () {
    $('select[id^="scroll-skill-"').append(fillOptions(Object.keys(SCROLL_SKILLS), Object.values(SCROLL_SKILLS))).val('-1');
    $('select[id^="scroll-component-"').append(fillOptions(Object.keys(WEAPON_TYPES), Object.values(WEAPON_TYPES))).val('-1');
    $('#scroll-search-reset').on("click", resetScrollSkills);
    $('#craft-scroll-reset').on("click", resetScrollComponents);
    $('select[id^="scroll-skill-"').change(limitSkillOptions);
    $('select[id^="scroll-component-"').change(limitWeaponCombinations);
    $('#scroll-search').on("click", searchScroll);
    $('#craft-scroll').on("click", craftScroll);
    $('.reset-skill').on("click", resetChoosenSkill);

    $("#cs-popup").on("click", function () {
        alert("Scroll type is bound to its skills, but each type has specific stats:\n\n" + Object.keys(SCROLL_STATS).map((x) => `${SCROLL_TYPES[x]} = ${SCROLL_STATS[x]}`).join('; \n') + '.');
    });
    $("#results-popup").on("click", function () {
        alert("For more details, click on a combination to push it to craft section.");
    });
});