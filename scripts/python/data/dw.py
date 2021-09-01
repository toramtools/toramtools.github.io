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
    'others': 1.1,
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
        'ampr+': 26
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
        'dte%': 25
    })
})

BERSERK = ddict({
    'aspd+': 1000,
    'aspd%': 100,
    'cr+': 25,
    'main stability%': -25
})

STR_OHS = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'cd+': 21})
AGI_OHS = UPDATE_STATS(OHS_ASCDCDCR_SCD, {'atk%': 10, 'agi%': 5, 'cd%': 10, 'cd+': 21, 'str%': 0})
CDS_OHS = UPDATE_STATS(STR_OHS, {'str%': 5, 'atk%': 10, 'cd%': 10})

CLASSIC_ARMOR = UPDATE_STATS(ARMOR_ACDCDCR, {'atk%': 11, 'cd+': 21})
NEWEST_ARMOR = UPDATE_STATS(ARMOR_ASCDCR, {'cd+': 21, 'atk%': 11})

items = ddict({
    'base stats': [BASE_STATS('str', 'agi')],
    'main': [OHS_ASCDCDCR_SCD],
    'armor': [ARMOR_DTESCDCR],
    'add': [ADD_GLADIATOR_HELMET],
    'ring': [RING_HALLUCINATION_SPORE],
    'avatar 1': [AVATAR_ACC_ATK, AVATAR_ACC_PP_AMPR],
    'avatar 2': [AVATAR_TOP_ATK, AVATAR_TOP_SRD, AVATAR_TOP_AMPR, AVATAR_TOP_PPIERCE],
    'avatar 3': [AVATAR_BOT_ATK, AVATAR_BOT_SRD, AVATAR_BOT_PPIERCE, AVATAR_BOT_AMPR],
    'berserk': [BERSERK],
    'attack buff': [POTION_ENERGY_PILL, POTION_PEN_OIL],
    'cp': [ddict({'atk%': 10, 'aspd%': 100})]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_HEXTER, XTAL_W_MARDULA, XTAL_W_CLAWED_IRON_WITCH], 'slots': 1},
    'armor xtal': {'choices': [XTAL_ARM_DOC_POM, XTAL_ARM_ARACHNIDEMON, XTAL_ARM_GOPHERGA], 'slots': 2},
    'add xtal': {'choices': [XTAL_ADD_DARK_LORD, XTAL_ADD_ROYAL_OX_KING, XTAL_ADD_WANDERING_WHEEL], 'slots': 1},
    'ring xtal': {'choices': [XTAL_ANY_BLACK_SHADOW, XTAL_ANY_GRAVICEP, XTAL_ANY_AGELADANIOS, XTAL_RING_VOLGAGON, XTAL_RING_PATISSIA], 'slots': 2},
    'food choice': {'choices': [ddict({'str+': 30}), ddict({'dex+': 26})], 'slots': 1}
})
