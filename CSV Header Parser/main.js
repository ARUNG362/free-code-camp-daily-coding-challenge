function getHeadings(csv) {
    return csv.split(",").map(a => a.trim());
}

console.log(
    getHeadings("name,age,city")
)

// Time: O(n) --> map
// Space: O(n) --> split/map create arrays and strings