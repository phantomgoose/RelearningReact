import React from 'react';
import './App.css';
import * as actions from './actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleTextChange = e => {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        {this.props.message}
        <input type="text" onChange={this.handleTextChange} value={this.state.text} />
        <button onClick={() => this.props.onNewMessage(this.state.text)}>Press me</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.test.message,
});

const mapDispatchToProps = dispatch => ({
  onNewMessage: text => dispatch(actions.test(text)),
});

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
