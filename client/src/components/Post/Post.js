import React from "react";
import "./Post.css";

export default class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <a href={this.props.url} className="link">
          <img
            src={this.props.img_url}
            alt={this.props.desc}
            className="img"
          ></img>
          <div className="info">
            <h3>{this.props.title}</h3>
            <h6 className="desc">{this.props.desc}</h6>
          </div>
        </a>
        <h6>
          {this.props.src_name}, {this.props.author} - {this.props.time}
        </h6>
      </div>
    );
  }
}
