import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.increseAge}>Increse Age</button>
        <button onClick={this.props.decreseAge}>Decrese Age</button>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increseAge: () => dispatch({ type: "INCRESE AGE" }),
    decreseAge: () => dispatch({ type: "DECRESE AGE" })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
