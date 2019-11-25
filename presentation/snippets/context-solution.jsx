import React from "react";
import { FamilyProvider, FamilyConsumer } from "./FamilyContext";

export class Grandmother extends React.Component {
  state = {
    lastName: "Sanchez"
  };

  render() {
    return (
      <FamilyProvider value={this.state.lastName}>
        <Mother />
      </FamilyProvider>
    );
  }
}

const Mother = () => {
  return <Child />;
};

const Child = () => {
  return <FamilyConsumer>
    {context => <p>{context}</p>}
  </FamilyConsumer>;
};
