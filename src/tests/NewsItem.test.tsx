import { render } from '@testing-library/react'
import NewsItem from '../components/NewsItem'

const testNewsItem = {
  "by": "math-dev",
  "descendants": 0,
  "id": 30611469,
  "kids": [
      30612209
  ],
  "score": 3,
  "time": 1646806766,
  "title": "How did this many deaths become normal?",
  "type": "story",
  "url": "https://www.theatlantic.com/health/archive/2022/03/covid-us-death-rate/626972/",
  "authorKarma": 190
}

describe('NewsItem component', () => {
  
  it('NewsItem component rendered', () => {
    const newsItem = render(<NewsItem key={testNewsItem.id} content={testNewsItem} />).getByTestId('news-item')
    expect(newsItem).toBeTruthy()
  })

})