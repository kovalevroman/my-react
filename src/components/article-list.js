import React,{ Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component{


    render(){
        return <ul>{this.body}</ul>
    }

    get body(){

        const {toggleOpenItem, openItemId, articles} = this.props

        return articles.map((article, i) =>
            <li key={i}>
                <Article
                    article={article}
                    toggleOpen={toggleOpenItem}
                    isOpen={openItemId === article.id}
                />
            </li>
        )
    }

}

export default accordion(ArticleList)