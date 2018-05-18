import React, { Component } from "react";
import { Container } from 'reactstrap';
import PostListCollapse from './PostListCollapse';
import APIPost from './APIPost';
import axios from 'axios';

export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            filteredPosts: [],
            q: '',
            // submitted: false
        };

        this.filterList = this.filterList.bind(this);
        this.onChange = this.onChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(response) {
        axios.get('http://localhost:8080/posts')
        .then(response => {
            this.setState({
                posts: response.data,
                filteredPosts: response.data
            },
                () => this.filterList()
            );
        });
    }

    onChange(event) {
        const q = event.target.value.toLowerCase();
        this.setState({q}, () => this.filterList());
    }

    filterList() {
        let posts = this.state.posts;
        let q = this.state.q;

        posts = posts.filter(function(post) {
            return post.title.toLowerCase().indexOf(q) !== -1 || post.body.toLowerCase().indexOf(q) !== -1
        });

        this.setState({filteredPosts: posts});
    }

    // handleChange(evt) {
    //     this.setState(
    //         {[evt.target.name]: evt.target.value}
    //     );
    // }

    // handleSubmit(event){
    //     event.preventDefault();

    //     axios.post('http://localhost:8080/posts', {
    //         title: this.state.title,
    //         author: this.state.author,
    //         body: this.state.body
    //     })
    //     .then(response => {
    //         this.setState({
    //             submitted: true
    //         });
    //     });
    // }

    render() {
        const posts = this.state.filteredPosts;
        return (
            <Container>
                <APIPost />
                <input className="form-control post-search" placeholder="Search posts" value={this.state.q} type="text" onChange={this.onChange} />
                {Object.keys(posts).map((key, index) =>
                    <PostListCollapse key={index} post={posts[key]} />
                )}
            </Container>
        )
    }
}
