/**
 * Created by svichkar on 30.05.17.
 */

import first from './first'
import api from './api'
import Person from './Person'
import {log, logTitle} from '../logger'

export default function () {

  logTitle('Single');
  log(first);
  log('Valera');
  log(api('Valera'));
  let person = new Person();
  log(person.toString());
}