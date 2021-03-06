import { render } from '@testing-library/react'
import NewsList from '../components/NewsList'

const testNewsListData = [
  {
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
  },
  {
      "by": "bubuanabelas",
      "descendants": 0,
      "id": 30595842,
      "score": 9,
      "time": 1646707193,
      "title": "Experimental Web Based OS Front End",
      "type": "story",
      "url": "https://github.com/capyloon/nutria",
      "authorKarma": 27
  },
  {
      "by": "totaldude87",
      "descendants": 9,
      "id": 30610062,
      "kids": [
          30612445,
          30612601,
          30611448,
          30610879,
          30611051,
          30610688,
          30611650,
          30611356
      ],
      "score": 15,
      "time": 1646790478,
      "title": "It’s 2022 and the Magic Mouse still charges from the bottom",
      "type": "story",
      "url": "https://www.theverge.com/22967776/apple-magic-mouse-charging-port-bottom-upside-down-its-2022",
      "authorKarma": 1903
  },
  {
      "by": "emdashcomma",
      "descendants": 8,
      "id": 30603972,
      "kids": [
          30604015,
          30604643,
          30604271
      ],
      "score": 24,
      "time": 1646764806,
      "title": "Apple’s Mac Studio is a new desktop for creative professionals",
      "type": "story",
      "url": "https://www.theverge.com/2022/3/8/22962081/apple-mac-studio-m1-max-ultra-price-specs-processor-release-date",
      "authorKarma": 456
  },
  {
      "by": "pingsl",
      "descendants": 2,
      "id": 30585752,
      "kids": [
          30608843
      ],
      "score": 34,
      "time": 1646644905,
      "title": "Substrait: Cross-Language Serialization for Relational Algebra",
      "type": "story",
      "url": "https://github.com/substrait-io/substrait",
      "authorKarma": 103
  },
  {
      "by": "graderjs",
      "descendants": 7,
      "id": 30595031,
      "kids": [
          30599564,
          30600645,
          30597362,
          30607989,
          30601089
      ],
      "score": 34,
      "time": 1646698533,
      "title": "The Story of Sugru",
      "type": "story",
      "url": "https://sugru.com/story",
      "authorKarma": 8574
  },
  {
      "by": "josteink",
      "descendants": 113,
      "id": 30611748,
      "kids": [
          30612254,
          30612695,
          30612427,
          30613185,
          30612260,
          30612964,
          30612954,
          30612341,
          30612249,
          30612717,
          30612285,
          30612905,
          30612485,
          30613235,
          30613115,
          30612631,
          30612690,
          30612947,
          30612781,
          30612933,
          30612614,
          30612494,
          30612259,
          30613371,
          30612244,
          30612854,
          30612916,
          30613050,
          30612577,
          30612765
      ],
      "score": 166,
      "time": 1646810006,
      "title": "Elementary OS is imploding",
      "type": "story",
      "url": "https://lunduke.substack.com/p/elementary-os-is-imploding",
      "authorKarma": 14082
  },
  {
      "by": "bimbashrestha",
      "descendants": 118,
      "id": 30577625,
      "kids": [
          30580191,
          30580672,
          30581849,
          30581271,
          30581014,
          30584242,
          30580332,
          30580169,
          30579803,
          30580630,
          30580205,
          30581241,
          30579938,
          30582696,
          30580617,
          30580494,
          30592484,
          30579749,
          30583567,
          30579858,
          30579937,
          30580089,
          30580822,
          30579270,
          30581205
      ],
      "score": 232,
      "text": "Creator here. I was looking for something as simple as Backblaze Personal [1] but privacy focused and open source. This is my attempt to build that.<p>Uses PyQt6 [2] for the GUI and Pyinstaller [3] for creating the platform specific binaries. The backup engine under the hood is Restic [4]. The server code is written in Laravel [5]. All the code is on GitHub [6].<p>I actually really like Backblaze (even use B2 for this offering behind the scenes) so this isn&#x27;t meant to throw shade their way. Just wanted a private open source alternative. Something like Bitwarden but for backups.<p>[1] <a href=\"https:&#x2F;&#x2F;backblaze.com\" rel=\"nofollow\">https:&#x2F;&#x2F;backblaze.com</a><p>[2] <a href=\"https:&#x2F;&#x2F;pypi.org&#x2F;project&#x2F;PyQt6\" rel=\"nofollow\">https:&#x2F;&#x2F;pypi.org&#x2F;project&#x2F;PyQt6</a><p>[3] <a href=\"https:&#x2F;&#x2F;pyinstaller.readthedocs.io&#x2F;en&#x2F;stable\" rel=\"nofollow\">https:&#x2F;&#x2F;pyinstaller.readthedocs.io&#x2F;en&#x2F;stable</a><p>[4] <a href=\"https:&#x2F;&#x2F;github.com&#x2F;restic\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;restic</a><p>[5] <a href=\"https:&#x2F;&#x2F;laravel.com\" rel=\"nofollow\">https:&#x2F;&#x2F;laravel.com</a><p>[6] <a href=\"https:&#x2F;&#x2F;github.com&#x2F;blobbackup&#x2F;blobbackup\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;blobbackup&#x2F;blobbackup</a>",
      "time": 1646575127,
      "title": "Show HN: I made a privacy-first minimalist Backblaze",
      "type": "story",
      "url": "https://blobbackup.com",
      "authorKarma": 217
  },
  {
      "by": "susam",
      "descendants": 97,
      "id": 30586638,
      "kids": [
          30591041,
          30588690,
          30588298,
          30588115,
          30587694,
          30587421,
          30590865,
          30591114,
          30588373,
          30589320,
          30587419,
          30587688,
          30588395,
          30597670,
          30587340,
          30587761,
          30587759,
          30590549,
          30588490,
          30590200,
          30593150,
          30590069,
          30593637,
          30588527,
          30590614
      ],
      "score": 234,
      "time": 1646653533,
      "title": "Microsoft GW-Basic Interpreter Source Code",
      "type": "story",
      "url": "https://github.com/microsoft/GW-BASIC",
      "authorKarma": 9174
  },
  {
      "by": "davidbarker",
      "descendants": 701,
      "id": 30604470,
      "kids": [
          30607060,
          30607405,
          30605927,
          30605021,
          30605775,
          30605770,
          30613141,
          30607166,
          30605387,
          30606093,
          30607314,
          30605345,
          30612587,
          30605863,
          30608120,
          30610600,
          30605993,
          30605330,
          30608143,
          30604899,
          30605650,
          30607363,
          30606200,
          30606081,
          30605156,
          30605693,
          30606725,
          30611310,
          30607528,
          30613078,
          30606278,
          30606306,
          30606516,
          30610853,
          30609187,
          30608781,
          30607277,
          30606915,
          30609446,
          30607761,
          30608513,
          30609755,
          30606003,
          30612026,
          30611965,
          30606675,
          30605255,
          30607332,
          30606771,
          30607751,
          30607665,
          30607262,
          30606534,
          30605308,
          30604971,
          30605671,
          30606551,
          30605883,
          30605096,
          30607146,
          30609090,
          30607216,
          30605446,
          30607474,
          30607615,
          30606103
      ],
      "score": 1049,
      "time": 1646766014,
      "title": "Apple M1 Ultra",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2022/03/apple-unveils-m1-ultra-the-worlds-most-powerful-chip-for-a-personal-computer/",
      "authorKarma": 15921
  }
]

describe('NewsList component', () => {
  
  it('NewsList component rendered', () => {
    const newsList = render(<NewsList news={testNewsListData} />).getByTestId('news-list')
    expect(newsList).toBeTruthy()
  })

})