Lv = 220

STR = 315
STR = int(STR*1.05)
AGI = 257
AGI += 15+6
DEX = 1

mainWATK = 152
mainRefine = 13

subWATK = 331
subRefine = 13

flatWATK = 0
percWATK = 0.3

mainBaseWATK = int(mainWATK*(100+mainRefine**2)/100)+mainRefine+int(mainWATK*percWATK)+flatWATK
subBaseWATK = int(subWATK*(200+subRefine**2)/200)+subRefine+int(subWATK*percWATK)+flatWATK

mainBaseATK = Lv + STR + DEX*2 + AGI + mainBaseWATK
subBaseATK = Lv + STR + AGI*3 + subBaseWATK

flatATK = 0
percATK = 0.29

skillATK = 55+55

mainATK = int(mainBaseATK*(1+percATK))+flatATK+skillATK
subATK = int(subBaseATK*(1+percATK))+flatATK

print(mainATK, subATK)
