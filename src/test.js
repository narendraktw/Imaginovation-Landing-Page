
function add(val1){
    return function mul(val2){
        return function divide(val3){
            return (val1*val2)/val3;
        }
    }
}

console.log(add(3).mul(5).divide(3))