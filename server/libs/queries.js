import { plural, singular } from 'pluralize';
import { capitalize } from '../libs/text';

export const createQuery = (table_name)=>{
  return `
    "List ${capitalize(table_name)}"
    ${table_name}: [${capitalize(singular(table_name))}],
    "${capitalize(singular(table_name))} by id"
    ${singular(table_name)}(id: Int!): ${capitalize(singular(table_name))},
  `
};
