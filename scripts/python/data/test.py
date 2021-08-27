# pylint: skip-file
from Build_Playground import target
from Data import *
import sys
sys.path.append("../data")


skill1 = ddict({
    'constant': lambda s: 300,
    'multiplier': lambda s: 1*(4+(s['total str']+s['total dex']+s['total agi'])*0.2/100),
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5
})

skills = [skill1]

character_base = ddict({
    'main': ddict({
        #'type': '2h sword',
        #'base attack': 2,
        #'base stability': 100,
        #'refine': 0,
        #'cd+': 99
    }),
    'sub': ddict({
        'type': '1h sword',
        'base attack': 390,
        'base stability': 80,
        'refine': 15
    }),
    'light armor': ddict({
        'aspd%': 50
    }),
    'food': ddict({
        'watk+': 100,
        'cr+': 30,
        'str+': 30,
        'agi+': 30,
        'ampr+': 30
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
        'atk+': 114,
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
    'warcry': ddict({
        'atk%': 10
    }),
    'consumables': ddict({
        'dte%': 5,
        'mp': 300,
        'atk%': 5,
        'atk+': 50
    }),
    'flash blast': ddict({
        'main watk%': 25
    }),
    'quick aura': ddict({
        'aspd+': 500,
        'aspd%': 25
    }),
    'gsw': ddict({
        'motion%': 30,
        'aspd+': 900
    }),
    'matching ele': ddict({
        'dte%': 25
    }),
    'enm': ddict({
        'enemy def': -87
    })
})

BERSERK = ddict({
    'aspd+': 1000,
    'aspd%': 100,
    'cr+': 25,
    'main stability%': -25
})

OHS = ddict({
    'type': '1h sword',
    'base stability': 80,
    'refine': 15,
    'base attack': 395,
    'cr+': 23,
    'cd+': 21,
    'atk%': 10,
    'agi%': 7,
    'dte%': 21
})

OHS2 = UPDATE_STATS(OHS, {'dte%': 0, 'cd%': 10})

ARMOR = ddict({
    'dte%': 21,
    'agi%': 10,
    'cd+': 21,
    'cr+': 23
})

items = ddict({
    'base stats': [UPDATE_STATS(BASE_STATS('agi', 'str'), {'agi': 300, 'str': 297, 'level': 230})],
    'main': [OHS2],
    'armor': [ARMOR_ACDCDCR, ARMOR],
    'add': [ADD_GLADIATOR_HELMET, ADD_COOKIE_EARRINGS],
    'ring': [ddict({'mp': 600, 'str+': 10}), RING_GLOWING_SEA_TALISMAN],
    #'avatar 1': [ddict({'stability%': 3, 'srd%': 2})],
    #'avatar 2': [ddict({'cd+': 4, 'atk%': 3})],
    #'avatar 3': [ddict({'stability%': 2, 'agi%': 3, 'cr+': 2})],
    'avatar 1': [AVATAR_ACC_PPIERCE, AVATAR_ACC_ATK],
    'avatar 2': [AVATAR_TOP_PPIERCE, AVATAR_TOP_SRD, AVATAR_TOP_ATK],
    'avatar 3': [AVATAR_BOT_PPIERCE, AVATAR_BOT_ATK],
    'berserk': [BERSERK, ddict({})]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_HEXTER, XTAL_W_BLANCANINE], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ANY_AGELADANIOS, XTAL_ANY_GRAVICEP], 'slots': 2},
    'add xtal': {'choices': [XTAL_ANY_AGELADANIOS, XTAL_ADD_ROYAL_OX_KING], 'slots': 2},
    'ring xtal': {'choices': [XTAL_ANY_GRAVICEP, XTAL_ANY_AGELADANIOS], 'slots': 2}
})
