function summ(a) {
    return function(b) {
        console.log(a + b);
    }
}

summ(4)(3)