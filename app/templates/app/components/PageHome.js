var React = require('react');
var Todo = require('./Todo');
var DocumentTitle = require('react-document-title');

var PageHome = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="Home|React-Flux">
        <div className="page-home">
          <section className="page-header">
            <h1>Todo</h1>
          </section>
          <section className="main-content">
            <Todo/>
          </section>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = PageHome;