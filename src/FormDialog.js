import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          fullWidth
          open={true}
          onClose={this.props.onClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Edit ToDo</DialogTitle>
          <DialogContent>
            <DialogContentText>Make your edition</DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='New ToDo'
              type='text'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.props.onClose} color='primary'>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
