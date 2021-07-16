import collections

ddict = lambda aDict={}, aDefault=lambda: 0: collections.defaultdict(aDefault, aDict)

KNUCKLES = ddict({
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
        'base attack': 450,
        'base stability': 90,
        'refine': 15,
        'aspd%': 100,
        'ampr+': 20,
        'element': 'light'
    }),
    'main xtal': ddict({
        'atk%': 5,
        'agi%': 5
    }),
    'sub': ddict({
        'cd+': 3,
        'cd%': 3
    }),
    'armor': ddict({
        'atk%': 7,
        'cd%': 10,
        'cd+': 20,
        'cr+': 22
    }),
    'light armor': ddict({
        'aspd%': 50
    }),
    'armor xtal': ddict({
        'atk%': 6,
        'cd+': 8,
        'motion%': -1,
        'ampr+': 10
    }),
    'add': ddict({
        'atk+': 202,
        'ampr+': 7,
        'cr+': 25
    }),
    'add xtal': ddict({
        'atk%': 5,
        'aspd%': 75,
        'lrd%': -14
    }),
    'ring': ddict({
        'mp': 500,
        'tumble': 1
        #'dex%': -100,
        #'agi%': -100
    }),
    'ring xtal': ddict({
        'atk%': 8,
        'ampr+': 3,
        'mp': -150,
        'ampr+': 15
    }),
    'food': ddict({
        'watk+': 56,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860,
        'str+': 22
    }),
    'avatars': ddict({
        'ampr+': 21,
        'agi+': 6
    }),
    'martial mastery 10': ddict({
        'watk%': 30,
        'atk%': 3
    }),
    'martial discipline 10': ddict({
        'aspd+': 100,
        'aspd%': 10
    }),
    'battle skills 10': ddict({
        'atk+': 112,
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
    'bushido': ddict({
        'mp': 50,
        'hp+': 50
    }),
})

DW = ddict({
    'base stats': ddict({
        'level': 230,
        'str': 350,
        'int': 1,
        'vit': 1,
        'agi': 247,
        'dex': 1
    }, lambda: 1),
    'main': ddict({
        'type': '1h sword',
        'base attack': 385,
        'base stability': 80,
        'refine': 15,
        'atk%': 10,
        'str%': 7,
        'cd%': 10,
        'cd+': 20,
        'cr+': 23
    }),
    'main xtal': ddict({
        'atk%': 8,
        'str%': 6,
        'cr%': 6
    }),
    'sub': ddict({
        'type': '1h sword',
        'base attack': 370,
        'base stability': 80,
        'refine': 13,
        'dmg to earth%': 25
    }),
    'armor': ddict({
        'atk%': 7,
        'cd%': 10,
        'cd+': 20,
        'cr+': 22
    }),
    'light armor': ddict({
        'aspd%': 50
    }),
    'armor xtal 1': ddict({
        'hp+': 3000,
        'srd%': 6
    }),
    'armor xtal 2': ddict({
        'srd%': 7,
        'cr%': 7
    }),
    'add': ddict({
        'hp%': 25,
        'cr+': 5,
        'stability%': 15
    }),
    'add xtal': ddict({
        'atk%': 5,
        'aspd%': 20,
        'srd%': 3
    }),
    'ring': ddict({
        'mp': 500,
        'tumble': 1
        #'dex%': -100,
        #'agi%': -100
    }),
    'ring xtal 1': ddict({
        'atk%': 8,
        'ampr+': 3,
        'mp': -150,
    }),
    'ring xtal 2': ddict({
        'atk%': 6,
        'cd+': 8,
        'motion%': -1
    }),
    'food': ddict({
        'watk+': 56,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860,
        'str+': 22
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
        #'agi+': 15
    }),
    'battle skills': ddict({
        'atk+': 115,
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
})