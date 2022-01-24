function period(start, end){
    let i = start;

    intervalId = setInterval(function() {
        console.log(i);
        if (i == end){
            clearInterval(intervalId);
        }
        i += 1;
    },1000);
}

period(5, 15)