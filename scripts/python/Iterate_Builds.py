# noqa # pylint: disable=unused-wildcard-import
from DMG_Optimization import ddict, trunc2, DamageContext, convert2dict
import itertools, time
from Data import *

class Iterate_Builds:
    def __init__ (self, character_base, items, xtals, target, skills, requirements = {}):
        iterOrder = []
        iterList = []

        for key in items.keys():
            iterOrder.append({'id': key, 'repeat': -1})
            iterList.append(items[key])

        for key in xtals.keys():
            iterOrder.append({'id': key, 'repeat': xtals[key]['slots']})
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
        counter = 0
        fit = 0
        highestDMG = 0
        best = []

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
                    xtalContainer = self.character_base[order_data['id'].split()[0]]
                    slotRange = order_data['repeat'] if 'slots' not in xtalContainer else xtalContainer['slots']
                    for i in range(order_data['repeat']):
                        if i < slotRange:
                            self.character_base[order_data['id'] + ' %s' % (i+1)] = build[idx][i]
                        else:
                            self.character_base[order_data['id'] + ' %s' % (i+1)] = ddict({})

            totalDMG = 0
            maxDMG = 0
            contexts = []
            for skill in self.skills:
                contexts.append(DamageContext(self.character_base, self.target, skill))
                maxDMG += contexts[-1].calculate()['max damage']
                totalDMG += contexts[-1].calculate()['average damage']
            
            for requirement in self.requirements:
                if contexts[-1].data[requirement] >= self.requirements[requirement]:
                    continue
                else:
                    break
            else:
                fit += 1
                if totalDMG > highestDMG:
                    highestDMG = totalDMG
                    best = [totalDMG, contexts[0], maxDMG]

        if len(best) == 0:
            print("%s builds tried and none satisfied requirements." % counter)
            return [None]*3

        bestBuild = convert2dict(best[1].character)
        bestStats = best[1].data

        print('# Simulation finished (runtime: %ss)' % (trunc2(time.time()-ti)))
        print('# There are %s item combinations for selected items' % counter)
        print('# There are %s combinations which satisfy minimum requirements' % fit)
        print('# The "best" among them has following stats:')
        print('# Average DMG:', best[0])
        print('# Maximum DMG:', best[2])
        print('# Stats:\n', dict(bestStats))
        print('# Build:')

        for key in self.items.keys():
            print("%s: %s" % (key, dict(best[1].character[key])))
        for key in self.xtals.keys():
            for i in range(self.xtals[key]['slots']):
                print("%s %s: %s" % (key, i+1, dict(best[1].character[key + ' ' + str(i+1)])))

        return [best, bestBuild, bestStats]