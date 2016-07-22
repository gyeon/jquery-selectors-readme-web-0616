// declare your functions here...
function paragraphSelector() {
  //use element selector for p tags and return
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  //use id selectors
  return $('#baby-ninja');
}

function divSelector() {
  //use class selector and return 2 divs on page
  return $('div');
}

function firstListItem() {
  //use first child selector return first item in ul with id pic-list
  return $('ul#pic-list li:first-child');
}
