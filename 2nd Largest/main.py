def second_largest(arr):
    arr = list(set(arr))
    return sort(arr)[len(arr) - 2]

def sort(arr):
    for i in range(len(arr)):
        min_index = i

        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j

        temp = arr[i]
        arr[i] = arr[min_index]
        arr[min_index] = temp

    return arr

print(
    second_largest([20, 139, 94, 67, 31])
)