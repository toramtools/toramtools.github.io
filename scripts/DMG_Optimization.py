# Python3 syntax, don't run on Python2
# python -m idlelib.idle -r ./scripts/DMG_Optimization.py

import collections, math

ddict = lambda aDict={}, aDefault=lambda: 0: collections.defaultdict(aDefault, aDict)

class DamageContext:
    def __init__ (self, character, monster, skill):
        self.character = ddict(character)
        self.monster = ddict(monster)
        self.skill = ddict(skill)

    def mainStats (self, stats):
        main = self.character['main']['type'] if self.character['main']['type'] != 0 else 'bare hand'
        sub = self.character['main']['type'] if self.character['sub']['type'] != 0 else 'bare hand'
        Lv, STR, DEX, INT, AGI = stats['level'], stats['total str'], stats['total dex'], stats['total int'], stats['total agi']
        
        mainWATK = self.character['main']['base attack']
        mainRefine = self.character['main']['refine']
        mainStability = self.character['main']['base stability']
        weaponATK = mainWATK*(100+mainRefine**2)/100+mainWATK*stats['watk%']/100+mainRefine+stats['watk+']

        if main == '1h sword' and sub != '1h sword':
            ATK = Lv+STR*2+DEX*2+weaponATK
            MATK = Lv+INT*3+DEX
            stability = (STR+DEX*3)/40
            ASPD = 100+Lv+AGI*4+(AGI+STR-1)*0.2
        elif main == '2h sword':
            ATK = Lv+STR*3+DEX+weaponATK
            MATK = Lv+INT*3+DEX+1
            stability = DEX*0.1
            ASPD = 50+Lv+AGI*2+(AGI+STR-1)*0.2
        elif main == '1h sword' and sub == '1h sword':
            ATK = Lv+STR+DEX*2+AGI+weaponATK
            MATK = Lv+INT*3+DEX
            stability = (STR+DEX*3)/40
            ASPD = 100+Lv+AGI*4+(STR+AGI-1)*0.2
        elif main == 'bow':
            ATK = Lv+STR+DEX*3+weaponATK
            MATK = Lv+INT*3+DEX
            stability = (STR+DEX)/20
            ASPD = 75+Lv+AGI*3.1+(AGI+DEX*2 -1)*0.1
        elif main == 'bowgun':
            ATK = Lv+DEX*4+weaponATK
            MATK = Lv+INT*3+DEX
            stability = STR*0.05
            ASPD = 30+Lv+AGI*2.2+DEX*0.2
        elif main == 'staff':
            ATK = Lv+STR*3+INT+weaponATK
            MATK = Lv+INT*4+DEX+weaponATK
            stability = STR*0.05
            ASPD = 60.6+Lv+INT*0.2+AGI*1.8
        elif main == 'magic device':
            ATK = Lv+INT*2+AGI*2+weaponATK
            MATK = Lv+INT*4+DEX+weaponATK
            stability = DEX*0.1
            ASPD = 90+Lv+AGI*4+(INT-1)*0.2
        elif main == 'knuckles':
            ATK = Lv+AGI*2+DEX*0.5+weaponATK
            MATK = Lv+INT*4+DEX+weaponATK*0.5
            stability = DEX*0.025
            ASPD = 120+Lv+AGI*4.6+DEX*0.1+STR*0.1
        elif main == 'halberd':
            ATK = Lv+STR*2.5+AGI*1.5+weaponATK
            MATK = Lv+INT*2+DEX+AGI
            stability = (STR+DEX)/20
            ASPD = 25+Lv+AGI*3.5+STR*0.2
        elif main == 'katana':
            ATK = Lv+STR*1.5+DEX*2.5+weaponATK
            MATK = Lv+INT*1.5+DEX
            stability = (STR*3+DEX)/40
            ASPD = 200+Lv+AGI*3.9+STR*0.3
        elif main == 'bare hand':
            ATK = Lv+STR
            MATK = Lv+INT*3+DEX
            stability = 0 
            ASPD = 1000+Lv+AGI*9.6
            
        return ddict({'atk': ATK+2, 'matk': MATK, 'stability': mainStability+stability, 'aspd': ASPD})

    def subStats (self, stats):
        main = self.character['main']['type'] if self.character['main']['type'] != 0 else 'bare hand'
        sub = self.character['sub']['type'] if self.character['sub']['type'] != 0 else 'bare hand'
        Lv, STR, DEX, INT, AGI = stats['level'], stats['total str'], stats['total dex'], stats['total int'], stats['total agi']
        
        subWATK = self.character['sub']['base attack']
        subRefine = self.character['sub']['refine']
        subBaseStability = self.character['sub']['base stability']

        if main == 'bow' and sub == 'arrow':
            subATK = subWATK
            subStability = subBaseStability
        elif main == 'bowgun' and sub == 'arrow':
            subATK = subWATK
            subStability = subBaseStability//2
        elif main == '1h sword' and sub == '1h sword':
            subATK = Lv+STR+AGI*3
            subATK += subWATK*(200+subRefine**2)/200+subRefine+subWATK*stats['watk%']/100+stats['watk+']
            subStability = subBaseStability//2+(STR*3+AGI*2)/50
        else:
            subATK = 0
            subStability = 0

        return ddict({'sub atk': subATK, 'sub stability': subStability})

    def calculate (self):
        myStats = ddict()

        for key in self.character:
            for stat in self.character[key]:
                try:
                    myStats[stat] += self.character[key][stat]
                except TypeError: # Not a number (+= operation fail)
                    myStats[stat] = self.character[key][stat]

        for stat in ['str', 'dex', 'int', 'agi', 'vit']:
            myStats['total '+stat] = myStats[stat]*(100+myStats[stat+'%'])//100+myStats[stat+'+']

        mainSpecifics = self.mainStats(myStats)
        subSpecifics = self.subStats(myStats)

        mainType = self.character['main']['type'] if self.character['main']['type'] != 0 else 'bare hand'
        subType = self.character['sub']['type'] if self.character['sub']['type'] != 0 else 'bare hand'

        Lv, STR, DEX, INT, AGI, VIT = myStats['level'], myStats['total str'], myStats['total dex'], myStats['total int'], myStats['total agi'], myStats['total vit']
        TEC, CRT = myStats['tec'], myStats['crt']

        stability = mainSpecifics['stability']//1+myStats['stability%']+myStats['main stability%']
        subStability = subSpecifics['sub stability']//1

        if mainType == '1h sword' and subType == '1h sword':
            subStability += myStats['stability%']
            mainATK = effectiveATK = mainSpecifics['atk']*(100+myStats['atk%'])/100+myStats['atk+']
            subATK = (subSpecifics['sub atk']*(100+myStats['atk%'])/100+myStats['atk+'])
            effectiveATK += (min(subStability, 100)/100)*subATK
        else:
            stability += subSpecifics['sub stability']//1
            subATK = subSpecifics['sub atk']
            mainATK = effectiveATK = (mainSpecifics['atk']+subSpecifics['sub atk'])*(100+myStats['atk%'])/100+myStats['atk+']

        CDMG = (150+myStats['total str']//5)*(100+myStats['cd%'])//100+myStats['cd+']
        if CDMG > 300:
            CDMG = 300+(CDMG-300)//2

        CR = (25+CRT//3.4)*(100+myStats['cr%'])//100+myStats['cr+']

        maxMP = int(100+Lv+INT/10+max(TEC-1,0))+myStats['mp']
        
        AMPR = (10+maxMP//100)*(100+myStats['ampr%'])//100+myStats['ampr+']+myStats['main ampr+']

        maxHP = int((VIT+22.4)*Lv/3+93)*(100+myStats['hp%'])//100+myStats['hp+']

        ASPD = mainSpecifics['aspd']*(100+myStats['aspd%'])//100+myStats['aspd+']

        enemyLv = self.monster['level']
        enemyPRes = self.monster['pres%']
        enemyDef = self.monster['def']

        constant = self.skill['constant'](myStats)
        mult = self.skill['multiplier'](myStats)

        baseDMG = Lv-enemyLv+(100-enemyPRes)*effectiveATK//100+constant-enemyDef
        skillDMG = baseDMG * mult

        self.stats = myStats
        
        return ddict({'effective atk': effectiveATK//1, 'main atk': mainATK//1, 'sub atk': subATK//1, 'base atk': mainSpecifics['atk']//1, 'cdmg': CDMG, 'cr': CR, 'mp': maxMP, 'ampr': AMPR, 'hp': maxHP, 'aspd': ASPD, 'stability%': stability, 'sub stability%': subStability, 'damage': skillDMG})

EXAMPLE_MONSTER = ddict({
    'level': 1,
    'def': 0,
    'mdef': 0,
    'pres%': 0,
    'mres%': 0
})

EXAMPLE_SKILL = ddict({
    'constant': lambda s: 150,
    'multiplier': lambda s: 2
})

EXAMPLE_CHARACTER = ddict({
    'base stats': ddict({
        'level': 224,
        'str': 315,
        'int': 1,
        'vit': 1,
        'agi': 270,
        'dex': 1
    }, lambda: 1),
    'main': ddict({
        'type': '1h sword',
        'base attack': 338,
        'base stability': 80,
        'refine': 13,
        'stability%': 5
    }),
    'main xtal': ddict({
    }),
    'sub': ddict({
        'type': '1h sword',
        'base attack': 152,
        'base stability': 100,
        'refine': 13,
    }),
    'armor': ddict({
        'cr+': -20,
        'cr%': -20,
        'stability%': 5
    }),
    'light armor': ddict({
        'aspd%': 50
    }),
    'add': ddict({
        'hp%': 25,
        'cr+': 5,
        'stability%': 15
    }),
    'ring': ddict({
    }),
    'food': ddict({
        'watk+': 56,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860
    }),
    'avatars': ddict({
        'ampr+': 21,
        'agi+': 6
    }),
    'masteries': ddict({
        'watk%': 30,
        'atk%': 3,
        'aspd+': 500+50,
        'aspd%': 5,
        'cr%': 10,
        'agi+': 15
    }),
    'battle skills': ddict({
        'atk+': 112,
        'cd%': 5,
        'cr+': 5
    }),
    'registlet': ddict({
        'atk+': 30,
        'mp': 100,
        'hp+': 1000
    }),
    'bushido': ddict({
        'mp': 50,
        'hp+': 50
    }),
})

example = DamageContext(EXAMPLE_CHARACTER, EXAMPLE_MONSTER, EXAMPLE_SKILL)
print(example.calculate())