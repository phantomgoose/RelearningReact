import React from 'react';
import './App.css';
import * as actions from './actions';
import { connect } from 'react-redux';

const User = ({ name }) => <div>{name}</div>;

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
        <button onClick={() => this.props.onFetchFakeUsers()}>Very special button</button>
        {this.props.isFetching ?
          <span>Loading...</span>
          : <ol>
            {this.props.users.map(u => <User key={u.id} name={u.name}/>)}
          </ol>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.test.message,
  users: state.users,
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  onNewMessage: text => dispatch(actions.test(text)),
  onFetchFakeUsers: () => dispatch(actions.fetchFakeUsers()),
});

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
