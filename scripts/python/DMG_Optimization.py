# WARNING: Python3 syntax, include proper headers to run on Python2
# python -m idlelib.idle -r ./scripts/python/DMG_Optimization.py

import collections, math

ddict = lambda aDict={}, aDefault=lambda: 0: collections.defaultdict(aDefault, aDict)
trunc2 = lambda x: int(x*100)/100

def convert2dict (addict):
    addict = dict(addict)
    for key in addict:
        addict[key] = dict(addict[key])
    return addict

class DamageContext:
    def __init__ (self, character, monster, skill):
        if skill['stats'] == 0:
            skill['stats'] = ddict({})

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
        weaponATK = mainWATK+mainWATK*(mainRefine**2)//100+mainWATK*(stats['watk%'])//100+mainWATK*stats['main watk%']//100+mainRefine+stats['watk+']

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
            ATK = Lv+STR+1
            MATK = Lv+INT*3+DEX+1
            stability = 0 
            ASPD = 1000+Lv+AGI*9.6
            
        return ddict({'atk': ATK//1, 'matk': MATK//1, 'stability': mainStability+stability//1, 'aspd': ASPD})

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
            subATK += subWATK+subWATK*(subRefine**2)//200+subRefine+subWATK*stats['watk%']//100+stats['watk+']
            subStability = subBaseStability//2+(STR*3+AGI*2)/50
        else:
            subATK = 0
            subStability = 0

        return ddict({'sub atk': subATK//1, 'sub stability': subStability//1})

    def calculate (self):
        myStats = ddict()

        for key in self.character:
            for stat in self.character[key]:
                try:
                    myStats[stat] += self.character[key][stat]
                except TypeError: # Not a number (+= operation fail)
                    myStats[stat] = self.character[key][stat]
        
        for stat in self.skill['stats']:
            try:
                myStats[stat] += self.skill['stats'][stat]
            except TypeError: # Not a number (+= operation fail)
                myStats[stat] = self.skill['stats'][stat]

        for stat in ['str', 'dex', 'int', 'agi', 'vit']:
            myStats['total '+stat] = myStats[stat]*(100+myStats[stat+'%'])//100+myStats[stat+'+']

        mainSpecifics = self.mainStats(myStats)
        subSpecifics = self.subStats(myStats)

        mainType = self.character['main']['type'] if self.character['main']['type'] != 0 else 'bare hand'
        subType = self.character['sub']['type'] if self.character['sub']['type'] != 0 else 'bare hand'

        Lv, STR, DEX, INT, AGI, VIT = myStats['level'], myStats['total str'], myStats['total dex'], myStats['total int'], myStats['total agi'], myStats['total vit']
        TEC, CRT = myStats['tec'], myStats['crt']

        stability = mainSpecifics['stability']+myStats['stability%']+myStats['main stability%']
        subStability = subSpecifics['sub stability']//1

        if mainType == '1h sword' and subType == '1h sword':
            subStability += myStats['stability%']
            mainATK = effectiveATK = mainSpecifics['atk']*(100+myStats['atk%'])//100+myStats['atk+']+myStats['main atk+']
            subATK = (subSpecifics['sub atk']*(100+myStats['atk%'])//100+myStats['atk+'])
            effectiveATK += int((min(subStability, 100)/100)*subATK)    
        else:
            stability += subSpecifics['sub stability']
            subATK = subSpecifics['sub atk']
            mainATK = effectiveATK = (mainSpecifics['atk']+subSpecifics['sub atk'])*(100+myStats['atk%'])//100+myStats['atk+']

            if self.skill['crit'] and mainType == "katana" and subType in ['bare hand', 'scroll']:
                effectiveATK = int(effectiveATK*1.5)

        CDMG = (150+myStats['total str']//5)*(100+myStats['cd%'])//100+myStats['cd+']
        if CDMG > 300:
            CDMG = 300+(CDMG-300)//2

        CR = (25+CRT//3.4)*(100+myStats['cr%'])//100+myStats['cr+']

        maxMP = int(100+Lv+INT/10+max(TEC-1,0))+myStats['mp']
        
        AMPR = (10+maxMP//100)*(100+myStats['ampr%'])//100+myStats['ampr+']+myStats['main ampr+']

        maxHP = int((VIT+22.4)*Lv/3+93)*(100+myStats['hp%'])//100+myStats['hp+']

        ASPD = mainSpecifics['aspd']*(100+myStats['aspd%'])//100+myStats['aspd+']

        motion = myStats['motion%'] if ASPD <= 1000 else myStats['motion%']+(ASPD-1000)//180

        enemyLv = self.monster['level']
        enemyPRes = self.monster['pres%']
        enemyDef = (self.monster['def']+myStats['enemy def'])*(100-min(100, myStats['ppierce%']))//100

        constant = self.skill['constant'](myStats)+myStats[self.skill['unsheathe']+'+']
        mult = self.skill['multiplier'](myStats)
 
        totalPDMG = basePDMG = (Lv-enemyLv+effectiveATK)*(100-enemyPRes)//100+constant-enemyDef
        totalPDMG = critPDMG = totalPDMG*(CDMG if self.skill['crit'] else 100)//100
        totalPDMG = unsheathePDMG = totalPDMG*(100+myStats[self.skill['unsheathe']+'%'])//100
        totalPDMG = dtePDMG = totalPDMG*(100+myStats['dte%'])//100
        totalPDMG = skillPDMG = int(totalPDMG*trunc2(mult))
        totalPDMG = othersPDMG = totalPDMG*self.skill['others']
        totalPDMG = comboPDMG = totalPDMG*self.skill['combo']
        totalPDMG = prorationPDMG = totalPDMG*self.skill['proration']
        totalPDMG = rangePDMG = totalPDMG*(100+myStats[self.skill['distance']])//100

        avgStab = (min(100, stability)/2+100)//2 if self.skill['graze'] else (min(100, stability)+100)//2
        avgPDMG = totalPDMG*avgStab//100

        self.stats = myStats

        self.data = ddict({'effective atk': effectiveATK, 'main atk': mainATK, 'sub atk': subATK, 'cdmg': CDMG, 'stability%': stability, 'sub stability%': subStability, 'base damage': basePDMG, 'damage': totalPDMG, 'average damage': avgPDMG, 'ampr': AMPR, 'mp': maxMP, 'aspd': ASPD, 'hp': maxHP, 'cr': CR, 'motion%': motion, 'average stability': avgStab})
        
        return self.data

if __name__ == '__main__':
    from Items import *

    EXAMPLE_MONSTER = ddict({
        'level': 1,
        'def': 0,
        'mdef': 0,
        'pres%': 0,
        'mres%': 0
    })

    '''
    EXAMPLE_SKILL = ddict({
        'constant': lambda s: 400,
        'multiplier': lambda s: 47.5+s['dex']/100,
        'distance': 'srd%',
        'unsheathe': 'not_unsheathe',
        'crit': True,
        'others': 1.1*1.2,
        'combo': 1.5,
        'proration': 2.5,
        'graze': False
    })
    '''
    EXAMPLE_SKILL = ddict({
        'constant': lambda s: 300,
        'multiplier': lambda s: 1*(10+s['total dex']/100),
        'distance': 'placed',
        #'constant': lambda s: 400,
        #'multiplier': lambda s: 10,
        #'distance': 'srd%',
        'unsheathe': 'kekw',
        'crit': True,
        'others': 1,
        'combo': 1,
        'proration': 1,
        'stats': ddict({
            'ppierce%': 100,
        })
    })

    EXAMPLE_CHARACTER = ddict({
        'base stats': ddict({
            'level': 221,
            'str': 247,
            'int': 1,
            'vit': 1,
            'agi': 1,
            'dex': 332
        }, lambda: 1),
        'main': ddict({
            'type': 'bow',
            'base attack': 205,
            'base stability': 80,
            'refine': 15,
            'atk%': 10,
            'dex%': 5,
            'cd%': 10,
            'cd+': 20,
            'cr+': 21
        }),
        'main xtal': XTAL_W_MARDULA,
        'sub': ARROW_LOVE_ARROW,
        #'sub': ddict({}),
        'armor': ARMOR_DTECDCDCR,
        'armor xtal 1': XTAL_ANY_AGELADANIOS,
        'armor xtal 2': XTAL_ANY_BLACK_SHADOW,
        'light armor': ddict({
            'aspd%': 50
        }),
        'add': ADD_PHANTOM_THIEF_RICOTTA,
        'add xtal': XTAL_ANY_AGELADANIOS,
        'ring': RING_HALLUCINATION_SPORE,
        'ring xtal 1': XTAL_ANY_BLACK_SHADOW,
        'ring xtal 2': XTAL_RING_PATISSIA,
        'food': ddict({
            'watk+': 58,
            'cr+': 26,
            'ampr+': 26,
            'mp': 860
        }),
        'avatar 1': AVATAR_ACC_ATK,
        'avatar 2': AVATAR_TOP_AMPR,
        'avatar 3': AVATAR_BOT_CD,
        'masteries': ddict({
            'watk%': 30,
            'atk%': 3
        }),
        'battle skills': ddict({
            'atk+': 110,
            'cd%': 5,
            'cr+': 5
        }),
        'registlet': ddict({
            'atk+': 30,
            'mp': 100,
            'hp+': 1000
        }),
        'quick aura': ddict({
            'aspd%': 25,
            'aspd+': 500
        }),
        'gsw': ddict({
            'aspd+': 900,
            'motion%': 30
        }),
        'bushido': ddict({
            'mp': 50,
            'hp+': 50
        }),
        'brave aura': ddict({
            #'main watk%': 30
        }),
        'kakiri': ddict({
            #'atk+': 100
        }),
        'consumable': ddict({
            #'dte%': 5
        }),
        'matching ele': ddict({
            'dte%': 25
        }),
        'warcry': ddict({
            #'atk%': 10
        }),
        'enm': ddict({
            #'enemy def': -103
        })
    })

    example = DamageContext(EXAMPLE_CHARACTER, EXAMPLE_MONSTER, EXAMPLE_SKILL)
    print(example.calculate())