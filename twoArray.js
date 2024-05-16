// //pseudo code-----
// //obj1={2:2,,,,3:1} obj2={4:2,,,,9:1}
// //check if key in obj1 is key*key in obj2?
// //check if obj1[key] is equal to obj2[key*key]
// //check if key's value of obj1 is in obj2 as key's square's value ?
// //if yes then return true
// //else return false
// //ca;; function -> same([2,3,2],[4,4,9])
function same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }


    let obj1 = {}, obj2 = {};

    for (let num of arr1) {
        obj1[num] = (obj1[num] + 1 || 1);
    }
    for (let num of arr2) {
        obj2[num] = (obj2[num] + 1 || 1);
    }

    for (let key in obj1) {
        if (!(key * key in obj2)) {
            return false;
        }
        if (!(obj1[key] === obj2[key * key])) {
            return false;
        }
    }
    return true;

}

console.log(same([2, 2, 5], [4, 4, 25]))

