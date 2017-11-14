import React from "react";
import Article from '../components/Article'
class Archived extends React.Component {
  render() {
    console.log("archived");
    const queryString = require('query-string');
    let searchQ = this.props.location.search;
    let article = this.props.match.params.article;
    let date = queryString.parse(searchQ).date;
    let filter = queryString.parse(searchQ).filter;
    console.log(article);
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
       <div className="container container-fluid">
        <h1>Archives</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
export default Archived;