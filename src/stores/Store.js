import BaseStore from './BaseStore';
import ActionTypes from '../ActionTypes';

class Store extends BaseStore {
  constructor() {
    super();
    this.subscribe(() => this.registerToActions.bind(this));
    this.itemData = null;
    this.data = null;
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setItemData(data) {
    this.itemData = data;
  }

  getItemData(data) {
    return this.itemData;
  }

  registerToActions(action) {
    switch (action.type) {
      case ActionTypes.GETITEM_FROM_LOCALSTORAGE:
        this.setItemData(action.data);
        this.emitChange();
        break;
      case ActionTypes.GET_FROM_LOCALSTORAGE:
        this.setData(action.data);
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

export default new Store();
