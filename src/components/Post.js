import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGc3NfDg5kuzY3VLcpzwzl-fbTeY1Z6xdhUQA2EbDMETvJATP"
                    alt="prince"
                name="Harry_the_prince" min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
            </div>
        )
    }
}