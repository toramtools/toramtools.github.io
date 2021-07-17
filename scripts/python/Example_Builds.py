import collections

ddict = lambda aDict={}, aDefault=lambda: 0: collections.defaultdict(aDefault, aDict)

DON_YETI = ddict({
    'level': 103,
    'def': 206,
    'mdef': 0,
    'pres%': 4,
    'mres%': 0
})

SC = ddict({
    'constant': lambda s: 300,
    'multiplier': lambda s: 4+(s['total str']+s['total dex']+s['total agi'])*0.2/100,
    #'constant': lambda s: 150,
    #'multiplier': lambda s: 2,
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1,
    'combo': 1.5,
    'proration': 2.5,
})

TESTING = ddict({
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
        'base attack': 152,
        'base stability': 100,
        'refine': 13,
    }),
    'main xtal': ddict({
    }),
    'sub': ddict({
        'type': '1h sword',
        'base attack': 301,
        'base stability': 80,
        'refine': 13
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
    'add xtal': ddict({
        'atk%': 4,
        'srd%': 3,
        'asdp%': 20
    }),
    'ring': ddict({
    }),
    'food': ddict({
        'watk+': 58,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860
    }),
    'avatars': ddict({
        'ampr+': 21,
        #'agi+': 6
    }),
    'masteries': ddict({
        'watk%': 30,
        'atk%': 3,
        'aspd+': 500+50,
        'aspd%': 5,
        'cr%': 10,
        'agi+': 15,
        'unsheathe%': 25
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
    'brave aura': ddict({
        #'main watk%': 30
    }),
    'twin slash': ddict({
        #'cd+': 75
    })
})

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
        'watk+': 58,
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
        'watk+': 58,
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