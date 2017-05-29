/**
 * Created by svichkar on 5/29/17.
 */

let name = 'Valera';
import first from './module/singlemodule/first'
import api from './module/singlemodule/api'
import Person from './module/singlemodule/Person'

import * as Math from './module/multiplemodule/math'

import {add} from './module/multiplemodule/math'


console.log(first);
console.log(`Name: ${name}`);
console.log(api(`${name}`));

let person = new Person();
person.toString();

console.log('/***************************************************/');

console.log(add(1,5));
console.log(Math.divide(1, 0.25));