﻿var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
               <h1>Comments</h1>
               <CommentList data="this.props.data" />
               <CommentForm />
            </div>);
    }
});

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
            )
    }
});

var CommentList = React.createClass({
    render: function () {     
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
                );
        
         });
        return (
            <div className="commentList">
               {commentNodes}
            </div>
            );
        }
        });

//json - this would be inside the model
var data = [
  { id: 1, author: "Daniel Lo Nigro", text: "Hello ReactJS.NET World!" },
  { id: 2, author: "Pete Hunt", text: "This is one comment" },
  { id: 3, author: "Jordan Walke", text: "This is *another* comment" }
];

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
    );