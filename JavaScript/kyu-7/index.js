var number = function(busStops){
    //empty value to store the number of passengers on the bus
    let passengers = 0;
    //loop through array adding the difference of passengers getting on and off the bus at each stop
    for (const stop of busStops){
      passengers += (stop[0]-stop[1])
    }
    return passengers
  }