import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Single from "./Single";
import PhotoGrid from "./PhotoGrid";
import POSTS from "../data/posts";
import COMMENTS from "../data/comments";
import DataContext from "../contexts/Data";

class App extends React.Component {
  state = {
    posts: POSTS,
    comments: COMMENTS
  };
  incrementLikes = index => {
    console.log("incrementing likes");
    const posts = [...this.state.posts];
    posts[index].likes += 1;
    this.setState({ posts });
  };

  addComment = (postId, author, comment) => {
    console.log("Adding comment");
    const comments = { ...this.state.comments };
    const postComments = comments[postId];
    if (!postComments.length) return;
    comments[postId] = [...postComments, { user: author, text: comment }];
    this.setState({ comments });
  };

  removeComment = (postId, index) => {
    const comments = { ...this.state.comments };
    const postComments = comments[postId];
    comments[postId] = [
      ...postComments.slice(0, index),
      ...postComments.slice(index + 1)
    ];
    this.setState({ comments });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          posts: this.state.posts,
          comments: this.state.comments,
          incrementLikes: this.incrementLikes,
          addComment: this.addComment,
          removeComment: this.removeComment
        }}
      >
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>

        <Switch>
          <Route path="/view/:postId" component={Single} />
          <Route component={PhotoGrid} />
        </Switch>
      </DataContext.Provider>
    );
  }
}

export default App;
