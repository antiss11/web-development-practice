Math.round= function(number) {
    let strNumber = number.toString();
    let dotIndex = strNumber.indexOf(".");
    if (strNumber.charAt(dotIndex+1) < 5 || dotIndex === -1) {
        return parseInt(number);
    }
    else {
        return parseInt(number) + 1;
    }
};

Math.floor = function(number) {
    return number.toString().indexOf(".") === -1 ? number : parseInt(number);
};

Math.ceil = function(number) {
    return number.toString().indexOf(".") === -1 ? number: parseInt(number) + 1;
}



console.log(Math.floor(5.7))