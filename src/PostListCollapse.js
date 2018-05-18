import React, { Component } from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

export default class PostListCollapse extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const post = this.props.post;
        return (
            <ListGroupItem>
                <div className="card bg-warning border-success">
                    <div className="card-header post-header" onClick={this.toggle}>
                        <h5 className="card-title">{post.title}</h5>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <div className="card-body">
                            <p className="card-text">{post.body}</p>
                        </div>
                    </Collapse>
                </div>
            </ListGroupItem>
        )
    }
}
