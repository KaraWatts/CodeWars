function oddOrEven(array) {
    //set storage variable to contain sum externally from the for loop
    let sum = 0
    //loop through all values in array and add to sum
    for(const n of array){
      sum += n
    }
    //if the remainder of sum/2 is 0 return even - if array is empty sum = 0
     return(sum%2===0 ? "even" : "odd")
  }