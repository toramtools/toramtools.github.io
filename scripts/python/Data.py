from DMG_Optimization import ddict

def ATTACH_XTALS (item, xtal1, xtal2 = None):
    xtals = [xtal1] + [xtal2] if xtal2 != None else []
    newitem = ddict(item)
    for xtal in xtals:
        for stat in xtal:
            newitem[stat] += xtal[stat]
    newitem['slots'] = 0
    return newitem

def UPDATE_STATS(base, specifics):
    new = ddict(base)
    new.update(specifics)
    return new


def BASE_STATS(primary, secondary, balanced=False):
    CURRENT_CAP = 235
    CURRENT_PRIMARY_STAT_MAX = 365
    CURRENT_SECONDARY_STAT_MAX = 247

    base = ddict({
        'level': CURRENT_CAP,
        'str': 1,
        'int': 1,
        'vit': 1,
        'agi': 1,
        'dex': 1,
    }, lambda: 1)

    if balanced:
        statsum = 365+247
        average = statsum//2
        base[secondary] = average
        base[primary] = statsum-average
    else:
        base[primary] = CURRENT_PRIMARY_STAT_MAX
        base[secondary] = CURRENT_SECONDARY_STAT_MAX

    return base

dAX = ATTACH_XTALS
dUS = UPDATE_STATS
dBS = BASE_STATS


TARGET_ALTOBLEPAS = ddict({
    'graze': False,
    'level': 174,
    'def': 174,
    'pres%': 6
})

TARGET_RAFFY_LV1 = ddict({
    'level': 1,
    'pres%': 0,
    'mres%': 0,
    'def': 0,
    'mdef': 0,
    'graze': False
})

TARGET_DON_YETI = ddict({
    'level': 103,
    'pres%': 4,
    'mres%': 4,
    'mdef': 206,
    'def': 206,
    'graze': False
})

TARGET_SDM = ddict({
    'level': 150,
    'pres%': 4,
    'mres%': 4,
    'mdef': 225,
    'def': 225,
    'graze': False
})

TARGET_KUZTO_ULTIMATE = ddict({
    'level': 218,
    'pres%': 7,
    'mres%': 7,
    'def': 3320,
    'mdef': 3320,
    'graze': True
})

TARGET_QUASAR_ULTIMATE = ddict({
    'level': 226,
    'pres%': 7,
    'def': 5550,
    'graze': True
})

TARGET_GRAVICEP_LRD_ULTIMATE = ddict({
    'level': 224,
    'pres%': 7,
    'mres%': 21,
    'def': 1110,
    'mdef': 3330,
    'graze': True
})

TARGET_FINSTERN_ULTIMATE = ddict({
    'level': 206,
    'def': 1494,
    'pres%': 6,
    'graze': False
})

AVATAR_ACC_WATK = ddict({
    'watk+': 18,
    'cd+': 2,
    'watk%': 1
})

AVATAR_TOP_CD = ddict({
    'cd+': 4
})

AVATAR_TOP_STAB = ddict({
    'stability%': 2
})

AVATAR_BOT_SRD = ddict({
    'srd%': 2
})

AVATAR_TOP_SRD = ddict({
    'srd%': 2,
    'dex+': 5
})

AVATAR_BOT_CD = ddict({
    'cd%': 2,
    'watk+': 6,
    'hp+': 800
})

AVATAR_ACC_PP_AMPR = ddict({
    'ampr+': 6,
    'ppierce%': 6
})

AVATAR_TOP_AMPR = ddict({
    'ampr+': 8
})

AVATAR_BOT_AMPR = ddict({
    'ampr+': 7
})

AVATAR_ACC_ATK = ddict({
    'atk%': 2
})

AVATAR_TOP_ATK = ddict({
    'atk%': 2
})

AVATAR_BOT_ATK = ddict({
    'atk%': 2
})

AVATAR_TOP_PPIERCE = ddict({
    'str+': 5,
    'ppierce%': 7
})

AVATAR_BOT_PPIERCE = ddict({
    'ppierce%': 8,
    'dex%': 1,
    'str+': 5
})

AVATAR_TOP_CR = ddict({
    'cr+': 4
})

AVATAR_BOT_CR = ddict({
    'cr+': 5
})

ARMOR_DTECDCDCR = ddict({
    'dte%': 20,
    'cd%': 10,
    'cd+': 20,
    'cr+': 23
})

