def flip_chance (np, nn = 1):
    x, idx = 0, 0
    for i in range(1, 100):
        k = ((i/100)**np)*((1-i/100)**nn)
        if k > x: x, idx = k, i
    return (i, x)