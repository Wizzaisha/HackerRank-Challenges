function twoArrays(k, A, B) {
    // Write your code here
    
    const permA = A.sort((a, b) => a - b);
    const permB = B.sort((a, b) => b - a);

    let result = "YES";

    let i = 0;
    
    while (i < permA.length) {

        if (permA[i] + permB[i] < k) result = "NO";
        if (result === "NO") break;
        i++;
    }

    return result;

}


const a = [2, 1, 3];
const b = [7, 8, 9];
const k = 10;

console.log(twoArrays(k, a, b));