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
var strings = ['t', 'a', 't', 'b', 'b', 'b', 't', 't', 'c', 'c', 't', 'c']
  .reduce(function(last, now) {
    var index = last[0].indexOf(now);
    if (index === -1) {
      last[0].push(now);
      last[1].push(1);
    } else {
      last[1][index] += 1;
    }
    return last;
  }, [
    [],
    []
  ]).reduce(function(last, now, index, context) {
    var zip = [];
    last.forEach(function(word, i) {
      zip.push([word, context[1][i]])
    });
    return zip;
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
