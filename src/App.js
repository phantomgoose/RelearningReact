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
        <p>{this.props.message}</p>
        <input type="text" onChange={this.handleTextChange} value={this.state.text} />
        <button onClick={() => this.props.handleNewMessage(this.state.text)}>Submit text</button>
        <br></br>
        <button onClick={() => this.props.fetchFakeUsers()}>Fetch fake users</button>
        {this.props.isFetching ?
          <p>Loading...</p>
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
  handleNewMessage: text => dispatch(actions.test(text)),
  fetchFakeUsers: () => dispatch(actions.fetchFakeUsers()),
});

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
