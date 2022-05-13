import React, { Component} from "react";
import Loading from "./Loading";
import NewItem from "./NewItem";
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:18,
    category:'general',
    apiKey:process.env.REACT_APP_NEWS_API,
  }
   static propTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string
   }
   capilalizie=(str)=>{
     return str.charAt(0).toUpperCase() + str.slice(1);
   }
  constructor(props) {
    super(props);
    this.state={
      articles:[],
      loading: false,
      page:1,
    };
    
    document.title=`${this.capilalizie(this.props.category)}-Daily News`
  }
  async componentDidMount() {
    console.log(this.props.country)
    this.props.setProgress(30)
    this.setState({loading:true})
    let Url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    let data = await fetch(Url);
    this.props.setProgress(70)
    let parsedData = await data.json();
    this.setState({ articles : parsedData.articles,
                     totalResults:parsedData.totalResults,
                     loading:false
                    })
                    this.props.setProgress(100)
  }
  prevBtn=async()=>{
    this.props.setProgress(30)
    this.setState({loading:true});
    let Url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(Url);
    this.props.setProgress(70)
    let parsedData = await data.json();
    this.setState({
                    page:this.state.page-1,
                    articles : parsedData.articles,
                    loading:false

    })
    this.props.setProgress(100)
  }
  nextBtn=async()=>{
    this.props.setProgress(30)
    this.setState({loading:true})
    let Url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(Url);
    this.props.setProgress(70)
    let parsedData = await data.json()
    this.setState({
      page:this.state.page+1,
       articles : parsedData.articles,
       loading:false
    })
    this.props.setProgress(100)
  }
  render() {
    return (
      <div className="container my-3">
          <h1 className="text-center my-3">Daily News-{this.capilalizie(this.props.category)}</h1>
          {this.state.loading&&<Loading/>}
        <div className="row ">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
               {!this.state.loading && <NewItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,88):""}
                 imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt}/>}
              </div>
            })  
            }
        </div>
        <div className="d-flex justify-content-between align-items-end">
        <button disabled={this.state.page<=1} type="button" onClick={this.prevBtn} className="btn btn-info">&larr;Previous</button>
        <button disabled={(Math.ceil((this.state.totalResults)/18))<=this.state.page} type="button" onClick={this.nextBtn} className="btn btn-info">Next&rarr;</button>
        </div>
      </div>
    );
  }
}
