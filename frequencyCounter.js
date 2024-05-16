function charCount(str){
    let obj={};
    for(let char of str){
        char = char.toLowerCase();
        //if(/[a-zA-Z0-9]/.test(char)){
        obj[char]=(obj[char]+1 || 1);

    } 

    return obj;
}

console.log(charCount("APPfwefewLE342eddew"))
