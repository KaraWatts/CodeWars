def longest(a1, a2):
    #concatinate both strings into one
    str = a1 + a2
    #create empty list to store unique characters from string
    longest = []
    #loop through string adding any character not already in the longest variable
    for char in str:
        if char not in longest:
            longest.append(char)
    #sort the longest list and join it into a single string without separater characters
    return "".join(sorted(longest))