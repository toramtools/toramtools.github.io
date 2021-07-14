# Python3 syntax, don't run on Python2
import collections, math

ddict = lambda aDict={}, aDefault=lambda: 0: collections.defaultdict(aDefault, aDict)

class DamageContext:
    def __init__ (self, character, monster, skill):
        self.character = ddict(character)
        self.monster = ddict(monster)
        self.skill = ddict(skill)

    def updateCharacter (self, character):
        for key in character.keys():
            self.character[key] = character[key]

    def updateMonster (self, monster):
        for key in monster.keys():
            self.monster[key] = monster[key]

    def updateSkill (self, skill):
        for key in skill.keys():
            self.skill[key] = skill[key]

    def calculateStats (self):
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
        subType = self.character['main']['type'] if self.character['sub']['type'] != 0 else 'bare hand'
        
        if mainType == '1h sword' and subType == '1h sword':
            effectiveATK = mainSpecifics['atk']*(100+myStats['atk%'])/100+myStats['atk+']
            effectiveATK += (subSpecifics['substability']/100)*(subSpecifics['subatk']*(100+myStats['atk%']/100)+myStats['atk+'])
        else:
            effectiveATK = (mainSpecifics['atk']+subSpecifics['subatk'])*(100+myStats['atk%'])/100+myStats['atk+']

        effectiveATK = int(effectiveATK)

        CDMG = (150+myStats['total str']//5)*(100+myStats['cd%'])//100+myStats['cd+']
        if CDMG > 300:
            CDMG = 300+(CDMG-300)//2
        
        self.stats = myStats
        
        return effectiveATK

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
            
        return ddict({'atk': ATK+2, 'matk': MATK, 'stability': stability, 'aspd': ASPD})

    def subStats (self, stats):
        main = self.character['main']['type'] if self.character['main']['type'] != 0 else 'bare hand'
        sub = self.character['main']['type'] if self.character['sub']['type'] != 0 else 'bare hand'
        Lv, STR, DEX, INT, AGI = stats['level'], stats['total str'], stats['total dex'], stats['total int'], stats['total agi']
        
        subWATK = max(1, self.character['sub']['base attack'])
        subRefine = self.character['sub']['refine']
        subBaseStability = self.character['sub']['base stability']

        if main == 'bow' and sub == 'arrow':
            subATK = subWATK
            subStability = subBaseStability
        elif main == 'bowgun' and sub == 'arrow':
            subATK = subWATK
            subStability = subBaseStability//2
        elif main == '1h sword' and sub == '1h sword':
            subATK = subWATK*(200+subRefine**2)//200+subRefine+subWATK*stats['watk%']//100+stats['watk+']
            subStability = subBaseStability//2+(STR*3+AGI*2)/50
        else:
            subATK = 0
            subStability = 0

        return ddict({'subatk': subATK, 'substability': subStability})

# My Knuckles
EXAMPLE_CHARACTER = ddict({
    'base stats': ddict({
        'level': 224,
        'str': 220,
        'int': 1,
        'vit': 1,
        'agi': 338,
        'dex': 1,
        'crt': 28
    }, lambda: 1),
    'main': ddict({
        'type': 'knuckles',
        'base attack': 300,
        'base stability': 90,
        'refine': 15
    }),
    'main xtal': ddict({
        'atk%': 5,
        'agi%': 5
    }),
    'sub': ddict({
    }),
    'armor': ddict({
        'atk%': 7
    }),
    'armor xtal': ddict({
        'atk%': 6
    }),
    'add': ddict({
        'atk+': 202
    }),
    'add xtal': ddict({
        'atk%': 5
    }),
    'ring': ddict({
        #'dex%': -100,
        #'agi%': -100
    }),
    'ring xtal': ddict({
        'atk%': 8
    }),
    'food': ddict({
        'watk+': 56,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860,
        'str+': 22
    }),
    'avatars': ddict({
        'agi+': 6
    }),
    'skills': ddict({
        'atk+': 112,
        'watk%': 30,
        'atk%': 3
    }),
    'registlet': ddict({
        'atk+': 30
    })
})

example = DamageContext(EXAMPLE_CHARACTER, {}, {})
print(example.calculateStats())
