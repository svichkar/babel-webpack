/**
 * Created by svichkar on 30.05.17.
 */

import $ from 'jquery';

export function log (content) {

  alert(content);
  $('<h4 class="bg-info">').text(content).appendTo($('#content'));
}

export function logTitle (content) {

  alert(content);
  $('#content').add('<h1 class="bg-primary">' + content +'</h1>');
}

export default $;