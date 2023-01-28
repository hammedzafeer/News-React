import React, { Component } from 'react'
import Newsitem from '../NewsItem/NewsItem'
import Spinner from '../spinner'
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }
  captilzeFunction = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
    document.title = `${this.captilzeFunction(this.props.category)} - News`;
  };
  async updateNews() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49a7dc909a284db1a5cb4d10f270f790&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    console.log("OK");
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49a7dc909a284db1a5cb4d10f270f790&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  previousBtn = async () => {
    console.log("Pre");
    // this.setState({loading: true});
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49a7dc909a284db1a5cb4d10f270f790&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   page: this.state.page - 1,
    //   loading : false
    // })
    this.setState({ page: this.state.page - 1 })
    this.updateNews()

  }
  nextBtn = async () => {
    console.log("Next")
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    // } else {
    // this.setState({loading: true});
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49a7dc909a284db1a5cb4d10f270f790&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     articles: parsedData.articles,
    //     totalResults: parsedData.totalResults,
    //     page: this.state.page + 1,
    //     loading : false
    //   })
    this.setState({ page: this.state.page + 1 })
    this.updateNews()


  }
  render() {
    return (
      <div className='container my-4'>
        <h1 className="text-center my-4">NewsMonkey - Top {this.captilzeFunction(this.props.category)} Headline</h1>

        {this.state.loading && <Spinner />}
        <div className="row">
          {!(this.state.loading) && this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousBtn} >Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextBtn}>Next</button>
        </div>

      </div>
    )
  }
}
