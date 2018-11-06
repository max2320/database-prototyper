import Sequelize from 'sequelize';
import schema from '../../db/schema.json';

const FIELD_TYPES = {
  'string': Sequelize.STRING,
  'text': Sequelize.TEXT
}

process.tableCatalog = {};

export default class DBBuilder{
  constructor(){
    this.createTables();
  }

  createTables(){
    schema.forEach(this.createTable.bind(this));
  }

  createTable({table_name, columns}){
    process.tableCatalog[table_name] = process.dbConnection.define(table_name, this.prepareColumns(columns));
    process.tableCatalog[table_name].sync();
  }

  prepareColumns(columns){
    return columns.reduce((acc, { name, type })=>{
      return {
        ...acc,
        [name]: FIELD_TYPES[type]
      };
    },{})
  }
}
