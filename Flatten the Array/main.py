def flatten(arr):
    res_arr = []

    for a in arr:
        if not isinstance(a,list):
            res_arr.append(a)
        else:
            res_arr = res_arr +  flatten(a)

    print(res_arr)
    return res_arr

flatten([1, [2, 3], 4])