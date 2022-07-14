import React, { useEffect, useState } from 'react'
import INewsItem from '../interfaces/INewsItem'
import Loader from './Loader'
import NewsList from './NewsList'

const App: React.FC = () => {

  // Limit of loaded news count
  const limit = 10

  // News and loader states
  const [news, setNews] = useState<Array<INewsItem>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Fucntion to get array of news object (full news + author info)  
  const getFullNewsList = async (limit: number) => {

    // Get array of all news ids
    const allNewsIdsJSON = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const allNewsIds = await allNewsIdsJSON.json()

    // Get array of limited random news ids
    const LimitedRandomNewsIds = allNewsIds
                                  .sort(function() { return 0.5 - Math.random() })
                                  .slice(0, limit)

    // Get object of full news items
    const fullNewsItemsPromises = LimitedRandomNewsIds.map((id: number) => {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(item => {
                    const res = item.json()
                    if (res) { return res }
              });
    })
    const fullNewsItems = await Promise.all(fullNewsItemsPromises);

    // Add author karma to full news items
    const fullNewsItemsExtendedPromises = fullNewsItems.map(newsItem => {
      return fetch(`https://hacker-news.firebaseio.com/v0/user/${newsItem.by}.json`)
              .then(authorItemJSON => {
                const res = authorItemJSON.json()
                if (res) { return res }
              })
              .then(authorItem => {
                return { ...newsItem, authorKarma: authorItem.karma }
              })
    })
    const fullNewsItemsExtended = await Promise.all(fullNewsItemsExtendedPromises)

    // Sort news items by score
    const sortedFullNewsItemsExtended = fullNewsItemsExtended
                                          .sort(function(a, b) { return a['score'] - b['score'] })

    // Return prepared data
    return sortedFullNewsItemsExtended

  }

  useEffect(() => {

    getFullNewsList(limit)
      .then(data => {
        if (data) {
          console.log(data)
          setNews(data)
          setIsLoading(false)
        }
      })
      .catch(err => {
        console.log(err.message)
      })

  }, [])

  return (
    <div className="app" data-testid="app">
        <div className="app__container">
          <h1 className="app__title">Hacker news app</h1>
          {isLoading && <Loader />}
          <NewsList news={news} />
        </div>
    </div>
  );

}

export default App
