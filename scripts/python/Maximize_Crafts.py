import math

SLOTS = 52
STACK = 99
COST = 35

mStacks, mCrafts = 0, 0

# n = number of stks on bag
for n in range(1, SLOTS+1):
    tMaterials = n*STACK
    rSlots = SLOTS-n
    crafts = 0
    while rSlots > 0 and tMaterials >= COST:
        tMaterials -= COST
        crafts += 1
        rSlots = SLOTS-math.ceil(tMaterials/STACK)-crafts 
    if crafts > mCrafts:
        mStacks, mCrafts = n, crafts

print('Optimized value: %s stacks, %s items crafted' % (mStacks, mCrafts))
