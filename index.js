// Code your solution here:
function driversWithRevenueOver(array, revenue){
  return array.filter(function(driver){
    if (driver.revenue >= revenue){
      return { name: driver.name, revenue: driver.revenue}
    }
  })
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue)
    .map(function(driver){
      return driver.name
    })
  }

  function exactMatch(array, attribute){
    return array.filter(function(driver){
      let match = false
      for (const key in attribute) {
        match = driver[key] === attribute[key]
      }
      return match
    })
  }

  function exactMatchToList(array, attribute){
    return exactMatch(array, attribute)
    .map(function(driver){
      return driver.name
    })
  }
