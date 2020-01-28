import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ' '
  };

  changeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          style={{ display: 'flex', marginBottom: '10px' }}
        >
          <input
            type='text'
            name='title'
            placeholder='Add ToDo...'
            style={{ flex: '10', padding: '10px' }}
            value={this.state.title}
            onChange={this.changeValue}
          />

          <input
            type='submit'
            value='Submit'
            className='btn'
            style={{ flex: '1' }}
          ></input>
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
