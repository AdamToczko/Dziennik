// Callbacks
function doSomeAsyncStuff() {
  wait(1000, () => {
    console.log("Done");
    wait(2000, () => {
      console.log("More waiting done");
    });
  });
}

// Promise
function doSomeAsyncStuff() {
  wait(1000)
    .then(() => console.log("Done"))
    .then(() => wait(2000))
    .then(() => console.log("More waiting done"));
}

// Async await
async function doSomeAsyncStuff() {
  await wait(1000);
  console.log("Done");
  await wait(2000);
  console.log("More waiting done");
}
