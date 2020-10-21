const convert = function(temp) {
    return (temp - 32) * 5 / 9;
}
// manual function test 
// result1  = convert(80);
// result1;
module.exports = convert;