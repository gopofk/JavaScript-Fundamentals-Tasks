function requiredReading(numPages, pagesPerHour, daysToRead){
    let totalHours = numPages / pagesPerHour;
    let hoursPerDay = totalHours / daysToRead;

    console.log(hoursPerDay);
}
