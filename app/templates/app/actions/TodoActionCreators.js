var TodoDispatcher = require('../dispatcher/TodoDispatcher');
var TodoConstant = require('../constants/TodoConstant');

var TodoActionCreators = {
  addNewItem: function (item) {
    TodoDispatcher.dispatch({
      actionType: TodoConstant.ADD_ITEM_EVENT_NAME,
      item: item
    });
  },
  removeItem: function (item) {
    TodoDispatcher.dispatch({
      actionType: TodoConstant.REMOVE_ITEM,
      item: item
    });
  }
};

module.exports = TodoActionCreators;