ARMOR_DTESCDCR = ddict({
    'dte%': 20,
    'str%': 10,
    'cd+': 20,
    'cr+': 23
})

ARMOR_ACDCDCR = ddict({
    'atk%': 10,
    'cd%': 10,
    'cd+': 20,
    'cr+': 23
})

ARMOR_ADCDCDCR = ddict({
    'dex%': 10,
    'atk%': 5,
    'cd%': 10,
    'cd+': 21,
    'cr+': 23
})

ARMOR_ASCDCR = ddict({
    'atk%': 10,
    'str%': 10,
    'cd+': 20,
    'cr+': 23
})

OHS_ASCDCDCR_SCD = ddict({
    'type': '1h sword',
    'base attack': 390,
    'base stability': 80,
    'refine': 15,
    'atk%': 11,
    'cd%': 3,
    'str%': 10,
    'cd+': 20,
    'cr+': 23
})

OHS_PCR = ddict({
    'type': '1h sword',
    'base attack': 289,
    'base stability': 60,
    'refine': 15,
    'ppierce%': 70,
    'aspd%': -10,
    'ampr+': 1,
    'cr%': 140,
    'mp:': 40
})

OHS_6TH_NPC = ddict({
    'type': '1h sword',
    'base attack': 385,
    'base stability': 80,
    'refine': 15,
    'str%': 8,
    'srd%': 8,
    'cr+': 20,
    'ampr+': 15
})

XTAL_W_CLAWED_IRON_WITCH = ddict({
    'srd%': 5,
    'ampr+': 10
})

XTAL_W_HEXTER = ddict({
    'atk%': 8,
    'str%': 6,
    'cr%': 6
})

XTAL_ARM_CANEMOFISH = ddict({
    'ampr+': 10
})

XTAL_RING_PATISSIA = ddict({
    'ampr+': 15
})

XTAL_ARM_DOC_POM = ddict({
    'srd%': 7,
    'cr%': 7
})

XTAL_ARM_GOPHERGA = ddict({
    'hp+': 3000,
    'srd%': 6
})

XTAL_ANY_BLACK_SHADOW = ddict({
    'atk%': 8,
    'matk%': 8,
    'ampr+': 3,
    'mp': -150
})

XTAL_ANY_AGELADANIOS = ddict({
    'atk%': 6,
    'cd+': 8,
    'motion%': -1
})

ADD_ACHING_RIGHT_ARM = ddict({
    'atk%': 8,
    'str%': 7
})

ADD_COOKIE_EARRINGS = ddict({
    'stability%': 10,
    'ppierce%': 10
})

ADD_GLADIATOR_HELMET_NPC = ddict({
    'stability%': 15,
    'cr+': 5,
    'hp%': 25
})

ADD_GLADIATOR_HELMET_MOB = ddict({
    'stability%': 14,
    'cr+': 5,
    'hp%': 21
})

XTAL_ADD_ALFENIX = ddict({
    'ppierce%': 10,
    'atk%': 3,
    'hp%': 18
})

XTAL_ADD_DARK_LORD = ddict({
    'atk%': 5,
    'srd%': 3,
    'aspd%': 20
})

RING_HALLUCINATION_SPORE = ddict({
    'mp': 500,
    'tumble': 1
})

XTAL_ADD_ROYAL_OX_KING = ddict({
    'srd%': 8,
    'mp': 200,
    'hp%': -20
})

BOW_ADCDCDCR_CDD = ddict({
    'type': 'bow',
    'base attack': 228,
    'base stability': 60,
    'refine': 15,
    'atk%': 10,
    'cd%': 10,
    'dex%': 7,
    'cd+': 20,
    'cr+': 23
})

RING_MACHINA_RING = ddict({
    'mp': 300
})

ARROW_LOVE_ARROW = ddict({
    'type': 'arrow',
    'base attack': 73,
    'base stability': 20,
    'cr+': 5
})

XTAL_W_VULTURE = ddict({
    'dex%': 5,
    'atk%': 7,
    'aspd%': 3
})

XTAL_W_MARDULA = ddict({
    'atk%': 7,
    'ampr+': 4
})

ADD_ONI_HORNS = ddict({
    'atk%': 10
})

ADD_LACE_HEADRESS = ddict({
    'atk%': 7,
    'dex%': 6,
    'unsheathe%': 8
})

