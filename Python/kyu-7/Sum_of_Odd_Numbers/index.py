def row_sum_odd_numbers(n):
    #Calculate the starting value of row n
    num = ((n*n)-(n-1))
    #empty value to hold the sum of row n
    sum = 0
    #loop n times to calculate the next odd number and add it to the total sum
    for _ in range(n):
        sum += num
        num += 2
    return sum
        