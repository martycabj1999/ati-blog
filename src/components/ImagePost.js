import React, { Component } from "react";
import { Storage } from "aws-amplify";

class ImagePost extends Component {
  state = {
    storageImg: { fileUrl: "" },
  };
  componentDidMount = () => {
    Storage.get(this.props.imageData.imageName).then((url) => {
      console.log(url);
      this.setState({
        storageImg: { fileUrl: url },
      });
    });
  };

  render() {
    return (
      <div className="imageDiv">
        <span>
          <img
            className="imagePost"
            src={this.state.storageImg.fileUrl}
            alt="postImage"
            style={{
              height: "250px",
              width: "auto",
              borderRadius: "10px",
              display: "block",
              margin: "auto",
              maxWidth: "700px",
            }}
          />
        </span>
      </div>
    );
  }
}
export default ImagePost;
