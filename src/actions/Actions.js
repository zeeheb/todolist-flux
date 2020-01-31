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
      .post('http://localhost:3001/todo/', data, {
        headers: {
          'content-type': 'application/json',
          // Accept: 'application/json'
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(() => {
        this.getFromLocalStorage();
      })
      .catch(err => console.log(err));

    // alert('O objeto foi adicionado com sucesso');
    // callback('O objeto foi adicionado com sucesso');
  };

  getFromLocalStorage() {
    axios
      .get('http://localhost:3001/todo')
      .then(res => {
        dispatch(ActionTypes.GET_FROM_LOCALSTORAGE, res);
        // return res.data;
      })
      .catch(err => console.log(err));
    // dispatch(ActionTypes.GET_FROM_LOCALSTORAGE, { data: this.getData() });
  }

  saveEdition(obj) {
    // const arrayData = this.getData();
    const arrayData = this.getFromLocalStorage();
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

  deleteFromLocalStorage(id, callback) {
    axios
      .delete(`http://localhost:3001/todo?id=${id}`)
      .then(res => {
        callback();
        this.getFromLocalStorage();
      })
      .catch(err => console.log(err));
  }

  editItemFromLocalStorage(id) {
    const item = _.find(this.getData(), ['id', id]);
    dispatch(ActionTypes.GETITEM_FROM_LOCALSTORAGE, { data: item });
  }
}

export default new Actions();
