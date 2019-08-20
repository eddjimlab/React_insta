import React, { Component } from "react";
import User from "./User";
import InstaService from "../services/instaservice";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";

export default class Users extends Component {
  InstaService = new InstaService();
  state = {
    users: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateUsers();
  }
  updateUsers() {
    this.InstaService.getAllUsers()
      .then(this.onUsersLoaded)
      .catch(this.onError);
  }

  onUsersLoaded = users => {
    this.setState({
      users,
      loading: false,
      error: false
    });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  renderItems(arr) {
    return arr.map(item => {
      const { name, photo, alt, src, id } = item;

      return (
        <div key={id} className="right">
          <User src={src} alt={alt} name={alt} />
          <div className="users__block">
            <User src={photo} alt={alt} name={name} min />
          </div>
        </div>
      );
    });
  }

  render() {
    const { error, users, loading } = this.state;
    const items = this.renderItems(users);
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorMessage />;
    }

    return (
      <div className="right">
        {items}
        {/* <User
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGc3NfDg5kuzY3VLcpzwzl-fbTeY1Z6xdhUQA2EbDMETvJATP"
          alt="prince"
          name="Harry_the_prince"
        /> */}
      </div>
    );
  }
}
