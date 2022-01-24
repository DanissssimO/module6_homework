let exp = true;
function simpleСomposite(num) {
    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                exp = false;
            }
        }
        if (exp === true) {
            console.log("Число простое");
        } else {
            console.log("Число составное");
        }
    } else {
        console.log("Данные неверны");
    }
}

simpleСomposite(1300);