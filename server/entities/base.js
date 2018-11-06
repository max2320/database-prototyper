export default class Base{
  table_name = '';

  constructor(table_name){
    this.table_name = table_name;
  }

  model(){
    console.log(process.tableCatalog);
    return process.tableCatalog[this.table_name];
  }

  async create(params){
    return await this.model().create(params);
  }
  async update(id, params){
    const instance = await this.findById(id);
    return await instance.update(params);
  }

  async findAll(params){
    return await this.model().findAll(params);
  }

  async findById(id){
    return await this.model().findById(id);
  }
}
