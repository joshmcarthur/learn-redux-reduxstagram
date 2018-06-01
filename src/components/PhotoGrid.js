import React from "react";
import Photo from "./Photo";
import DataContext from "../contexts/Data";

const PhotoGrid = props => {
  return (
    <DataContext.Consumer>
      {context => (
        <div className="photo-grid">
          {context.posts.map((post, i) => (
            <Photo
              {...props}
              {...context}
              key={i}
              i={i}
              post={post}
              increment={context.incrementLikes}
            />
          ))}
        </div>
      )}
    </DataContext.Consumer>
  );
};

export default PhotoGrid;
