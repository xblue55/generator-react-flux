var React = require('react');
var DocumentTitle = require('react-document-title');

var SubPage = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="Subpage | PageNested | React-Flux">
        <div>
          <h1>Subpage</h1>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = SubPage;