def is_sorted(arr):
    type = ""
    temp = arr[0]

    for i in range(1,len(arr),1):
        if i == 1:
            if arr[i] > temp:
                type = "Ascending"
            else:
                type = "Descending"
        else:
            if (type == "Ascending" and arr[i] < temp) or (type == "Descending" and arr[i] > temp):
                type = "Not sorted"
                break
        temp = arr[i]
    return type

print(is_sorted([1, 3, 2, 4, 5]))