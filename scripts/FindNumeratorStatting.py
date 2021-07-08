for a in range(0, 8):
    for i in range(0, 11):
        for j in range(0, 22):
            for k in range(0, 24):
                for b in range(0, 12):
                    for c in range(0, 7):
                        for d in range(0, 13):
                            #for e in range(0, 6):
                                #print(a, i, min(j, 20)+int(j/21)*(j-20), min(k, 20)+int(k/21)*(k-20))
                                #if 352-int(1.85*(a*20+i*10+min(j, 20)*3+int(j/21)*(j-20)*6+min(k, 20)+int(k/21)*(k-20)*2)) == -89:
                                atk = a*20
                                cdp = i*10
                                cdf = min(j, 20)*3+(j//21)*(j-20)*6
                                crf = min(k, 20)*1+(k//21)*(k-20)*2
                                mtk = int(min(b, 10)*6.2)+(b//11)*(b-10)*3
                                mpr = int(min(c, 5)*12.4)+(c//6)*(c-5)*6
                                acf = int(min(d, 10)*6.2)+(d//11)*(d-10)*3
                                #acp = int(min(e, 5)*12.4)
                                if 377-int(1.85*(atk+cdp+cdf+crf-mtk-mpr-acf)) == -97:
                                    print(a, i, j, k, b, c, d)
