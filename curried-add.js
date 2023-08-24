function curriedAdd(num) {
    let total;
    if (num) {
        total = num;
    } else {
        total = 0;
    }


    function add(number) {
        if (number === undefined) {
            return total;
        } else {
            total += number;
            return add;
        }
    }
    if (total === 0 && !num) {
        return 0
    } else {
        return add;
    }

}

module.exports = { curriedAdd };
