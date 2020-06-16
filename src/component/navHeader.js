import React from "react";

class Navheading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: null,
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

  render() {
    let channel = this.state.channel;
    // console.log(channel);

    return (
      <>
        {channel ? (
          <div className="heading">
            <button className="btn">All</button>
            {channel.splice(1, 10).map((value) => {
              return <button className="btn">{value.name}</button>;
            })}
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
