# pylint: skip-file
import sys, os
sys.path.insert(1, os.path.join(sys.path[0], '..'))

from Data import *
from DMG_Optimization import *

skill = ddict({
    'constant': lambda s: 100,
    'multiplier': lambda s: 16,
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'unsheathe',
    'crit': True,
    'others': 1.44,
    'combo': 1.5,
    'proration': 2.5
})

skills = [skill]

character_base = ddict({
    'sub': ddict({
        'type': 'scroll',
        'aspd+': 250,
        'cr+': 5
    }),
    'light arm': ddict({
        'aspd%': 50
    }),
    'food': ddict({
        'watk+': 58,
        'cr+': 30,
        'ampr+': 26,
        'str+': 22,
        'mp': 860
    }),
    'mastery': ddict({
        'atk%': 3,
        'watk%': 30,
        'hp+': 100,
        'mp': 100
    }),
    'two handed': ddict({
        'watk%': 10,
        'cr+': 10,
        'stability%': 10
    }),
    'battle skills': ddict({
        'atk+': 115,
        'cd%': 5,
        'cr+': 5
    }),
    'flash blast': ddict({
        'unsheathe%': 10
    }),
    'godspeed': ddict({
        'unsheathe%': 15
    }),
    'war cry': ddict({
        'atk%': 10
    }),
    'brave aura': ddict({
        'main watk%': 30
    }),
    'consumables': ddict({
        'dte%': 5,
        'atk%': 3,
        'ppierce%': 10
    })
})

KTN_STR = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'base attack': 156, 'type': 'katana', 'base stability': 70})
KTN_DEX = UPDATE_STATS(BOW_ADCDCDCR_CDD, {'base attack': 156, 'type': 'katana', 'base stability': 70})

KTN_DTE1 = UPDATE_STATS(KTN_DEX, {'dte%': 45, 'cd%': 0, 'dex%': 0, 'atk%': 10, 'cd+': 21})

DIE_STAT = UPDATE_STATS(BASE_STATS('str', 'dex'), {'dex': 297, 'str': 300})

items = ddict({
    'base stats': [BASE_STATS('str', 'dex'), BASE_STATS('dex', 'str'), DIE_STAT],
    'main': [KTN_DTE1, KTN_5TH_ANNIV],
    'armor': [ARMOR_DTECDCDCR, ARMOR_DTESCDCR],
    'add': [ADD_LACE_HEADRESS, ADD_SAND_BANDIT_MASK],
    'ring': [RING_MACHINA_RING],
    'avatar 1': [AVATAR_ACC_AMPR, AVATAR_ACC_PPIERCE, AVATAR_ACC_ATK],
    'avatar 2': [AVATAR_TOP_AMPR, AVATAR_TOP_PPIERCE, AVATAR_TOP_ATK],
    'avatar 3': [AVATAR_BOT_AMPR, AVATAR_BOT_PPIERCE, AVATAR_BOT_ATK, AVATAR_BOT_CD]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_HEXTER, XTAL_W_VULTURE, XTAL_ANY_TAPPLER], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ARM_DOC_POM, XTAL_ARM_GEMMA, XTAL_ANY_TAPPLER, XTAL_ARM_ARACHNIDEMON], 'slots': 2},
    'add xtal': {'choices': [XTAL_ANY_GRAVICEP, XTAL_ADD_ALFENIX, XTAL_ADD_BAPHOMELA, XTAL_ADD_ROYAL_OX_KING], 'slots': 1},
    'ring xtal': {'choices': [XTAL_ANY_BLACK_SHADOW, XTAL_ANY_GRAVICEP, XTAL_SPECTER_OF_DEATH, XTAL_ANY_TAPPLER], 'slots': 2}
})
