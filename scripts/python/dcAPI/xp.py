MQ_DATA = {'CH1 - First Time Visit': 30, 'CH1 - Straye Brother and Sister': 80, 'CH1 - A Golem on a Rampage': 730, 'CH1 - The Goddess of Wisdom': 2050, "CH1 - The Dragon's Den": 4700, 'CH1 - The Ruined Temple': 9330, 'CH1 - The First Magic Stone': 16700, 'CH1 - Purification Incense': 27900, 'CH1 - The Dragon and Black Crystal': 43000, 'CH2 - The Merchant Girl': 64000, 'CH2 - Where Are the Gems?': 92000, 'CH2 - Who is the Black Knight?!': 118200, 'CH2 - Trials in the Palace': 149000, 'CH2 - The Moon Wizard': 172000, 'CH2 - The Follower and Hater': 227000, "CH2 - The Wizard's Cave": 240000, 'CH2 - The Star Wizard': 255000, 'CH3 - The Invincible... Enemy??': 270000, 'CH3 - The Ancient Empress': 284000, 'CH3 - The Culprit': 319000, 'CH3 - Fate of the Fortress': 335000, 'CH3 - Memory in the Lost Town': 398000, 'CH3 - The Stolen Sorcery Gem': 417000, 'CH3 - Living with a Dragon': 462300, 'CH3 - Monsters from Outerworld': 540000, 'CH4 - The Mage Diels': 562000, 'CH4 - Journey for Reconstruction': 585000, 'CH4 - The Sacred Gem in Akaku': 710000, 'CH4 - The King of Darkan': 740000, 'CH4 - The Lurking Evil': 803000, 'CH4 - Find the False Black Knight!': 913000, "CH4 - Technista's Movement": 1000000, 'CH4 - The Falling Feather of Death': 1100000, 'CH5 - In The Unknown Darkness': 1150000, 'CH5 - The Charm': 1310000, 'CH5 - Parching Dark Mirror': 1370000, 'CH5 - Fierce Battle in the Garden': 1550000, 'CH5 - A Light in the Darkness': 1750000, 'CH5 - The Ones Nesting in the Manor': 1970000, 'CH5 - The Dark Castle': 2210000, 'CH5 - To The Living World': 2220000, 'CH6 - Demi Machina': 2600000, 'CH6 - The Town of Pax Faction': 2700000, 'CH6 - Mechanical Heart': 2800000, 'CH6 - Black Knights of Lyark': 2820000, 'CH6 - The Mysterious Artifact': 3030000, 'CH6 - Truth of the Artifact': 3099000, 'CH6 - The Price of Treachery': 3320000, 'CH6 - The Blasphemous Factory': 3640000, 'CH6 - Mystery of the Black Knights': 4020000, "CH7 - Monster's Forest": 4730000, 'CH7 - The Underground Town': 4820000, 'CH7 - The Elves in Lyark': 5070000, 'CH7 - The Mad Laboratory': 5500000, 'CH7 - Tragedy in the Jail': 6000000, 'CH7 - Calamity in Droma Square': 6400000, 'CH7 - Head for Ultimea Palace': 6900000, 'CH7 - The Chaotic Truth': 7400000, 'CH8 - The Mine Where Monsters Lurk': 8400000, 'CH8 - The Mysterious Shadow': 8500000, 'CH8 - The New Diel Country': 8600000, 'CH8 - The Ruins of the Gods': 8800000, 'CH8 - The Former God of Justice': 9100000, 'CH8 - The Remaining Thrones in the Shrine': 9700000, "CH8 - Gods' Whereabouts": 10400000, "CH8 - The Wait at Specia's Shrine": 11100000, 'CH8 - The Warden of Ice & Snow': 11800000, "CH8 - At Mountains' End": 12500000, 'CH9 - Deadly Road to Eldenbaum': 15800000, 'CH9 - Unforeseen Traps': 17100000, 'CH9 - Traces of Technological Progress': 18200000, 'CH9 - An Unexpected Acquaintance': 19200000, 'CH9 - Front Line Base Operation': 20300000, 'CH9 - Strategy to Redeem the Treetop Harbor': 21500000, 'CH9 - The Teleporter Left Behind': 22700000, 'CH9 - The Man Who Seeks Death': 23900000, 'CH9 - The Battle to Recapture Eldenbaum': 25000000, 'CH9 - A New Beginning': 13000000, 'CH10 - Off to the Fateful Land': 26000000, 'CH10 - The Inhabitants Under the Cliff': 27400000, 'CH10 - The Nightmare Returns': 28800000, 'CH10 - The Whereabouts of the Missing Monks': 30200000, 'CH10 - The Goddess of Justice and the Squatters': 31600000, 'CH10 - Navigator of the Ark': 33100000, 'CH10 - Witch in the Woods': 34600000, 'CH10 - The Duel in Nov Diela': 36200000, 'CH11 - Flying the Ark': 37800000, 'CH11 - Land of the Unknown': 49000000, 'CH11 - The Strolling Forest': 51000000}

QUEST_DATA = {"Nightmare Crystal (Stack)": 285000, "Lapin's Soul (Piece)": 400000, "Parasited Crystal (Stack)": 380000, "Free from Infesters! (2k f/k)": 15000000, "Defeat Metal Stinger (x100)": 3240000, "Minotaur Skin (Stack)": 333300, "Cracked Platinum Armguard (Stack)": 677000}

LV_CAP = 230

def pxp (Lv):
    return int(0.025*Lv**4+2*Lv)

# iLv = initial level, iLvP = initial percentage
def add_xp (iLv, iLvP, xp):
    tLv = iLv
    cxp = pxp(iLv)*iLvP/100.+xp
    while cxp > pxp(tLv):
        cxp -= pxp(tLv)
        tLv += 1
    tLvP = int(cxp/pxp(tLv)*100) % 100
    tLv += int(cxp//pxp(tLv))
    return (tLv, tLvP)

# tLv = target level, tLvP = target percentage
def required_xp (iLv, iLvP, tLv, tLvP):
    xp = 0
    for i in range(iLv+1, tLv):
        xp += pxp(i)
    if iLv < tLv:
        xp += pxp(iLv)*(1-iLvP/100.)
        xp += pxp(tLv)*tLvP/100.
    elif iLv == tLv:
        xp += pxp(iLv)*(tLvP-iLvP)/100.
    return xp

def find_mq_story (string):
    lstring = string.lower()
    for idx, (name, xp) in reversed(list(enumerate(MQ_DATA.items()))):
        if name.lower().find(lstring) != -1:
            break
    return (idx, name, xp)

# mq start/end point: Determine where to start/stop to reach target level
# iStory = initial story (used to avoid CH 1-3)
# start: True = Search startpoint, False = Search endpoint
def mq_se_point (iLv, iLvP, tLv, tLvP, start = True, iStory = 'CH1 - First Time Visit'):
    istoryidx, _, _ = find_mq_story(iStory)
    requiredxp = required_xp(iLv, iLvP, tLv, tLvP)
    currentxp = 0
    order = lambda x: reversed(x) if start else lambda x: x
    for name, xp in order(list(MQ_DATA.items())[istoryidx:]):
        currentxp += xp
        if currentxp >= requiredxp:
            break
    return (name, currentxp)