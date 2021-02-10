Lv = 220

STR = 315
#STR = int(STR*1.05)
AGI = 257
AGI += 15+6
DEX = 1

equipmentStab = 2

mainWATK = 152
mainRefine = 13
mainWeaponStab = 100

subWATK = 334
subRefine = 13
subWeaponStab = 80

flatWATK = 0
percWATK = 0.3

mainBaseWATK = int(mainWATK*(100+mainRefine**2)/100)+mainRefine+int(mainWATK*percWATK)+flatWATK
subBaseWATK = int(subWATK*(200+subRefine**2)/200)+subRefine+int(subWATK*percWATK)+flatWATK

mainBaseATK = Lv + STR + DEX*2 + AGI + mainBaseWATK
subBaseATK = Lv + STR + AGI*3 + subBaseWATK
mainStab = int(mainWeaponStab+STR*0.025+DEX*0.075+equipmentStab)
subStab = int(subWeaponStab/2+STR*0.06+AGI*0.04+equipmentStab)

flatATK = 0
percATK = 0.1

skillATK = 55+55

mainATK = int(mainBaseATK*(1+percATK))+flatATK+skillATK
subATK = int(subBaseATK*(1+percATK))+flatATK+skillATK

print(mainATK, subATK, mainStab, subStab)
#int((int(219+1575+2508*0.72)+150)*2.98)*2
