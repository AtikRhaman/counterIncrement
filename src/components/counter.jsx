// react component
import React, { Component } from "react";

//class component
class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    // console.log("Increament clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span className={this.classes}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Increament{" "}
        </button>
      </div>
    );
  }

  // added a method into the class component
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
