export default interface INewsItem {
  id: number,
  title: string,
  by: string,
  score: number,
  authorKarma: number,
  time: EpochTimeStamp,
  url: string
}