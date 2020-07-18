function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        year = "Your year is a leapyear."
    } else {
        year = "Your year isn't a leapyear."
    }
    return year;
}
console.log(leapYear(2020));
console.log(leapYear(199));
console.log(leapYear(2022));
console.log(leapYear(2024));
console.log(leapYear(2025));
console.log(leapYear(2026));
console.log(leapYear(2027));
console.log(leapYear(1700));