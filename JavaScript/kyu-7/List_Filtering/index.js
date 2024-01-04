function filter_list(l) {
    //create an empty array to store values
    let newList = []
    //loop through function argument to find any non-string values and push to empty array
    for (const i of l){
      if(typeof(i)!=="string"){
        newList.push(i)
      }
    }
    return newList
  }