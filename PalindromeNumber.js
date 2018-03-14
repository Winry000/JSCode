var num = 12321;
var palindromeNumber = function(num) {
	var res = num.toString().split("").reverse().join("");
	return num === Number(res);
}
console.log(palindromeNumber(num));