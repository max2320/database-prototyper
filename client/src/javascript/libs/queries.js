import gql from 'graphql-tag';

import { plural, singular } from 'pluralize';
import { capitalize } from '../libs/text';


export default class QueryBuilder{
  tableDefinition = {};

  constructor(tableDefinition){
    this.tableDefinition = tableDefinition;
  }

  modelName(){
    return capitalize(singular(this.tableDefinition.table_name));
  }

  columnNames(){
    const { columns } = this.tableDefinition;

    return columns.map(({name})=>{ return name; });
  }

  list(){
    const {table_name} = this.tableDefinition;
    const fields = this.columnNames().join('\n');

    return gql`
      {
        ${table_name}{
          id
          ${fields}
        }
      }
    `;
  }

  one(id){
    const {table_name} = this.tableDefinition;
    const fields = this.columnNames().join('\n');

    return gql`
      {
        ${singular(table_name)}(id: ${id}) {
          id
          ${fields}
        }
      }
    `;
  }


  create(params){
    return gql`
      {
        create${this.modelName()}() {
          ${fields}
        }
      }
    `;
  }

}
