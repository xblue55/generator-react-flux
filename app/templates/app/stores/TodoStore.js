var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var TodoDispatcher = require('../dispatcher/TodoDispatcher');
var TodoConstant = require('../constants/TodoConstant');
var localStorage = require('localStorage');
var _ = require('underscore');

var TodoStore = ObjectAssign({}, EventEmitter.prototype, {
  getFromLocalStorage: function () {
    var data = localStorage.getItem('todo');
    if (data === null) {
      return [];
    }
    return JSON.parse(data);
  },
  saveToLocalStorage: function () {
    localStorage.setItem('todo', JSON.stringify(this.items));
  },
  items: [],
  getAll: function () {
    this.items = this.getFromLocalStorage();
    return this.items;
  },
  addItem: function (item) {
    this.items.push(item);
    this.saveToLocalStorage();
    this.emit(TodoConstant.ITEM_ADDED);
    this.emitChange();
  },
  removeItem: function (removeItem) {
    this.items = _.filter(this.items, function (item) {
      return item !== removeItem;
    });
    this.saveToLocalStorage();
    this.emit(TodoConstant.ITEM_REMOVED);
    this.emitChange();
  },
  emitChange: function () {
    this.emit(TodoConstant.TODO_CHANGE);
  }
});

TodoStore.dispatchToken = TodoDispatcher.register(function (payload) {
  var action = payload.actionType;
  switch (action) {
    case TodoConstant.ADD_ITEM_EVENT_NAME:
      TodoStore.addItem(payload.item);
      break;
    case TodoConstant.REMOVE_ITEM:
      TodoStore.removeItem(payload.item);
      break;
  }
  return true;
});

module.exports = TodoStore;