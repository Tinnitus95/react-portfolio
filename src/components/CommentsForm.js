import React,{Component} from 'react';

class CommentsForm extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            author:'',
            text: ''
        }
    }

    handleTextChange(text){
        this.setState({text})
        console.log(text);
    }
    handleAuthorChange(author){
        this.setState({author})
        console.log(author);
    }
    handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);

        fetch('https://portfoliobackendapi.herokuapp.com/comments',  {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({author: this.state.author, body: this.state.text})
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="comment">Enter comment</label>
                <input
                    id="comment"
                    value={this.state.text}
                    onChange={event => this.handleTextChange(event.target.value)}
                    placeholder="write a comment!"
                />

                <label htmlFor="author">Enter your name</label>
                <input
                    id="author"
                    value={this.state.author}
                    onChange={event => this.handleAuthorChange(event.target.value)}
                    placeholder="write a comment!"
                />

                <button>Send data!</button>
            </form>
        );
    }
}

export default CommentsForm;
