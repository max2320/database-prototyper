import { plural, singular } from 'pluralize';
import { capitalize } from '../libs/text';

export const createMutation = (table_name, columns)=>{
  const modelName = capitalize(singular(table_name));
  const columnsDef = columns.map(({name, type})=>{
    return `${name}: ${capitalize(type)}`
  }).join(', ');

  return `
    "Create ${modelName}"
    create${modelName}(${columnsDef}): ${modelName}
    "Update ${modelName}"
    update${modelName}(id: Int!, ${columnsDef}): ${modelName}
  `
};
