// Descontinued, using scripts/DMG_Optimization.py

// sp2: sub stability view
$("#stability").after('<p class="accent-medium">Sub-Stability %</p><p id="sub-stability">0 %</p>');
$("#ATKcrit").after('<p class="accent-medium">ATK %</p><p id="ATKmodifier">0 %</p>');
$("#skill_mult").attr("step", 0.01);

function sub_weapon(){
	var obj = arr_name[$("#subweapon").val()][$("#subEQ").val()];
	if(obj == null){	//not selecting any weapon
		$("#eff_sub").html("--- none ---");
		$("#subATK").val(0);
		$("#substability").val(0);
		$("#subrefine").val("0");
		$("#subrefine").attr("disabled", "disabled");
		$("#subATK").attr("disabled", "disabled");
		return;
	}

	if($("#subweapon").val()=="Shield" || $("#subweapon").val()=="1H Sword")
		$("#subrefine").prop("disabled", false);

	if(($("#subweapon").val()=="Arrow" || $("#subweapon").val()=="Dagger"
		|| $("#subweapon").val()=="1H Sword") && obj.stats[2] != null){
		$("#subATK").val(obj.stats[2].value);	//2 = Base ATK
		$("#subATK").prop("disabled", false);
	}
	else if($("#subweapon").val()=="Shield" && obj.stats[1] != null){
		$("#subATK").val(obj.stats[1].value);	//1 = Base DEF
		$("#subATK").prop("disabled", false);
	}
	else
		$("#subATK").val(0);
	// sp1: base stab from sub 1h matters
	if(($("#subweapon").val()=="Arrow" || $("#subweapon").val()=="Dagger" || $("#subweapon").val()=="1H Sword") && obj.stats[111] != null)
		$("#substability").val(obj.stats[111].value);	//111 = Base Stability
	else
		$("#substability").val(0);

	show_effect($("#eff_sub"), obj);
}

