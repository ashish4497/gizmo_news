import React from "react";
import Template from "./trendNews";
import Newsarticle from "./articlesNews";
// import Nextweb from "./nextWeb";

class Herosec extends React.Component {
  constructor() {
    super();
    this.state = {
      news: null,
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2020-06-15&to=2020-06-15&sortBy=popularity&apiKey=9b6e4ba310984f1eb99e6246ec316f40"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ news: data.articles });
      });
  }
  render() {
    let news = this.state.news;
    return (
      <>
        {news ? (
          <div>
            <Template news={news[0]} />
            <Newsarticle news={news.splice(2)} />
            {/* <Nextweb news={news} /> */}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </>
    );
  }
}

export default Herosec;
