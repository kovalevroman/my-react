import React, {Component} from 'react'
//import d3 from 'd3'

class ArticlesChart extends Component{

    render(){
        return(
            <div ref={this.setContainerRef}></div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //compare oldProps with this.props
        // update chart inside this.containerRef
    }

    setContainerRef = (ref) => {
        if (ref){
            this.containerRef = ref
            // do some d3
        } else {
            // do cleanup
        }
    }


    componentWillUnmount() {
        //remove d3
    }

}

export default ArticlesChart