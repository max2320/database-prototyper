import React, { Component } from 'react';

import { Query } from 'react-apollo';

import QueryBuilder from '../../libs/queries';


export default class ListContainer extends Component{
  constructor(props){
    super(props);

    this.queryBuilder = new QueryBuilder(props);
  }

  buildQuery(){
    return this.queryBuilder.list();
  }

  render(){
    const {table_name} = this.props;

    return (
      <Query query={this.buildQuery()}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              {data[table_name].map((item)=>(
                <div>
                  {JSON.stringify(item)}
                  <div onClick={this.props.onAction.bind(this, {currentAction:'view',currentId:item.id})}>
                    view
                  </div>
                  <div onClick={this.props.onAction.bind(this, {currentAction:'view',currentId:item.id})}>
                    edit
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    )
  }
}
