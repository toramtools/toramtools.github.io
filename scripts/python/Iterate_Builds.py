from DMG_Optimization import ddict, trunc2, DamageContext, convert2dict
import itertools, time
from Items import *

class Iterate_Builds:
    def __init__ (self, character_base, items, xtals, target, skills, requirements = {}):
        iterOrder = [{'id': key, 'repeat': -1} for key in items.keys()]
        iterList = [items[key] for key in items.keys()]
        for key in xtals.keys():
            iterOrder += [{'id': key, 'repeat': xtals[key]['slots']}]
            iterList.append(itertools.combinations(xtals[key]['choices'], xtals[key]['slots']))

        self.ordering = iterOrder
        self.builds = itertools.product(*iterList)

        self.character_base = character_base
        self.items = items
        self.xtals = xtals
        self.target = target
        self.skills = skills
        self.requirements = requirements

    def iterate (self):
        fit = []
        counter = 0

        print("# Running simulation...")
        ti = time.time()

        for build in self.builds:
            counter += 1

            for idx, order_data in enumerate(self.ordering):
                if order_data['repeat'] == -1:
                    self.character_base[order_data['id']] = build[idx]
                elif order_data['repeat'] == 0:
                    continue
                else:
                    for i in range(order_data['repeat']):
                        self.character_base[order_data['id'] + ' %s' % (i+1)] = build[idx][i]

            totalDMG = 0
            contexts = []
            for skill in self.skills:
                contexts.append(DamageContext(self.character_base, self.target, skill))
                totalDMG += contexts[-1].calculate()['average damage']

            for requirement in self.requirements:
                if contexts[-1].data[requirement] >= self.requirements[requirement]:
                    continue
                else:
                    break
            else:
                fit.append([totalDMG, contexts[-1]])

        fit.sort(key = lambda x: x[0])

        best = fit[-1]
        bestBuild = convert2dict(best[1].character)
        bestStats = best[1].data

        print('# Simulation finished (runtime: %ss)' % (trunc2(time.time()-ti)))
        print('# There are %s item combinations for selected items' % counter)
        print('# There are %s combinations which satisfy minimum requirements' % len(fit))
        print('# The "best" among them has following stats:')
        print('# Average DMG:', best[0])
        print('# Stats:\n', dict(bestStats))
        print('# Build:')

        for key in self.items.keys():
            print("%s: %s" % (key, dict(best[1].character[key])))

        for key in self.xtals.keys():
            for i in range(self.xtals[key]['slots']):
                print("%s %s: %s" % (key, i+1, dict(best[1].character[key + ' ' + str(i+1)])))

        return [best, bestBuild, bestStats]


if __name__ == '__main__':
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

    BOW_ADCDCDCR_OLD_2 = ddict(BOW_ADCDCDCR_OLD)
    BOW_ADCDCDCR_OLD_2.update({'dex%': 5, 'atk%': 11})

    BOWGUN_ADCDCDCR_OLD = ddict(BOW_ADCDCDCR_OLD)
    BOWGUN_ADCDCDCR_OLD.update({'base attack': 307, 'type': 'bowgun', 'base stability': 50, 'dex%': 7})

    BOWGUN_ADCDCDCR_OLD_2 = ddict(BOWGUN_ADCDCDCR_OLD)
    BOWGUN_ADCDCDCR_OLD_2.update({'dex%': 10, 'atk%': 7})

    items = ddict({
        'main': [BOW_ADCDCDCR_OLD, BOW_ADCDCDCR_OLD_2, BOWGUN_ADCDCDCR_OLD],
        'armor': [ARMOR_DTECDCDCR], 
        'add': [ADD_PHANTOM_THIEF_RICOTTA, ADD_LACE_HEADRESS],
        'avatar 1': [AVATAR_ACC_AMPR, AVATAR_ACC_PPIERCE, AVATAR_ACC_ATK],
        'avatar 2': [AVATAR_TOP_AMPR, AVATAR_TOP_PPIERCE, AVATAR_TOP_ATK, AVATAR_TOP_CR],
        'avatar 3': [AVATAR_BOT_AMPR, AVATAR_BOT_PPIERCE, AVATAR_BOT_ATK, AVATAR_BOT_CD, AVATAR_BOT_CR]
    })

    xtals = ddict({
        'main xtal': {'choices': [XTAL_W_VULTURE, XTAL_W_HEXTER], 'slots': 2},
        'armor xtal': {'choices': [XTAL_ANY_AGELADANIOS, XTAL_ANY_BLACK_SHADOW], 'slots': 2},
        'add xtal': {'choices': [XTAL_ANY_AGELADANIOS, XTAL_ADD_BAPHOMELA, XTAL_ADD_GESPENST_2, XTAL_ADD_STELLAR_OOZE, XTAL_ANY_BLACK_SHADOW], 'slots': 1},
        'ring xtal': {'choices': [XTAL_RING_PATISSIA, XTAL_ANY_BLACK_SHADOW], 'slots': 2}
    })

    example = Iterate_Builds(character_base, items, xtals, target, [skill1, skill2], requirements={'cr': 125, 'ampr': 75, 'mp': 1400})
    best, bestBuild, bestStats = example.iterate()