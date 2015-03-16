var React = require('react');
var DocumentTitle = require('react-document-title');

var PageNotFound = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="PageNotFound|React-Flux">
        <div className="page-not-found">
          <h1>Page Not Found</h1>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = PageNotFound;