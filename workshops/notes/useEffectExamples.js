// componentDidMount
useEffect(() => {
  console.log("Only visible when mounted");
}, []);

// componentWillUpdate
useEffect(() => {
  console.log("Update on every state and props change");
});

// componentWillUnmount
useEffect(() => {
  return () => {
    console.log("Only visible when unmounted");
  };
}, []);

// componentDidMount & componentWillUnmount
useEffect(() => {
  console.log("Only visible when mounted");

  return () => {
    console.log("Only visible when unmounted");
  };
}, []);

// listen for count change and do yourself once again
useEffect(() => {
  console.log("Only visible when mounted");

  return () => {
    console.log("Only visible when unmounted");
  };
}, [count]);
