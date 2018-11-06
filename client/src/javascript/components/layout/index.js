import React, { Component } from 'react';
import schema from '../../../../../db/schema.json';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListContainer from '../list';
import ViewContainer from '../view';


export default class Layout extends Component{
  state = {
    currentModule: null,
    currentAction: null,
    currentId: null
  };

  handleAction(updates){
    this.setState(updates);
  }

  renderMenuItens(){
    return schema.map((currentModule)=>{
      const { table_name, columns } = currentModule;

      return (
        <ListItem button key={table_name} onClick={this.handleAction.bind(this, {
          currentModule,
          currentAction: 'list'
        })}>
          <ListItemText primary={table_name} />
        </ListItem>
      );
    })
  }

  renderView(){
    const { currentModule, currentAction, currentId } = this.state;

    if(currentModule != null){
      switch (currentAction) {
        case 'list':
          return (
            <ListContainer
              {...currentModule}
              onAction={this.handleAction.bind(this)}
            />
          )
          break;
        case 'view':
          return (
            <ViewContainer
              {...currentModule}
              id={currentId}
              onAction={this.handleAction.bind(this)}
            />
          )
        break;
        default:
          return (<div> no action </div>)
      }
    }

    return (<div> no module </div>)
  }

  render(){
    return (
      <div>
        <Drawer
          variant="permanent"
          anchor="left"
          >
          <List>
            {this.renderMenuItens()}
          </List>
        </Drawer>

        <main style={{paddingLeft: '250px'}}>
          {this.renderView()}
        </main>
      </div>
    )
  }
}
