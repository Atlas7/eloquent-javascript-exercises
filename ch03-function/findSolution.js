// Taken from chapter 3 example...
// Starting from 1, you can either:
//   add 5, or 
//   times 3
// If my target is 24, the solution would be (in the form of a string):
//   (((1 * 3) + 5) * 3)
// Write a program that find the solution of a given target.

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)