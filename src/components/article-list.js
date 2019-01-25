import React,{ Component } from 'react'
import Article from './article'

class ArticleList extends Component{

    state ={
        articleId: null
    }

    render(){

        return (
            <ul>
                {this.body}
            </ul>
        )
    }

    toggleOpenArticle = (articleId) => () => this.setState({articleId})


    get body(){

        return this.props.articles.map((article, i) =>
            <li key={i}>
                <Article
                    article={article}
                    toogleOpen={this.toggleOpenArticle(article.id)}
                    isOpen={this.state.articleId === article.id}
                />
            </li>
        )
    }


}

export default ArticleList