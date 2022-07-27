function sum(n1){
    return function (n2){
        return function (n3){
            return n1+n2+n3;
        }
    }
}
console.log(sum(2)(3)(6))
