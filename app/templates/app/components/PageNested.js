var React = require('react');
var DocumentTitle = require('react-document-title');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;

var PageNested = React.createClass({
  render: function () {
    return (
      <DocumentTitle title="Page Nested | React-Flux">
        <div className="page-2">
          <div className="row">
          	<div className="col-sm-9">
          		<RouteHandler/>
          	</div>
          	<aside className="col-sm-3">
          		<nav className="nav nav-pill">
          			<li>
          				<Link to="page-nested">Default</Link>
          			</li>
          			<li>
          				<Link to="sub-page">Subpage</Link>
          			</li>
          		</nav>
          	</aside>
          </div>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = PageNested;