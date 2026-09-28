def get_headings(csv):
    splitted = csv.split(",")
    for i in range(0,len(splitted),1):
        splitted[i] = splitted[i].strip()
    return splitted

print(
    get_headings("username , email , signup date ")
)

# Time: O(n)
# Space: O(n)