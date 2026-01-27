function oddOrEvenDay(timestamp) {
    console.log(new Date(timestamp).getUTCDate());
    return ((new Date(timestamp).getUTCDate()) % 2 == 0) ? "even" : "odd";
}
console.log(
    oddOrEvenDay(6739456780000)
);