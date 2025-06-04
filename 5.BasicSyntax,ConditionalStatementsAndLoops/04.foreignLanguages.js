function foreign(country) {
    let lang = "";
    if (country === "England" || country === "USA") {
        lang = "English";

    } else if (country === "Spain" || country === "Argentina" || country === "Mexico") {
        lang = "Spanish";
    
    } else {
        lang = "unknown";
    }

    console.log(lang);
}
