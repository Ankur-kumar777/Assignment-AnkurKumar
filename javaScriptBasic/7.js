function findFirstJanuarySunday() {
    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            console.log(`The first January that is a Sunday is in the year ${year}`);
            break;
        }
    }
}

findFirstJanuarySunday();
