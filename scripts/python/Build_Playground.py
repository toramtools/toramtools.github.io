# noqa # pylint: disable=unused-wildcard-import
from Iterate_Builds import *
from Data import *
from data.ktn import *

target = TARGET_KUZTO_ULTIMATE

if __name__ == '__main__':
    #character_base.update({'matching ele': ddict({'dte%': 0})})
    #ARMOR_DTE2.update({'dte%': 0})
    #ARMOR_DTE1.update({'dte%': 0})
    #character_base['consumables'].update({'dte%': 0})
    #items['armor'] = [UPDATE_STATS(ARMOR_ADCDCDCR, {'slots': 1})]
    #items['armor'] = [UPDATE_STATS(ARMOR_ACDCDCR, {'slots': 2, 'atk%': 7, 'cd+': 20, 'cr+': 23})]
    #items['main'] = [UPDATE_STATS(OHS_ASCDCDCR_SCD, {'cd%': 0, 'stability%': 4, 'base attack': 379})]
    #items['main'] = [UPDATE_STATS(OHS_ASCDCDCR_SCD, {'cd%': 8, 'base attack': 377})]
    #if target['graze'] == False: character_base['berserk'] = ddict({})

    example = Iterate_Builds(character_base, items, xtals, target, skills, requirements={})
    best, bestBuild, bestStats = example.iterate()