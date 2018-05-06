import React, {Component} from 'react';
import CommentsForm from '../CommentsForm';
import CommentsShow from '../CommentsShow';
class GuestListContainer extends Component {
    render(){
        return (
            <section>
                <h1>Guestlist</h1>

                    <CommentsForm/>
                    <CommentsShow/>
                </section>
            );
        }
    }

export default GuestListContainer;
