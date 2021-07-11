# Python3 syntax, don't run on Python2
import collections

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

    def calculate (self):
        myStats = ddict()

        for key in self.character:
            for stat in self.character[key]:
                try:
                    myStats[stat] += self.character[key][stat]
                except TypeError:
                    myStats[stat] = self.character[key][stat]

        for stat in ['str', 'dex', 'int', 'agi', 'vit']:
            myStats['total '+stat] = max(1, myStats[stat])*(100+myStats[stat+'%'])//100+myStats[stat+'+']

        mainWATK = max(1, self.character['main']['base attack'])
        mainRefine = self.character['main']['refine']
        mainStability = self.character['main']['base stability']
        mainATK = mainWATK*(100+mainRefine**2)//100+mainRefine+mainWATK*myStats['watk%']//100+myStats['watk+']
        mainSpecifics = self.mainStats(myStats, mainATK)
        
        return mainSpecifics['ATK']

    def mainStats (self, stats, weaponATK):
        main = self.character['main']['type'] if self.character['main']['type'] != 0 else 'Bare Hand'
        sub = self.character['main']['type'] if self.character['sub']['type'] != 0 else 'Bare Hand'
        Lv, STR, DEX, INT, AGI = stats['level'], stats['str'], stats['dex'], stats['int'], stats['agi']
        
        if main == "1H Sword" and sub != "1H Sword":
            ATK = Lv + STR*2 + DEX*2 + weaponATK
            MATK = Lv + INT*3 + DEX
            stability = (STR+DEX*3)/40
            ASPD = 100 + Lv + AGI*4 + (AGI+STR-1)*0.2
        elif main == "2H Sword":
            ATK = Lv + STR*3 + DEX + weaponATK
            MATK = Lv + INT*3 + DEX + 1
            stability = DEX*0.1
            ASPD = 50 + Lv + AGI*2 + (AGI+STR-1)*0.2
        elif main == "1H Sword" and sub == "1H Sword":
            ATK = Lv + STR + DEX*2 + AGI + weaponATK
            MATK = Lv + INT*3 + DEX
            stability = (STR + DEX*3)/40
            ASPD = 100 + Lv + AGI*4 + (STR+AGI-1)*0.2
        elif main == "Bow":
            ATK = Lv + STR + DEX*3 + weaponATK
            MATK = Lv + INT*3 + DEX
            stability = (STR+DEX)/20
            ASPD = 75 + Lv + AGI*3.1 + (AGI + DEX*2 -1)*0.1
        elif main == "Bowgun":
            ATK = Lv + DEX*4 + weaponATK
            MATK = Lv + INT*3 + DEX
            stability = STR*0.05
            ASPD = 30 + Lv + AGI*2.2 + DEX*0.2
        elif main == "Staff":
            ATK = Lv + STR*3 + INT + weaponATK
            MATK = Lv + INT*4 + DEX + weaponATK
            stability = STR*0.05
            ASPD = 60.6 + Lv + INT*0.2 + AGI*1.8
        elif main == "Magic Device":
            ATK = Lv + INT*2 + AGI*2 + weaponATK
            MATK = Lv + INT*4 + DEX + weaponATK
            stability = DEX*0.1
            ASPD = 90 + Lv + AGI*4 + (INT-1)*0.2
        elif main == "Knuckle":
            ATK = Lv + AGI*2 + DEX*0.5 + weaponATK
            MATK = Lv + INT*4 + DEX + weaponATK*0.5
            stability = DEX*0.025
            ASPD = 120 + Lv + AGI*4.6 + DEX*0.1 + STR*0.1
        elif main == "Halberd":
            ATK = Lv + STR*2.5 + AGI*1.5 + weaponATK
            MATK = Lv + INT*2 + DEX + AGI
            stability = (STR+DEX)/20
            ASPD = 25 + Lv + AGI*3.5 + STR*0.2
        elif main == "Katana":
            ATK = Lv + STR*1.5 + DEX*2.5 + weaponATK
            MATK = Lv + INT*1.5 + DEX
            stability = (STR*3+DEX)/40
            ASPD = 200 + Lv + AGI*3.9 + STR*0.3
        elif main == "Bare Hand":
            ATK = Lv + STR + 1
            MATK = Lv + INT*3 + DEX + 1
            stability = 0 
            ASPD = 1000 + Lv + AGI*9.6
            
        return ddict({'ATK': ATK, 'MATK': MATK, 'stability': stability, 'ASPD': ASPD})

EXAMPLE_CHARACTER = ddict({
    'base stats': ddict({
        'level': 230,
        'str': 350,
        'dex': 247
    }),
    'main': ddict({
        'type': '2H Sword',
        'base attack': 490,
        'base stability': 70
    }),
    'sub': ddict()
})

example = DamageContext(EXAMPLE_CHARACTER, {}, {})
print(example.calculate())
