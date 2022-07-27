function sum(...args){
    return args.reduce((acc,cur) => acc + cur,0)
}
console.log(sum(2,3,5,6))
