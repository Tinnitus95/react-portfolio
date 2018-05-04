import React, {Component} from 'react';
import CommentsForm from '../CommentsForm';
import CommentsShow from '../CommentsShow';
class GuestListContainer extends Component {
    render(){
        return (
            <div>
                <h1>Guestlist</h1>

                    <CommentsForm/>
                    <CommentsShow/>
                </div>
            );
        }
    }

export default GuestListContainer;
