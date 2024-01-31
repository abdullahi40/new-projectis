function sun(...values){
    let sum = 0;
    for (let i = 0; i < values.length; i++){
        sum += values[i];
    }
    return sum;
}

console.log(sum(3,4,7,9,4,));