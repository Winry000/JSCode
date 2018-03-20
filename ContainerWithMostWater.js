var height = [1,2,3,4,5,2,3];
var max = 0;
var container = function(height) {
  if (height == null || height.length == 0) {
    return 0;
  }
  var i = 0;
  var j = height.length - 1;
  while(i < j) {
    if (height[i] < height[j]) {
      max = Math.max(max, height[i] * (j - i));
      i++;
    } else {
      max = Math.max(max, height[j] * (j - i));
      j--;
    }
  }
  return max;
}
console.log(container(height));
