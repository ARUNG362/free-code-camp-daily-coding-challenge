def to_decimal(binary):
    decimal = 0

    for i in binary:
        decimal = (decimal * 2) + int(i)

    return decimal

print(
    to_decimal("101")
)

# Time: O(n)
# Space: O(1)