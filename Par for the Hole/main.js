function golfScore(par, strokes) {
  switch (true) {
    case (strokes === 1):
      return "Hole-in-one!";
    case (strokes <= par - 2):
      return "Eagle";
    case (strokes === par - 1):
      return "Birdie";
    case (strokes === par):
      return "Par";
    case (strokes === par + 1):
      return "Bogey";
    case (strokes === par + 2):
      return "Double Bogey";
    default:
      return "Go Home!";
  }
}
console.log(
    golfScore(3,3)
)