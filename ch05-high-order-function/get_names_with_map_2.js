var ancestry = JSON.parse(require("./ancestry.js"));
var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
//console.log(overNinety);
console.log(overNinety.map(function(person) {
  return person.name;
}));