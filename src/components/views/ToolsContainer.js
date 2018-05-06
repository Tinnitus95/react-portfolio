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
            <section>
                <h1>TOOLS</h1>
                <ul className="toolBox">
                    {this.toolDisplay()}
                </ul>
            </section>
            );
        }
    }

export default ToolsContainer;
