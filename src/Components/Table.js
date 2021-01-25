import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Question from './Question.js'
class TableExamplePagination extends React.Component {
    render(){
        console.log(this.props.categories)
        return (
            <Table celled>
            <Table.Header>
              <Table.Row>
                  {this.props.categories.map(category=>{
                      return (
                          <Table.HeaderCell>{category[0].category.title}</Table.HeaderCell>
                      )
                  })}
              </Table.Row>
            </Table.Header>
        
            <Table.Body>
              <Table.Row>
                  
                  {this.props.categories.map(category=>{
                      console.log(category[0])
                      return (
                          <Table.Cell><Question question={category[0]}/></Table.Cell>
                      )
                  })}
              </Table.Row>
              
              <Table.Row>
                  {this.props.categories.map(category=>{
                      return (
                        <Table.Cell><Question question={category[1]}/></Table.Cell>
                    )
                  })}
              </Table.Row>
              
              <Table.Row>
                  {this.props.categories.map(category=>{
                      return (
                        <Table.Cell><Question question={category[2]}/></Table.Cell>
                    )
                  })}
              </Table.Row>

              <Table.Row>
                  {this.props.categories.map(category=>{
                      return (
                        <Table.Cell><Question question={category[3]}/></Table.Cell>
                    )
                  })}
              </Table.Row>

              <Table.Row>
                  {this.props.categories.map(category=>{
                      return (
                        <Table.Cell><Question question={category[4]}/></Table.Cell>
                    )
                  })}
              </Table.Row>
            </Table.Body>
          </Table>
        )
    }
} 

export default TableExamplePagination
