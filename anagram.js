//hello  llheo


// let str1 = 'hello';
// let str2='llhoe'

let myFun=function (str1,str2){

    if(str1.length!=str2.length){
        return false;
    }
    let c={}
    for(let i of str1){
        c[i]=(c[i] || 0)+1

    }
    console.log(c)
    for(let j of str2) {
        if (!c[j]) {
            return false;
        }

        c[j] = c[j] - 1
    }
    return true;
}

const check = myFun('hello','llhoe')

console.log(check)
