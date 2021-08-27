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
        'base attack': 367,
        'base stability': 80,
        'refine': 13
    }),
    'light armor': ddict({
        'aspd%': 50
    }),
    'food': ddict({
        'watk+': 58,
        'cr+': 30,
        'mp': 1000,
        'str+': 30,
        'ampr+': 30
    }),
    'masteries': ddict({
        'watk%': 30,
        'atk%': 3,
        'aspd+': 500+100,
        'aspd%': 10,
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
        'aspd+': 750
    }),
    'flash blast': ddict({
        'main watk%': 25
    }),
    'quick aura': ddict({
        'aspd+': 500,
        'aspd%': 25
    }),
    'gsw': ddict({
        #'motion%': 30,
        #'aspd+': 900
    }),
    'matching ele': ddict({
        #'dte%': 25
    })
})

BERSERK = ddict({
    'aspd+': 1000,
    'aspd%': 100,
    'cr+': 25,
    'main stability%': -25
})

OHS1 = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'base attack': 390, 'cd+': 20})
OHS2 = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'base attack': 390, 'atk%': 10, 'str%': 5, 'cd%': 10})
OHS3 = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'base attack': 390, 'atk%': 10, 'str%': 0, 'cd%': 10, 'dex%': 5})

OHS_DTE1 = UPDATE_STATS(ddict(), {'base attack': 385, 'dte%': 20, 'atk%': 11, 'cd%': 5, 'cd+': 21, 'cr+': 23, 'refine': 15, 'slots': 2, 'type': '1h sword', 'base stability': 80})
OHS_DTE2 = UPDATE_STATS(ddict(), {'base attack': 385, 'dte%': 20, 'atk%': 7, 'cd%': 10, 'cd+': 21, 'cr+': 23, 'refine': 15, 'slots': 2, 'type': '1h sword', 'base stability': 80})

ARMOR_DTE1 = UPDATE_STATS(ARMOR_DTESCDCR, {'slots': 2})
ARMOR_DTE2 = UPDATE_STATS(ARMOR_DTECDCDCR, {'slots': 0, 'dte%': 20, 'cd%': 9, 'cd+': 28, 'atk%': 14, 'motion%': -1, 'mp': -150, 'ampr+': 3})
ARMOR_DTE3 = UPDATE_STATS(ARMOR_DTESCDCR, {'slots': 2, 'str%': 0, 'atk%': 10, 'dte%': 10, 'cd+': 20})

BALANCED_STATS = UPDATE_STATS(BASE_STATS('str', 'agi'), {'str': 300, 'agi': 297})
CUSTOM_STAT = UPDATE_STATS(BASE_STATS('str', 'agi'), {'agi': 128, 'dex': 87})

items = ddict({
    'base stats': [BASE_STATS('str', 'agi'), BALANCED_STATS],
    'main': [OHS_ASCDCDCR_SCD, OHS_PCR],
    'armor': [ARMOR_ACDCDCR, ARMOR_ASCDCR],
    'add': [ADD_COOKIE_EARRINGS, ADD_ACHING_RIGHT_ARM, ADD_GLADIATOR_HELMET],
    'ring': [RING_GLOWING_SEA_TALISMAN, RING_DARK_POWER],
    'avatar 1': [AVATAR_ACC_PPIERCE, AVATAR_ACC_ATK],
    'avatar 2': [AVATAR_TOP_PPIERCE, AVATAR_TOP_SRD, AVATAR_TOP_ATK],
    'avatar 3': [AVATAR_BOT_PPIERCE, AVATAR_BOT_ATK],
    'berserk': [BERSERK, ddict({})],
    'attack buff': [ddict({'atk%': 4, 'atk+': 40}), ddict({'atk%': 3, 'ppierce%': 10})],
    'cp': [ddict({'atk%': 10, 'aspd%': 100})]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_HEXTER, XTAL_W_BLANCANINE], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ARM_DOC_POM, XTAL_ARM_GOPHERGA], 'slots': 2},
    'add xtal': {'choices': [XTAL_ADD_DARK_LORD, XTAL_ADD_MEGA_ALPOCA, XTAL_ADD_WANDERING_WHEEL, XTAL_ADD_ALFENIX, XTAL_ADD_ROYAL_OX_KING], 'slots': 2},
    'ring xtal': {'choices': [XTAL_ANY_BLACK_SHADOW, XTAL_ANY_GRAVICEP, XTAL_ANY_AGELADANIOS], 'slots': 2}
})
