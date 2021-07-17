from DMG_Optimization import *
import itertools

# kuzto
target = ddict({
    'level': 218,
    'def': 3320,
    'mdef': 0,
    'pres%': 7,
    'mres%': 0
})

skill = ddict({
    'constant': lambda s: 300,
    'multiplier': lambda s: 2*(4+(s['total str']+s['total dex']+s['total agi'])*0.2/100),
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5
})

character_base = ddict({
    'base stats': ddict({
        'level': 230,
        'str': 350,
        'int': 1,
        'vit': 1,
        'agi': 247,
        'dex': 1
    }, lambda: 1),
    'main': ddict({
    }),
    'main xtal': ddict({
    }),
    'sub': ddict({
        'type': '1h sword',
        'base attack': 370,
        'base stability': 80,
        'refine': 13
    }),
    'armor': ddict({
    }),
    'light armor': ddict({
        'aspd%': 50
    }),
    'add': ddict({
    }),
    'add xtal': ddict({
    }),
    'ring': ddict({
        'mp': 500,
        'tumble': 1
    }),
    'food': ddict({
        'watk+': 58,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860,
        'str': 22
    }),
    'avatars': ddict({
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
        'atk+': 115,
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
        'main watk%': 30
    }),
    'matching ele': ddict({
        'dte%': 25
    }),
    'enm': ddict({
        'enemy def': -250
    }),
    'berserk': ddict({
        'aspd+': 1000,
        'aspd%': 100,
        'cr+': 25,
        'main stability%': -25
    }),
    'warcry': ddict({
        'atk%': 10
    }),
    'consumables': ddict({
        'dte%': 5,
        'atk%': 3,
        'ppierce%': 10
    }),
    'flash blast': ddict({
        'main watk%': 25
    })
})

iterate = ddict({
    'main': [
        ddict({
            'type': '1h sword',
            'base attack': 385,
            'base stability': 80,
            'refine': 15,
            'atk%': 10,
            'cd%': 5,
            'str%': 10,
            'cd+': 20,
            'cr+': 23
        }),
        ddict({
            'type': '1h sword',
            'base attack': 289,
            'base stability': 60,
            'refine': 15,
            'ppierce%': 70,
            'aspd%': -10,
            'ampr+': 1,
            'cr%': 140,
            'mp:': 40
        }),
        ddict({
            'type': '1h sword',
            'base attack': 385,
            'base stability': 80,
            'refine': 15,
            'atk%': 10,
            'cd%': 10,
            'str%': 5,
            'cd+': 20,
            'cr+': 23
        }),
        ddict({
            'type': '1h sword',
            'base attack': 385,
            'base stability': 80,
            'refine': 15,
            'str%': 8,
            'srd%': 8,
            'cr+': 20,
            'ampr+': 15
        })
    ],
    'main xtal': [
        ddict({
            'srd%': 5,
            'ampr+': 10
        }),
        ddict({
            'atk%': 8,
            'str%': 6,
            'cr%': 6
        })
    ],
    'armor': [
        ddict({
            'dte%': 20,
            'cd%': 9,
            'cd+': 20,
            'cr+': 23
        }),
        ddict({
            'atk%': 11,
            'cd%': 10,
            'cd+': 21,
            'cr+': 23
        }),
        ddict({
            'dte%': 21,
            'str%': 10,
            'cd+': 21,
            'cr+': 23
        }),
        ddict({
            'atk%': 11,
            'str%': 10,
            'cd+': 21,
            'cr+': 23
        })
    ], 
    'armor xtal 1': [
        ddict({
            'ampr+': 10
        }),
        ddict({
            'srd%': 7,
            'cr%': 7
        }),
        ddict({
            'hp+': 3000,
            'srd%': 6
        }),
        ddict({
            'atk%': 8,
            'ampr+': 3,
            'mp': -150
        }),
        ddict({
            'atk%': 6,
            'cd': 8,
            'motion%': -1
        })
    ],
    'armor xtal 2': [
        ddict({
            'ampr+': 10
        }),
        ddict({
            'srd%': 7,
            'cr%': 7
        }),
        ddict({
            'hp+': 3000,
            'srd%': 6
        }),
        ddict({
            'atk%': 8,
            'ampr+': 3,
            'mp': -150
        }),
        ddict({
            'atk%': 6,
            'cd': 8,
            'motion%': -1
        })
    ],
    'add': [
        ddict({
            'atk%': 8,
            'str%': 7
        }),
        ddict({
            'stability%': 15,
            'cr+': 5,
            'hp%': 25
        }),
        ddict({
            'stability%': 10,
            'ppierce%': 10
        })
    ],
    'add xtal 1': [
        ddict({
            'ppierce%': 10,
            'atk%': 3
        }),
        ddict({
            'atk%': 5,
            'srd%': 3,
            'aspd%': 20
        })
    ],
    'ring xtal 1': [
        ddict({
            'atk%': 8,
            'ampr+': 3,
            'mp': -150
        }),
        ddict({
            'atk%': 6,
            'cd': 8,
            'motion%': -1
        }),
        ddict({
            'ampr+': 15
        })
    ],
    'ring xtal 2': [
        ddict({
            'atk%': 8,
            'ampr+': 3,
            'mp': -150
        }),
        ddict({
            'atk%': 6,
            'cd': 8,
            'motion%': -1
        }),
        ddict({
            'ampr+': 15
        })
    ],
    'avatars': [
        ddict({
            'ppierce%': 23,
            'str': 10
        }),
        ddict({
            'ampr+': 21,
            'agi': 6
        })
    ]
})

allBuilds = itertools.product(iterate['main'], iterate['main xtal'], iterate['armor'], iterate['armor xtal 1'], iterate['armor xtal 2'], iterate['add'], iterate['add xtal 1'], iterate['ring xtal 1'], iterate['ring xtal 2'], iterate['avatars'])

best = []
counter = 0

for build in allBuilds:
    counter += 1

    if build[3] == build[4] or build[7] == build[8]:
        continue

    for idx, field in enumerate(['main', 'main xtal', 'armor', 'armor xtal 1', 'armor xtal 2', 'add', 'add xtal 1', 'ring xtal 1', 'ring xtal 2', 'avatars']):
        character_base[field] = build[idx]
    
    dmg = DamageContext(character_base, target, skill)
    result = dmg.calculate()
    
    if result['ampr'] >= 100:
        best.append([result['average damage'], dmg.character])

best.sort(key = lambda x: x[0])
print("There are %s item combinations for selected items;" % counter)
print("There are %s combinations which satisfy minimum requirements;" % len(best))
print("The best among them is %s." % best[-1])
ignorance = DamageContext(best[-1][1], target, skill)
print(ignorance.calculate())