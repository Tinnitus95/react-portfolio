import React, {Component} from 'react';
import CommentsItem from './CommentsItem';
import _ from 'lodash';

const API = 'https://portfoliobackendapi.herokuapp.com/comments'
class CommentsShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount(){
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ comments: data }));
    }
    CommentDisplay(){
        return _.map(this.state.comments, comment => {
            return <CommentsItem
                        key={comment.id}
                        comment={comment}
                    />;
        });
    }


render(){
    console.log(this.state.comments);
    return (
        <div>
            <ul>
                {this.CommentDisplay()}
            </ul>
        </div>
    );
}

}

export default CommentsShow;
