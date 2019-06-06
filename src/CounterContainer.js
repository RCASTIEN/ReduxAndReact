import React, { Component } from "react";
import { connect } from "react-redux";

const add = { type: "ADD" };
const remove = { type: "REMOVE" };
const addTEN = { type: "ADDTEN" };
const removeTEN = { type: "REMOVETEN" };
const reset = { type: "RESET" };

class CounterComponent extends Component {
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(add)}>+</button>
        <button onClick={() => dispatch(remove)}>-</button>
        <button onClick={() => dispatch(addTEN)}>+</button>
        <button onClick={() => dispatch(removeTEN)}>-</button>
        <button onClick={() => dispatch(reset)}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;
