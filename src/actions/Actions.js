import { dispatch } from '../AppDispatcher';
// import Axios from 'axios';
import ActionTypes from '../ActionTypes';
import _ from 'lodash';
// import { getDefaultNormalizer } from '@testing-library/react';

export class Actions {
  saveToLocalStorage = data => {
    // Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //     .then(res => dispatch(ActionTypes.SAVE_TO_LOCALSTORAGE, { data: res.data }))

    const array = [...this.getData(), data];
    const arrayJson = JSON.stringify(array);
    localStorage.setItem('todo', arrayJson);

    alert('O objeto foi adicionado com sucesso');
    // callback('O objeto foi adicionado com sucesso');
    this.getFromLocalStorage();
  };

  getFromLocalStorage() {
    dispatch(ActionTypes.GET_FROM_LOCALSTORAGE, { data: this.getData() });
  }

  getData() {
    return JSON.parse(localStorage.getItem('todo')) || [];
    // return localStorage.getItem('todo') || [];
  }

  deleteFromLocalStorage(title) {
    const data = this.getData();
    const filteredData = _.filter(data, value => value.title !== title);
    //   data.forEach(value => {
    //     if (value.title === title) {
    //     }
    //   });

    localStorage.setItem('todo', JSON.stringify(filteredData));
    // setTimeout(() => this.getFromLocalStorage(), 3000);
    this.getFromLocalStorage();
  }
}

export default new Actions();
