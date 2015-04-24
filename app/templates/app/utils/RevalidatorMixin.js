var _ = require('lodash');
var ObjectPath = require('object-path');
var Revalidator = require('revalidator');

function parseProperty(propertyValue) {
  var object = {
    isValid: false,
    isDirty: false,
    errors: []
  };
  var objectModel = ObjectPath(object);
  if (_.has(propertyValue, 'properties')) {
    for (var property in propertyValue.properties) {
      objectModel.set(property, parseProperty(propertyValue.properties[property]));
    }
  }
  if (propertyValue.type === 'array' && _.has(propertyValue, 'items')) {
    var max = ObjectPath.get(propertyValue, 'maxItems', 100);
    for (var i = 0; i < max; i++) {
      objectModel.set(i, parseProperty(propertyValue.items));
    }
  }
  return object;
}

var RevalidatorMixin = {
  getInitialState: function () {
    return {
      Revalidator: {
        isValid: false,
        isDirty: false,
        errors: []
      }
    };
  },
  resetValidation: function () {
    var schema = _.result(this, 'revalidatorSchema') || {};
    var revalidator = this.state.Revalidator;
    var revalidatorModel = ObjectPath(revalidator);
    revalidatorModel.set('isValid', false);
    revalidatorModel.set('isDirty', false);
    for (var property in schema) {
      //noinspection JSUnfilteredForInLoop,JSUnresolvedFunction
      revalidatorModel.set(property, parseProperty(schema[property]));
    }
    this.setState({Revalidator: revalidator});
  },
  componentWillMount: function () {
    if (!_.isObject(this.revalidatorSchema)) {
      throw Error('invalid `revalidatorSchema` type');
    }
    this.resetValidation();
  },
  processDirty: function (property) {
    var revalidator = this.state.Revalidator;
    var revalidatorModel = ObjectPath(revalidator);
    revalidatorModel.set('isDirty', true);
    if (property) {
      revalidatorModel.set(property + '.isDirty', true);
      this.setState({Revalidator: revalidator});

      var propertyArray = property.split('.');
      if (propertyArray.length > 1) {
        propertyArray.splice(-1, 1);
        this.processDirty(propertyArray.join('.'));
      }
    }
  },
  validateNested: function (object, schema, path) {
    path = path || '';
    var revalidator = this.state.Revalidator;
    var revalidatorModel = ObjectPath(revalidator);
    var objectModel = ObjectPath(object);
    var subObject;
    var subSchema;
    var subPath;

    if (_.has(schema, 'properties')) {
      var result = Revalidator.validate(object, schema);

      if (_.isEmpty(path)) {
        revalidatorModel.set('isValid', result.valid);
        revalidatorModel.set('errors', result.errors);
      } else {
        revalidatorModel.set(path + '.isValid', result.valid);
        revalidatorModel.set(path + '.errors', result.errors);
      }

      for (var schemaProperty in schema.properties) {
        var p = _.isEmpty(path) ? schemaProperty : (path + '.' + schemaProperty);
        revalidatorModel.set(p + '.isValid', true);
        revalidatorModel.set(p + '.errors', []);
      }

      _.each(result.errors, function (error) {
        var errorPropertyArray = error.property.split('.');
        if (errorPropertyArray.length === 1) {
          var p = _.isEmpty(path) ? error.property : (path + '.' + error.property);
          var isDirty = revalidatorModel.get(p + '.isDirty', false);
          if (isDirty) {
            revalidatorModel.set(p + '.isValid', false);
            var errors = revalidatorModel.get(p + '.errors', []);
            var r = _.find(errors, function (er) {
              return er.property === error.property;
            });
            if (_.isUndefined(r)) {
              revalidatorModel.push(p + '.errors', error);
            }
          }
        }
      });

      this.setState({Revalidator: revalidator});

      for (var property in schema.properties) {
        subObject = objectModel.get(property, {});
        subSchema = schema.properties[property];
        subPath = _.isEmpty(path) ? property : (path + '.' + property);
        this.validateNested(subObject, subSchema, subPath);
      }
    }

    if (_.has(schema, 'items')) {
      var max = ObjectPath.get(schema, 'maxItems', 100);
      for (var i = 0; i < max; i++) {
        subObject = objectModel.get(i, {});
        subSchema = schema.items;
        subPath = _.isEmpty(path) ? i : (path + '.' + i);
        this.validateNested(subObject, subSchema, subPath);
      }
    }
  },
  validate: function (property) {
    this.processDirty(property);
    var schema = _.result(this, 'revalidatorSchema') || {};
    this.validateNested(this.state, {properties: schema});
  },
  handleValidation: function (property) {
    return function (event) {
      event.preventDefault();
      this.validate(property);
    }.bind(this);
  },
  getErrors: function (property) {
    var revalidator = this.state.Revalidator;
    var revalidatorModel = ObjectPath(revalidator);
    if (property) {
      return revalidatorModel.get(property + '.errors', []);
    }
    return revalidator.errors;
  },
  isValid: function (property) {
    var revalidator = this.state.Revalidator;
    var revalidatorModel = ObjectPath(revalidator);
    if (property) {
      return revalidatorModel.get(property + '.isValid', false);
    }
    return revalidator.isValid;
  },
  isDirty: function (property) {
    var revalidator = this.state.Revalidator;
    var revalidatorModel = ObjectPath(revalidator);
    if (property) {
      return revalidatorModel.get(property + '.isDirty', false);
    }
    return revalidator.isDirty;
  }
};

module.exports = RevalidatorMixin;