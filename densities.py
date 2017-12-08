def density(counts,totals):
    d = [round(counts[i][1]/totals[i][1],5) for i in range(len(totals))]
    return d

def inflation(base, sequence):
    inf= [i/base for i in sequence]
    return inf 
