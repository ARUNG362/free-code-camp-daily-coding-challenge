def to_binary(decimal):
    binary = ""

    while decimal > 0:
        binary = str(decimal % 2) + binary
        decimal = int(decimal/2)

    # print(binary)
    return binary

to_binary(5)

# Time: O(log n)
# Space: O(log n)