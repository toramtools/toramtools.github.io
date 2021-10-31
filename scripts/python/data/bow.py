# pylint: skip-file
from Build_Playground import target
from Data import *
import sys
sys.path.append("../data")


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
    'proration': 2.5,
    'stats': ddict({
        'armor break': lambda s: {'armor break': True} if s['type'] == 'bowarrow' else {'armor break': False}
    })
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

skill3 = ddict({
    'constant': lambda s: 400,
    'multiplier': lambda s: 5,
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5,
    'fixed element': True
})

skill4 = ddict({
    'constant': lambda s: 400,
    'multiplier': lambda s: 10,
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5,
})

skill5 = ddict({
    'constant': lambda s: 400,
    'multiplier': lambda s: 10 if s['type'] == 'bowarrow' else 11,
    'resistance': 'pres%',
    'defense': 'def',
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5,
    'stats': ddict({
        'cd%': lambda s: {} if s['type'] == 'bowarrow' else {'cd%': -5}
    })
})

skills = [skill2, skill5, skill1]

character_base = ddict({
    'base stats': BASE_STATS('dex', 'str'),
    'sub': ARROW_LOVE_ARROW,
    'light armor': ddict({
        'aspd%': 50
    }),
    'ring': RING_HALLUCINATION_SPORE,
    'food': ddict({
        'watk+': 72,
        'cr+': 30,
        'ampr+': 30,
        'mp': 1000,
        'dte%': 9
    }),
    'masteries': ddict({
        'watk%': 30,
        'atk%': 3
    }),
    'battle skills': ddict({
        'atk+': 114,
        'cd%': 5,
        'cr+': 5
    }),
    'bushido': ddict({
        'mp': 100,
        'hp+': 100
    }),
    'brave aura': ddict({
        'main watk%': 30
    }),
    'matching element': ddict({
        'dte%': 25
    }),
    'eternal nightmare': SKILL_ACTIVE_ENM(target),
    'warcry': ddict({
        'atk%': 10
    }),
    'quick aura': ddict({
        'aspd+': 500,
        'aspd%': 25
    }),
    'gsw': ddict({
        'aspd+': 900,
        'motion%': 30
    }),
    'consumables': ddict({
        'aspd+': 750+100,
        'mp': 300
    }),
    'registlet': ddict({
        'atk+': 30,
        'mp': 100,
        'hp+': 1000,
        'aspd+': 100
    }),
    'arrow': ddict({
        'type': 'arrow',
        'base attack': 73,
        'base stability': 20
    }),
    'ring': RING_HALLUCINATION_SPORE,
    'paralysis shot': ddict({
        'stability%': 10
    }),
    'kakiri': ddict({
        'atk+': 100
    })
})

BOWGUN_NEUTRAL1 = ddict({
    'base attack': 320, 
    'base stability': 50, 
    'type': 'bowgun',
    'refine': 15,
    'atk%': 10,
    'cd%': 5,
    'dex%': 10,
    'cd+': 21,
    'cr+': 23
})

BOWGUN_NEUTRAL2 = ddict({
    'base attack': 304, 
    'base stability': 50, 
    'type': 'bowgun',
    'refine': 15,
    'atk%': 10,
    'cd%': 10,
    'dex%': 7,
    'cd+': 20,
    'cr+': 23
})

BOW_NEUTRAL1 = ddict({
    'type': 'bow',
    'base attack': 230,
    'base stability': 60,
    'refine': 15,
    'atk%': 11,
    'cd%': 3,
    'dex%': 10,
    'cd+': 21,
    'cr+': 23
})

BOW_NEUTRAL2 = ddict({
    'type': 'bow',
    'base attack': 230,
    'base stability': 60,
    'refine': 15,
    'atk%': 10,
    'cd%': 10,
    'dex%': 5,
    'cd+': 21,
    'cr+': 23
})

BOW_NEUTRAL3 = ddict({
    'type': 'bow',
    'base attack': 230,
    'base stability': 60,
    'refine': 15,
    'atk%': 10,
    'cd%': 5,
    'dex%': 10,
    'cd+': 21,
    'cr+': 23,
    'slots': 1,
    'armor break': True
})

BOWGUN_DTE1 = ddict({
    'base attack': 304, 
    'base stability': 50, 
    'type': 'bowgun',
    'refine': 15,
    'atk%': 10,
    'dte%': 21,
    'cd%': 6,
    'cd+': 21,
    'cr+': 23
})

BOWGUN_DTE2 = ddict({
    'base attack': 304, 
    'base stability': 50, 
    'type': 'bowgun',
    'refine': 15,
    'atk%': 10,
    'dte%': 20,
    'cd%': 7,
    'cd+': 21,
    'cr+': 23
})

BOWGUN_DTE3 = ddict({
    'base attack': 304, 
    'base stability': 50, 
    'type': 'bowgun',
    'refine': 15,
    'atk%': 7,
    'dte%': 20,
    'cd%': 10,
    'cd+': 21,
    'cr+': 23
})

BOW_DTE1 = ddict({
    'base attack': 230, 
    'base stability': 60, 
    'type': 'bow',
    'refine': 15,
    'atk%': 10,
    'dte%': 20,
    'cd%': 7,
    'cd+': 21,
    'cr+': 23
})

items = ddict({
    'main': [BOWGUN_DTE1],
    'armor': [ARMOR_DTECDCDCR],
    'add': [ADD_LACE_HEADRESS],
    'avatar 1': [AVATAR_ACC_PP_AMPR, AVATAR_ACC_ATK, AVATAR_ACC_WATK],
    'avatar 2': [AVATAR_TOP_PPIERCE, AVATAR_TOP_ATK],
    'avatar 3': [AVATAR_BOT_PPIERCE, AVATAR_BOT_ATK],
    'atk buff': [POTION_ENERGY_PILL, POTION_PEN_OIL],
    'ring': [RING_GLOWING_SEA_TALISMAN]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_VULTURE, XTAL_W_DEVIL_DANGO, XTAL_W_MARDULA], 'slots': 1},
    'armor xtal': {'choices': [XTAL_ARM_ARACHNIDEMON, XTAL_ANY_AGELADANIOS, XTAL_ANY_BLACK_SHADOW, XTAL_ARM_USAMOCHI], 'slots': 2},
    'add xtal': {'choices': [XTAL_ANY_AGELADANIOS, XTAL_ANY_BLACK_SHADOW, XTAL_ADD_DARK_LORD, XTAL_ADD_JUNIOR], 'slots': 1},
    'ring xtal': {'choices': [XTAL_ANY_BLACK_SHADOW, XTAL_ANY_AGELADANIOS, XTAL_ANY_GRAVICEP], 'slots': 2}
})
