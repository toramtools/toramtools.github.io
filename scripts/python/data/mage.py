# pylint: skip-file
import sys, os
sys.path.insert(1, os.path.join(sys.path[0], '..'))

from Data import *
from DMG_Optimization import *

crit = False

skill1 = ddict({
    'constant': lambda s: 3000,
    'multiplier': lambda s: 41,
    'resistance': 'mres%',
    'defense': 'mdef',
    'distance': 'srd%',
    'unsheathe': 'no',
    'crit': crit,
    'others': 1.3,
    'combo': 1.5,
    'proration': 2.5,
    'use mcrit': True,
    'use mstab': True,
    'use matk': True
})

skill2 = ddict({
    'constant': lambda s: 300,
    'multiplier': lambda s: 20,
    'resistance': 'mres%',
    'defense': 'mdef',
    'distance': 'srd%',
    'unsheathe': 'no',
    'crit': crit,
    'others': 1.3,
    'combo': 1.5,
    'proration': 2.5,
    'use mcrit': True,
    'use mstab': True,
    'use matk': True
})

skill3 = ddict({
    'constant': lambda s: 30,
    'multiplier': lambda s: 10,
    'resistance': 'mres%',
    'defense': 'mdef',
    'distance': 'srd%',
    'unsheathe': 'no',
    'crit': crit,
    'others': 1.3,
    'combo': 1.5,
    'proration': 2.5,
    'use mcrit': True,
    'use mstab': True,
    'use matk': True
})

skills = [skill1, skill2, skill3]

character_base = ddict({
    'base stats': BASE_STATS("int", "str"),
    'main': ddict({
        'base attack': 377,
        'base stability': 60,
        'refine': 15,
        'type': 'staff',
        'matk%': 11,
        'dte%': 21,
        'cd+': 21,
        'cr+': 23,
        'cd%': 5
    }),
    'sub': ddict({
        'type': 'magic device',
        'matk+': 25
    }),
    'armor': ddict({
        'matk%': 11,
        'dte%': 21,
        'cr': 23
    }),
    'arm xtal': XTAL_ARM_IRON_EMPRESS,
    'ring': RING_MACHINA_RING,
    'ring xtal 1': XTAL_ANY_BLACK_SHADOW,
    'ring xtal 2': XTAL_ANY_GRAVICEP,
    'food': ddict({
        'watk+': 58,
        'cr+': 26,
        'ampr+': 26,
        'mp': 860
    }),
    'mastery': ddict({
        'matk%': 3,
        'watk%': 30
    }),
    'battle skills': ddict({
        'matk+': 115,
        'cd%': 5,
        'cr+': 5
    }),
    'prayer': ddict({
        'matk%': 10
    }),
    'brave aura': ddict({
        'main watk%': 30
    }),
    'consumables': ddict({
        'dte%': 5,
        'matk%': 3,
        'mpierce%': 10
    }),
    'familia': ddict({
        'mp': 200,
        'matk+': 57
    }),
    'registlet': ddict({
        'hp+': 1000,
        'mp': 100,
        'matk+': 30
    }),
    'avatars': ddict({
        'mpierce%': 23
    })
})

items = ddict({
    'add': [ADD_MAGICAL_STOLE, ADD_IRON_WITCH_VEIL]
})

xtals = ddict({
    'main xtal': {'choices': [XTAL_W_IRESTIDA, XTAL_ANY_GRAVICEP, XTAL_W_ARMASITE], 'slots': 1},
    'add xtal': {'choices': [XTAL_ADD_GARNACHE, XTAL_ADD_BAPHOMELA], 'slots': 1}
})
