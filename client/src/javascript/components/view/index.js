import React, { Component } from 'react';
import { plural, singular } from 'pluralize';


import { Query } from 'react-apollo';

import QueryBuilder from '../../libs/queries';


export default class ViewContainer extends Component{
  constructor(props){
    super(props);

    this.queryBuilder = new QueryBuilder(props);
  }

  buildQuery(){
    return this.queryBuilder.one(this.props.id);
  }

  showableFields(){
    return this.props.views.view;
  }

  renderField(column, value){
    return (
      <div>
        <label>{column.name}</label>
        <br />
        {value}
      </div>
    )
  };

  renderFields(data){
    const {columns} = this.props;

    return this.props.columns.filter((column)=>{
      return column.show.view;
    }).map((column)=>{
      return this.renderField(column, data[column.name]);
    });
  }

  render(){
    const {table_name} = this.props;

    return (
      <Query query={this.buildQuery()}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return this.renderFields(data[singular(table_name)]);
        }}
      </Query>
    )
  }
}
