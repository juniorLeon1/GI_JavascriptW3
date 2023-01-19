function sharePizza(x, y) {
    function phrase(){
        return `each person gets ${x / y} slices of pizza; from our ${x} slice of pizza`;
    }
    return phrase();


    // this would also work:
    // return `each person gets ${x / y} slices of pizza; from our ${x} slice of pizza`;
}

console.log(sharePizza(8, 3));