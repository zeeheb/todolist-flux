import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Store from '../stores/Store';
// import Actions from '../actions/Actions';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export class AddTodo extends Component {
  state = {
    title: ' '
  };

  componentDidMount() {
    Store.addChangeListener(this.onChange);

    // Actions.saveToLocalStorage();
    // Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //   .then(res => this.setState({ todos: res.data }))
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const dataFromStore = Store.getItemData();
    if (dataFromStore) {
      this.setState({ title: dataFromStore.title, id: dataFromStore.id });
    }
  };

  changeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.id);
    this.setState({ title: '' });
  };

  render() {
    // const { title } = this.state;
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          style={{ display: 'flex', marginBottom: '10px' }}
        >
          <TextField
            id='outlined-basic'
            variant='outlined'
            type='text'
            name='title'
            label='Add ToDo'
            style={{ flex: '10', padding: '10px' }}
            value={this.state.title}
            onChange={this.changeValue}
          ></TextField>

          <Button className='btn' type='submit'>
            <AddIcon></AddIcon>
          </Button>
        </form>
      </div>
    );
  }
}

// proptypes
AddTodo.propTypes = {
  addTodo: PropTypes.object.isRequired
};

export default AddTodo;
