import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    articles = [
        {"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}
    ]
    constructor(){
        super();
        console.log("hello im constructer from news component")
        this.state={
            articles: this.articles,
            loading: false
            
        }
    }
    async componentDidMount(){
      console.log("cdm")
      let url = "https://newsapi.org/v2/everything?q=apple&from=2023-02-28&to=2023-02-28&sortBy=popularity?country=${this.props.country}&apiKey=8857a46ff1f84ce3a45d4281d915291c"
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(data);
      this.setState({articles: parseData.articles})
    }

  render() {
    return (
      <div className="container my-3">
        <div className='text-center'><h1>NewsMonkey - Top Headlines </h1></div>    
       
     
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem  title = {element.title?element.title.slice(0,45):""} description ={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
           </div>


        })}
       
       
       
          </div>
          
      </div>
    )
  }
}

export default News
