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




    get body(){

        return this.props.articles.map((article, i) =>
            <li key={i}>
                <Article
                    article={article}
                    toggleOpen={this.toggleOpenArticle}
                    isOpen={this.state.articleId === article.id}
                />
            </li>
        )
    }

    toggleOpenArticle = (articleId) => this.setState({articleId})


}

export default ArticleList