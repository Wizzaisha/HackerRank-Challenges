function miniMaxSum(arr) {
    // Write your code here

    arr.sort((a, b) => a - b);

    const minSum = arr.slice(0, 4).reduce((curr, next) => curr + next, 0);
    const maxSum = arr.slice(arr.length - 4, arr.length).reduce((curr, next) => curr + next, 0);

    return `${minSum} ${maxSum}`;
}


const arr = [7, 69, 2, 221, 8974];
console.log(miniMaxSum(arr));


