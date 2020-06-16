import React from "react";

export default function Nextweb(props) {
  let webNews = props.news;
  return (
    <>
      <h2>The next wrb</h2>
      <div className="next_web">
        {webNews.map((val) => {
          return (
            <>
              <p></p>
              <div>{val.title}</div>
            </>
          );
        })}
      </div>
    </>
  );
}
