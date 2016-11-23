
var MarkdownPreviewer = React.createClass({
	render: function() {
	    return (
            <div>
			<textarea className="markdownArea">
				"Enter your markdown here!"
			</textarea>
            <div className="previewArea"></div>
            </div>
	  );        
	}
});

ReactDOM.render(
  <MarkdownPreviewer  />,
  document.getElementById('content')
);