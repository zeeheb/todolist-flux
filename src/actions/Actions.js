import { dispatch } from '../AppDispatcher';
// import Axios from 'axios';
import qs from 'qs';
import ActionTypes from '../ActionTypes';
import _ from 'lodash';
import axios from 'axios';
// import { getDefaultNormalizer } from '@testing-library/react';

export class Actions {
  saveToLocalStorage = data => {
    console.log('###', data);
    // const array = [...this.getData(), data];
    // const arrayJson = JSON.stringify(array);
    // localStorage.setItem('todo', arrayJson);

    // axios
    //   .post('http://127.0.0.1:3001/todo/add', data)
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    axios
      .post('http://localhost:3001/todo/add', data, {
        headers: {
          'content-type': 'application/json',
          // Accept: 'application/json'
          'Access-Control-Allow-Origin': '*'
        }
      })
      .catch(err => console.log(err));
    // axios
    //   .post(
    //     'http://127.0.0.1:8089/api/login',
    //     {
    //       username: 'thiago.zanluca@dalmark.com.br',
    //       password: 'Dalmark@@1401'
    //     },
    //     {
    //       headers: {
    //         'content-type': 'application/json'
    //         // Accept: 'application/json'
    //       }
    //     }
    //   )
    //   .catch(err => console.log(err));

    // fetch('http://127.0.0.1:3001/todo/add', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });

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
