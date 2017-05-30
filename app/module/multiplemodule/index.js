/**
 * Created by svichkar on 30.05.17.
 */
import {add, subtract, multiply, divide, mod, pi} from './math';
import {log, logTitle} from '../logger'

export default function () {

  logTitle('Multiple');
  log(add(1,5));
  log(divide(1, 0.25));
} 
