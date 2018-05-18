import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import logo from './logo.svg';

export default class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <header className="blog-header py-3">
                        <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col-4 pt-1">
                                <NavLink exact to="/"><img src={logo} className="Main-logo" alt="logo" /></NavLink>
                            </div>
                            <div className="col-4 text-center">
                                <NavLink className="blog-header-logo text-dark" to="/">API Consumer</NavLink>
                            </div>
                            <div class="col-4 d-flex justify-content-end align-items-center">
                                <NavLink className="text-muted" exact to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                                </NavLink>
                                <NavLink className="p-2 text-muted" to="/posts">Sign up</NavLink>
                            </div>
                        </div>
                    </header>
                    <div className="nav-scroller py-1 mb-2">
                        <nav className="nav d-flex justify-content-center">
                            <NavLink className="p-2 text-muted" exact to="/">Home</NavLink>
                            <NavLink className="p-2 text-muted" to="/posts">Posts</NavLink>
                        </nav>
                    </div>

                    <div className="content">
                        <Route exact path ="/" component={Home} />
                        <Route path ="/posts" component={Post} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}
