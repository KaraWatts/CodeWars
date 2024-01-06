function longest(s1, s2) {
    //concatenate both strings together
    let str = s1+s2
    //create empty array variable to store distinct characters from string
    let longest = []
    //loop through the combined string and add any characters not already found in the longest array
    for(const char of str){
      if(!longest.includes(char)){
        longest.push(char)
      }
    }
    //sort the longest array alphabetically, then join into a single string with no separators between characters
    return(longest.sort().join(''))
  }