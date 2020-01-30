import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import CheckBoxes from '../CheckBoxes';
import EditIcon from '@material-ui/icons/Edit';
// import FloatingActionButtons from '../FloatingActionButtons';
import Actions from '../actions/Actions';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabelPosition from '../FormControlLabelPosition';
// import AddIcon from '@material-ui/icons/Add';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '3px #333 ',
      backgroundColor: '#abc',
      border: '1px solid #333',
      marginBottom: '1px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  onEdit = id => {
    // this.setState({ id: e.target.value });
    Actions.editItemFromLocalStorage(id);
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <FormControlLabelPosition
            label={title}
            onChange={this.props.markComplete.bind(this, id)}
          ></FormControlLabelPosition>
          <Button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            <DeleteIcon></DeleteIcon>
          </Button>
          <Button onClick={() => this.onEdit(id)} style={btnStyle}>
            <EditIcon></EditIcon>
          </Button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  cursor: 'pointer',
  float: 'right'
};

// proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