ADD_PHANTOM_THIEF_RICOTTA = ddict({
    'atk%': 8,
    'cr%': 50,
    'mp': 100
})

ADD_ICE_CAPE = ddict({
    'atk%': 5,
    'ppierce%': 10
})

ADD_SQUIRREL_TAIL = ddict({
    'ppierce%': 10,
    'cr+': 15
})

XTAL_ADD_BAPHOMELA = ddict({
    'srd%': 6,
    'lrd%': 6,
    'unsheathe%': 6
})

XTAL_RING_SEELE_ZAUGA = ddict({
    'cr+': 15
})

XTAL_ADD_STELLAR_OOZE = ddict({
    'mp': 300,
    'cr+': 20
})

ADD_NAIATA_TIARA = ddict({
    'ppierce%': 15,
    'aspd+': -1000,
    'cr+': 25
})

XTAL_ARM_ARACHNIDEMON = ddict({
    'atk%': 8,
    'cr+': 8,
    'mp': -400,
    'hp+': -400,
    'srd%': lambda s: {} if s['type'].find('shield') == -1 else {'srd%': 4}
})

XTAL_RING_VENENA_I = ddict({
    'atk%': 1,
    'matk%': 1,
    'stability%': 2,
    'mp': 500
})

XTAL_RING_VENENA_II = ddict({
    'atk%': 2,
    'matk%': 2,
    'stability%': 3,
    'mp': 600
})

ADD_LOVE_SCARF = ddict({
    'ppierce%': 10,
    'ampr+': 10
})

XTAL_ANY_GRAVICEP = ddict({
    'mp': 200,
    'srd%': 7,
    'cr+': -5
})

XTAL_ADD_MEGA_ALPOCA = ddict({
    'srd%': 6,
    'mp': 300,
    'hp+': 300
})

XTAL_ANY_MYTHURNA_LYNX = ddict({
    'stability%': 3,
    'srd%': 3
})

ADD_FULL_BEARD = ddict({
    'aspd+': 400,
    'str%': 5,
    'srd%': 6
})

XTAL_ADD_MERCY = ddict({
    'cr+': 15
})

XTAL_ADD_KING_PITON = ddict({
    'cr+': 10,
    'cd+': 4
})

XTAL_ADD_GESPENST_2 = ddict({
    'cr+': 10,
    'mp': 200,
    'cspd+': 600,
    'acc+': 60
})

ADD_REINDEER_HEADBAND = ddict({
    'str%': 4,
    'dex%': 4,
    'srd%': 4,
    'lrd%': 4
})

ARROW_TEMPEST_ARROW = ddict({
    'base attack': 19,
    'base stability': 20,
    'cd%': 1
})

XTAL_W_BLANCANINE = ddict({
    'atk%': 7,
    'agi%': 4,
    'ampr+': 1,
    'hp%': -12
})

XTAL_W_FINSTERN = ddict({
    'matk%': 7,
    'mp': 300
})

XTAL_ARM_YULE_CAT = ddict({
    'matk%': 7,
    'int%': 3,
    'cspd%': 35,
    'ampr%': 10
})

ADD_MAGICAL_STOLE = ddict({
    'matk%': 7,
    'int%': 7,
    'hp+': 500
})

XTAL_ADD_UNDERWATER_RUINS_MONSTER = ddict({
    'matk%': 8,
    'hp+': 1000,
    'cd+': 8
})

KTN_5TH_ANNIV = ddict({
    'base attack': 130,
    'base stability': 70,
    'type': 'katana',
    'refine': 15,
    'dex%': 7,
    'unsheathe%': 14,
    'ppierce%': 15,
    'cr+': 30,
    'srd%': 7
})

ADD_SAND_BANDIT_MASK = ddict({
    'ppierce%': 12,
    'unsheathe%': 12
})

XTAL_ANY_TAPPLER = ddict({
    'unsheathe%': 12,
    'mp': -50
})

XTAL_ARM_GEMMA = ddict({
    'ppierce%': 5,
    'unsheathe%': 7,
    'cd+': 6
})

XTAL_SPECTER_OF_DEATH = ddict({
    'unsheathe%': 10
})

RING_DARK_POWER = ddict({
    'atk%': 3,
    'mp': 300
})

XTAL_W_IRESTIDA = ddict({
    'matk%': 8,
    'mpierce%': 6
})

