# pylint: skip-file
import sys
sys.path.append("../data")

from Data import *
from Build_Playground import target

skill = ddict({
    'constant': lambda s: 300,
    'multiplier': lambda s: 2*(4+(s['total str']+s['total dex']+s['total agi'])*0.2/100),
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5
})

skills = [skill]

character_base = ddict({
    'base stats': BASE_STATS('str', 'agi'),
    'sub': ddict({
        'type': '1h sword',
        'base attack': 370,
        'base stability': 80,
        'refine': 13
    }),
    'light armor': ddict({
        'aspd%': 50
    }),
    'food': ddict({
        'watk+': 58,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860,
        'str': 22
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
        'enemy def': -min(250, target['def']//2)
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

OHS1 = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'base attack': 390, 'cd%': 3})

OHS_DTE1 = UPDATE_STATS(ddict(), {'base attack': 380, 'dte%': 20, 'atk%': 11, 'cd%': 5, 'cd+': 21, 'cr+': 23, 'refine': 15, 'slots': 2, 'type': '1h sword', 'base stability': 80})
OHS_DTE2 = UPDATE_STATS(ddict(), {'base attack': 380, 'dte%': 20, 'atk%': 8, 'cd%': 10, 'cd+': 21, 'cr+': 23, 'refine': 15, 'slots': 2, 'type': '1h sword', 'base stability': 80})

ARMOR_DTE = UPDATE_STATS(ARMOR_DTESCDCR, {'slots': 2})

items = ddict({
    'base stats': [BASE_STATS('str', 'agi')],
    'main': [OHS_DTE1, OHS_DTE2, OHS_PCR],
    'armor': [ARMOR_DTE],
    'add': [ADD_COOKIE_EARRINGS, ADD_GLADIATOR_HELMET],
    'ring': [RING_HALLUCINATION_SPORE],
    'avatar 1': [AVATAR_ACC_AMPR, AVATAR_ACC_PPIERCE, AVATAR_ACC_ATK],
    'avatar 2': [AVATAR_TOP_AMPR, AVATAR_TOP_PPIERCE, AVATAR_TOP_ATK],
    'avatar 3': [AVATAR_BOT_AMPR, AVATAR_BOT_PPIERCE, AVATAR_BOT_ATK, AVATAR_BOT_CD]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_HEXTER, XTAL_W_CLAWED_IRON_WITCH, XTAL_W_MARDULA, XTAL_W_BLANCANINE], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ARM_DOC_POM, XTAL_ARM_ARACHNIDEMON, XTAL_ANY_AGELADANIOS, XTAL_ANY_BLACK_SHADOW], 'slots': 2},
    'add xtal': {'choices': [XTAL_ANY_GRAVICEP, XTAL_ADD_ALFENIX, XTAL_ADD_ROYAL_OX_KING, XTAL_ADD_DARK_LORD], 'slots': 2},
    'ring xtal': {'choices': [XTAL_RING_PATISSIA, XTAL_ANY_BLACK_SHADOW, XTAL_ANY_GRAVICEP, XTAL_ANY_AGELADANIOS], 'slots': 2}
})
