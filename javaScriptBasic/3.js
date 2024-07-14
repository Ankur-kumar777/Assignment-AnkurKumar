function getCurrentDate(format) {
    let currentDate = new Date();

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    switch (format) {
        case 'mm-dd-yyyy':
            return month + '-' + day + '-' + year;
        case 'mm/dd/yyyy':
            return month + '/' + day + '/' + year;
        case 'dd-mm-yyyy':
            return day + '-' + month + '-' + year;
        case 'dd/mm/yyyy':
            return day + '/' + month + '/' + year;
        default:
            return 'Invalid format';
    }
}

console.log(getCurrentDate('mm-dd-yyyy'));
console.log(getCurrentDate('mm/dd/yyyy'));
console.log(getCurrentDate('dd-mm-yyyy'));
console.log(getCurrentDate('dd/mm/yyyy'));
