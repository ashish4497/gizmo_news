import React from "react";
import Herosec from "./heroSec";

class Navheading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: null,
      filterSource: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/sources?language=en&country=us&apiKey=9b6e4ba310984f1eb99e6246ec316f40"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ channel: data.sources });
      });
  }

  handleChange = (id = "abc-news") => {
    console.log(id, "check id");
    fetch(
      `https://newsapi.org/v2/everything?sources=${id}&from=2020-06-15&to=2020-06-15&sortBy=popularity&apiKey=9b6e4ba310984f1eb99e6246ec316f40`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ filterSource: data.articles });
      });
  };

  render() {
    let channel = this.state.channel;

    return (
      <>
        {channel ? (
          <div className="heading">
            <button className="btn" onClick={this.handleChange}>
              All
            </button>
            {channel.splice(0, 10).map((value) => {
              return (
                <button
                  className="btn"
                  onClick={() => this.handleChange(value.id)}
                >
                  {value.name}
                </button>
              );
            })}
            <Herosec
              filterSource={this.state.filterSource || this.handleChange()}
            />
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </>
    );
  }
}

export default Navheading;
