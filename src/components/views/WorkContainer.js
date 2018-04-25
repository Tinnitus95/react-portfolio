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
            <div>
                <h2>WORK</h2>
                <ul>
                    {this.workDisplay()}
                </ul>
            </div>
            );
        }
    }

export default WorkContainer;
