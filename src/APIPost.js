import React, { Component } from 'react';
import axios from 'axios';

export default class APIPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState(
            {[evt.target.name]: evt.target.value}
        );
    }

    handleSubmit(event){
        event.preventDefault();

        axios.post('http://localhost:8080/posts', {
            title: this.state.title,
            author: this.state.author,
            body: this.state.body
        })
        .then(response => {
            this.setState({
                submitted: true
            });
        });
    }

    render() {
        return(
            <div className="post-add card border-info">
                <div className="card-header add-post-header">
                    New Post
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <input className="form-control" 
                                aria-label="Post Title" aria-describedby="basic-addon2" 
                                placeholder="Post Title" type="text" name="title" onChange={this.handleChange} id="post-title" />
                            <input className="form-control"
                                aria-label="Post Author" aria-describedby="basic-addon2"
                                placeholder="Post Author" type="text" name="author" onChange={this.handleChange} id="post-author" />
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" 
                                aria-label="Post Body" aria-describedby="basic-addon2" 
                                placeholder="Post Body" type="text" name="body" onChange={this.handleChange} id="post-body" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" onClick={this.handleSubmit}>Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}