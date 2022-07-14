import React from 'react'
import INewsItem from '../interfaces/INewsItem'
import NewsItem from './NewsItem'

interface NewsListProps {
  news: INewsItem[]
}

const NewsList: React.FC<NewsListProps> = ({news}) => {

  const newsList = news.map((item: INewsItem) => {
    return <NewsItem key={item.id} content={item} />
  })

  return (
    <div className="news-list" data-testid="news-list">
      { newsList }
    </div> 
  )

}

export default NewsList