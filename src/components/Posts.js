import React, { Component } from "react";
import User from './User';
import InstaService from "../services/instaservice";
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';


export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePosts();
}

  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      loading: false,
      error: false
  })
  }
  
  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { name, altname, photo, src, alt, descr, id } = item;

      return (
        <div key={id} className="post">
          <User
            src={photo}
            alt={altname}
            name={name} min />
          <img src={src} alt={alt}></img>
          <div className="post__name">
            {name}
                </div>
          <div className="post__descr">
            {descr}
                </div>
        </div>
      )
    });
  }

  render() {
    const { error, posts, loading } = this.state;
    const items = this.renderItems(posts);
    
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;

    return (
      <div className="left">
        {errorMessage}
        {spinner}
        {items}
      </div>
    );
  }
}
