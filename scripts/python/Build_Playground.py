# noqa # pylint: disable=unused-wildcard-import
from Iterate_Builds import *
from Data import *
from data.bow import *

target = TARGET_KUZTO_ULTIMATE

if __name__ == '__main__':
    #character_base.update({'matching ele': ddict({'dte%': 0})})
    #ARMOR_DTE_2S.update({'dte%': 0})
    #character_base['consumables'].update({'dte%': 0})
    #if target['graze'] == False: character_base['berserk'] = ddict({})

    example = Iterate_Builds(character_base, items, xtals, target, skills, requirements={'cr': 100, 'ampr': 75})
    best, bestBuild, bestStats = example.iterate()