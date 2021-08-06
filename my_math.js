function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y != 0)
        return x / y;
    else return "denominator shouldn't be zero";
}
const pi = 3.14; // constant set to 3.14 

exports.add = add
exports.subtract = subtract
exports.multiply = multiply
exports.divide = divide
exports.pi = pi