XTAL_ARM_IRON_EMPRESS = ddict({
    'matk%': 5,
    'mpierce%': 10,
    'hp%': 20,
    'cspd%': 20,
    'mp': -300
})

XTAL_ARM_EVIL_SHADOW = ddict({
    'matk%': 6,
    'mp': 300,
    'hp+': 1500
})

ADD_IRON_WITCH_VEIL = ddict({
    'mpierce%': 20,
    'mp': 300,
    'cspd+': 400
})

XTAL_ADD_GARNACHE = ddict({
    'mpierce%': 10,
    'matk%': 3,
    'hp%': 18
})

XTAL_W_ARMASITE = ddict({
    'cspd%': -20,
    'matk%': 5,
    'mpierce%': 20
})

ADD_TATTERED_CLOAK = ddict({
    'stability%': 10,
    'cr+': 10
})

AVATAR_TOP_CD = ddict({
    'cd+': 4
})

AVATAR_TOP_SRD = ddict({
    'srd%': 2,
    'agi+': 3
})

AVATAR_ACC_SRD = ddict({
    'srd%': 2
})

RING_GLOWING_SEA_TALISMAN = ddict({
    'stability%': 10
})

XTAL_ARM_YUVERIA = ddict({
    'mp': 300,
    'srd%': 6
})

ADD_YORK_PENDANT = ddict({
    'tumble': 1,
    'stability%': 10
})

XTAL_ARM_DEMONIC_EYE = ddict({
    'tumble': 1,
    'hp+': 1000,
    'aspd+': 300
})

XTAL_ADD_ZARTH = ddict({
    'ampr+': 12,
    'cd+': 4
})

XTAL_W_KUZTO = ddict({
    'cr+': 7,
    'matk%': 7
})

DAGGER_FALLEN_ANGEL = ddict({
    'type': 'dagger',
    'atk%': 3,
    'cd+': 3
})

XTAL_ADD_WANDERING_WHEEL = ddict({
    'atk%': 5,
    'aspd%': 75,
    'lrd%': -14
})

XTAL_RING_VOLGAGON = ddict({
    'aspd+': 1000,
    'cr%': 20
})

RING_TIME_WARP_WATCH = ddict({
    'aspd+': 1000
})

ADD_XMAS_RIBBON = ddict({
    'stabilit%': 10,
    'watk%': 15,
    'cr%': 5
})

POTION_ENERGY_PILL = ddict({'atk%': 5, 'atk+': 50})

POTION_PEN_OIL = ddict({'atk%': 3, 'ppierce%': 10})

ADD_CRESCENT_MOON_HELMET = ddict({
    'ppierce%': 10,
    'srd%': 6,
    'ampr+': 4
})

XTAL_W_DEVIL_DANGO = ddict({
    'ppierce%': 20,
    'atk%': 4,
    'mp': -200
})

XTAL_ARM_USAMOCHI = ddict({
    'atk%': 6,
    'unsheathe%': 6,
    'mp': 300
})

ADD_TYRANT_MASK = ddict({
    'atk%': 6,
    'str+': 3
})

OHS_GEMMA_SPADA = ddict({
    'type': '1h sword',
    'base attack': 375,
    'base stability': 80,
    'refine': 15,
    'dte%': 30,
    'atk%': 8,
    'cr+': 15
})

ADD_KITTY_TAIL = ddict({
    'stability%': 15,
    'agi%': 5,
})

SKILL_ACTIVE_ENM = lambda target: ddict({
    'enemy def': -min(250, target['def']//2)
})

XTAL_ADD_JUNIOR = ddict({
    'atk%': 5,
    'cr+': 15,
    'mp': 100
})

RING_ENLIGHTENED_BANGLE = ddict({
    'str%': 3,
    'dex%': 3,
    'vit%': 3,
    'int%': 3,
    'agi%': 3
})

SKILL_ACTIVE_BERSERK_OHS = ddict({
    'aspd+': 1000,
    'aspd%': 100,
    'cr+': 25,
    'main stability%': -25
})

SKILL_ACTIVE_BERSERK_THS = ddict({
    'aspd+': 1000,
    'aspd%': 100,
    'cr+': 50,
    'main stability%': -25
})

XTAL_W_CRIMSOM_EYED_WOLF = ddict({
    'srd%': 8
})