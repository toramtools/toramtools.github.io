# pylint: skip-file
from Build_Playground import target
from Data import *
import sys
sys.path.append("../data")


skill1 = ddict({
    'constant': lambda s: 600,
    'multiplier': lambda s: 8+s['str']/1000,
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.2*1.2,
    'combo': 1.5,
    'proration': 2.5
})

skill2 = ddict({
    'constant': lambda s: 0,
    'multiplier': lambda s: 6,
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.2*1.2,
    'combo': 1.5,
    'proration': 2.5
})

skills = [skill1, skill2]

character_base = ddict({
    'main': ddict({
        #'type': '2h sword',
        #'base attack': 2,
        #'base stability': 100,
        #'refine': 0,
        #'cd+': 99
    }),
    'sub': ddict({
        'type': 'bare hand'
    }),
    'light armor': ddict({
        'aspd%': 50
    }),
    'food': ddict({
        'watk+': 72,
        'cr+': 30,
        'mp': 1000,
        'ampr+': 30,
        'dte%': 13
    }),
    'masteries': ddict({
        'watk%': 30,
        'atk%': 3,
        'aspd+': 50,
        'aspd%': 5
    }),
    'battle skills': ddict({
        'atk+': 116,
        'cd%': 5,
        'cr+': 5
    }),
    'registlet': ddict({
        'atk+': 30,
        'mp': 100,
        'hp+': 1000,
        'aspd+': 100
    }),
    'bushido': ddict({
        'mp': 50,
        'hp+': 50
    }),
    'warcry': ddict({
        'atk%': 15
    }),
    'consumables': ddict({
        'dte%': 5,
        'mp': 300,
        'aspd+': 1000+100
    }),
    'quick aura': ddict({
        'aspd+': 500,
        'aspd%': 25
    }),
    'gsw': ddict({
        'motion%': 30,
        'aspd+': 900
    }),
    'two handed': ddict({
        'watk%': 10,
        'cr+': 5,
        'stability%': 5
    }),
    'kakiri': ddict({
        'atk+': 100
    }),
    'pet skills': ddict({
        'atk%': 10,
        'atk+': 75,
        'aspd%': 20,
        'aspd+': 300
    }),
    'brave aura': ddict({
        'main watk%': 30
    })
})

THS_DTE1 = ddict({
    'type': '2h sword',
    'base attack': 585,
    'base stability': 70,
    'refine': 15,
    'dte%': 46,
    'atk%': 11,
    'cd%': 10
})

THS_DTE3 = ddict({
    'type': '2h sword',
    'base attack': 585,
    'base stability': 70,
    'refine': 15,
    'dte%': 46,
    'atk%': 11,
    'str%': 10
})

THS_DTE2 = ddict({
    'type': '2h sword',
    'base attack': 585,
    'base stability': 70,
    'refine': 15,
    'dte%': 45,
    'atk%': 10,
    'cd+': 20,
    'cr+': 23
})

GLAD2S = ATTACH_XTALS(ADD_GLADIATOR_HELMET_MOB, [XTAL_ADD_ROYAL_OX_KING, XTAL_ADD_JUNIOR])

items = ddict({
    'base stats': [BASE_STATS('str', 'dex')],
    'main': [THS_DTE3, THS_DTE1, THS_DTE2],
    'armor': [ARMOR_DTESCDCR, ARMOR_DTECDCDCR],
    'add': [ADD_ACHING_RIGHT_ARM, ADD_CRESCENT_MOON_HELMET],
    'ring': [RING_GLOWING_SEA_TALISMAN],
    'avatar 1': [AVATAR_ACC_SRD, AVATAR_ACC_PP_AMPR],
    'avatar 2': [AVATAR_TOP_SRD, AVATAR_TOP_PPIERCE],
    'avatar 3': [AVATAR_TOP_SRD, AVATAR_BOT_PPIERCE],
    'berserk': [SKILL_ACTIVE_BERSERK_THS],
    'attack buff': [POTION_PEN_OIL],
    #'cp': [ddict({'atk%': 10, 'aspd%': 100})]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_HEXTER, XTAL_W_DEVIL_DANGO], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ANY_AGELADANIOS, XTAL_ARM_ARACHNIDEMON, XTAL_ARM_DOC_POM, XTAL_ANY_BLACK_SHADOW], 'slots': 2},
    'add xtal': {'choices': [XTAL_ADD_DARK_LORD, XTAL_ADD_ROYAL_OX_KING, XTAL_ADD_ALFENIX, XTAL_ADD_JUNIOR], 'slots': 2},
    'ring xtal': {'choices': [XTAL_ANY_BLACK_SHADOW, XTAL_ANY_GRAVICEP, XTAL_ANY_AGELADANIOS], 'slots': 2},
    #'food choice': {'choices': [ddict({'str+': 30}), ddict({'agi+': 30})], 'slots': 1}
})
