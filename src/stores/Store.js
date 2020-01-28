import BaseStore from './BaseStore';
import ActionTypes from '../ActionTypes';

class Store extends BaseStore {
  constructor() {
    super();
    this.subscribe(() => this.registerToActions.bind(this));

    this.data = null;
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  registerToActions(action) {
    switch (action.type) {
      //   case ActionTypes.SAVE_TO_LOCALSTORAGE:
      //     this.setData(action.data);
      //     this.emitChange();
      //     break;
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
