function countSheeps(sheep) {
    //set counter variable to store sheep count if true
    let count = 0 
    //loop through each index in the sheep array
    for(let each of sheep)
    // if each = true add 1 to the count variable
    if(each){
      count++
    }
    return count
  }