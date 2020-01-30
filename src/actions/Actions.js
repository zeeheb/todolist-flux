import { dispatch } from '../AppDispatcher';
import ActionTypes from '../ActionTypes';
import _ from 'lodash';
import axios from 'axios';

export class Actions {
  saveToLocalStorage = data => {
    // console.log('###', data);
    // const array = [...this.getData(), data];
    // const arrayJson = JSON.stringify(array);
    // localStorage.setItem('todo', arrayJson);

    axios
      .post('http://localhost:3001/todo/add', data, {
        headers: {
          'content-type': 'application/json',
          // Accept: 'application/json'
          'Access-Control-Allow-Origin': '*'
        }
      })
      .catch(err => console.log(err));

    // alert('O objeto foi adicionado com sucesso');
    // callback('O objeto foi adicionado com sucesso');
    // this.getFromLocalStorage();
  };

  getFromLocalStorage() {
    dispatch(ActionTypes.GET_FROM_LOCALSTORAGE, { data: this.getData() });
  }

  saveEdition(obj) {
    const arrayData = this.getData();
    const index = _.findIndex(arrayData, ['id', obj.id]);
    arrayData[index].title = obj.title;
    // item.
    // item.lastUpdate

    localStorage.setItem('todo', JSON.stringify(arrayData));
    this.getFromLocalStorage();
  }

  getData() {
    return JSON.parse(localStorage.getItem('todo')) || [];
    // return localStorage.getItem('todo') || [];
  }

  deleteFromLocalStorage(id) {
    const data = this.getData();
    const filteredData = _.filter(data, value => value.id !== id);
    //   data.forEach(value => {
    //     if (value.title === title) {
    //     }
    //   });

    localStorage.setItem('todo', JSON.stringify(filteredData));
    // setTimeout(() => this.getFromLocalStorage(), 3000);
    this.getFromLocalStorage();
  }

  editItemFromLocalStorage(id) {
    const item = _.find(this.getData(), ['id', id]);
    dispatch(ActionTypes.GETITEM_FROM_LOCALSTORAGE, { data: item });
  }
}

export default new Actions();
