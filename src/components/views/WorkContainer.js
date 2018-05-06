import React, {Component} from 'react';
import _ from 'lodash';
import WorkListItem from '../WorkListItem';

class WorkContainer extends Component {

    workDisplay(){
        return _.map(this.props.work, workItem => {
            return <WorkListItem
                        key={workItem.name}
                        work={workItem}
                    />;
        });
    }


    render(){

        return(
            <section>
                <h1>WORK</h1>
                <ul>
                    {this.workDisplay()}
                </ul>
            </section>
            );
        }
    }

export default WorkContainer;
