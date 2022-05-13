import React, { Component } from "react";
 
export default class NewItem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl,author,time}=this.props
    return (
      <div className="my-3">
        <div className="card" >
          <img src={imageUrl?imageUrl:"https://th.bing.com/th/id/OIP.YjS_YMOMPw_n5fIAu285KQHaFc?pid=ImgDet&rs=1"} className="card-img-top" alt="..." style={{width:"100%",height:"150px"}}/> 
          <div className="card-body">
            <p className="small">Author :{author?author:"Daily News"}, Time : {new Date(time).toGMTString()}</p>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" className="btn btn-sm btn-primary" target={"_blank"}>
             Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
