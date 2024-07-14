// function rotateString(str) {
//     setInterval(() => {
//         str = str[str.length - 1] + str.substring(0, str.length - 1);
//         console.log(str);
//     }, 1000);
// }
// rotateString('w3resource');
function rotateString(str) {
    let interval = setInterval(() => {
        str = str[str.length - 1] + str.substring(0, str.length - 1);
        console.log(str);

        if (str === 'w3resource') {
            clearInterval(interval);
        }
    }, 1000);
}

rotateString('w3resource');
