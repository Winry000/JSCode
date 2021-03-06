var obj = {a : {b : 1}};
var newObj = JSON.parse(JSON.stringify(obj));
newObj.a = 2;
console.log(obj, newObj);

function deepCopy(Obj) {
    var res = {};
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            res[key] = {};
            var newObj = deepCopy(obj[key]);
            for (var newKey in newObj) {
                res[key][newKey] = newObj[newKey];
            }
        } else {
            res[key] = obj[key];
        }
    }
    return res;
}
var obj = {a:1, b: {c: 2, d : 5}};
var newObj = deepCopy(obj);
console.log(newObj);