import { plural, singular } from 'pluralize';
import { capitalize } from '../libs/text';

import Base from '../entities/base';

export const createResolverQueries = (table_name)=>{
  const instance = new Base(table_name);

  return {
    [table_name]: (_) => {
      return instance.findAll()
    },
    [singular(table_name)]: (_, params) => {
      return instance.findById(params.id);
    }
  }
}
export const createResolverMutations = (table_name)=>{
  const instance = new Base(table_name);

  return {
    [`create${capitalize(singular(table_name))}`]: (_, params) =>{
      return instance.create(params);
    },
    [`update${capitalize(singular(table_name))}`]: (_, params) =>{
      return instance.update(params.id, params);
    }
  }
}
