let s = 'hello world';

function fn(s) {
  const arrS = s.split(' ');
  let newArr = [];
  for (let s of arrS) {
    const e = s.slice(0, 1).toUpperCase() + s.slice(1, s.length);
    newArr.push(e);
  }
  return newArr.join(' ');
}

console.log(fn(s));

// path
console.log(__dirname);
