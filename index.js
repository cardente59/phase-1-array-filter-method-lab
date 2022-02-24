function findMatching(drivers, name){
    return drivers.filter((driversName) => name.toLowerCase() === driversName.toLowerCase()
    )}

    function fuzzyMatch(drivers, match){
        return drivers.filter ((driver)=> match === driver.substring(0, 2))
    }


    function matchName (drivers, find){
        return drivers.filter ((driver) => find === driver.name)
            }


            