function weekendOrWorkingDay(dayInput){
    let dayNumber = dayInput;
    
    switch  (dayNumber){
        case "Monday" : 
        case "Tuesday" :
        case "Wednesday" :
        case "Thursday" : 
        case "Friday" : console.log("Working Day"); break;
        case "Saturday" : 
        case "Sunday" : console.log("Weekend"); break;
        default: console.log("Error"); break;
    }

}

weekendOrWorkingDay("Tuesday");