import React from "react";
import "./style.css";
import Navheading from "./component/navHeader";
import Topheader from "./component/topHeader";
import Sidebar from "./component/sideBar";
export default class App extends React.Component {
  state = {
    channel: null,
    filterSource: null,
    searchQuery: "",
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=5ddc8e6d385f4f339865f9dcc482c8ed"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ channel: data.sources });
      });
  }

  handleChange = (id = "abc-news") => {
    console.log(id, "check id");
    fetch(
      `https://newsapi.org/v2/everything?sources=${id}&apiKey=5ddc8e6d385f4f339865f9dcc482c8ed`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ filterSource: data.articles });
      });
  };
  handleSearch = (searchQuery) => {
    this.setState({ searchQuery });
    console.log(searchQuery);
  };

  render() {
    let news = this.state.searchQuery
      ? this.state.channel.filter((c) =>
          c.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        )
      : this.state.channel;
    console.log(news, "news here");

    return (
      <>
        <Topheader handleSearch={this.handleSearch} />
        <div className="grid padding">
          <Navheading
            channel={news}
            filterSource={this.state.filterSource}
            handleChange={this.handleChange}
          />
          <Sidebar />
        </div>
      </>
    );
  }
}
