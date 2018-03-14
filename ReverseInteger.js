var num = -123;
// var reverse = function(x)
//  {
// 	var sign= (x>0)?1: -1;
// 	x=Math.abs(x);
// 	var str=x.toString().split("").reverse().join("");
// 	var result=sign * Number(str);
// 	if(result>2147483647 || result < -2147483648)return 0;
// 	else return result;
// };
var reverse = function(num) {
	var sign = (num > 0) ? 1 : -1;
	num = Math.abs(num);
	var res = num.toString().split("").reverse().join("");
	res = sign * Number(res);
	return res;
}
console.log(reverse(num));