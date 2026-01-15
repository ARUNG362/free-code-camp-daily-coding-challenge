def array_swap(arr):
    res_arr = []

    for i in range(len(arr)-1,-1,-1):
        res_arr.append(arr[i])

    return res_arr

array_swap(["A", "B"])