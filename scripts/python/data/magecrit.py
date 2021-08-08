# pylint: skip-file
import sys, os
sys.path.insert(1, os.path.join(sys.path[0], '..'))

from Data import *
from DMG_Optimization import *

skill = ddict({
    'constant': lambda s: 80,
    'multiplier': lambda s: 2,
    'resistance': 'mres%',
    'defense': 'def',
    'distance': 'placed',
    'unsheathe': 'not_unsheathe',
    'crit': False,
    'others': 1,
    'combo': 1,
    'proration': 1,
    'use matk': True,
    'use mstab': True
})

skills = [skill]

character_base = ddict({
    'base stats': BASE_STATS('int', 'str'),
    'main': ddict({
        'type': 'staff',
        'base attack': 390,
        'base stability': 60,
        'refine': 15,
        'matk%': 10,
        'int%': 5,
        'cd%': 10,
        'cd+': 20,
        'cr+': 23
    }),
    'main xtal': XTAL_W_FINSTERN,
    'sub': ddict({
        'type': 'shield'
    }),
    'armor': ddict({
        'matk%': 10,
        'cd%': 10,
        'cd+': 20,
        'cr+': 23
    }),
    'armor xtal': XTAL_ARM_YULE_CAT,
    'armor2': XTAL_ARM_ARACHNIDEMON,
    'add': ADD_MAGICAL_STOLE,
    'add xtal': XTAL_ADD_UNDERWATER_RUINS_MONSTER,
    'ring': RING_HALLUCINATION_SPORE,
    'ring xtal 1': XTAL_ANY_BLACK_SHADOW,
    'ring xtal 2': XTAL_RING_PATISSIA,
    'food': ddict({
        'watk+': 58
    }),
    'mastery': ddict({
        'matk%': 3,
        'watk%': 30
    }),
    'two handed': ddict({
        'watk%': 10,
        'cr+': 5,
        'stability%': 5
    }),
    'battle skills': ddict({
        'matk+': 115,
        'cd%': 5,
        'cr+': 5
    })
})