reeks1 = [1,2,3,4,5,6]
reeks2 = [4,5,6,7,8,9]

def even_getallen(getallen_reeks):
    counter = 0
    for i in getallen_reeks:
        if i % 2 == 0:
            print(i)
        else:
            counter+=1
    return counter
            
even_getallen(reeks1)
even_getallen(reeks2)