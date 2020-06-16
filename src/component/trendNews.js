import React from "react";

export default function Template(props) {
  let news = props.news;

  return (
    <div className="grid-1">
      <div className="img-sec">
        <img src={news.urlToImage}></img>
      </div>
      <div className="news_description">
        <span>{news.source.name}</span>
        <time>{new Date(news.publishedAt).toLocaleString()}</time>
        <a>
          <h2>{news.title}</h2>
        </a>
        <p>{news.description}</p>
        <div className="btn-read">
          <button className="btn ">Read more</button>
        </div>
      </div>
    </div>
  );
}
