let arr = [1, 2, 0, null, undefined];

let zero = 0;

let even = 0;

let odd = 0;

function itemCount() {
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" || !isNaN(arr[i])) {

            if(arr[i] === 0) {
                zero += 1;
            }else if(arr[i] % 2 === 0) {
                even += 1;
            }else {
                odd += 1;
            }
        }
    }

    console.log(`Массив содержит ${zero} нулей, ${even} четных чисел, ${odd} нечетных чисел`);
}

itemCount()