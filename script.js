const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    let result = [];
    let current = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (sum + arr[i] <= n) {
            current.push(arr[i]);
            sum += arr[i];
        } 
        else {
            result.push(current);
            current = [arr[i]];
            sum = arr[i];
        }
    }

    if (current.length > 0) {
        result.push(current);
    }

    return result;
};

const n = Number(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));