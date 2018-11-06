import Sequelize from 'sequelize';
import DBBuilder from './db_builder';


export default class Db{
  constructor(){
    if(!process.dbConnection){
      process.dbConnection = this.createClient();
      this.testConnection();
    }
  }

  createClient(){
    return new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres'
    });
  }

  testConnection(){
    process.dbConnection.authenticate()
      .then(async () => {
        console.log('Connection has been established successfully.');
        new DBBuilder();
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  }
}
