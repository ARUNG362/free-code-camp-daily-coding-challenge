def scale_image(size, scale):
    dimensions = size.split("x")
    print(dimensions)
    res = []
    for dimension in dimensions:
        print(int(dimension) * scale)
        res.append(str(int(int(dimension) * scale)))

    print(res)
    return "x".join(res)

print(
    # scale_image("800x600", 2)
    scale_image("1024x768", 0.5)
)