var React = require('react');
var DocumentTitle = require('react-document-title');

var PageNormal = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="Page Normal | React-Flux">
        <div className="page-1">
          <h1>Page Normal</h1>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = PageNormal;