function calculate(){
	not_saved();
	get_equipments();

	//------- PASSIVE SKILL -------
	var skill = new Array();
	skill["Sword Mastery"] = parseInt($("#sword-mastery").val());
	skill["Shot Mastery"] = parseInt($("#shot-mastery").val());
	skill["Magic Mastery"] = parseInt($("#magic-mastery").val());
	skill["Martial Mastery"] = parseInt($("#martial-mastery").val());
	skill["Halberd Mastery"] = parseInt($("#halberd-mastery").val());
	skill["Critical Spear"] = parseInt($("#critical-spear").val());
	skill["Aggravate"] = parseInt($("#aggravate").val());
	skill["Martial Discipline"] = parseInt($("#martial-discipline").val());
	skill["Dual Sword Mastery"] = parseInt($("#dual-sword-mastery").val());
	skill["Dual Sword Control"] = parseInt($("#dual-sword-control").val());
	skill["Bushido"] = parseInt($("#bushido").val());
	skill["Two Handed"] = parseInt($("#two-handed").val());
	skill["Quick Slash"] = parseInt($("#quick-slash").val());
	skill["God Speed"] = parseInt($("#god-speed").val());
	skill["Shield Mastery"] = parseInt($("#shield-mastery").val());
	skill["Force Shield"] = parseInt($("#force-shield").val());
	skill["Magical Shield"] = parseInt($("#magical-shield").val());
	skill["Magic Up"] = parseInt($("#magic-up").val());
	skill["Increased Energy"] = parseInt($("#increased-energy").val());
	skill["Spell Burst"] = parseInt($("#spell-burst").val());
	skill["Attack Up"] = parseInt($("#attack-up").val());
	skill["Intimidating Power"] = parseInt($("#intimidating-power").val());
	skill["Critical Up"] = parseInt($("#critical-up").val());
	skill["Defense Up"] = parseInt($("#defense-up").val());
	skill["Defense Mastery"] = parseInt($("#defense-mastery").val());
	skill["Dodge Up"] = parseInt($("#dodge-up").val());
	skill["Accuracy Up"] = parseInt($("#accuracy-up").val());
	skill["HP Boost"] = parseInt($("#hp-boost").val());
	skill["MP Boost"] = parseInt($("#mp-boost").val());
	skill["Heavy Armor"] = parseInt($("#heavy-armor").val());
	skill["Light Armor"] = parseInt($("#light-armor").val());
	skill["Advanced Guard"] = parseInt($("#advanced-guard").val());
	skill["Heavy Armor"] = parseInt($("#heavy-armor").val());
	skill["Advanced Evasion"] = parseInt($("#advanced-evasion").val());
	skill["Magic Warrior Mastery"] = parseInt($("#magic-warrior-mastery").val());
	skill["Sword Conversion"] = parseInt($("#sword-conversion").val());

	//------- STAT BONUSES FROM SKILL -------
	eq_stats[9] += skill["God Speed"];
	if(skill["God Speed"] >=6)	eq_stats[9] += skill["God Speed"]-5;	//9 = AGI

	//------- BASIC STAT -------
	var Lv = parseInt($("#level").val());
	var STR = Math.floor(parseInt($("#STR").val())*(1+eq_stats[4]/100) + eq_stats[3]);		//3 = STR, 4 = STR %
	var INT = Math.floor(parseInt($("#INT").val())*(1+eq_stats[6]/100) + eq_stats[5]);		//5 = INT, 6 = INT %
	var VIT = Math.floor(parseInt($("#VIT").val())*(1+eq_stats[8]/100) + eq_stats[7]);		//7 = VIT, 8 = VIT %
	var AGI = Math.floor(parseInt($("#AGI").val())*(1+eq_stats[10]/100) + eq_stats[9]);		//9 = AGI, 10 = AGI %
	var DEX = Math.floor(parseInt($("#DEX").val())*(1+eq_stats[12]/100) + eq_stats[11]);	//11 = DEX, 12 = DEX %
	var CRT = 0, LUK = 0, MTL = 0, TEC = 0;
	if($("#personal").val()=="CRT")	CRT = parseInt($("#personal_val").val());
	if($("#personal").val()=="LUK")	LUK = parseInt($("#personal_val").val());
	if($("#personal").val()=="MTL")	MTL = parseInt($("#personal_val").val());
	if($("#personal").val()=="TEC")	TEC = parseInt($("#personal_val").val());

	//------- WEAPON ATK & EQUIPMENT DEF -------
	var main = $("#mainweapon").val();
	var sub = $("#subweapon").val();

	var mainATK = parseInt($("#mainATK").val());
	var mainrefine = parseInt($("#mainrefine").val());
	var mainstability = parseInt($("#mainstability").val());
	var subATK = parseInt($("#subATK").val());
	var subrefine = parseInt($("#subrefine").val());
	var substability = parseInt($("#substability").val());


	// Apply percent modifier: refinement, eq, skill
	var weaponATK = 0;
	var weaponATKsub = 0;
	var weaponATKmodifier = 0;

	weaponATK += Math.trunc(mainATK*(100+mainrefine*mainrefine)/100);
	weaponATK += Math.trunc(mainATK*eq_stats[74]/100);
	if(main=="1H Sword" || main=="2H Sword")
		weaponATKmodifier += 0.03*skill["Sword Mastery"];
	if(main=="1H Sword" && sub=="1H Sword"){
		weaponATKsub += Math.trunc(subATK*0.03*skill["Sword Mastery"]);
		weaponATKsub += Math.trunc(subATK*(200+subrefine*subrefine)/200);
		weaponATKsub += Math.trunc(subATK*eq_stats[74]/100);
	}
	if(main=="Bow" || main=="Bowgun")
		weaponATKmodifier += 0.03*skill["Shot Mastery"];
	if(main=="Staff" || main=="Magic Device")
		weaponATKmodifier += 0.03*skill["Magic Mastery"];
	if(main=="Knuckle")
		weaponATKmodifier += 0.03*skill["Martial Mastery"];
	if(main=="Halberd")
		weaponATKmodifier += 0.03*skill["Halberd Mastery"];
	if(main=="Katana")
		weaponATKmodifier += 0.03*skill["Bushido"];
	if(main != "Bare Hand" && sub=="None")
		weaponATKmodifier += skill["Two Handed"]/100;

	weaponATK += Math.trunc(mainATK * weaponATKmodifier);

	// Apply flat modifier: refinement, eq, skill
	weaponATK += eq_stats[73];	//73 = Weapon ATK
	weaponATK += mainrefine;
	weaponATKsub += subrefine;
	weaponATKsub += eq_stats[73];
	if((main=="Bow" || main=="Bowgun")&&(sub=="Arrow"))
		weaponATK += subATK;

	var armortype = $("#armortype").val();
	var equipmentDEF = parseInt($("#armorDEF").val());
		equipmentDEF += parseInt($("#addDEF").val());
		equipmentDEF += parseInt($("#spcDEF").val());
	if(sub=="Shield")	equipmentDEF += subATK;

	var totalarmorrefine = parseInt($("#armorrefine").val());
		totalarmorrefine += parseInt($("#addrefine").val());
	if(sub=="Shield")	totalarmorrefine += parseInt($("#subrefine").val());

	var stability=mainstability;
	if(sub=="Dagger")				stability+=substability;
	if(main=="Bow" && sub=="Arrow") stability+=substability;
	if(main=="Bowgun" && sub=="Arrow")	stability+=Math.trunc(substability/2);

	//------- NOT WEAPON RELATED STATS -------
	var HIT 	= Lv + DEX;
	var CSPD 	= Lv + AGI*1.16 + DEX*2.94;
	var MaxHP 	= Math.trunc((VIT+22.4) * Lv/3 + 93);
	var MaxMP 	= Math.trunc(100 + Lv + INT/10 + Math.max(TEC-1,0));
	var CDamage = Math.trunc(150 + STR/5);
	var CRate 	= Math.trunc(25 + CRT/3.4);

	//------- DEF, MDEF, FLEE -------
	if(armortype=="Normal Armor"){
		DEF = Lv + VIT + equipmentDEF;
		MDEF = Lv + INT + equipmentDEF;
		FLEE = Lv + AGI;
	}
	if(armortype=="Light Armor"){
		DEF = Math.trunc(Lv*0.8 + VIT*0.25 + equipmentDEF);
		MDEF = Math.trunc(Lv*0.8 + INT*0.25 + equipmentDEF);
		FLEE = Math.trunc(Lv*1.25 + AGI*1.75 + 30);
	}
	if(armortype=="Heavy Armor"){
		DEF = Math.trunc(Lv*1.2 + VIT*2 + equipmentDEF);
		MDEF = Math.trunc(Lv*1.2 + INT*2 + equipmentDEF);
		FLEE = Math.trunc(Lv*0.5  + AGI*0.75 - 15);
	}
	if(armortype=="Without Armor"){
		DEF = Math.trunc(Lv*0.4 + VIT*0.1 + equipmentDEF);
		MDEF = Math.trunc(Lv*0.4 + INT*0.1 + equipmentDEF);
		FLEE = Math.trunc(Lv*1.5 + AGI*2 + 75);
	}

	//------- GUARD & EVASION -------
	var evaRate = eq_stats[60]; //60 = Evasion Rate %
	var guardRate = eq_stats[59];	//59 = Guard Rate %
	var guardPower = eq_stats[58];	//58 = Guard Power %

	if(armortype=="Light Armor"){
		evaRate += 10 + skill["Light Armor"] + skill["Advanced Evasion"];
		guardRate -= 10;
	}

	if(armortype=="Heavy Armor"){
		guardRate += 10 + skill["Heavy Armor"] + skill["Advanced Guard"];
		guardPower += Math.trunc(skill["Advanced Guard"]/2);	//credit: mayam + BK.
		evaRate -= 10;

		//if not equiped with shield: Guard power is 25% (credit: BK.)
		if(sub != "Shield")
			guardPower += 25 ;
	}

	//------- AGGRO, AILMENT, PIERCE -------
	var aggro = 100 + eq_stats[61];		//61 = Aggro %
	var ailment = Math.floor(MTL/3.4) + eq_stats[57];			//57 = Ailment Resistance %
	var phys_pierce = eq_stats[25];		//25 = Physical Pierce %
	var mag_pierce = eq_stats[26];		//26 = Magical Pierce %

	//------- ELEMENT RELATED -------
	var neutral_pow = 100 + eq_stats[110];	//110 = Stronger Against Neutral %
	var fire_pow = 100 + eq_stats[45];	//45 = Stronger Against Fire %
	var water_pow = 100 + eq_stats[46];	//46 = Stronger Against Water %
	var wind_pow = 100 + eq_stats[47];	//47 = Stronger Against Wind %
	var earth_pow = 100 + eq_stats[48];	//48 = Stronger Against Earth %
	var light_pow = 100 + eq_stats[49];	//49 = Stronger Against Light %
	var dark_pow = 100 + eq_stats[50];	//50 = Stronger Against Dark %
	var element = "Neutral";
	if(eq_stats[62]==1){
		element = "Fire";
		earth_pow += 25;
	}
	if(eq_stats[63]==1){
		element = "Water";
		fire_pow += 25;
	}
	if(eq_stats[64]==1){
		element = "Wind";
		water_pow += 25;
	}
	if(eq_stats[65]==1){
		element = "Earth";
		wind_pow += 25;
	}
	if(eq_stats[66]==1){
		element = "Light";
		dark_pow += 25;
	}
	if(eq_stats[67]==1){
		element = "Dark";
		light_pow += 25;
	}

	var phys_res =  eq_stats[31];	//31 = Physical Resistance %
	if(sub=="Shield")	phys_res += skill["Force Shield"];
	var mag_res =  eq_stats[32];		//32 = Magical Resistance %
	if(sub=="Shield")	mag_res += skill["Magical Shield"];
	var neutral_res = eq_stats[75];	//75 = Neutral Resistance %
	var fire_res = eq_stats[51];	//51 = Fire Resistance %
	var water_res = eq_stats[52];	//52 = Water Resistance %
	var wind_res = eq_stats[53];	//53 = Wind Resistance %
	var earth_res = eq_stats[54];	//54 = Earth Resistance %
	var light_res = eq_stats[55];	//55 = Light Resistance %
	var dark_res = eq_stats[56];	//56 = Dark Resistance %
	var shortRD = 100 + eq_stats[69];		//69 = Short Range Damage %
	var longRD = 100 + eq_stats[70];		//70 = Long Range Damage %
	var unsheathe = 100 + eq_stats[117];	//117 = Unsheathe Attack %
	var unsheathe_flat = eq_stats[116];		//116 = Unsheathe Attack +
	var barrier_phys = eq_stats[124];		//124 = Physical Barrier
	var barrier_mag = eq_stats[128];		//128 = Magic Barrier
	var barrier_frac = eq_stats[127];		//127 = Fractional Barrier
	var barrier_cd = 100 + eq_stats[141];	//141 = Barrier Cool Down %
	var reflect = eq_stats[126];			//126 = Reflect %
	var add_melee = eq_stats[129];			//129 = Additional Melee %
	var add_magic = eq_stats[130];			//130 = Additional Magic %
	var anticipate = eq_stats[139];			//139 = Anticipate %
	var guard_break = eq_stats[140];		//140 = Guard Break %
	var no_flinch = eq_stats[122]>0?"Yes":"No";	//122 = Flinch Unavailable
	var no_tumble = eq_stats[125]>0?"Yes":"No";	//125 = Tumble Unavailable
	var no_stun = eq_stats[168]>0?"Yes":"No";	//168 = Stun Unavailable


	//------- WEAPON RELATED STATS -------
	var ATKsub=0;
	// sp5: dw calculations
	var sub_stability=0;
	var ATK=0;
	var ASPD=0;
	var dual_modifier=0;
	//------- 1H SWORD STATS -------
	if(main=="1H Sword" && sub!="1H Sword"){
		ATK = Lv + STR*2 + DEX*2 + weaponATK;
		MATK = Lv + INT*3 + DEX;
		stability += (STR+DEX*3)/40;
		ASPD = 100 + Lv + AGI*4 + (AGI+STR-1)*0.2;
	}

	//------- 2H SWORD STATS -------
	if(main=="2H Sword"){
		ATK = Lv + STR*3 + DEX + weaponATK ;
		MATK = Lv + INT*3 + DEX + 1;
		stability += DEX*0.1;
		ASPD = 50 + Lv + AGI*2 + (AGI+STR-1)*0.2;
	}

	//------- DUAL WIELD -------
	if(main=="1H Sword" && sub=="1H Sword"){
		ATK = Lv + STR + DEX*2 + AGI + weaponATK;
		ATKsub = Lv + STR + AGI*3 + weaponATKsub;
		MATK = Lv + INT*3 + DEX;
		stability += (STR + DEX*3)/40;
		// sp5:0
		dual_modifier=1;
		sub_stability = Math.floor(substability/2+STR*0.06+AGI*0.04)+eq_stats[24];
		ASPD = 100 + Lv + AGI*4 + (STR+AGI-1)*0.2
	}

	//------- BOW -------
	if(main=="Bow"){
		ATK = Lv + STR + DEX*3 + weaponATK;
		MATK = Lv + INT*3 + DEX;
		stability += (STR+DEX)/20;
		ASPD = 75 + Lv + AGI*3.1 + (AGI + DEX*2 -1)*0.1;
	}

	//------- BOWGUN -------
	if(main=="Bowgun"){
		ATK = Lv + DEX*4 + weaponATK;
		MATK = Lv + INT*3 + DEX;
		stability += STR*0.05;
		ASPD = 30 + Lv + AGI*2.2 + DEX*0.2;
	}

	//------- STAFF -------
	if(main=="Staff"){
		ATK = Lv + STR*3 + INT + weaponATK;
		MATK = Lv + INT*4 + DEX + weaponATK;
		stability += STR*0.05;
		//ASPD = 60 + Lv + AGI + (AGI*4 + INT -1)*0.2;
		ASPD = 60.6 + Lv + INT*0.2 + AGI*1.8;
	}

	//------- MAGIC DEVICE -------
	if(main=="Magic Device"){
		ATK = Lv + INT*2 + AGI*2 + weaponATK;
		MATK = Lv + INT*4 + DEX + weaponATK;
		stability += DEX*0.1;
		ASPD = 90 + Lv + AGI*4 + (INT-1)*0.2;
	}

	//------- KNUCKLE -------
	if(main=="Knuckle"){
		ATK = Lv + AGI*2 + DEX*0.5 + weaponATK;
		MATK = Lv + INT*4 + DEX + weaponATK*0.5;
		stability += DEX*0.025;
		ASPD = 120 + Lv + AGI*4.6 + DEX*0.1 + STR*0.1;
	}

	//------- HALBERD -------
	if(main=="Halberd"){
		ATK = Lv + STR*2.5 + AGI*1.5 + weaponATK;
		MATK = Lv + INT*2 + DEX + AGI;
		stability += (STR+DEX)/20;
		ASPD = 25 + Lv + AGI*3.5 + STR*0.2;
	}

	//------- KATANA -------
	if(main=="Katana"){
		ATK = Lv + STR*1.5 + DEX*2.5 + weaponATK;
		MATK = Lv + INT*1.5 + DEX;
		stability += (STR*3+DEX)/40;
		ASPD = 200 + Lv + AGI*3.9 + STR*0.3;
	}

	//------- BARE HAND -------
	if(main=="Bare Hand"){
		ATK = Lv + STR + 1;
		MATK = Lv + INT*3 + DEX + 1;
		stability = 0 ;
		ASPD = 1000 + Lv + AGI*9.6;
	}

	//------- APPLY PERCENT MODIFIER --------
	var HITmodifier = 1;
	if(main=="1H Sword" && sub=="1H Sword"){
		HITmodifier = 0.4;
		if(skill["Dual Sword Mastery"]>0)
			HITmodifier += 0.05 + 0.03*skill["Dual Sword Mastery"];
		if(skill["Dual Sword Control"]>0)
			HITmodifier += 0.05 + 0.03*skill["Dual Sword Control"];
	}
	HITmodifier += eq_stats[34]/100;			//34 = Accuracy %
	if(main != "Bare Hand" && sub=="None")
		HITmodifier += skill["Two Handed"]/100;
	HIT = HIT * HITmodifier;

	var CSPDmodifier = 1 + (eq_stats[40]/100); //40 = CSPD%
	if(skill['Magic Warrior Mastery']>0 && sub=="Magic Device")
		CSPDmodifier += skill['Magic Warrior Mastery']/100;
	CSPD = CSPD * CSPDmodifier;

	var HPmodifier = 1 + (eq_stats[18]/100);	//18 = MaxHP%;
	HPmodifier += skill["HP Boost"]*0.02		// HP Boost Skill
	MaxHP = MaxHP * HPmodifier;

	var MPmodifier = 1 + (eq_stats[101]/100);	//101 = MaxMP %
	MaxMP = MaxMP * MPmodifier;


	var CRatemodifier = 1;
	if(main=="1H Sword" && sub=="1H Sword"){
		CRatemodifier = 0.4;
		if(skill["Dual Sword Mastery"]>0)
			CRatemodifier += 0.05 + 0.03*skill["Dual Sword Mastery"];
		if(skill["Dual Sword Control"]>0)
			CRatemodifier += 0.05 + 0.03*skill["Dual Sword Control"];
	}
	if(main=="Halberd")	CRatemodifier += Math.floor(skill["Critical Spear"]/2)/100;
	CRatemodifier += (eq_stats[42]/100);		//42 = Critical %
	CRate = CRatemodifier * CRate;

	var CDMGmodifier = 1 + (eq_stats[44]/100);	//44 = CDamage %
	CDMGmodifier += (Math.floor(skill["Critical Up"]/2)/100);
	CDamage = Math.trunc(Math.trunc(CDamage * CDMGmodifier * 100)/100);

	var MATK, MATKmodifier=1;
	if(sub=="Knuckle")			MATKmodifier -= 0.15;
	if(main=="Staff" || main=="Magic Device"){
		if(skill["Magic Mastery"] >= 1)	MATKmodifier += 0.01;
		if(skill["Magic Mastery"] >= 3)	MATKmodifier += 0.01;
		if(skill["Magic Mastery"] >= 8)	MATKmodifier += 0.01;
	}

	var ASPDmodifier=1;
	if(armortype=="Light Armor")	ASPDmodifier += 0.5;
	if(armortype=="Heavy Armor")	ASPDmodifier -= 0.5;
	if(sub=="Shield")				ASPDmodifier -= (0.5 - skill["Shield Mastery"]*0.05);
		ASPDmodifier += (eq_stats[38]/100); 		//38 = ASPD %
	if(main=="1H Sword" || main=="2H Sword")
		ASPDmodifier += skill["Quick Slash"]*0.01;

	if(main=="Knuckle")
		ASPDmodifier += skill["Martial Discipline"]/100
	ASPD = ASPD * ASPDmodifier;

	var ATKmodifier=1;
	var ATKsubmodifier = 1;

	if(sub=="Magic Device")		ATKmodifier -= 0.15;
	if(skill["Magic Warrior Mastery"]>0 && sub=="Magic Device")
		ATKmodifier += skill["Magic Warrior Mastery"]/100;
	if(main=="1H Sword" || main=="2H Sword"){
		if(skill["Sword Mastery"] >= 1)	ATKmodifier += 0.01;
		if(skill["Sword Mastery"] >= 3)	ATKmodifier += 0.01;
		if(skill["Sword Mastery"] >= 8)	ATKmodifier += 0.01;

		if(sub=="1H Sword"){
			if(skill["Sword Mastery"] >= 1)	ATKsubmodifier += 0.01;
			if(skill["Sword Mastery"] >= 3)	ATKsubmodifier += 0.01;
			if(skill["Sword Mastery"] >= 8)	ATKsubmodifier += 0.01;
		}
	}
	if(main=="Knuckle"){
		if(skill["Martial Mastery"] >= 1)	ATKmodifier += 0.01;
		if(skill["Martial Mastery"] >= 3)	ATKmodifier += 0.01;
		if(skill["Martial Mastery"] >= 8)	ATKmodifier += 0.01;
	}
	if(main=="Bow" || main=="Bowgun"){
		if(skill["Shot Mastery"] >= 1)	ATKmodifier += 0.01;
		if(skill["Shot Mastery"] >= 3)	ATKmodifier += 0.01;
		if(skill["Shot Mastery"] >= 8)	ATKmodifier += 0.01;
	}
	if(main=="Halberd"){
		if(skill["Halberd Mastery"] >= 1)	ATKmodifier += 0.01;
		if(skill["Halberd Mastery"] >= 3)	ATKmodifier += 0.01;
		if(skill["Halberd Mastery"] >= 8)	ATKmodifier += 0.01;
	}
	if(main=="Katana"){
		if(skill["Bushido"] >= 1)	ATKmodifier += 0.01;
		if(skill["Bushido"] >= 3)	ATKmodifier += 0.01;
		if(skill["Bushido"] >= 8)	ATKmodifier += 0.01;
	}
	ATKmodifier += (eq_stats[21]/100);			//21 = ATK %
	// sp4: trunc'ed in calculation before flat modifiers
	ATK = Math.floor(ATKmodifier * ATK);

	MATKmodifier += (eq_stats[23]/100);			//23 = MATK %
	MATK = MATKmodifier * MATK;

	ATKsubmodifier += (eq_stats[21]/100); 		//21 = ATK %
	// sp4:
	ATKsub = Math.floor(ATKsub * ATKsubmodifier);

	var DEFmodifier = 1;
	var MDEFmodifier = 1;
	if(sub=="Arrow"){
		DEFmodifier -= 0.25;
		MDEFmodifier -= 0.25;
	}
	DEFmodifier += (eq_stats[28]/100);			//28 = DEF %
	if(sub=="Shield" && skill["Force Shield"]>0)
		DEFmodifier += (2.5 + 0.5*skill["Force Shield"] + Math.floor(skill["Force Shield"]/2)*0.5)/100;
	DEF = DEF * DEFmodifier;

	MDEFmodifier += (eq_stats[30]/100);			//30 = MDEF %
	if(sub=="Shield" && skill["Magical Shield"]>0)
		MDEFmodifier += (2.5 + 0.5*skill["Magical Shield"] + Math.floor(skill["Magical Shield"]/2)*0.5)/100;
	MDEF = MDEF * MDEFmodifier;

	var FLEEmodifier = 1 + (eq_stats[36]/100);	//36 = Dodge %
	FLEE = FLEE * FLEEmodifier;

	//------- APPLY FLAT MODIFIER -------
	MaxHP   += eq_stats[17];				//17 = MaxHP
	MaxHP 	+= skill["HP Boost"]*100;
	MaxHP	+= skill["Bushido"]*10;
	if(sub=="Shield"){
		MaxHP 	+= skill["Force Shield"]*50;
		MaxHP 	+= skill["Magical Shield"]*50;
	}
	if(MaxHP > 99999)
		MaxHP = 99999;
	MaxMP	+= eq_stats[19]					//19 = MaxMP
	MaxMP 	+= skill["MP Boost"]*30;
	MaxMP	+= skill["Bushido"]*10;
	/*
	if(MaxMP > 2000)
		MaxMP = 2000;
	*/

	HIT		+= eq_stats[33];	//33 = Accuracy
	HIT 	+= skill["Accuracy Up"];
	HIT		+= skill["Bushido"];
	CSPD	+= eq_stats[39];	//39 = CSPD
	if(skill['Magic Warrior Mastery']>0 && sub=="Magic Device")
		CSPD += skill['Magic Warrior Mastery']*10;
	CRate	+= eq_stats[41];	//41 = Critical
	CRate 	+= Math.ceil(skill["Critical Up"]/2);
	if(main=="Halberd")					CRate += Math.ceil(skill["Critical Spear"]/2);
	if(main=="Katana" && sub=="None")	CRate += skill["Two Handed"];
	else if(main!="Bare Hand" && sub=="None")				CRate	+= Math.ceil(skill["Two Handed"]/2);
	CDamage += eq_stats[43];	//43 = C.Damage
	CDamage = (CDamage > 300)?300+Math.trunc((CDamage-300)/2):CDamage;
	ATK		+= eq_stats[20]		//20 = ATK
	ATK		+= Math.floor(skill["Attack Up"]*2.5/100*Lv);
	ATK		+= Math.floor(skill["Intimidating Power"]*2.5/100*Lv);
	ATK 	-= Math.trunc(eq_stats[134]/100 * AGI);//ATK DOWN (AGI)	134
	ATK 	-= Math.trunc(eq_stats[133]/100 * DEX);//ATK DOWN (DEX)	133
	ATK 	-= Math.trunc(eq_stats[197]/100 * INT);//ATK DOWN (INT)	197
	ATK 	-= Math.trunc(eq_stats[132]/100 * STR);//ATK DOWN (STR)	132
	ATK 	-= Math.trunc(eq_stats[123]/100 * VIT);//ATK DOWN (VIT)	123
	ATK 	+= Math.trunc(eq_stats[159]/100 * AGI);//ATK UP (AGI)	159
	ATK 	+= Math.trunc(eq_stats[158]/100 * DEX);//ATK UP (DEX)	158
	ATK 	+= Math.trunc(eq_stats[131]/100 * INT);//ATK UP (INT)	131
	ATK 	+= Math.trunc(eq_stats[186]/100 * STR);//ATK UP (STR)	186
	ATK 	+= Math.trunc(eq_stats[143]/100 * VIT);//ATK UP (VIT)	143

	MATK	+= eq_stats[22]		//22 = MATK
	MATK 	+= Math.floor(skill["Magic Up"]*2.5)/100 * Lv;
	MATK 	+= Math.floor(skill["Increased Energy"]*2.5)/100 * Lv;
	if(skill["Sword Conversion"]>0 && (main=="1H Sword" || main=="2H Sword" || main=="Bowgun")){
		MATK += Math.trunc((skill["Sword Conversion"]*skill["Sword Conversion"])/100 * weaponATK);
		MATK += skill["Sword Conversion"]*2;
	}
	if(skill["Sword Conversion"]>0 && main=="Knuckle"){
		MATK += Math.trunc((skill["Sword Conversion"]*skill["Sword Conversion"])/200 * weaponATK);
		MATK += skill["Sword Conversion"]*2;
	}
	if(skill['Magic Warrior Mastery']>0 && sub=="Magic Device")
		MATK += skill['Magic Warrior Mastery']*2 + Math.max(skill['Magic Warrior Mastery']-5,0) ;

	MATK 	-= Math.trunc(eq_stats[199]/100 * AGI);//MATK DOWN (AGI)	199
	MATK 	-= Math.trunc(eq_stats[166]/100 * DEX);//MATK DOWN (DEX)	166
	MATK 	-= Math.trunc(eq_stats[198]/100 * INT);//MATK DOWN (INT)	198
	MATK 	-= Math.trunc(eq_stats[184]/100 * STR);//MATK DOWN (STR)	184
	MATK 	-= Math.trunc(eq_stats[161]/100 * VIT);//MATK DOWN (VIT)	161
	MATK 	+= Math.trunc(eq_stats[164]/100 * AGI);//MATK UP (AGI)	164
	MATK 	+= Math.trunc(eq_stats[200]/100 * DEX);//MATK UP (DEX)	200
	MATK 	+= Math.trunc(eq_stats[160]/100 * INT);//MATK UP (INT)	160
	MATK 	+= Math.trunc(eq_stats[163]/100 * STR);//MATK UP (STR)	163
	MATK 	+= Math.trunc(eq_stats[162]/100 * VIT);//MATK UP (VIT)	162

	ATKsub	+= eq_stats[20]		//20 = ATK
	ATKsub	+= Math.floor(skill["Attack Up"]*2.5/100*Lv);
	ATKsub	+= Math.floor(skill["Intimidating Power"]*2.5/100*Lv);

	ASPD	+= eq_stats[37]		//37 = ASPD
	if(main=="Knuckle")							ASPD += skill["Martial Discipline"]*10;
	if(main=="1H Sword" || main=="2H Sword")	ASPD += skill["Quick Slash"] * 10;
	if(main=="1H Sword" && sub=="1H Sword")		ASPD += 50*skill["Dual Sword Control"];

	DEF		+= eq_stats[27];	//27 = DEF
	if(sub=="Shield" && skill["Force Shield"]>0)
		DEF 	+= 5 + Math.floor(skill["Force Shield"]*1.5);
	DEF 	+= Math.floor(skill["Defense Up"]*2.5)/100 * Lv;
	DEF 	+= Math.floor(skill["Defense Mastery"]*2.5)/100 * Lv;
	MDEF	+= eq_stats[29];				//29 = MDEF
	if(sub=="Shield" && skill["Magical Shield"]>0)
		MDEF 	+= 5 + Math.floor(skill["Magical Shield"]*1.5);
	MDEF 	+= Math.floor(skill["Defense Up"]*2.5)/100 * Lv;
	MDEF 	+= Math.floor(skill["Defense Mastery"]*2.5)/100 * Lv;
	FLEE 	+= eq_stats[35];				//35 = Dodge
	FLEE 	+= skill["Dodge Up"];
	stability += eq_stats[24];				//24 = stability
	if(main=="Katana" && sub=="None")	stability += skill["Two Handed"];
	else if(main!="Bare Hand" && sub=="None")				stability += Math.ceil(skill["Two Handed"]/2);
	//if(main=="Staff" && stability >90)			stability = 90;
	//if(main=="Magic Device" && stability >80)	stability = 80;
	if(main=="1H Sword" && sub=="1H Sword")		unsheathe += Math.floor(skill["God Speed"]*2.5);
	else										unsheathe += Math.floor(skill["God Speed"]*1.5);

	//------- Motion Speed --------
	var motionspeed = eq_stats[71];
	if(ASPD>1000)
		motionspeed += (ASPD-1000)/180;

	//------- AMPR --------
	// this calculated last because it depends on MaxMP,
	// which depends on various aspects.
	//Base AMPR
	var AMPR = 10 + MaxMP/100;
	//Apply percent modifier
	var AMPRmodifier = 1;
	AMPRmodifier += eq_stats[165]/100;	//165 = AMPR%
	AMPR = Math.trunc(AMPRmodifier * AMPR);
	//Apply flat modifier
	if(main=="Knuckle")	AMPR += Math.floor(skill["Aggravate"]/2);
	AMPR += eq_stats[68];	//68 = AMPR
	//Special case: dual wield
	if(main=="1H Sword" && sub=="1H Sword")
		AMPR *= 2; //attack twice, so double AMPR

	//------- Magic Stability & Critical --------
	//assuming no weaken ailment
	var MStability = (stability+100)/2;
	if(MStability > 90)	MStability = 90;
	var MCRate = Math.trunc(CRate * skill["Spell Burst"]*0.025);
	var MCDamage = Math.trunc(100+((CDamage-100)* skill["Spell Burst"]*0.075));

	//-------- ATK when Crit --------
	//special for two handed skill
	if(main=="Katana" && sub=="None")
		ATKcrit = ATK * (1 + skill["Two Handed"]*0.05);
	else
		ATKcrit = ATK;

	//-------- Damage Calculation --------

	//BASE - DEF + UNSHEATHE_FLAT + SKILL_CONSTANT > CDMG > UNSHEATHE % > STABILITY > ELEMENT > SKILL_MODIFIER > PRORATION > SRD/LRD > LETHARGY > DAMAGE MODIFIERS > COMBO > GEMRUN > GUARD

	var stab = Math.min(stability,100)/100;
	var mob_level = parseInt($("#mob_level").val());
	var mob_physres = parseInt($("#mob_physres").val());
	var mob_def = parseInt($("#mob_def").val());
	var mob_newDef = mob_def*(1-(Math.trunc(phys_pierce)/100));
	var ele_modifier = 1;
	switch($("#mob_ele").val()){
		case 'neutral'  : ele_modifier=neutral_pow/100; break;
		case 'fire'  	: ele_modifier=fire_pow/100; break;
		case 'water'  	: ele_modifier=water_pow/100; break;
		case 'wind'  	: ele_modifier=wind_pow/100; break;
		case 'earth'  	: ele_modifier=earth_pow/100; break;
		case 'light'  	: ele_modifier=light_pow/100; break;
		case 'dark'  	: ele_modifier=dark_pow/100; break;
	}
	var dist_modifier = 1;
	switch($("#skill_dist").val()){
		case 'short'	: dist_modifier=shortRD/100; break;
		case 'long'		: dist_modifier=longRD/100; break;
		case 'placed'	: dist_modifier=1; break;
	}
	var unsheathe_modifier = 1;
	var unsheathe_constant = 0;
	if ($("#skill_unsheathe").val() == 'yes') {
		unsheathe_modifier = unsheathe/100;
		unsheathe_constant = unsheathe_flat;
	}

	var base_dmg = Math.trunc(((Lv + Math.trunc(ATK) + dual_modifier*ATKsub*sub_stability/100 - mob_level)*(100-mob_physres)/100)-mob_newDef)+unsheathe_constant;
    var base_dmg_crit = Math.trunc((Lv + Math.trunc(ATKcrit) + dual_modifier*ATKsub*sub_stability/100 - mob_level)*((100-mob_physres)/100)-mob_newDef)+unsheathe_constant;
	var base_magic = Math.trunc(((Lv + Math.trunc(MATK) - mob_level)*(100-mob_physres)/100)-mob_newDef);

	var skill_constant = parseInt($("#skill_const").val());
	// sp3: mult can be floating point
	var skill_modifier = parseFloat($("#skill_mult").val());

	var other_skill = parseInt($("#other_skill").val())/100;
	var other_combo = parseInt($("#other_combo").val())/100;
	var other_prorate = parseInt($("#other_prorate").val())/100;

	const RD = Math.trunc;

	var auto_norm_min = RD(RD(RD(RD(RD(RD(RD(base_dmg*unsheathe_modifier)*stab)*ele_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var auto_norm_max = RD(RD(RD(RD(RD(RD(base_dmg*unsheathe_modifier)*ele_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var auto_norm_avg = Math.trunc(auto_norm_max*(1+stab)/2);

	var auto_crit_min = RD(RD(RD(RD(RD(RD(RD(RD(base_dmg_crit*CDamage/100)*unsheathe_modifier)*stab)*ele_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var auto_crit_max = RD(RD(RD(RD(RD(RD(RD(base_dmg_crit*CDamage/100)*unsheathe_modifier)*ele_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var auto_crit_avg = Math.trunc(auto_crit_max*(1+stab)/2);

	$("#auto_min").html(formatNumber(Math.max(1,auto_norm_min)));
	$("#auto_max").html(formatNumber(Math.max(1,auto_norm_max)));
	$("#auto_avg").html(formatNumber(Math.max(1,auto_norm_avg)));
	$("#crit_min").html(formatNumber(Math.max(1,auto_crit_min)));
	$("#crit_max").html(formatNumber(Math.max(1,auto_crit_max)));
	$("#crit_avg").html(formatNumber(Math.max(1,auto_crit_avg)));

	var skill_norm_min = RD(RD(RD(RD(RD(RD(RD(RD((base_dmg + skill_constant)*unsheathe_modifier)*stab)*ele_modifier)*skill_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var skill_norm_max = RD(RD(RD(RD(RD(RD(RD((base_dmg + skill_constant)*unsheathe_modifier)*ele_modifier*skill_modifier))*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var skill_norm_avg = Math.trunc(skill_norm_max*(1+stab)/2);
	
	var magic_norm_min = RD(RD(RD(RD(RD(RD(RD((base_dmg + skill_constant)*MStability/100)*ele_modifier)*skill_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var magic_norm_max = RD(RD(RD(RD(RD(RD((base_dmg + skill_constant)*ele_modifier)*skill_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var magic_norm_avg = Math.trunc(magic_norm_max*(100+MStability)/200);
	
	var skill_crit_min = RD(RD(RD(RD(RD(RD(RD(RD(RD((base_dmg_crit + skill_constant)*CDamage/100)*unsheathe_modifier)*stab)*ele_modifier)*skill_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var skill_crit_max = RD(RD(RD(RD(RD(RD(RD(RD((base_dmg_crit + skill_constant)*CDamage/100)*unsheathe_modifier)*ele_modifier)*skill_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var skill_crit_avg = Math.trunc(skill_crit_max*(1+stab)/2);

	var magic_crit_min = RD(RD(RD(RD(RD(RD(RD(RD((base_magic + skill_constant)*MCDamage/100)*MStability)*ele_modifier)*skill_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var magic_crit_max = RD(RD(RD(RD(RD(RD(RD((base_dmg + skill_constant)*MCDamage/100)*ele_modifier)*skill_modifier)*other_prorate)*dist_modifier)*other_skill)*other_combo);
	var magic_crit_avg = Math.trunc(magic_crit_max*(100+MStability)/200);

	$("#skill_min").html(formatNumber(Math.max(1,skill_norm_min)));
	$("#skill_max").html(formatNumber(Math.max(1,skill_norm_max)));
	$("#skill_avg").html(formatNumber(Math.max(1,skill_norm_avg)));

	$("#skillcrit_min").html(formatNumber(Math.max(1,skill_crit_min)));
	$("#skillcrit_max").html(formatNumber(Math.max(1,skill_crit_max)));
	$("#skillcrit_avg").html(formatNumber(Math.max(1,skill_crit_avg)));

	$("#magic_min").html(formatNumber(Math.max(1,magic_norm_min)));
	$("#magic_max").html(formatNumber(Math.max(1,magic_norm_max)));
	$("#magic_avg").html(formatNumber(Math.max(1,magic_norm_avg)));

	$("#magiccrit_min").html(formatNumber(Math.max(1,magic_crit_min)));
	$("#magiccrit_max").html(formatNumber(Math.max(1,magic_crit_max)));
	$("#magiccrit_avg").html(formatNumber(Math.max(1,magic_crit_avg)));

	// Displaying
	$("#DEF").html(Math.trunc(DEF));
	$("#MDEF").html(Math.trunc(MDEF));
	$("#FLEE").html(Math.trunc(FLEE));
	$("#HIT").html(Math.trunc(HIT));
	$("#CSPD").html(Math.trunc(CSPD));
	$("#MaxHP").html(Math.trunc(MaxHP));
	$("#MaxMP").html(Math.trunc(MaxMP));
	$("#AMPR").html(Math.trunc(AMPR));
	$("#CRate").html(Math.trunc(CRate) + " %");
	$("#CDamage").html(Math.trunc(CDamage) + " %");
	$("#ATK").html(Math.trunc(ATK));
	$("#ATKcrit").html(Math.trunc(ATKcrit));
    $("#ATKmodifier").html(Math.trunc((ATKmodifier-1)*100));
	$("#MATK").html(Math.trunc(MATK));
	$("#mag_stability").html(Math.trunc(MStability));
	$("#MCRate").html(Math.trunc(MCRate));
	$("#MCDamage").html(Math.trunc(MCDamage));
	$("#ASPD").html(Math.trunc(ASPD));
	$("#motionspeed").html(Math.floor(motionspeed));
	$("#stability").html(Math.trunc(stability) + " %");
    $("#sub-stability").html(Math.trunc(sub_stability) + " %");
	$("#ATKsub").html(Math.trunc(ATKsub));
	$("#GRate").html(Math.trunc(guardRate) + " %");
	$("#GPower").html(Math.trunc(guardPower) + " %");
	$("#ERate").html(Math.trunc(evaRate) + " %");
	$("#phys_pierce").html(Math.trunc(phys_pierce) + " %");
	$("#mag_pierce").html(Math.trunc(mag_pierce) + " %");
	$("#phys_res").html(Math.trunc(phys_res) + " %");
	$("#mag_res").html(Math.trunc(mag_res) + " %");
	$("#armor_refine").html(Math.trunc(totalarmorrefine) + " %");
	$("#ailment").html(Math.trunc(ailment) + " %");
	$("#aggro").html(Math.trunc(aggro) + " %");
	$("#barrier_cd").html(Math.trunc(barrier_cd) + " %");
	$("#barrier_magic").html(Math.trunc(barrier_mag));
	$("#barrier_physical").html(Math.trunc(barrier_phys));
	$("#barrier_frac").html(Math.trunc(barrier_frac) + " %");
	$("#reflect").html(Math.trunc(reflect) + " %");
	$("#shortRD").html(Math.trunc(shortRD) + " %");
	$("#longRD").html(Math.trunc(longRD) + " %");
	$("#unsheathe").html(Math.trunc(unsheathe) + " %");
	$("#unsheathe_flat").html(Math.trunc(unsheathe_flat));
	$("#add_melee").html(Math.trunc(add_melee) + " %");
	$("#add_magic").html(Math.trunc(add_magic) + " %");
	$("#anticipate").html(Math.trunc(anticipate) + " %");
	$("#guard_break").html(Math.trunc(guard_break) + " %");
	$("#element").html(element);
	$("#neutral_pow").html(Math.trunc(neutral_pow) + " %");
	$("#neutral_res").html(Math.trunc(neutral_res) + " %");
	$("#fire_pow").html(Math.trunc(fire_pow) + " %");
	$("#fire_res").html(Math.trunc(fire_res) + " %");
	$("#water_pow").html(Math.trunc(water_pow) + " %");
	$("#water_res").html(Math.trunc(water_res) + " %");
	$("#wind_pow").html(Math.trunc(wind_pow) + " %");
	$("#wind_res").html(Math.trunc(wind_res) + " %");
	$("#earth_pow").html(Math.trunc(earth_pow) + " %");
	$("#earth_res").html(Math.trunc(earth_res) + " %");
	$("#light_pow").html(Math.trunc(light_pow) + " %");
	$("#light_res").html(Math.trunc(light_res) + " %");
	$("#dark_pow").html(Math.trunc(dark_pow) + " %");
	$("#dark_res").html(Math.trunc(dark_res) + " %");
	$("#no_flinch").html(no_flinch);
	$("#no_tumble").html(no_tumble);
	$("#no_stun").html(no_stun);
}
