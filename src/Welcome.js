import React from "react";

export class Welcome extends React.Component {
  static defaultProps = {
    name: "fellow human being",
  };
  render() {
    return <p>Welcome {this.props.name}!</p>;
  }
}
