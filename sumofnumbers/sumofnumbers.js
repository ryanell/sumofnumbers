function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4, 5]));

function sumWhile(list) {
  let sum = 0;
  let count = 0;
  while (count !== list.length) {
    sum += list[count];
    count++;
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4, 5]));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list.pop() + sumRecursion(list);
}
console.log(sumRecursion([3, 4, 5, 6, 7]));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; });
}

console.log(sumTheSimpleWay([2, 3, 4, 5, 6]));
