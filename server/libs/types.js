import { plural, singular } from 'pluralize';
import { capitalize } from '../libs/text';

export const createType = (table_name, columns)=>{
  const columnsDef = columns.map(({name, type})=>{
    return `${name}: ${capitalize(type)}`
  });

  return `type ${capitalize(singular(table_name))} {
    id: Int,
    ${columnsDef.join(',\n')}
  }`
}
