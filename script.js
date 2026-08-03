function divide(arr, n) {
    let ans = [];
    let current = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] <= n) {
            current.push(arr[i]);
            sum += arr[i];
        } else {
            ans.push(current);
            current = [arr[i]];
            sum = arr[i];
        }
    }

    if (current.length > 0) {
        ans.push(current);
    }

    return ans;
}