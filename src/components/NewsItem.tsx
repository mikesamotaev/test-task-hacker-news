import React from 'react'
import INewsItem from '../interfaces/INewsItem'
import Moment from 'react-moment'

interface NewsItemProps {
  content: INewsItem
}

const NewsItem: React.FC<NewsItemProps> = ({content}) => {

  return (

    <div className="news-item" data-testid="news-item">

      <div className="news-item__img-wrapper">
        <img src="img/the-hacker-news.jpg" alt={content.title} title={content.title} className="news-item__img" />
      </div>

      <div className="news-item__content">

        <div className="news-item__news-info">
          <h3 className="news-item__title">
            {content.title}
          </h3>
          <div className="news-item__time">
            <Moment format={"MMMM DD YYYY HH:mm"} unix>{content.time}</Moment>
          </div>
          <div className="news-item__score">
            <img src="img/star-icon.svg" alt="News score" />
            <span>{content.score}</span>
          </div>
        </div>

        <div className="news-item__author-info">
          <div className="news-item__author">
            Written by: <span className="news-item__author-name">{content.by}</span>
          </div>
          <div className="news-item__author-karma">
            <span>{content.authorKarma}</span>
            <img src="img/karma-icon.svg" alt="Author karma" />
          </div>
        </div>

      </div>

      <a href={content.url} className="news-item__link">Details</a>

    </div> 

  )

}

export default NewsItem