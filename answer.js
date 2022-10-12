function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

const deleteNth = (a, x) => {
  let m = {};
  return a.filter( v => (m[v] = m[v]+1||1) <= x );
}
