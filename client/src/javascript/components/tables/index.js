import React, { Component } from 'react';
import schema from '../../../../../db/schema.json';

import ListContainer from '../list';

export default class TablesContainer extends Component{
  state={
    currentTable: ''
  };

  handleTableSelection(table, columns){
    this.setState({
      currentTable: {
        table_name: table,
        columns: columns
      }
    });
  }

  renderTables(){
    return schema.map(({table_name, columns})=>{
      return (
        <div onClick={this.handleTableSelection.bind(this, table_name, columns)}>
          {table_name}
        </div>
      )
    })
  }

  renderList(){
    const {currentTable} = this.state;

    if(currentTable){
      return (
        <ListContainer {...currentTable} />
      )
    }
  }

  render(){
    return (
      <div>
        {this.renderTables()}
        {this.renderList()}
      </div>
    )
  }
}
