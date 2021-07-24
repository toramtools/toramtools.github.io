from Items import *
from DMG_Optimization import ddict, trunc2, DamageContext, convert2dict
import itertools, time

target = ddict({
    'level': 103,
    'def': 206,
    'mdef': 0,
    'pres%': 4,
    'mres%': 0
})

skill1 = ddict({
    'constant': lambda s: 400,
    'multiplier': lambda s: 28.5+s['dex']*0.6/100 if s['type'] == 'bowarrow' else 27,
    'distance': 'srd%',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.1*1.2,
    'combo': 1.5,
    'proration': 2.5,
    'graze': True
})

skill2 = ddict({
    'constant': lambda s: 300,
    'multiplier': lambda s: 3*(10+s['total dex']/100),
    'distance': 'placed',
    'unsheathe': 'not_unsheathe',
    'crit': True,
    'others': 1.2,
    'combo': 1.5,
    'proration': 2.5,
    'graze': True,
    'stats': ddict({
        'ppierce%': 100
    })  
})

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
        'cr+': -5
    })
})

ARMOR_DTEDCDCR = ddict(ARMOR_DTESCDCR)
ARMOR_DTECDCDCR.update({'str%': 0, 'dex%': 10})

BOW_ADCDCDCR_OLD_2 = ddict(BOW_ADCDCDCR_OLD)
BOW_ADCDCDCR_OLD_2.update({'dex%': 3, 'atk%': 11})

BOWGUN_ADCDCDCR_OLD = ddict(BOW_ADCDCDCR_OLD)
BOWGUN_ADCDCDCR_OLD.update({'base attack': 307, 'type': 'bowgun', 'base stability': 50, 'dex%': 7})

BOWGUN_ADCDCDCR_OLD_2 = ddict(BOWGUN_ADCDCDCR_OLD)
BOWGUN_ADCDCDCR_OLD_2.update({'dex%': 10, 'atk%': 7})

iterate = ddict({
    'main': [BOW_ADCDCDCR_OLD, BOW_ADCDCDCR_OLD_2, BOWGUN_ADCDCDCR_OLD],
    'main xtal 1': [XTAL_W_VULTURE, XTAL_W_MARDULA, XTAL_W_HEXTER],
    'main xtal 2': [XTAL_W_VULTURE, XTAL_W_MARDULA, XTAL_W_HEXTER],
    'armor': [ARMOR_DTECDCDCR], 
    'armor xtal 1': [XTAL_ANY_AGELADANIOS],
    'armor xtal 2': [XTAL_ANY_BLACK_SHADOW],
    'add': [ADD_PHANTOM_THIEF_RICOTTA, ADD_LACE_HEADRESS],
    'add xtal 1': [XTAL_ANY_AGELADANIOS, XTAL_ADD_BAPHOMELA, XTAL_ADD_GESPENST_2, XTAL_ADD_STELLAR_OOZE, XTAL_ANY_BLACK_SHADOW],
    'ring xtal 1': [XTAL_RING_PATISSIA],
    'ring xtal 2': [XTAL_ANY_BLACK_SHADOW],
    'avatar 1': [AVATAR_ACC_AMPR, AVATAR_ACC_PPIERCE, AVATAR_ACC_ATK],
    'avatar 2': [AVATAR_TOP_AMPR, AVATAR_TOP_PPIERCE, AVATAR_TOP_ATK, AVATAR_TOP_CR],
    'avatar 3': [AVATAR_BOT_AMPR, AVATAR_BOT_PPIERCE, AVATAR_BOT_ATK, AVATAR_BOT_CD, AVATAR_BOT_CR],
})

WEAPON_XTAL_1 = list(iterate.keys()).index('main xtal 1')
WEAPON_XTAL_2 = list(iterate.keys()).index('main xtal 2')
RING_XTAL_1 = list(iterate.keys()).index('ring xtal 1')
RING_XTAL_2 = list(iterate.keys()).index('ring xtal 2')
ARM_XTAL_1 = list(iterate.keys()).index('armor xtal 1')
ARM_XTAL_2 = list(iterate.keys()).index('armor xtal 2')

allBuilds = itertools.product(*[iterate[key] for key in iterate.keys()])

fit = []
counter = 0

print("Running simulation...")
ti = time.time()

for build in allBuilds:

    # can't have repeated xtal on same item
    if build[RING_XTAL_1] == build[RING_XTAL_2] or build[ARM_XTAL_1] == build[ARM_XTAL_2] or build[WEAPON_XTAL_1] == build[WEAPON_XTAL_2]:
    #if build[RING_XTAL_1] == build[RING_XTAL_2]:
        continue

    counter += 1

    for idx, field in enumerate(iterate.keys()):
        character_base[field] = build[idx]
    
    skillContext1 = DamageContext(character_base, target, skill1)
    dmg1 = skillContext1.calculate()
    skillContext2 = DamageContext(character_base, target, skill2)
    dmg2 = skillContext2.calculate()

    if dmg1['ampr'] >= 0 and dmg1['cr'] >= 100 and dmg1['mp'] >= 0:
        fit.append([dmg1['average damage']+dmg2['average damage'], skillContext1.character])

fit.sort(key = lambda x: x[0])

best = fit[-1]
bestBuild = convert2dict(best[1])
bestStats = DamageContext(best[1], target, skill1)

print("Simulation finished (runtime: %ss)" % (trunc2(time.time()-ti)))
print("There are %s item combinations for selected items" % counter)
print("There are %s combinations which satisfy minimum requirements" % len(fit))
print('The "best" among them has following stats:')
print('Average DMG:', best[0])
print('Stats:', dict(bestStats.calculate()))
print('Build:\n')

for key in iterate.keys():
    print("%s: %s" % (key, dict(bestStats.character[key])))
