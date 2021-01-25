import logo from './logo.svg';
import './App.css';
import TableExamplePagination from './Components/Table'
import React from 'react'
let cors = 'https://cors-anywhere.herokuapp.com/'
class App extends React.Component{

  constructor(){
    super()
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    this.fetchClues()
  }

  fetchClues = async() => {
    let categories = this.state.categories
    
    while(categories.length<5){
      let apiURL = 'https://jservice.io/api/clues?category=' + Math.floor(Math.random() * Math.floor(18418))
      let res = await fetch(apiURL)
      let clues = await res.json()
      console.log('clues',clues)
      while(clues.length!==5){
        apiURL = 'https://jservice.io/api/clues?category=' + Math.floor(Math.random() * Math.floor(18418))
        res = await fetch(apiURL)
        clues = await res.json()
      }
      categories.push(clues)
    }
    this.setState({
      categories: categories
    })
    console.table(this.state.categories)
  }

  render(){
    return (
      <div className="App">
        <TableExamplePagination categories={this.state.categories}/>
      </div>
   );
  }
  
}

export default App;
