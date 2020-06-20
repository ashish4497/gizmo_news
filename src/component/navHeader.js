import React from "react";
import Herosec from "./heroSec";

function Navheading(props) {
  let channel = props.channel;
  return (
    <>
      {channel ? (
        <div className="heading">
          <button className="btn" onClick={props.handleChange}>
            All
          </button>
          {channel.splice(0, 10).map((value) => {
            return (
              <button
                className="btn"
                onClick={() => props.handleChange(value.id)}
              >
                {value.name}
              </button>
            );
          })}
          <Herosec filterSource={props.filterSource || props.handleChange()} />
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default Navheading;
