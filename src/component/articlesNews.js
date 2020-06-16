import React from "react";

export default function Newsarticle(props) {
  let newsArticle = props.news;
  console.log(newsArticle);

  return (
    <div>
      <h3 className="top_news"> Top news</h3>
      <div className="news_articles padding">
        <div className="grid-4">
          {newsArticle.map((value) => {
            return (
              <div className="news_detail">
                <div>
                  <img src={value.urlToImage}></img>
                </div>
                <div>
                  <span>{value.source.name}</span>
                  <time>{new Date(value.publishedAt).toLocaleString()}</time>
                  <a>
                    <h2>{value.title}</h2>
                  </a>
                  <p>{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
