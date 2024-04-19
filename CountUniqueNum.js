


function CountUniqueNum(arr){
    let counter ={};
    for(let num of arr){
        counter[num]=(counter[num]||0)+1
    }
    let num = 0;
    for(let key in counter){
        num++
    }


    return num
}

console.log(CountUniqueNum([1,2,3,4,4,4,7,7,12,12,13]))