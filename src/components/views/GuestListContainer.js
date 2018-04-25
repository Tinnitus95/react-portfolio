import React, {Component} from 'react';
import CommentsForm from '../CommentsForm';
import CommentsShow from '../CommentsShow';
class GuestListContainer extends Component {
    render(){
        return (
            <div>
                <h2>Guestlist</h2>

                    <CommentsForm/>
                    <CommentsShow/>
                </div>
            );
        }
    }

export default GuestListContainer;
