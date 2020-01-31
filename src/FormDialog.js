import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends Component {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   let setOpen = true;

  //   const handleClose = () => {
  //     setOpen = false;
  //   };
  render() {
    return (
      <div>
        <Dialog
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
              label='New Todo'
              type='text'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.props.onClose} color='primary'>
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
