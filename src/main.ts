import { Test } from './functions/test';
import { MyInterface } from './models/model';

const init = new Test();

const a: MyInterface = {
  Avaule: 'oui',
  anOtherValue: 'autre',
};

init.test();
init.create(a);

console.log(a);
