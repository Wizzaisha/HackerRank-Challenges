def miniMaxSum(arr):
    # Write your code here
    
    arr.sort()

    minSum = sum(arr[0:4])
    maxSum = sum(arr[len(arr) - 4:len(arr)])

    return "{minSum} {maxSum}".format(minSum = minSum, maxSum = maxSum)
    


arr = [7, 69, 2, 221, 8974]
print(miniMaxSum(arr))