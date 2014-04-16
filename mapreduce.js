// Write a function that will take in a list of strings and output/print a list of
// each distinct string in the input list, along with the number of times the
// string occurs in the list. The strings should be ordered by most to least
// frequently occuring.

// I will disclose that this solution is inspired by
//  http://www.recessframework.org/page/map-reduce-anonymous-functions-lambdas-php
// and
// http://jcla1.com/blog/javascript-mapreduce/


// sample input ['a', 'a', 'b', 'c'];
// sample output [['a', 2], ['b', 1], ['c', 1]];

//var strings = ['a', 'a', 'b', 'c']
// var strings = ['t', 'a', 't', 'b', 'b', 'b', 't', 't', 'c', 'c', 't', 'c']
var strings = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']
  .reduce(function(oldValue, newValue) {
    var m = oldValue[0].indexOf(newValue);
    if (m === -1) {
      oldValue[0].push(newValue);
      oldValue[1].push(1);
    } else {
      oldValue[1][m] += 1;
    }
    return oldValue;
  }, [
    [],
    []
  ]).reduce(function(oldValue, newValue, index, context) {
    var x = [];
    oldValue.forEach(function(string, i) {
      x.push([string, context[1][i]])
    });
    return x;
  })
  .sort(function(a, b) {
    if (a[1] > b[1])
      return -1;
    else if (a[1] < b[1]) {
      return 1;
    } else {
      return 0;
    }
  });


console.log(strings);
