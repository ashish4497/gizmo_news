import React from "react";
import Template from "./trendNews";
import Newsarticle from "./articlesNews";
// import Nextweb from "./nextWeb";

function Herosec(props) {
  let news = props.filterSource;
  return (
    <>
      {news ? (
        <div>
          <Template news={news[0]} />
          <Newsarticle news={news} />
        </div>
      ) : (
        <p>Loaing...... ..</p>
      )}
    </>
  );
}

export default Herosec;
