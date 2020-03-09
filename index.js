const wait = function(t) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Completed in ' + t);
    }, t);
  });
};
wait(1000).then(function(result) {
  return console.log(result);
});

// async function asyncCall(t) {
//   const result = await wait(t);
//   console.log(result);
// }

// asyncCall(1500);

Promise.all([wait(1000), wait(1500), wait(2000)]).then(values => { 
    console.log(values);
});