import React, {Component} from 'react';
import _ from 'lodash';
import ToolsListItem from '../ToolsListItem'
class ToolsContainer extends Component {
    toolDisplay(){
        return _.map(this.props.tools, tool => {
            return <ToolsListItem
                    key={tool.name}
                    tool={tool}
            />;
        });
    }

    render(){
        console.log(this.props.tools)
        return (
            <div>
                <h2>TOOLS</h2>
                <ul>
                    {this.toolDisplay()}
                </ul>
                </div>
            );
        }
    }

export default ToolsContainer;
