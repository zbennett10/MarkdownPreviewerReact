
var MarkdownPreviewer = React.createClass({
 
    getInitialState: function() {
        var placeholder = "# Enter your markdown here";
        return {
            text: placeholder,
            textUpdate: this.convertText(placeholder)
        }
    },
  
    convertText: function(input) {
        return {
            __html: marked(input)
        };
    },
  
    updateMarkdown: function(event) {
        var currentText = event.target.value
        this.setState({
            text: currentText,
            textUpdate: this.convertText(currentText)
        });
    },
  
    render: function() { 
        return (
          <div>
        
            <textarea className="userInput"  onChange={this.updateMarkdown}>
            {this.state.text}
            </textarea>
       
          <div className="output" dangerouslySetInnerHTML={this.state.textUpdate}></div>
      </div>
    );
}
});

ReactDOM.render(
  <MarkdownPreviewer/>, document.getElementById('content')
);