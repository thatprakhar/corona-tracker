import React from "react";
import Post from "../Post/Post";
import "./NewsView.css";

export default class NewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  render() {
    let posts = this.props.articles.map(x => (
      <li key={x.url}>
        <Post
          src_name={x.source.name}
          author={x.author}
          title={x.title}
          desc={x.description}
          url={x.url}
          img_url={x.urlToImage}
          time={x.publishedAt}
        />
      </li>
    ));

    return (
      <div>
        <ul>{posts}</ul>
      </div>
    );
  }
}
