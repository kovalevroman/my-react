import React, { Component } from 'react';
import ArticleList from "./components/article-list";
import articles from './fixtures'
import ArticlesChart from './components/articles-chart'

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={articles} ref={this.setArticleListRef}/>
        <ArticlesChart articles={articles}/>
      </div>
    );
  }

  setArticleListRef = (ref) => {
    console.log('---', ref);
  }

}

export default App;
