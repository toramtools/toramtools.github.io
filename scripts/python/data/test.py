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
        'base attack': 430,
        'base stability': 80,
        'refine': 15
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
        'aspd+': 500,
        'cr%': 10,
        'agi+': 15,
        'unsheathe%': 25
    }),
    'quick slash': ddict({
        'aspd+': 50,
        'aspd%': 50
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
        'atk%': 10
    }),
    'consumables': ddict({
        'dte%': 5,
        'mp': 300,
        'aspd+': 100,
        'str+': 5
    }),
    'flash blast': ddict({
        'main watk%': 25
    }),
    'brave aura': ddict({
        'main watk%': 30
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
    'kakiri': ddict({
        'atk+': 100
    }),
    #'pet skills': ddict({
    #    'atk%': 10,
    #    'atk+': 75
    #}),
    'enm': SKILL_ACTIVE_ENM(target)
})

STR_OHS = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'cd+': 21})
AGI_OHS = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'atk%': 10, 'agi%': 5, 'cd%': 10, 'cd+': 21, 'str%': 0})
CDS_OHS = UPDATE_STATS(STR_OHS, {'str%': 5, 'atk%': 10, 'cd%': 10})

OHS_DTE1 = ddict({
    'type': '1h sword',
    'base attack': 385,
    'base stability': 80,
    'refine': 15,
    'atk%': 10,
    'dte%': 20,
    'str%': 10,
    'cd+': 21,
    'cr+': 23
})

OHS_DTE2 = ddict({
    'type': '1h sword',
    'base attack': 390,
    'base stability': 80,
    'refine': 15,
    'atk%': 11,
    'dte%': 21,
    'str%': 5,
    'cd+': 20,
    'cr+': 23
})


CLASSIC_ARMOR = UPDATE_STATS(ARMOR_ACDCDCR, {'atk%': 11, 'cd+': 21})
NEWEST_ARMOR = UPDATE_STATS(ARMOR_ASCDCR, {'cd+': 21, 'atk%': 11})

items = ddict({
    'base stats': [BASE_STATS('str', 'agi')],
    'main': [OHS_ASCDCDCR_SCD],
    'armor': [ARMOR_ASCDCR],
    'add': [ADD_KITTY_TAIL],
    'ring': [RING_GLOWING_SEA_TALISMAN],
    'avatar 1': [AVATAR_ACC_SRD],
    'avatar 2': [AVATAR_TOP_SRD],
    'avatar 3': [AVATAR_BOT_SRD],
    'attack buff': [POTION_ENERGY_PILL],
    #'cp': [ddict({'atk%': 10, 'aspd%': 100})]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_HEXTER, XTAL_W_BLANCANINE], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ARM_ARACHNIDEMON, XTAL_ARM_YUVERIA], 'slots': 2},
    'add xtal': {'choices': [XTAL_ADD_ROYAL_OX_KING, XTAL_ADD_DARK_LORD], 'slots': 2},
    'ring xtal': {'choices': [XTAL_ANY_BLACK_SHADOW, XTAL_ANY_GRAVICEP], 'slots': 2},
    #'food choice': {'choices': [ddict({'str+': 30}), ddict({'agi+': 30})], 'slots': 1}
})
