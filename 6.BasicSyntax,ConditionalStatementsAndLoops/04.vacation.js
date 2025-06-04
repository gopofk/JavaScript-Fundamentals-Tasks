function vacation(groupCount, type, day) {
    let totalPrice = 0;
    let discount = 0;

    if (type === "Students") {

        if (day === "Friday") {
            totalPrice = groupCount * 8.45;

        } else if (day === "Saturday") {
            totalPrice = groupCount * 9.80;

        } else if (day === "Sunday") {
            totalPrice = groupCount * 10.46;
        }

        if (groupCount >= 30) {
            totalPrice -= totalPrice * 0.15;
        }

    } else if (type === "Business") {

        if (groupCount >= 100) {
            groupCount -= 10;
        }

        if (day === "Friday") {
            totalPrice = groupCount * 10.90;

        } else if (day === "Saturday") {
            totalPrice = groupCount * 15.60;

        } else if (day === "Sunday") {
            totalPrice = groupCount * 16;
        }

    } else if (type === "Regular") {

        if (day == "Friday") {
            totalPrice = groupCount * 15;

        } else if (day === "Saturday") {
            totalPrice = groupCount * 20;

        } else if (day === "Sunday") {
            totalPrice = groupCount * 22.50;
        }

        if (groupCount >= 10 && groupCount <= 20) {
            totalPrice -= totalPrice * 0.05;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}