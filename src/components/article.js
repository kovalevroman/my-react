import React from 'react'


function Article({article, isOpen, toogleOpen}){
    return (
        <div>
            <div>
                <h3>{article.title}</h3>
                <button onClick={toogleOpen}>{isOpen? 'close': 'open'}</button>
            </div>

            {isOpen && <section>{article.text}</section>}
        </div>
    )
}

export default Article