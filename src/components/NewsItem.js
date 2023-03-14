import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
      let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div className='my-5'>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imgUrl?"https://scx2.b-cdn.net/gfx/news/hires/2023/bill-signed-for-west-v.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target={'_blank'} className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
