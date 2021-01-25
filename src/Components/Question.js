import React from 'react'

class Question extends React.Component {
    constructor(){
        super()
        this.state = {
            clicked: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let clicked = this.state.clicked
        this.setState({
            clicked: clicked + 1
        })
    }
    render(){
        if(this.state.clicked === 0){
            return <div onClick={this.handleClick}>{this.props.question.value} </div>
        } else if (this.state.clicked === 1){
            return <div onClick={this.handleClick}>{this.props.question.question} </div>
        } else if (this.state.clicked === 2){
            return <div onClick={this.handleClick}>{this.props.question.answer} </div>
        } else {
            return <div> X </div>
        }
    }
}

export default Question