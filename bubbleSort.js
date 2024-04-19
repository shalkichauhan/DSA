function bubble(arr) {
    var swap;
    for (var i = arr.length; i > 0; i--) {
        swap = true
        for (var j = 0; j < i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = false;
            }
        }
        if (swap = true) break
    }
    return arr


}

console.log(bubble([6,3,8,2,3,4,7,5,6,4,2,3,9]))