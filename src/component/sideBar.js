import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: null,
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=5ddc8e6d385f4f339865f9dcc482c8ed"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ headlines: data.articles });
      });
  }
  render() {
    let article = this.state.headlines;
    return (
      <>
        {article ? (
          <div className="top_headlines">
            <h3>Headlines</h3>
            {article.map((article) => {
              return (
                <div className="right_sec">
                  <h2>{article.source.name}</h2>
                  <time>{new Date(article.publishedAt).toDateString()}</time>
                  <p>{article.description}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p>Loding..</p>
        )}
      </>
    );
  }
}

export default Sidebar;
