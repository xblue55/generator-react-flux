var React = require('react');
var DocumentTitle = require('react-document-title');

var SubPageDefault = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="Default| PageNested | React-Flux">
        <div>
          <h1>Default</h1>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = SubPageDefault;