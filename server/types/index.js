import schema from '../../db/schema.json';
import {createType} from '../libs/types';

const schemaTypes = schema.map(({ table_name, columns })=>{
  return createType(table_name, columns);
});

export const types = [
  ...schemaTypes
];
