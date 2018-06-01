import React from "react";
import Photo from "./Photo";
import DataContext from "../contexts/Data";
import Comments from "./Comments";

const Single = props => {
  const { postId } = props.match.params;

  return (
    <DataContext.Consumer>
      {context => {
        const i = context.posts.findIndex(post => post.code === postId);
        const post = context.posts[i];
        return (
          <div className="single-photo">
            <Photo i={i} post={post} {...context} {...props} />
            <Comments
              postComments={context.comments[post.code] || []}
              {...context}
              {...props}
            />;
          </div>
        );
      }}
    </DataContext.Consumer>
  );
};

export default Single;
