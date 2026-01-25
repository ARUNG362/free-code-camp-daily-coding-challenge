function scaleImage(size, scale) {
    const dimensions = size.split("x");
    console.log(dimensions);
    let res = [];
    dimensions.forEach(dimension => {
        res.push(dimension * scale);
    })
    console.log(res);
    return res.join("x");
}
scaleImage("800x600", 2)