import { dispatch } from '../AppDispatcher';
// import Axios from 'axios';
import ActionTypes from '../ActionTypes';
// import { getDefaultNormalizer } from '@testing-library/react';

export class WorkflowActions {
  saveToLocalStorage = data => {
    // Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //     .then(res => dispatch(ActionTypes.SAVE_TO_LOCALSTORAGE, { data: res.data }))

    const array = [...this.getData(), data];
    const arrayJson = JSON.stringify(array);
    localStorage.setItem('todo', arrayJson);

    alert('O objeto foi adicionado com sucesso');
    this.getFromLocalStorage();
  };

  getFromLocalStorage() {
    dispatch(ActionTypes.GET_FROM_LOCALSTORAGE, { data: this.getData() });
  }

  getData() {
    return JSON.parse(localStorage.getItem('todo')) || [];
  }

  deleteFromLocalStorage(id) {
    // const data = this.getData();
  }
}

export default new WorkflowActions();
