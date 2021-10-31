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
    'others': 1.2,
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
        'watk+': 72,
        'cr+': 30,
        'ampr+': 30,
        'dte%': 11,
        'mp': 1000
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
        'atk+': 116,
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
        'mp': 300,
        'aspd+': 750+100
    }),
    'sicarius': ddict({
        'ppierce%': 25,
        'atk+': 100
    }),
    'kakiri': ddict({
        'atk+': 100
    })
})

KTN_STR = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'base attack': 156, 'type': 'katana', 'base stability': 70})
KTN_DEX = UPDATE_STATS(BOW_ADCDCDCR_CDD, {'base attack': 156, 'type': 'katana', 'base stability': 70, 'dex%': 5})

KTN_DTE1 = ddict({
    'base attack': 156, 
    'type': 'katana', 
    'base stability': 70,
    'refine': 15,
    'dte%': 45,
    'atk%': 10,
    'cd+': 20,
    'cr+': 23
})

items = ddict({
    'base stats': [dUS(BASE_STATS('dex', 'str'), {'str': 260, 'dex': 352})],
    'main': [KTN_DTE1],
    'armor': [ARMOR_ACDCDCR, ARMOR_ASCDCR],
    'add': [ADD_SAND_BANDIT_MASK],
    'ring': [RING_TIME_WARP_WATCH],
    'avatar 1': [AVATAR_ACC_PP_AMPR],
    'avatar 2': [AVATAR_TOP_PPIERCE],
    'avatar 3': [AVATAR_BOT_PPIERCE],
    'potion':[POTION_PEN_OIL]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_CRIMSOM_EYED_WOLF, XTAL_W_DEVIL_DANGO], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ARM_DOC_POM, XTAL_ARM_GEMMA, XTAL_ARM_ARACHNIDEMON, XTAL_ANY_AGELADANIOS, XTAL_ARM_USAMOCHI], 'slots': 2},
    'add xtal': {'choices': [XTAL_ADD_ROYAL_OX_KING, XTAL_ADD_ALFENIX, XTAL_ADD_BAPHOMELA, XTAL_ANY_TAPPLER], 'slots': 2},
    'ring xtal': {'choices': [XTAL_ANY_BLACK_SHADOW, XTAL_ANY_GRAVICEP, XTAL_ANY_TAPPLER], 'slots': 2}
})
