var nums =[1,2,4,3,6];
var target = 6;
var twosum = function (nums, target) {
	var hash = {};
	for(var i = 0; i < nums.length; i++) {
		var num = nums[i];
		if (hash[num] === undefined) {
			hash[target - num] = i;
		} else {
			return [hash[num], i];
		}
	}
}
console.log(twosum(nums, target));