import { EventEmitter } from 'events';
import { register } from '../AppDispatcher';

export default class BaseStore extends EventEmitter {
  subscribe(actionSubscribe) {
    this._dispatchToken = register(actionSubscribe());
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(cb) {
    this.on('CHANGE', cb);
  }

  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}
