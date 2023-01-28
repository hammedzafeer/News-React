import React, { Component } from 'react'
import './NewsItem.css';
export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "94%", zIndex: "1"}}>{source}</span>
          <img src={!imgUrl? "https://cdn.abcotvs.com/dip/images/12701302_011423-wabc-mega-img.jpg?w=1600" : imgUrl }className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
