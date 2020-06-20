import React from "react";
import Herosec from "./heroSec";

class Navheading extends React.Component {
  render() {
    let channel = this.props.channel;

    return (
      <>
        {channel ? (
          <div className="heading">
            <button className="btn" onClick={this.props.handleChange}>
              All
            </button>
            {channel.map((value) => {
              return (
                <button
                  className="btn"
                  onClick={() => this.props.handleChange(value.id)}
                >
                  {value.name}
                </button>
              );
            })}
            <Herosec
              filterSource={
                this.props.filterSource || this.props.handleChange()
              }
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
