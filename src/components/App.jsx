import React, { useState } from "react"; //useState Hook is a function in react module so it is imported from react.

function App() {
  const [count, changeCount] = useState(0);
  //We need to define initial value. Then get to use that value inside the destructured array.
  //Hooks can only be called inside of the body of a function component.
  //useState function returns an array of two values. First one is the current state. Second one is a function which changes the current state.
  function increase() {
    changeCount(count + 1); // changeCount function which is inside useState is called to change the state.
  }
  function decrease() {
    changeCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      {/**We are putting the value of count inside the h1 */}
      {/**h1 always monitor whether the state changes or not. If state changes h1 rerenders.  */}
      <button onClick={increase}>+</button>{" "}
      {/*event listener onClick calls a function "increase" when button clicked*/}
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
