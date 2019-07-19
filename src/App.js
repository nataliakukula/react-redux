import React from 'react';
import './App.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/action';           

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.increseAge}>Increse Age</button>
        <button onClick={this.props.decreseAge}>Decrese Age</button>
        {this.props.loading && <img src={logo} className="App-logo" alt="logo"/>}
        <br />
        <h1>History</h1>
        <div>
          <ul>
            {
              this.props.history.map(el => <li key={el.id} onClick={()=> this.props.deleteItem(el.id)}>{el.age}</li>)
            }
          </ul>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increseAge: () => dispatch(actionCreator.increseAge(1)),
    decreseAge: () => dispatch(actionCreator.decreseAge(1)),
    deleteItem: (id) => dispatch({type: "DELETE ITEM", key: id})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
