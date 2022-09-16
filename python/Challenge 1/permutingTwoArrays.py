from audioop import reverse


def twoArrays(k, A, B):
    # Write your code here
    A.sort()
    B.sort(reverse=True)

    i = 0

    result = "YES"

    while i < len(A):

        if A[i] + B[i] < k:
            result = "NO"
        
        if result == "NO":
            break

        i += 1
        
    return result


a = [2, 1, 3]
b = [7, 8, 9]
k = 10

print(twoArrays(k, a, b))
