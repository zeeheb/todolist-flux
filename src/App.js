import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';
// import { Component } from 'react';
// import Axios from 'axios';
import Store from './stores/Store';
import Actions from './actions/Actions';
// import moment from 'moment';
// import _ from 'lodash';
// import SimpleModal from './SimpleModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    Actions.getFromLocalStorage();

    // Actions.saveToLocalStorage();
    // Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //   .then(res => this.setState({ todos: res.data }))
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromStore = Store.getData();
    this.setState({ todos: dataFromStore });
  };

  //Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //delete todo
  delTodo = id => {
    Actions.deleteFromLocalStorage(id);

    //   this.setState({
    //     todos: [...this.state.todos.filter(todo => todo.id !== id)]
    //   })
    // );
  };

  //Add Todo
  addTodo = (title, id) => {
    if (id) {
      Actions.saveEdition({ title, id });
    } else {
      Actions.saveToLocalStorage({
        id: uuid.v4(),
        title,
        completed: false
      });
    }
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  {/* {this.state.showDialog && (
                    <SimpleModal close={this.closeModal} />
                  )} */}
                  <AddTodo addTodo={this.addTodo} />

                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
