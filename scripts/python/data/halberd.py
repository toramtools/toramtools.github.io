# pylint: skip-file
from Build_Playground import target
from Data import *
import sys
sys.path.append("../data")


skill1 = ddict({
    'constant': lambda s: 0,
    'multiplier': lambda s: 1*7.5,
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5,
    'stats': ddict({
        'ppierce%': 100
    })
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
    'sub': DAGGER_FALLEN_ANGEL,
    'light armor': ddict({
        'aspd%': 50
    }),
    'food': ddict({
        'dte%': 11,
        'cr+': 30,
        'mp': 1000,
        'str+': 30,
        'ampr+': 30
    }),
    'masteries': ddict({
        'watk%': 30,
        'atk%': 3,
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
    'quick aura': ddict({
        'aspd+': 500,
        'aspd%': 25
    }),
    'gsw': ddict({
        'motion%': 30,
        'aspd+': 1200
    }),
    'kakiri': ddict({
        'atk+': 100
    }),
    'pet skills': ddict({
        'atk%': 10,
        'atk+': 75
    })
})

HB_DTE1 = ddict({
    'type': 'halberd',
    'base stability': 60,
    'base attack': 616,
    'refine': 15,
    'dte%': 46,
    'cd+': 21,
    'atk%': 11,
    'cr+': 23
})

items = ddict({
    'base stats': [BASE_STATS('str', 'agi')],
    'main': [HB_DTE1],
    'armor': [ARMOR_DTECDCDCR, ARMOR_DTESCDCR],
    'add': [ADD_FULL_BEARD, ADD_ACHING_RIGHT_ARM, ADD_ONI_HORNS],
    'ring': [RING_DARK_POWER],
    'avatars': [ddict({'srd%': 6})]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_HEXTER, XTAL_W_BLANCANINE, XTAL_W_CLAWED_IRON_WITCH, XTAL_ANY_GRAVICEP, XTAL_ANY_BLACK_SHADOW], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ARM_DOC_POM, XTAL_ANY_GRAVICEP, XTAL_ANY_BLACK_SHADOW, XTAL_ARM_ARACHNIDEMON], 'slots': 2},
    'add xtal': {'choices': [XTAL_ANY_GRAVICEP, XTAL_ADD_ROYAL_OX_KING, XTAL_ADD_DARK_LORD, XTAL_ANY_BLACK_SHADOW], 'slots': 2},
    'ring xtal': {'choices': [XTAL_ANY_BLACK_SHADOW, XTAL_ANY_GRAVICEP, XTAL_ANY_AGELADANIOS], 'slots': 2}
})
