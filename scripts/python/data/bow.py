# pylint: skip-file
import sys
sys.path.append("../data")

from Data import *
from Build_Playground import target

skill1 = ddict({
    'constant': lambda s: 400,
    'multiplier': lambda s: 28.5+s['dex']*0.6/100 if s['type'] == 'bowarrow' else 27,
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5
})

skill2 = ddict({
    'constant': lambda s: 300,
    'multiplier': lambda s: 3*(10+s['total dex']/100),
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'placed',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.2,
    'combo': 1.5,
    'proration': 2.5,
    'stats': ddict({
        'ppierce%': 100
    })
})

skills = [skill1, skill2]

character_base = ddict({
    'base stats': ddict({
        'level': 230,
        'str': 247,
        'int': 1,
        'vit': 1,
        'agi': 1,
        'dex': 350
    }, lambda: 1),
    'sub': ARROW_LOVE_ARROW,
    'light armor': ddict({
        'aspd%': 50
    }),
    'ring': RING_HALLUCINATION_SPORE,
    'food': ddict({
        'watk+': 58,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860,
        'dex+': 22
    }),
    'masteries': ddict({
        'watk%': 30,
        'atk%': 3
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
    'warcry': ddict({
        'atk%': 10
    }),
    'consumables': ddict({
        'dte%': 5,
        'atk%': 3,
        'ppierce%': 10
    }),
    'quick aura': ddict({
        'aspd+': 500,
        'aspd%': 25
    }),
    'gsw': ddict({
        'aspd+': 900,
        'motion%': 30
    }),
    'arrow': ddict({
        #'cr+': -5
    })
})

BOW_2S = UPDATE_STATS(BOW_ADCDCDCR_CDD, {'slots': 2, 'dex%': 7})
BOWGUN_2S = UPDATE_STATS(BOW_ADCDCDCR_CDD, {
    'slots': 2, 'base attack': 304, 'type': 'bowgun', 'base stability': 50, 'dex%': 7})
ARMOR_NEUTRAL_2S = UPDATE_STATS(ARMOR_ACDCDCR, {'slots': 2, 'atk%': 7, 'cd%': 10, 'cd+': 20, 'cr+': 22})
ARMOR_DTE_2S = UPDATE_STATS(ARMOR_DTECDCDCR, {'slots': 2, 'dte%': 20, 'cd%':9, 'cd+': 20})

items = ddict({
    'main': [BOW_2S, BOWGUN_2S],
    'armor': [ARMOR_DTE_2S, ARMOR_NEUTRAL_2S],
    'add': [ADD_PHANTOM_THIEF_RICOTTA, ADD_LACE_HEADRESS, ADD_REINDEER_HEADBAND],
    'avatar 1': [AVATAR_ACC_AMPR, AVATAR_ACC_PPIERCE, AVATAR_ACC_ATK],
    'avatar 2': [AVATAR_TOP_AMPR, AVATAR_TOP_PPIERCE, AVATAR_TOP_ATK, AVATAR_TOP_CR],
    'avatar 3': [AVATAR_BOT_AMPR, AVATAR_BOT_PPIERCE, AVATAR_BOT_ATK, AVATAR_BOT_CD, AVATAR_BOT_CR]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_VULTURE, XTAL_W_HEXTER], 'slots': 2},
    'armor xtal': {'choices': [XTAL_ANY_AGELADANIOS, XTAL_ANY_BLACK_SHADOW, ], 'slots': 2},
    'add xtal': {'choices': [XTAL_ANY_AGELADANIOS, XTAL_ADD_BAPHOMELA, XTAL_ADD_GESPENST_2, XTAL_ADD_STELLAR_OOZE, XTAL_ANY_BLACK_SHADOW], 'slots': 1},
    #'add xtal': {'choices': [XTAL_ADD_BAPHOMELA], 'slots': 1},
    'ring xtal': {'choices': [XTAL_RING_PATISSIA, XTAL_ANY_BLACK_SHADOW], 'slots': 2}
})
